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

  let logoBuffer = null;
  try {
    if (fs.existsSync(logoPath)) logoBuffer = fs.readFileSync(logoPath);
  } catch {}
  const hasLogo = !!logoBuffer;

  try {
    const { email, name, company, message, roles, otherRole, budget, acceptedTerms, servicesHtml: servicesHtmlRaw, totalPrice: totalPriceRaw, businessType, source, selectedServices, pronouns, hp_web, ttft_ms } = req.body || {};

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // SPAM-SCHUTZ: Früh und billig rauswerfen – vor Sanitizing/Render/Mail
    // 0) Honeypot gefüllt? (Bots füllen alles) – leise akzeptieren & beenden
    if (hp_web && String(hp_web).trim() !== "") {
      return res.status(200).json({ ok: true });
    }
    // 1) Mindest-Ausfüllzeit (Bots posten sehr schnell)
    if (Number(ttft_ms) > 0 && Number(ttft_ms) < 2000) {
      return res.status(200).json({ ok: true });
    }
    // 2) Feld-/Inhalts-Heuristiken
    const tooManyLinks = (message || "").match(/https?:\/\//gi)?.length || 0;
    if (tooManyLinks > 1) {
      return res.status(200).json({ ok: true });
    }
    if ((name || "").length > 80) return res.status(200).json({ ok: true });
    if ((email || "").length > 120) return res.status(200).json({ ok: true });
    if ((message || "").length > 4000) return res.status(200).json({ ok: true });
    // 3) E-Mail Grundformat prüfen (zusätzlich zum Frontend)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || "")) {
      return res.status(400).json({ error: "invalid_email" });
    }
    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    // Optional: simples IP-Rate-Limit (1 Request / 15s)
    const ip = (req.headers["x-forwarded-for"] || req.socket.remoteAddress || "").toString().split(",")[0].trim();
    globalThis.__dk_rate__ = globalThis.__dk_rate__ || new Map();
    const now = Date.now();
    const last = globalThis.__dk_rate__.get(ip) || 0;
    if (now - last < 15_000) {
      return res.status(429).json({ ok: false, error: "too_many_requests" });
    }
    globalThis.__dk_rate__.set(ip, now);

    if (!email || !name || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const formattedMessage = message.replace(/\n\n/g, "</p><p>").replace(/\n/g, "<br>");

    let servicesHtml = "";
    if (servicesHtmlRaw) {
      servicesHtml = String(servicesHtmlRaw);
    }

    const cleanServices = servicesHtml
      ? sanitizeHtml(servicesHtml, {
          allowedTags: ["ul", "li", "strong", "em", "u", "br", "span"],
        })
      : "";

    const stripServicesFromHtml = (html) => {
      if (!html) return "";
      return String(html)
        .replace(/<p>\s*<strong>\s*Ausgewählte Leistungen:?\s*<\/strong>\s*<\/p>\s*<ul[\s\S]*?<\/ul>\s*/i, "")
        .replace(/Ausgewählte Leistungen:<br>[\s\S]*?(<\/p>|$)/i, "")
        .replace(/<p>\s*<strong>\s*Gesamtsumme:\s*<\/strong>[\s\S]*?<\/p>\s*/i, "")
        .trim();
    };

    const fmtEuroDash = (n) => {
      if (n == null || n === "" || isNaN(Number(n))) return "auf Anfrage";
      const rounded = Math.round(Number(n));
      return new Intl.NumberFormat("de-DE", { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(rounded) + " ,-";
    };

    const messageWithoutServicesForCustomer = stripServicesFromHtml(formattedMessage);

    const itemsForCustomer = Array.isArray(selectedServices)
      ? selectedServices.map((s) => ({
          qty: s.count ?? 1,
          title: s.title,
          price: typeof s.price === "number" ? fmtEuroDash(s.price) : req.body?.priceDisplay || "auf Anfrage",
        }))
      : [];

    const itemsForAdmin = Array.isArray(selectedServices)
      ? selectedServices.map((s) => ({
          qty: s.count ?? 1,
          title: s.title,
          price: typeof s.price === "number" ? fmtEuroDash(s.price) : req.body?.priceDisplay || "auf Anfrage",
        }))
      : [];

    const totalPriceDisplayAdmin = typeof totalPriceRaw === "number" ? fmtEuroDash(totalPriceRaw) : req.body?.priceDisplay || "auf Anfrage";

    const totalPriceDisplay = typeof totalPriceRaw === "number" ? fmtEuroDash(totalPriceRaw) : req.body?.priceDisplay || "auf Anfrage";

    const messageForAdmin = formattedMessage;

    const cleanMessageForAdmin = sanitizeHtml(messageForAdmin, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(["br", "p", "ul", "li", "strong", "em", "u", "span"]),
    });

    const s = (source || "").toLowerCase();
    const isOverlay = s === "overlay" || Boolean(cleanServices) || Boolean(totalPriceRaw);
    const adminSubject = isOverlay ? "Neue Anfrage über den Preiskalkulator" : "Neue Nachricht über das Kontaktformular";
    const sourceLabel = isOverlay ? "eingegangen über den Preiskalkulator" : "eingegangen über das Kontaktformular";

    if (process.env.NODE_ENV !== "production") {
      try {
        await transporter.verify();
      } catch (e) {
        return res.status(500).json({ error: "SMTP_VERIFY_FAILED", message: e.message, code: e.code });
      }
    }

    const [adminHtml, customerHtml] = await Promise.all([
      render(
        <AdminEmail
          name={name}
          pronouns={pronouns || null}
          email={email}
          company={company}
          messageHtml={sanitizeHtml(messageForAdmin, {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(["br", "p", "ul", "li", "strong", "em", "u", "span"]),
          })}
          items={itemsForAdmin}
          totalPrice={totalPriceDisplayAdmin}
          roles={roles || null}
          otherRole={otherRole || null}
          budget={budget || null}
          acceptedTerms={typeof acceptedTerms === "boolean" ? acceptedTerms : null}
          businessType={businessType || null}
          sourceLabel={sourceLabel}
          previewText={adminSubject}
          logoCid={hasLogo ? LOGO_CID : undefined}
          servicesHtml={cleanServices || null}
        />
      ),
      render(
        <CustomerEmail
          name={name}
          messageHtml={sanitizeHtml(messageWithoutServicesForCustomer, {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(["br", "p", "strong", "em", "u", "span"]),
          })}
          servicesHtml={cleanServices || null}
          items={itemsForCustomer}
          totalPrice={totalPriceDisplay}
          year={new Date().getFullYear()}
          logoCid={hasLogo ? LOGO_CID : undefined}
        />
      ),
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

    await transporter.sendMail({
      from: `"DAKIEKSTE" <${process.env.EMAIL_USER}>`,
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
