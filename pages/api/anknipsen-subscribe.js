export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, name, ttft_ms, acceptedTerms, eventKey } = req.body || {};

  if (!email || !name) {
    return res.status(400).json({ message: "Name und Email sind erforderlich." });
  }

  try {
    const apiKey = process.env.MAILERLITE_API_KEY;
    const groupId = process.env.MAILERLITE_GROUP_ID;

    if (!apiKey || !groupId) {
      return res.status(500).json({ message: "MailerLite API Key oder Group ID fehlt." });
    }

    const url = "https://connect.mailerlite.com/api/subscribers";

    const mlResponse = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        fields: {
          name,
          ttft_ms: ttft_ms ?? null,
          source: "anknipsen",
          accepted_terms: acceptedTerms ? "yes" : "no",
          event_key: eventKey || null,
        },
        groups: [groupId],
        resubscribe: true, // <<< WICHTIG: erlaubt Wiederanmeldung
      }),
    });

    const data = await mlResponse.json().catch(() => ({}));

    if (!mlResponse.ok) {
      console.error("MailerLite error", data);
      return res.status(400).json({ message: "Fehler bei MailerLite", error: data });
    }

    return res.status(200).json({ message: "Erfolgreich eingetragen." });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ message: "Serverfehler." });
  }
}
