import nodemailer from "nodemailer";
import { render, toPlainText } from "@react-email/render";
import sanitizeHtml from "sanitize-html";
import fs from "node:fs";
import path from "node:path";

import AdminEmail from "@/emails/AdminEmail";
import CustomerEmail from "@/emails/CustomerEmail";

export const config = { runtime: "nodejs" };

const transporter = nodemailer.createTransport({
  host: "smtp.strato.de",
  port: 465,
  secure: true,
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});

const LOGO_CID = "dk-logo";
const logoPath = path.join(process.cwd(), "emails", "logo.png");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  // Logo laden
  let logoBuffer = null;
  try {
    if (fs.existsSync(logoPath)) logoBuffer = fs.readFileSync(logoPath);
  } catch {}
  const hasLogo = !!logoBuffer;

  try {
    const {
      email,
      name,
      company,
      message,
      roles,
      otherRole,
      budget,
      acceptedTerms,
      servicesHtml: servicesHtmlRaw, // vom Overlay mitgeschickt
      totalPrice: totalPriceRaw, // vom Overlay mitgeschickt
      businessType,
      source,
      selectedServices, // strukturierte Liste [{title,count,unitPrice,price}]
      pronouns,
    } = req.body || {};

    if (!email || !name || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    // Message normalisieren
    const formattedMessage = message.replace(/\n\n/g, "</p><p>").replace(/\n/g, "<br>");

    // Services-Liste: bevorzugt direkt aus Body, sonst heuristisch aus message
    let servicesHtml = "";
    if (servicesHtmlRaw) {
      servicesHtml = String(servicesHtmlRaw);
    } else {
      const m =
        formattedMessage.match(/<strong>Ausgewählte Leistungen:<\/strong><\/p>\s*<ul>([\s\S]*?)<\/ul>/i) ||
        formattedMessage.match(/Ausgewählte Leistungen:<br>([\s\S]*)/i);
      if (m) {
        const raw = m[1].includes("<li")
          ? `<ul>${m[1]}</ul>`
          : `<ul>${m[1]
              .split("<br>")
              .filter((line) => line.trim().startsWith("–"))
              .map((line) => `<li>${line.replace("– ", "")}</li>`)
              .join("")}</ul>`;
        servicesHtml = raw;
      }
    }

    // Gesamtpreis
    let totalPrice = totalPriceRaw ?? null;
    if (!totalPrice) {
      const p = formattedMessage.match(/Gesamtsumme:\s*([\d.,]+)\s?€/i);
      if (p) totalPrice = p[1];
    }

    // Nachricht ohne Services-Block für Admin
    const messageWithoutServices = formattedMessage.replace(/<p><strong>Ausgewählte Leistungen:[\s\S]*$/i, "");

    // Sanitizen
    const cleanMessageForAdmin = sanitizeHtml(messageWithoutServices, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(["br", "p", "ul", "li", "strong", "em", "u", "span"]),
    });
    const cleanServices = servicesHtml ? sanitizeHtml(servicesHtml, { allowedTags: ["ul", "li", "strong", "em", "u", "br", "span"] }) : "";
    const cleanMessageForCustomer = sanitizeHtml(formattedMessage, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(["br", "p", "ul", "li", "strong", "em", "u", "span"]),
    });

    // Quelle & Betreff
    const s = (source || "").toLowerCase();
    const isOverlay = s === "overlay" || Boolean(cleanServices) || Boolean(totalPrice);
    const adminSubject = isOverlay ? "Neue Anfrage über das Kalkulator-Overlay" : "Neue Nachricht über das Kontaktformular";
    const sourceLabel = isOverlay ? "eingegangen über das Kalkulator-Overlay" : "eingegangen über das Kontaktformular";

    // Dev: SMTP verify
    if (process.env.NODE_ENV !== "production") {
      try {
        await transporter.verify();
      } catch (e) {
        return res.status(500).json({ error: "SMTP_VERIFY_FAILED", message: e.message, code: e.code });
      }
    }

    // Rendern
    const [adminHtml, customerHtml] = await Promise.all([
      render(
        <AdminEmail
          name={name}
          pronouns={pronouns || null}
          email={email}
          company={company}
          messageHtml={cleanMessageForAdmin}
          servicesHtml={cleanServices || null}
          totalPrice={totalPrice || null}
          roles={roles || null}
          otherRole={otherRole || null}
          budget={budget || null}
          acceptedTerms={typeof acceptedTerms === "boolean" ? acceptedTerms : null}
          businessType={businessType || null}
          selectedServices={Array.isArray(selectedServices) ? selectedServices : null}
          sourceLabel={sourceLabel}
          previewText={adminSubject}
        />
      ),
      render(<CustomerEmail name={name} messageHtml={cleanMessageForCustomer} year={new Date().getFullYear()} logoCid={hasLogo ? LOGO_CID : undefined} />),
    ]);

    const adminText = toPlainText(adminHtml);
    const customerText = toPlainText(customerHtml);

    // Admin-Mail
    await transporter.sendMail({
      from: `"DAKIEKSTE | WEBFORMULAR" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: adminSubject,
      text: adminText,
      html: adminHtml,
    });

    // Kunden-Mail
    await transporter.sendMail({
      from: `"DAKIEKSTE⌾" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Deine Anfrage bei uns",
      text: customerText,
      html: customerHtml,
      attachments: hasLogo
        ? [
            {
              filename: "logo.png",
              content: logoBuffer,
              contentType: "image/png",
              cid: LOGO_CID,
              contentDisposition: "inline",
            },
          ]
        : [],
    });

    return res.status(200).json({ ok: true, message: "E-Mail wurde erfolgreich gesendet!" });
  } catch (error) {
    const isDev = process.env.NODE_ENV !== "production";
    return res.status(500).json({
      error: "MAIL_SEND_FAILED",
      message: isDev ? error.message || String(error) : "Fehler beim Versenden der E-Mail.",
    });
  }
}
