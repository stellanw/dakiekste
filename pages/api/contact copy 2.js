import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: true,
  },
};
s;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { name, email, message, subject = "Neue Kontaktanfrage" } = req.body;

    console.log("Empfangene Daten:", req.body);

    const transporter = nodemailer.createTransport({
      host: "smtp.strato.de",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlContent = `
      <h3>Neue Nachricht von ${name}</h3>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Nachricht:</strong></p>
      <p>${message}</p>
    `;

    await transporter.sendMail({
      from: `"Kontaktformular" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject,
      html: htmlContent,
    });

    return res.status(200).json({ message: "E-Mail wurde erfolgreich gesendet!" });
  } catch (err) {
    console.error("Fehler beim Versenden:", err);
    return res.status(500).json({ error: "Fehler beim Versenden der E-Mail." });
  }
}
