import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    const formattedMessage = message.replace(/\n\n/g, "</p><p>").replace(/\n/g, "<br>");

    const htmlContent = `
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Emailadresse Kunde:</strong> ${email}</p>
  <p><strong>Betreff:</strong> ${subject}</p>
  <p><strong>Nachricht:</strong></p>
  <p>${formattedMessage}</p>
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
        subject: subject,
        text: `Message from ${name} (${email}):\n\n${formattedMessage}`,
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
