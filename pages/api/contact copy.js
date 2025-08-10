import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, company, roles, otherRole, budget, message, acceptedTerms } = req.body;

    const formattedMessage = message.replace(/\n\n/g, "</p><p>").replace(/\n/g, "<br>");

    const htmlContent = `
      <p style=" font-size: 18px;"><strong>Name:</strong> ${name}</p>
      ${company ? `<p style=" font-size: 18px;><strong>Firma:</strong> ${company}</p>` : ""}
      <p style=" font-size: 18px;"><strong>Emailadresse:</strong> ${email}</p>
      <p style=" font-size: 18px;"><strong>Rolle im Projekt:</strong> ${roles.join(", ")}${
      roles.includes("Sonstiges") && otherRole ? ` (${otherRole})` : ""
    }</p>
      <p style=" font-size: 18px;"><strong>Budget:</strong> ${budget.join(", ")}</p>
      <p style=" font-size: 18px;"><strong>Nachricht:</strong></p>
      <p style=" font-size: 18px;">${formattedMessage}</p>
      <p style=" font-size: 18px;"><strong>AGB & Datenschutz akzeptiert:</strong> ${acceptedTerms ? "Ja" : "Nein"}</p>
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
      // Mail an Kund*in
      await transporter.sendMail({
        from: `"DAKIEKSTE" <${process.env.EMAIL_FROM}>`,
        to: email, // Kund*innen-Email
        subject: "Deine Anfrage bei uns",
        html: `
<div style=" padding: 40px 0;">
  <div style="max-width: 600px; margin: auto;  padding: 40px; border-radius: 8px; font-family: sans-serif; color: #252422;">
    
    <div style="text-align: center; margin-bottom: 20px; ">
      <img src="https://img.freepik.com/vektoren-premium/eule-augen-logo-design-vorlage_1156-1271.jpg" alt="Dakiekste Logo" style="max-width: 150px;" />
    </div>

    <h2 style="color: #A3FFB7;  font-size: 24px; margin-bottom: 20px;">Danke für deine Anfrage, ${name}!</h2>

    <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;  color: #252422;">
      Wir haben deine Nachricht erhalten und melden uns schnellstmöglich bei dir.
    </p>

    <p style="font-size: 16px; line-height: 1.5; margin-bottom: 10px;  color: #252422;">
      Hier noch einmal deine Nachricht:
    </p>

    <div style=" padding: 15px; border-radius: 4px; font-size: 16px; line-height: 1.5; margin-bottom: 20px; color: #252422;">
      ${formattedMessage}
    </div>

    <p style="font-size: 16px; line-height: 1.5; color: #252422; margin-top: 30px;">
    Falls du in der Zwischenzeit noch weitere Fragen hast, schreib uns gerne per Mail oder WhatsApp:
  </p>
  
  <div style="text-align: center; margin: 20px 0;">
    <a href="mailto:info@dakiekste.com" style="background-color: #A3FFB7; color: #252422; text-decoration: none; padding: 12px 24px; border-radius: 4px; font-size: 16px; font-weight: bold; display: inline-block;">
      Schreib uns eine Mail
    </a>
  </div>

    <p style="font-size: 16px; line-height: 1.5;  color: #252422;">
      Herzliche Grüße,<br>Dein Dakiekste Team
    </p>
  </div>


  <div style="max-width: 600px; margin: auto; text-align: center; font-size: 12px; color: #A3FFB7; margin-top: 20px; background-color: #8C8A7F;">
    © ${new Date().getFullYear()} Dakiekste. Alle Rechte vorbehalten.
  </div>
</div>

    `,
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
