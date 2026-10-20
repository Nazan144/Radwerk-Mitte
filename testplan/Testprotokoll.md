# Testprotokoll – Durchführung Testplan v1

Datum der Durchführung: 20.10.2026 · Durchgeführt gegen: `prototyp/` (Entwurf v0.1), Commit-Stand `db55bff`.
Grundlage: [Testplan.md](Testplan.md). Methode: automatisierte Browserausführung (Chrome DevTools
Protocol, Microsoft Edge headless) für Formular- und Rechnerlogik sowie echte Mobil-Viewport-Messung
(375 px); Code-/Struktur-Review für Inhalts- und Navigationskriterien. Design-Freigabe (TF-18) und
vollständige Screenreader-/Kontrastprüfung (TF-16/TF-17) erfordern eine manuelle Prüfung mit
Merle Vogelsang bzw. echten Hilfsmitteln und wurden hier nicht abschließend durchgeführt.

## Ergebnisübersicht

| Status | Anzahl | Testfälle |
|---|---|---|
| ✅ Bestanden | 15 | TF-01, TF-02, TF-03, TF-04, TF-05, TF-06, TF-07, TF-08, TF-09, TF-10 (strukturell), TF-14, TF-15, TF-19, TF-20, TF-21 |
| 🟡 Bestanden mit Hinweis / Inhalt offen | 3 | TF-11, TF-12, TF-17 (teilweise) |
| ⛔ Nicht umgesetzt | 1 | TF-13 |
| ⏳ Nicht automatisiert durchführbar (manuell nötig) | 2 | TF-16 (nur teilweise geprüft), TF-18 |

## Detailergebnisse

### TF-01 – B2B-Bereich in einem Klick erreichbar — ✅ Bestanden
Hero-Button, Hauptnavigation „Für Unternehmen" und Kachel auf der Startseite verlinken alle direkt
auf `dienstrad-leasing.html`. Geprüft per Code-Review und Screenshot.

### TF-02 – Leasing-Rechner Grundfunktion — ✅ Bestanden
Im echten Browser mit Radpreis 3.500 € / Bruttogehalt 3.500 € ausgeführt:
`68,64 € (unverbindlich)`, Rate 110,25 €, geldwerter Vorteil 8,75 €, Ersparnis ca. 29 %.
Ergebnis erscheint sofort ohne Seitenneuladen, Badge „Unverbindlich" vorhanden.

### TF-03 – Leasing-Rechner Randfälle — ✅ Bestanden (1 Beobachtung)
Geprüft: Radpreis 0, Bruttogehalt leer, negativer Radpreis → jeweils korrekt Hinweistext „Bitte
Radpreis und Bruttogehalt eingeben.“ statt Fehlwert. Gehaltsgrenzen 2.000 € (Quote 36 %) und
6.000 € (Quote 42 %) ergeben die laut Code erwarteten Werte (42,12 € bzw. 38,64 €).
**Beobachtung (keine Fehlfunktion, da Platzhalterkonditionen):** Bei genau 6.000 € Bruttogehalt
sinkt die Abgabenquote sprunghaft von 44 % (bei 5.999 €) auf 42 %, wodurch die Belastung an dieser
Schwelle unerwartet *niedriger* ausfällt als knapp darunter. Mit echten Leasing-Konditionen (offene
Frage an Merle) erneut prüfen.

### TF-04 – Rechner → Anfrage mit vorausgewählter Kategorie — ✅ Bestanden
Aufruf von `kontakt.html?kategorie=b2b` wählt die Kategorie „Angebot für Unternehmen" automatisch
aus und blendet die B2B-Zusatzfelder ein. Im Browser verifiziert.

### TF-05 – Pflichtfeld Kategorie — ✅ Bestanden
Formular ohne gewählte Kategorie ist laut `checkValidity()` ungültig und lässt sich nicht absenden.

### TF-06 – Alle vier Kategorien inkl. Routing — ✅ Bestanden
Im Browser durchgespielt, jeweils mit vollständig gültigen Pflichtfeldern:

| Kategorie | Weiterleitung laut Erfolgsmeldung |
|---|---|
| Angebot für Unternehmen | B2B-Vertrieb (Dilan Aydın) |
| Werkstatt | Werkstatt-Team **[Ansprechperson offen]** |
| Bestellung | Kundenservice (Amara Osei) |
| Sonstiges | Kundenservice (Amara Osei) |

Hinweis: Für die Kategorie „Werkstatt" ist die Ansprechperson im Code noch als Platzhalter markiert.

### TF-07 – B2B-Zusatzfelder — ✅ Bestanden
Bei Kategorie „B2B" werden Unternehmen, Anzahl Beschäftigte und geschätzter Bedarf eingeblendet und
sind Pflichtfelder (`required: true`); bei den anderen drei Kategorien bleiben sie ausgeblendet und
nicht verpflichtend. Im Browser verifiziert.

### TF-08 – Basisvalidierung — ✅ Bestanden
`checkValidity()` liefert erwartungsgemäß `false` bei ungültiger E-Mail-Adresse und bei nicht
gesetzter Datenschutz-Checkbox, und `true`, sobald alle Pflichtangaben korrekt sind.

### TF-09 – Telefonnummer und Standorte auf jeder Seite — ✅ Bestanden
Topbar (Telefon-Link, Kassel, Göttingen) und Footer (beide Standorte) sind auf allen sechs Seiten
strukturell identisch vorhanden (per Grep und Screenshot geprüft). Inhalte selbst sind laut Annahme
im PRD noch Platzhalter (siehe Abschnitt „Bekannte Einschränkungen“ im Testplan).

