// content/pricing/pricingData.js

export const pricingData = [
  {
    key: "businessType",
    category: "Dein Business",
    options: ["Soloselbstständige & Gründer*innen", "Unternehmen", "Vereine & Organisationen"],
  },
  {
    key: "projectType",
    category: "Dein Projekt",
    options: ["Fotografie", "Video", "Design", "Website", "Abo"],
  },
];

export const servicesData = [
  {
    title: "Gründer*innen Starter",
    category: "Fotografie",
    isCountable: false,
    unit: "",
    description:
      "Wir kommen für 2 Stunden vorbei und fotografieren das, was da ist: dich, dein Arbeitsumfeld, Abläufe, Details und Situationen im Moment. Vorab besprechen wir kurz deine Ideen und was du dir wünscht. Enthalten sind 5 Bilder mit passendem Bildlook (Dieses Paket enthält kein Konzept, Workshop & Projektplanung). Ideal für Gründer*innen, Selbstständige oder kleine Teams, die schnell und bezahlbar Bildmaterial für Website, Social Media oder Profile brauchen.",
    price: 550,
  },
  {
    title: "Gründer*innen Pro",
    category: "Fotografie",
    isCountable: false,
    unit: "",
    description:
      "Ein halber Shooting-Tag. Ein Bilderpool aus Portraits, Details und Arbeitssituationen, der dich, dein Team, deine Arbeit und dein Umfeld zeigt – exakt auf deine Marke abgestimmt. Inklusive Konzept, Planung, Shooting und Bildretusche. Du bekommst eine große Bildauswahl, aus der du 20 finale Bilder auswählen kannst. Zusätzlich erstellen wir parallel immer Behind-the-Scenes-Content (Fotos und kurze Clips) und stellen ihn dir für Social Media & Co zur Verfügung.",
    price: 2700,
  },
  {
    title: "Branding Fotografie",
    category: "Fotografie",
    isCountable: false,
    unit: "",
    description:
      "Ein ganzer Shooting-Tag. Ein Bilderpool aus Portraits, Details und Arbeitssituationen, der dich, dein Team, deine Arbeit und dein Umfeld zeigt – exakt auf deine Marke abgestimmt. Inklusive Konzept, Planung, Shooting und Bildretusche. Du bekommst eine große Bildauswahl, aus der du 30 finale Bilder auswählen kannst. Zusätzlich erstellen wir parallel immer Behind-the-Scenes-Content (Fotos und kurze Clips) und stellen ihn dir für Social Media & Co zur Verfügung.",
    price: 3600,
  },
  {
    title: "Business Portrait",
    category: "Fotografie",
    isCountable: false,
    unit: "",
    description: "Hochwertige Portraitfotos für Einzelpersonen, die ein Portrait für Website, LinkedIn, Presse oder Social Media benötigen. Die Shootingzeit beträgt 1 Stunde vor Ort oder im Studio inkl. Outfitwechsel und 3 bearbeitete Bilder. Hair & Make-up optional zubuchbar.",
    price: 400,
    allowInstallments: false,
  },
  {
    title: "Mitarbeiter*innen Portraits",
    category: "Fotografie",
    isCountable: true,
    unit: "pro Person",
    description: "Einzelaufnahmen von Mitarbeiter*innen, CEOs und Teamfotos. Die Shootingzeit beträgt 15min pro Person vor Ort oder im Studio inkl. Outfitwechsel, eine gemeinsame Bildauswahl und ein bearbeitetes Foto pro Person. Hair & Make-up optional zubuchbar. Info: Es fällt zusätzlich eine Grundgebühr pro Shooting-Tag von 300,- an.",
    price: 130,
    allowInstallments: false,
  },
  {
    title: "Eventfotografie",
    category: "Fotografie",
    isCountable: true,
    unit: "pro halber Tag",
    description:
      "Umfasst die fotografische Dokumentation von Veranstaltungen wie PR-Events, Produktlaunches, Networking-Formaten, Vorträgen, Speaker-Events oder Teamveranstaltungen. Die von uns getroffene Bildauswahl wird in einem einheitlichen Look bearbeitet und werden in einer Onlinegalerie bereitgestellt. Optional kann zusätzlich ein Video-Paket gebucht werden sowie weitere Fotografi*innen, um das Event aus mehreren Perspektiven und noch mehr Momente festzuhalten.",
    price: 1200,
    allowInstallments: false,
  },
  {
    title: "Produktfotografie",
    category: "Fotografie",
    isCountable: true,
    unit: "pro Foto",
    description: "Je nach Bedarf fotografieren wir Freisteller oder inszenierte Aufnahmen. Die Fotos entstehen vor Ort oder im Studio. Du erhälst eine Bildauswahl, aus der du deine finale Bilder auswählen kannst. Ein professionelles Styling ist optional zubuchbar.",
    price: 45,
    allowInstallments: false,
  },
  {
    title: "Bildretusche",
    category: "Fotografie",
    isCountable: true,
    unit: "pro Bild",
    description: "Dies ist eine Zusatzoption für aufwändigere Retuschen oder besondere Bildanpassungen. Grundlegende Bildretuschen sind bei allen Leistungen immer enthalten",
    price: 50,
    allowInstallments: false,
  },
  {
    title: "Video-Content für Social Media",
    category: "Video",
    isCountable: false,
    unit: "",
    description: "Wir produzieren kurze, markenkonforme Videos, die für Instagram, LinkedIn und Co. zugeschnitten sind. Von der Planung über den Dreh bis zum Schnitt und zur Formatanpassung – alles ist inklusive.",
    price: 1200,
  },
  {
    title: "Imagefilm",
    category: "Video",
    isCountable: false,
    unit: "",
    description: "Dabei kümmern wir uns um Dreh, Schnitt sowie Bild- und Tonbearbeitung. Dein Branding, passende Musik und Grafiken werden integriert. Das finale Video erhältst du in allen relevanten Formaten für Website, Präsentationen und Social Media. Auf Wunsch ergänzen wir kurze Snippets für deine Social-Media-Kanäle.",
    price: 2100,
  },
  {
    title: "Web Design (UI/UX)",
    category: "Website",
    isCountable: true,
    unit: "pro Stunde",
    description: "Webdesign, das funktioniert. Wir gestalten deine Website mit Fokus auf Struktur, Nutzerführung und einem stimmigen Gesamtbild - die Basis für die Webentwicklung. Ein Webdesign-Projekt beginnt bei 5 Stunden.",
    price: 100,
    allowInstallments: false,
  },
  {
    title: "Web Entwicklung",
    category: "Website",
    isCountable: true,
    unit: "pro Stunde",
    description: "Wir setzen deine Website technisch um – zuverlässig, flexibel und passend zu deinen Anforderungen. Ob mit CMS oder als individuelle Lösung: von der einfachen Landingpage bis zum komplexen Webprojekt ist alles möglich. Eine Website Entwicklung beginnt bei 8 Stunden.",
    price: 100,
    allowInstallments: false,
  },
  {
    title: "Website Paket Starter",
    category: "Website",
    isCountable: false,
    unit: "",
    description:
      "Ein übersichtlicher Onepager als schnellen Einstieg ins Web. Wir setzen deine Website in WordPress um und passen das Layout an dein Logo und deine Farben an. Inhalte werden klar strukturiert eingebunden (Kurztexte, Kontaktinfos). Enthalten sind Impressum & Datenschutz. Keine Unterseiten, kein individuelles UX/UI-Design – dafür ein solider, professioneller Webauftritt, der kein Baukasten ist und später problemlos erweitert werden kann.",
    price: 1800,
  },
  {
    title: "Website Paket Advanced",
    category: "Website",
    isCountable: false,
    unit: "",
    description:
      "Eine individuell gestaltete, mehrseitige Website auf Basis von WordPress. Wir entwickeln ein stimmiges Layout und setzen mehrere Seiten um – z. B. Startseite, Leistungen, Über uns und Kontakt. Inhalte werden strukturiert auf die Seiten verteilt, ein Kontaktformular wird integriert. Enthalten sind responsives Design sowie Impressum & Datenschutz als Pflichtseiten. Dieses Paket eignet sich für alle, die mehr Inhalte zeigen möchten, ohne einen umfangreichen UX- oder Seitenkonzeptionsprozess.",
    price: 3600,
  },
  {
    title: "Website Paket Pro",
    category: "Website",
    isCountable: false,
    unit: "",
    description:
      "Eine umfangreiche, mehrseitige Website mit individuellem UX/UI-Design, durchdachtem Seitenkonzept und erweiterten Funktionen. Im Vergleich zum Advanced-Paket liegt der Fokus hier auf Tiefe, Struktur und technischer Erweiterbarkeit. Wir konzipieren die Seitenarchitektur, Nutzer*innenführung und Inhalte gemeinsam und setzen sie um – auf Basis von WordPress oder, je nach Anforderungen, mit individuell entwickelten Komponenten und eigenem Code. Neben mehreren umfangreichen Unterseiten integrieren wir ausgewählte Plugins oder programmieren passgenaue Funktionen, z. B. für Formulare, Buchung, Newsletter, Mehrsprachigkeit oder spezielle Interaktionen. Enthalten sind responsives Design, Kontaktformulare, Impressum & Datenschutz sowie eine SEO-freundliche Grundstruktur. Dieses Paket eignet sich für Unternehmen mit komplexeren Anforderungen und Wachstumsplänen.",
    price: 5500,
  },
  {
    title: "Logo Design",
    category: "Design",
    isCountable: false,
    unit: "",
    description: "Von den ersten Entwürfen bis zur finalen Version entwickeln wir ein Logo, das sich in allen Medien einsetzen lässt. In engem Austausch erstellen wir ein Konzept und ein kleines Manual für die korrekte Anwendung.",
    price: 1800,
  },
  {
    title: "Corporate Design",
    category: "Design",
    isCountable: false,
    unit: "",
    description: "Logo, Typografie und Farben – wir entwickeln ein Corporate Design, das die zentralen Gestaltungselemente deiner Marke definiert und ein einheitliches Erscheinungsbild schafft. Alle Regeln und Anwendungen halten wir in einem Designmanual fest, das dir als klare Grundlage für alle weiteren Kommunikationsmittel dient.",
    price: 3600,
  },
  {
    title: "Redesign",
    category: "Design",
    isCountable: false,
    unit: "",
    description: "Beim Redesign modernisieren wir dein Logo, Farbwelt und Typografie und bringen das Erscheinungsbild deiner Marke auf den neuesten Stand. Das Ergebnis: ein moder, klares und zeitgemäßes Design mit Wiedererkennungswert das neue Impulse setzt.",
    price: 2800,
  },
  {
    title: "Konzeption & Workshop",
    category: "Design",
    isCountable: false,
    unit: "",
    description:
      "Ein Basis-Workshop ist in vielen Leistungen enthalten – wer tiefer einsteigen will oder bei einer Gründung den ersten Grundstein legen möchte, kann diesen umfassenden Workshop separat buchen. Wir entwickeln das Fundament für deine Marke und analysieren gemeinsam Werte, Zielgruppen und Positionierung, prüfen die aktuelle Ausrichtung und entwickeln erste Ansätze für Bildsprache, Kommunikation und Design. Später erhältst du eine strukturierte Zusammenfassung mit klaren Empfehlungen, die dir Orientierung geben und als Grundlage für Fotografie, Video und Webprojekte dienen.",
    price: 450,
    allowInstallments: false,
  },
  {
    title: "Foto & Video Content Abo",
    category: "Abo",
    isCountable: true,
    unit: "pro Monat",
    description:
      "Im Content Abo sind wir jeden Monat einen ganzen Tag bei dir. Wir produzieren Fotos und kurze Videos (Reels & Snippets) – von Mitarbeiterportraits über Produkt- und Eventfotos bis hin zu Social-Media-Clips oder Interviews. Du bestimmst, worauf der Fokus liegt. So entsteht mit der Zeit ein vielseitiger Content-Pool, den du flexibel für Instagram, LinkedIn & Co. einsetzen kannst.",
    price: 1800,
    allowInstallments: false,
  },
  {
    title: "Website Service Technik",
    category: "Abo",
    isCountable: true,
    unit: "pro Monat",
    description: "Hosting, Sicherheitsupdates, Backups und technische Betreuung deiner Website. Ideal, wenn du dich nicht selbst um die Technik kümmern möchtest.",
    price: 50,
    allowInstallments: false,
  },
  {
    title: "Website Service Content",
    category: "Abo",
    isCountable: true,
    unit: "pro Monat",
    description: "Technische Betreuung plus ein monatliches Kontingent von 3 Arbeitsstunden für Inhaltsanpassungen oder kleinere Erweiterungen.",
    price: 150,
    allowInstallments: false,
  },
  {
    title: "Website Service Pro",
    category: "Abo",
    isCountable: true,
    unit: "pro Monat",
    description:
      "Umfassendes Service- und Weiterentwicklungs­paket für deine Website. Enthält die vollständige technische Betreuung sowie 6 Arbeitsstunden pro Monat für Content-Pflege, gezielte Optimierungen oder kleinere funktionale Erweiterungen. Zusätzlich erhältst du priorisierten Support und eine kontinuierliche Begleitung bei der Weiterentwicklung deiner Website. Ideal für Unternehmen, die ihre Website aktiv nutzen, regelmäßig anpassen und strategisch ausbauen möchten.",
    price: 280,
    allowInstallments: false,
  },
];

const pricingConfig = {
  pricingData,
  servicesData,
};

export default pricingConfig;
