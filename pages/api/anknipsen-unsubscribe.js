// pages/api/anknipsen-unsubscribe.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body || {};

  if (!email || typeof email !== "string") {
    return res.status(400).json({ message: "Bitte gib eine Emailadresse ein." });
  }

  const trimmedEmail = email.trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(trimmedEmail)) {
    return res.status(400).json({ message: "Bitte gib eine gültige Emailadresse ein." });
  }

  const API_KEY = process.env.BREVO_API_KEY;

  if (!API_KEY) {
    console.error("BREVO_API_KEY fehlt.");
    return res.status(500).json({ message: "Serverkonfiguration fehlt." });
  }

  try {
    const brevoRes = await fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(trimmedEmail)}`, {
      method: "DELETE",
      headers: {
        accept: "application/json",
        "api-key": API_KEY,
      },
    });

    // Kontakt existiert nicht → trotzdem "erfolgreich"
    if (brevoRes.status === 404) {
      return res.status(200).json({
        ok: true,
        message: "Falls diese Adresse bei uns hinterlegt war, ist sie jetzt von ANKNIPSEN-Mails abgemeldet.",
      });
    }

    if (!brevoRes.ok) {
      const errText = await brevoRes.text();
      console.error("Brevo Unsubscribe/Delete Error:", errText);
      return res.status(500).json({
        ok: false,
        message: "Fehler bei der Abmeldung.",
      });
    }

    return res.status(200).json({
      ok: true,
      message: "Du bist von ANKNIPSEN-Mails abgemeldet und deine Adresse wurde gelöscht.",
    });
  } catch (err) {
    console.error("Unhandled unsubscribe error:", err);
    return res.status(500).json({
      ok: false,
      message: "Unerwarteter Fehler bei der Abmeldung.",
    });
  }
}
