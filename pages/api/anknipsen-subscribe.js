// pages/api/anknipsen-subscribe.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  const LIST_ID_COMMUNITY = process.env.BREVO_LIST_ID_ANKNIPSEN_COMMUNITY;
  const LIST_ID_EVENT = process.env.BREVO_LIST_ID_ANKNIPSEN_EVENT;

  if (!BREVO_API_KEY || !LIST_ID_COMMUNITY || !LIST_ID_EVENT) {
    console.error("Brevo ENV Variablen fehlen:", {
      hasApiKey: !!BREVO_API_KEY,
      hasCommunity: !!LIST_ID_COMMUNITY,
      hasEvent: !!LIST_ID_EVENT,
    });
    return res.status(500).json({ message: "Brevo-Konfiguration fehlt." });
  }

  const communityId = Number(LIST_ID_COMMUNITY);
  const eventId = Number(LIST_ID_EVENT);

  if (Number.isNaN(communityId) || Number.isNaN(eventId)) {
    console.error("Listen-IDs sind keine gültigen Zahlen");
    return res.status(500).json({ message: "Interne Listen-Konfiguration fehlerhaft." });
  }

  try {
    const { email, name, acceptedTerms, source, ttft_ms, eventKey, eventLabel } = req.body || {};

    // --- VALIDIERUNG ---
    if (!email || typeof email !== "string") {
      return res.status(400).json({ message: "Email fehlt oder ist ungültig." });
    }

    const trimmedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return res.status(400).json({ message: "Bitte gib eine gültige Emailadresse ein." });
    }

    if (!name || typeof name !== "string" || !name.trim()) {
      return res.status(400).json({ message: "Bitte gib deinen Namen ein." });
    }

    if (!acceptedTerms) {
      return res.status(400).json({
        message: "Bitte akzeptiere die Hinweise zum Datenschutz.",
      });
    }

    if (!eventKey || !eventLabel) {
      return res.status(400).json({
        message: "Event-Infos fehlen (eventKey / eventLabel).",
      });
    }

    // --- NAMEN SPLITTEN ---
    const [firstName, ...rest] = name.trim().split(" ");
    const lastName = rest.join(" ");

    // --- API PAYLOAD ---
    const payload = {
      email: trimmedEmail,
      attributes: {
        FIRSTNAME: firstName || "",
        LASTNAME: lastName || "",
        FULLNAME: name.trim(),
        SOURCE: source || "anknipsen",

        EVENT_KEY: eventKey,
        EVENT_LABEL: eventLabel,
        IS_ANKNIPSEN: true,

        TTFT_MS: typeof ttft_ms === "number" ? ttft_ms : null,
      },

      // WICHTIG: BEIDE Listen, Event & Community
      listIds: [communityId, eventId],

      updateEnabled: true,
    };

    const brevoRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify(payload),
    });

    const data = await brevoRes.json().catch(() => ({}));

    if (!brevoRes.ok) {
      console.error("Brevo API error:", brevoRes.status, data);
      return res.status(500).json({
        message: "Fehler bei Brevo.",
        error: data,
      });
    }

    return res.status(200).json({
      message: "Danke – du bist für ANKNIPSEN eingetragen.",
    });
  } catch (err) {
    console.error("Fehler in anknipsen-subscribe:", err);
    return res.status(500).json({ message: "Interner Serverfehler." });
  }
}