### TF-10 – Link zum externen Onlineshop — ✅ Bestanden (strukturell) / 🟡 Inhalt offen
`target="_blank" rel="noopener"` ist auf allen Onlineshop-Links in Navigation, Footer und
Privatkunden-Seite korrekt gesetzt. **Offen:** Ziel-URL ist aktuell Platzhalter
(`https://www.example.com/onlineshop`) – mit echter Shop-URL erneut testen.

### TF-11 – FAQ deckt häufigste Fragen ab — 🟡 Bestanden mit Hinweis
Struktur (vier Themenbereiche, Anker-Navigation) ist vorhanden und funktioniert. Mehrere Antworten
sind noch als Platzhalter markiert; endgültige Abstimmung mit Amara Osei (Kundenservice) steht laut
PRD-Annahme noch aus.

### TF-12 – Mindestens eine Referenz sichtbar — 🟡 Offen (Inhalt fehlt)
Referenzblöcke sind auf Startseite und B2B-Seite strukturell vorhanden, enthalten aber aktuell nur
Platzhalter-Zitate. Das Akzeptanzkriterium ist formal erst erfüllt, wenn mindestens eine echte,
freigegebene Referenz eines Geschäftskunden eingebunden ist.

### TF-13 – Tracking-Vorbereitung — ⛔ Nicht umgesetzt
`main.js` enthält an der Formular-Absende-Stelle nur einen Kommentar-Platzhalter
(„Tracking-Platzhalter: hier später das Ereignis … erfassen“). Es ist noch keine tatsächliche
Erfassung von Absprungrate oder Anfragen eingebaut. Muss vor Launch ergänzt werden, damit das
Akzeptanzkriterium „ab Launch messbar“ erfüllbar ist.

### TF-14 – Mobile Navigation — ✅ Bestanden
Per echtem Klick auf den Menü-Button getestet: `aria-expanded` wechselt korrekt zwischen
`false`/`true`, das Menü öffnet und schließt sich wie vorgesehen.

### TF-15 – Responsive Layout (kein horizontaler Überlauf) — ✅ Bestanden
Alle sechs Seiten wurden bei einer real emulierten Viewport-Breite von 375 px geprüft
(`document.documentElement.scrollWidth` == `clientWidth`, keine überlaufenden Elemente). Kein
horizontales Scrollen auf Smartphone-Breite auf einer der sechs Seiten.

### TF-16 – Barrierefreiheit: Tastatur & Screenreader — ⏳ Teilweise geprüft
Code-Review bestätigt: „Zum Inhalt springen“-Skip-Link auf jeder Seite vorhanden, alle Formularfelder
haben zugeordnete Labels, Radio-Gruppe ist mit `<fieldset>`/`<legend>` ausgezeichnet. Eine vollständige
Prüfung mit echter Tastaturbedienung und Screenreader (z. B. NVDA/VoiceOver) wurde in dieser
Umgebung nicht durchgeführt und sollte vor Launch ergänzt werden.

### TF-17 – Barrierefreiheit: Kontrast & aria-current — 🟡 Teilweise bestanden
`aria-current="page"` ist auf allen Unterseiten korrekt auf dem jeweils aktiven Menüpunkt gesetzt
(Startseite hat erwartungsgemäß keinen aktiven Eintrag, da „Startseite“ kein eigener Navigationspunkt
ist). **Offen:** Farbkontrast (Blau/Orange auf Hintergrund) wurde nicht automatisiert gemessen, da in
dieser Umgebung kein Kontrast-Prüfwerkzeug verfügbar war – vor Launch mit einem Kontrast-Checker
nachholen.

### TF-18 – Design-Freigabe durch Merle — ⏳ Nicht automatisierbar
Screenshots aller sechs Seiten (Desktop und Mobile) liegen als Diskussionsgrundlage vor
(`testlauf`-Verzeichnis, lokal). Die eigentliche Freigabe kann nur durch Merle Vogelsang selbst
erfolgen und ist damit kein automatisiert testbarer Schritt.

### TF-19 – Ton und Anrede — ✅ Bestanden
Stichprobenprüfung aller sichtbaren Texte auf den sechs Seiten: durchgängig Sie-Anrede, sachlicher,
hilfsbereiter Ton, kein Duzen gefunden.

### TF-20 – Nicht-Ziele bewusst ausgeschlossen — ✅ Bestanden
Codesuche nach „Login“, „Warenkorb“, „Checkout“, „Konfigurator“, „Passwort“ im gesamten
`prototyp/`-Ordner ergab keine Treffer. Es existiert kein eigener Checkout, kein Kunden-Login und
kein Custom-Rad-Konfigurator.

### TF-21 – Navigationskonsistenz — ✅ Bestanden
Die Hauptnavigation (Reihenfolge und Linkziele) ist auf allen sechs Seiten identisch.

## Offene Punkte für Radwerk Mitte / Merle Vogelsang

Diese Punkte verhindern aktuell eine vollständige Abnahme nach PRD-Akzeptanzkriterien und sind im
zugehörigen GitHub-Issue zusammengefasst:

1. Echte Leasing-Konditionen/-Partner liefern und Rechner gegen TF-03-Schwellenfall erneut prüfen.
2. Tracking (Absprungrate, Anfragen inkl. Kategorie) implementieren (TF-13).
3. Mindestens eine freigegebene Referenz eines Geschäftskunden liefern (TF-12).
4. FAQ-Rohfragen/-Antworten mit Amara Osei final abstimmen (TF-11).
5. Echte Onlineshop-URL, Telefonnummern, Adressen, Öffnungszeiten liefern (TF-09/TF-10).
6. Ansprechperson für Kategorie „Werkstatt“ im Formular-Routing festlegen (TF-06).
7. Kontrastprüfung und vollständigen Screenreader-Test vor Launch durchführen (TF-16/TF-17).
8. Design-Freigaberunde mit Merle Vogelsang terminieren (TF-18).
