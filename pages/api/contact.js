import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, company, roles, otherRole, areas, otherArea, unsure, budget, message, dates, acceptedTerms } = req.body;

    const formattedMessage = message.replace(/\n\n/g, "</p><p>").replace(/\n/g, "<br>");

    const htmlContent = `
      <p><strong>Name:</strong> ${name}</p>
      ${company ? `<p><strong>Firma:</strong> ${company}</p>` : ""}
          <p><strong>Emailadresse:</strong> ${email}</p>
      <p><strong>Rolle im Projekt:</strong> ${roles.join(", ")}${roles.includes("Sonstiges") && otherRole ? ` (${otherRole})` : ""}</p>
      <p><strong>Bereich(e):</strong> ${areas.join(", ")}${areas.includes("Sonstiges") && otherArea ? ` (${otherArea})` : ""}</p>
      ${unsure ? "<p><strong>Hinweis:</strong> Die Person ist sich noch unsicher und möchte sprechen.</p>" : ""}
      <p><strong>Budget:</strong> ${budget.join(", ")}</p>
      <p><strong>Nachricht:</strong></p>
      <p>${formattedMessage}</p>
      <p><strong>Terminoptionen:</strong> ${dates}</p>
      <p><strong>AGB & Datenschutz akzeptiert:</strong> ${acceptedTerms ? "Ja" : "Nein"}</p>
    `;

    const transporter = nodemailer.createTransport({
      host: "smtp.strato.de",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: `"Kontaktformular" <${process.env.EMAIL_FROM}>`,
        to: process.env.EMAIL_TO,
        subject: "Neue Anfrage über das Kontaktformular",
        text: `Neue Anfrage von ${name}:\n\n${message}`,
        html: htmlContent,
      });

      res.status(200).json({ message: "E-Mail wurde erfolgreich gesendet!" });
    } catch (error) {
      console.error("Fehler beim Versenden der E-Mail:", error);
      res.status(500).json({ error: "Fehler beim Versenden der E-Mail." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
