// pages/api/anknipsen-unsubscribe.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body || {};

  if (!email || typeof email !== "string") {
    return res.status(400).json({ message: "Bitte gib eine gültige Emailadresse ein." });
  }

  const trimmedEmail = email.trim().toLowerCase();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    return res.status(400).json({ message: "Bitte gib eine gültige Emailadresse ein." });
  }

  const apiKey = process.env.MAILERLITE_API_KEY;

  if (!apiKey) {
    console.error("MAILERLITE_API_KEY fehlt.");
    return res.status(500).json({ message: "Serverkonfiguration fehlt." });
  }

  const BASE_URL = "https://connect.mailerlite.com/api";

  try {
    // 1) Subscriber über Email holen
    const fetchRes = await fetch(`${BASE_URL}/subscribers/${encodeURIComponent(trimmedEmail)}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: "application/json",
      },
    });

    // Wenn kein Subscriber mit der Email existiert:
    if (fetchRes.status === 404) {
      // Für Datenschutz/UX: trotzdem "erfolgreich" zurückgeben
      return res.status(200).json({
        ok: true,
        message: "Falls diese Adresse bei uns hinterlegt war, ist sie jetzt von ANKNIPSEN-Mails abgemeldet.",
      });
    }

    if (!fetchRes.ok) {
      console.error("Fehler beim Fetch Subscriber:", await fetchRes.text());
      return res.status(500).json({ message: "Fehler bei der Abmeldung (FETCH)." });
    }

    const subscriberData = await fetchRes.json();
    const subscriberId = subscriberData?.data?.id;

    if (!subscriberId) {
      console.warn("Kein Subscriber-ID im Response, behandle als erfolgreich.");
      return res.status(200).json({
        ok: true,
        message: "Falls diese Adresse bei uns hinterlegt war, ist sie jetzt von ANKNIPSEN-Mails abgemeldet.",
      });
    }

    // 2) Subscriber auf "unsubscribed" setzen
    const updateRes = await fetch(`${BASE_URL}/subscribers/${subscriberId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "unsubscribed",
      }),
    });

    if (!updateRes.ok) {
      console.error("Fehler beim Update Subscriber:", await updateRes.text());
      return res.status(500).json({ message: "Fehler bei der Abmeldung (UPDATE)." });
    }

    return res.status(200).json({
      ok: true,
      message: "Du bist von ANKNIPSEN-Mails abgemeldet.",
    });
  } catch (err) {
    console.error("Unhandled error in unsubscribe handler:", err);
    return res.status(500).json({ message: "Unerwarteter Fehler bei der Abmeldung." });
  }
}
