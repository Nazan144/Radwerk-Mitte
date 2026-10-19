# CLAUDE.md – Projekt „Neue Website Radwerk Mitte“

Dieses Projekt ist eine Übung (Kurs): Beratung und Konzeption einer neuen Website für den
fiktiven Kunden **Radwerk Mitte**. Antworte und schreibe Dokumente auf **Deutsch**.

## Quellen (Single Source of Truth)

- `docs/Kundengespraech_Protokoll.pdf` – Protokoll des Kundengesprächs mit Merle Vogelsang
  (Kundin, gespielt von der Kursleiterin; Gesprächsführung Steve, Fragen von Jonas und Chris).
- `docs/PRD – Neue Website Radwerk Mitte.pdf` – Product Requirements Document (Stand 19.10.2026, @Martina).
- `docs/Firmensteckbrief.pdf` – Firmensteckbrief Radwerk Mitte GmbH (Kursunterlage zur Vorbereitung
  des Kundengesprächs; Geschichte, Haltung, Personen, Geschäftskunden).

Jede Anforderung, jedes Ziel und jede Empfehlung muss sich auf eine Aussage aus diesen Quellen
zurückführen lassen. Nichts erfinden – Lücken als „offene Frage an Merle“ kennzeichnen.

## Kunde in Kürze

- Familienunternehmen, Standorte **Kassel und Göttingen**, ca. 120 Beschäftigte, ca. 28 Mio. € Umsatz.
  Ausbildungsbetrieb. Merle Vogelsang hat die Firma von ihrem Vater übernommen.
- Geschichte: **1989** von Heiner Vogelsang als Werkstatt in einem Kasseler Hinterhof gegründet.
  Merle hat das Dienstrad-Leasing aufgebaut und führt die Firma seit zwei Jahren; Heiner leitet weiter die Werkstatt.
- Struktur: zwei Filialen mit Werkstatt, ein Onlineshop, ein Zentrallager und der Bereich
  Dienstrad-Leasing (wächst am schnellsten).
- Geschäftskunden beim Dienstrad-Leasing: u. a. ein **Klinikum, eine Stadtverwaltung, ein Pflegedienst** –
  sie brauchen klare Angebote und verlässliche Termine.
- Haltung des Hauses: **„Erst anschauen, dann sagen.“** Zusagen werden gehalten, auch kleine;
  verzögert sich etwas, meldet sich das Team vor dem Termin.
- Wachstumsziel: **ca. 15 % im nächsten Jahr**, primär über **B2B / Dienstrad-Leasing für Unternehmen**.
  B2C bleibt bestehen. Custom-Räder (Luxussegment) werden nächstes Jahr nur getestet.
- Beispiel B2B-Potenzial: Klinikum will 80 Beschäftigte mit Rädern ausstatten.
- Risiken: große Online-Händler (z. B. Upway), Kundenservice = **nur eine Person**,
  Werkstatt-Engpass bei Spitzenlast, Lieferkette (Backup aus Polen/Tschechien).
- Wettbewerbsvorteil: über Jahre gewachsenes regionales Netzwerk, direkte Erreichbarkeit, Service vor Ort.
- Budget: **zunächst ca. 150.000 €**, mehr nur nach Freigabe durch Merle und Team.

## Scope Version 1 (laut PRD)

**Drin:** Website (modern), B2B-Bereich (1 Klick von Startseite), Leasing-Rechner
(Radpreis + Bruttogehalt → monatliche Belastung, Hinweis „unverbindlich“), FAQ,
Anfrageformular mit Kategorien (B2B-Angebot, Werkstatt, Bestellung, Sonstiges) und
Weiterleitung per Mail, Referenzen/Partner, Telefon + beide Standorte auf jeder Seite,
Link zum externen Onlineshop, mobil nutzbar, Tracking (Absprungrate, Anfragen) ab Launch.

**Nicht-Ziele:** eigener Onlineshop, Partnerportal mit Login (nur vorbereiten),
Custom-Rad-Konfigurator, Rebranding, neue Support-Software.

## Gestaltung & Ton

- Markenfarben **Blau und Orange** sind gesetzt (wie auf den Firmenfahrzeugen); Auftritt modern, nicht „altbacken“.
- Ton: sachlich, hilfsbereit, **per Sie**.
- Leitmotiv: „zuverlässiger Partner“ – Verlässlichkeit und Nähe vor Ort sichtbar machen.
- Barrierefreiheit und Lesbarkeit auf Smartphone und Desktop beachten.

## Beteiligte

- **Merle Vogelsang** – Geschäftsführung, gibt frei.
- **Heiner Vogelsang** – Gründer, Werkstattleitung.
- **Dilan Aydın** – B2B-Vertrieb (will qualifizierte Anfragen mit Firmengröße und Bedarf).
- **Amara Osei** – Kundenservice (will FAQ und vorsortierte Anfragen).
- **Svenja Kowalczyk** – E-Commerce & Marketing (will Inhalte selbst im CMS pflegen).

## Technik

- Bestehend: WordPress-Seite (Plugins), externer Onlineshop (bleibt unverändert, nur verlinkt).
- Technik ist **nicht festgelegt** – erst Analyse der bestehenden Seite per Fragebogen.
- Für Prototypen/Entwürfe: statisches HTML/CSS/JS ohne Build-Schritt bevorzugen, damit sie
  einfach im Browser geöffnet werden können.

## Offene Fragen an Merle (aus dem PRD)

Erfolgsmessung und Vergleichswerte · Leasing-Konditionen und Partner für den Rechner ·
Zeitpunkt Partnerportal · Custom-Räder auf der Seite? · öffentliche SLA-Inhalte ·
Budget über 150.000 € · Umfang der visuellen Neugestaltung und Freigaberunden.

## Ordnerstruktur

- `docs/` – Quelldokumente (Protokoll, PRD, Firmensteckbrief). Nicht verändern.
- Neue Arbeitsergebnisse (Konzepte, Fragebögen, Prototypen) in eigenen Unterordnern ablegen,
  z. B. `konzept/`, `prototyp/`.
