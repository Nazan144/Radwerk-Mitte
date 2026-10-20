# Testplan – Neue Website Radwerk Mitte

Stand: 20.10.2026 · Grundlage: `docs/PRD – Neue Website Radwerk Mitte.pdf` (Stand 19.10.2026, @Martina),
ergänzend `docs/Kundengespraech_Protokoll.pdf` und der statische Prototyp in `prototyp/`.

## 1. Zweck und Geltungsbereich

Dieser Testplan prüft, ob die neue Website (Version 1) die im PRD festgelegten Ziele und
Akzeptanzkriterien erfüllt. Jeder Testfall ist auf eine Aussage aus dem PRD zurückgeführt.
Geprüft wird zunächst der statische Prototyp (`prototyp/*.html`, `main.js`, `styles.css`);
dieselben Testfälle gelten unverändert für die spätere technische Umsetzung.

**Nicht Gegenstand dieses Testplans** (laut PRD-Nicht-Zielen): eigener Onlineshop,
Partnerportal mit Login, Custom-Rad-Konfigurator, Rebranding, neue Support-Software.
Diese Bereiche werden nur daraufhin geprüft, dass sie bewusst **nicht** gebaut bzw. nur
vorbereitet sind.

## 2. Testobjekt

| Seite | Datei | PRD-Bezug |
|---|---|---|
| Startseite | `prototyp/index.html` | B2B-Sichtbarkeit, Geschichte/Haltung, FAQ-Teaser, Referenzen |
| Dienstrad-Leasing (B2B) | `prototyp/dienstrad-leasing.html` | B2B-Bereich, Leasing-Rechner, Referenzen |
| Privatkunden | `prototyp/privatkunden.html` | Onlineshop-Link, Werkstatt, B2C |
| Werkstatt | `prototyp/werkstatt.html` | Standorte, Service |
| FAQ | `prototyp/faq.html` | FAQ-Ziel, Kundenservice-Entlastung |
| Kontakt | `prototyp/kontakt.html` | Anfrageformular, Kategorien, Standorte, Telefon |
| Logik | `prototyp/main.js` | Leasing-Rechner, Formular-Routing, Mobile-Nav |

Der Prototyp ist als „Entwurf v0.1“ gekennzeichnet; gelb markierte Platzhalter
(`<mark class="ph">`) sind Inhalte, die von Radwerk Mitte noch geliefert oder von Merle
geklärt werden müssen (siehe Abschnitt 6).

## 3. Teststufen

1. **Funktionale Tests** – Verhalten von Formular und Rechner.
2. **Inhalts-/Vollständigkeitstests** – Pflichtinhalte laut Akzeptanzkriterien auf jeder Seite.
3. **Usability-/Visual-Review** – Design, Tonalität, Markenfarben (manuell, mit Merle Vogelsang).
4. **Responsive-/Barrierefreiheitstests** – Smartphone und Desktop, Tastaturbedienung.
5. **Link- und Navigationstests** – interne Navigation, externer Onlineshop-Link.
6. **Abnahme** – Freigabe durch Merle Vogelsang (siehe Abschnitt 7).

Tracking (Absprungrate, Anzahl Anfragen) ist laut PRD erst **ab Launch** messbar; hierzu
werden keine Ergebniswerte, sondern nur die technische Erfassung geprüft (TF-13).

## 4. Testumgebung

- Browser: aktuelle Versionen von Chrome, Firefox, Safari, Edge.
- Geräte: Smartphone (Breakpoint ca. 375–430 px), Tablet, Desktop.
- Statischer Prototyp: Öffnen der HTML-Dateien direkt im Browser (kein Build-Schritt nötig).

## 5. Rollen

| Rolle | Person | Aufgabe im Test |
|---|---|---|
| Freigabe | Merle Vogelsang | Nimmt Design und Gesamtergebnis ab |
| Werkstatt-Inhalte | Heiner Vogelsang | Prüft Werkstatt-Seite fachlich |
| B2B-Vertrieb | Dilan Aydın | Prüft Formular-Felder (Firmengröße, Bedarf) und Routing |
| Kundenservice | Amara Osei | Prüft FAQ-Inhalte und Vorsortierung der Anfragen |
| Content/CMS | Svenja Kowalczyk | Prüft Pflegbarkeit der Inhalte |

## 6. Testfälle

Jeder Testfall verweist auf das jeweilige Akzeptanzkriterium bzw. Ziel aus dem PRD.

| ID | Titel | PRD-Bezug | Testschritte | Erwartetes Ergebnis |
|---|---|---|---|---|
| TF-01 | B2B-Bereich in einem Klick erreichbar | Akzeptanzkriterium „Dienstrad-Leasing … mit einem Klick erreichbar“ | Startseite öffnen; Hauptnavigation, Hero-Button „Dienstrad-Leasing für Unternehmen“ und Kachel „Für Unternehmen“ anklicken | Jeder der drei Einstiege führt direkt auf `dienstrad-leasing.html` (ein Klick von der Startseite) |
| TF-02 | Leasing-Rechner – Grundfunktion | Akzeptanzkriterium Leasing-Rechner; Ziel „Kosten online selbst abschätzen“ | Auf `dienstrad-leasing.html#rechner` Radpreis (z. B. 3500 €) und Bruttogehalt (z. B. 3500 €) eingeben | Geschätzte monatliche Belastung wird sofort (ohne Seitenneuladen) angezeigt, inkl. Badge/Hinweis „Unverbindlich“ |
| TF-03 | Leasing-Rechner – Randfälle | wie TF-02 | Eingabe 0, leer, negativ, nicht-numerisch sowie sehr hoher/niedriger Gehaltswert (Grenzen 2000/3000/4500/6000 € prüfen) | Bei fehlender/ungültiger Eingabe erscheint Hinweistext „Bitte Radpreis und Bruttogehalt eingeben“ statt eines falschen Zahlenwerts; an den Gehaltsgrenzen ändert sich die Berechnung nachvollziehbar, kein Fehler/NaN |
| TF-04 | Leasing-Rechner → Anfrage | Ziel „Anfrageweg ohne E-Mail“ | Nach Berechnung auf „Angebot für Ihr Unternehmen anfragen“ klicken | Weiterleitung zu `kontakt.html?kategorie=b2b`, Kategorie „Angebot für Unternehmen“ ist vorausgewählt |
| TF-05 | Anfrageformular – Pflichtfeld Kategorie | Akzeptanzkriterium „Formular verlangt Kategorie … leitet an zuständige Person weiter“ | `kontakt.html` ohne Auswahl einer Kategorie absenden | Formular lässt sich nicht absenden (Browser-Validierung), Fehlermeldung bei Feld „Worum geht es?“ |
| TF-06 | Anfrageformular – alle vier Kategorien | wie TF-05 | Nacheinander B2B-Angebot, Werkstatt, Bestellung, Sonstiges wählen und mit Pflichtfeldern absenden | Erfolgsmeldung zeigt korrekte Weiterleitungsperson je Kategorie: B2B → B2B-Vertrieb (Dilan Aydın); Werkstatt → Werkstatt-Team; Bestellung/Sonstiges → Kundenservice (Amara Osei) |
| TF-07 | Anfrageformular – B2B-Zusatzfelder | Ziel „qualifizierte Anfragen mit Firmengröße und Bedarf“ (Dilan Aydın) | Kategorie „B2B-Angebot“ wählen | Zusatzfelder „Unternehmen“, „Anzahl Beschäftigte“, „Geschätzter Bedarf“ werden eingeblendet und sind Pflichtfelder; bei anderen Kategorien bleiben sie ausgeblendet und nicht verpflichtend |
| TF-08 | Anfrageformular – Basisvalidierung | implizit aus Formularkriterium | Ungültige E-Mail eingeben; Datenschutz-Checkbox nicht setzen; Pflichtfelder Name/Nachricht leer lassen | Formular verhindert Absenden, passende Validierungshinweise erscheinen |
| TF-09 | Telefonnummer und Standorte auf jeder Seite | Akzeptanzkriterium „Telefonnummer und beide Standorte … auf jeder Seite“ | Alle sechs Seiten einzeln öffnen | Topbar zeigt Telefonlink und Links zu Kassel/Göttingen; Footer zeigt beide Standorte; identisch auf allen Seiten |
| TF-10 | Link zum externen Onlineshop | Akzeptanzkriterium „Link zum externen Onlineshop funktioniert“ | Onlineshop-Link in Hauptnavigation, Footer und auf `privatkunden.html` anklicken | Link öffnet in neuem Tab (`target="_blank" rel="noopener"`) die hinterlegte Shop-URL; **Hinweis:** aktuell Platzhalter-URL `example.com/onlineshop` – mit echter Shop-URL erneut testen, sobald von Radwerk geliefert |
| TF-11 | FAQ deckt häufigste Fragen ab | Akzeptanzkriterium FAQ; Ziel „Kundenservice entlasten“ | `faq.html` öffnen, alle vier Themenbereiche (Unternehmen, Beschäftigte, Kauf/Onlineshop, Werkstatt) durchgehen | Fragen sind nach Zielgruppe gruppiert, Anker-Navigation springt korrekt; **offen:** mehrere Antworten sind noch Platzhalter – vor Launch mit Amara Osei (Kundenservice) inhaltlich abstimmen |
| TF-12 | Mindestens eine Referenz sichtbar | Akzeptanzkriterium Referenzen | Startseite und `dienstrad-leasing.html#referenzen` prüfen | Mindestens ein Referenz-Zitat eines Geschäftskunden ist sichtbar; **offen:** aktuell nur Platzhalter-Zitate – Freigabe durch Geschäftskunde (Klinikum/Stadtverwaltung/Pflegedienst) steht laut Annahmen noch aus |
| TF-13 | Tracking-Vorbereitung | Akzeptanzkriterium „Absprungrate und Anzahl der Anfragen sind ab Launch messbar“ | Formular-Absenden auslösen, Code in `main.js` prüfen | **Offen:** aktuell nur Kommentar-Platzhalter für das Tracking-Ereignis „Anfrage gesendet“; vor Launch echtes Tracking (z. B. Seitenaufrufe, Absprung, Formular-Events inkl. Kategorie) einbauen und hier erneut testen |
| TF-14 | Mobile Navigation | Akzeptanzkriterium „Alle Seiten funktionieren auf dem Smartphone“ | Browserbreite auf Smartphone-Breite verkleinern, Menü-Button „Menü“ antippen | Navigation klappt auf/zu, `aria-expanded` wechselt zwischen `false`/`true`, alle Menüpunkte erreichbar, keine horizontalen Scrollbalken |
| TF-15 | Responsive Layout Desktop/Tablet/Smartphone | wie TF-14, alle Seiten | Jede der sechs Seiten bei typischen Breakpoints prüfen | Inhalte, Formular und Rechner bleiben lesbar und bedienbar, keine abgeschnittenen Elemente |
| TF-16 | Barrierefreiheit – Tastatur & Screenreader | „Barrierefreiheit und Lesbarkeit“ (CLAUDE.md/PRD-Design) | Seite nur per Tastatur bedienen (Tab, Enter); Skip-Link „Zum Inhalt springen“ testen; Formular mit Screenreader durchgehen | Alle interaktiven Elemente per Tastatur erreichbar und auslösbar; Skip-Link funktioniert; Radiobuttons/Checkbox/Felder haben Labels |
| TF-17 | Barrierefreiheit – Kontrast & aria-current | wie TF-16 | Textkontraste (Blau/Orange auf Hintergrund) mit Kontrast-Tool prüfen; aktive Navigationspunkte prüfen | Kontraste erfüllen WCAG-AA-Richtwerte; aktiver Menüpunkt trägt `aria-current="page"` auf der jeweiligen Seite |
| TF-18 | Design – Markenfarben und moderner Auftritt | Ziel „Verlässlichkeit zeigen, modern auftreten“; Akzeptanzkriterium „Design … freigegeben durch Merle“ | Visuelle Durchsicht aller Seiten mit Merle Vogelsang | Blau und Orange werden konsistent verwendet, Auftritt wirkt modern statt „altbacken“; Freigabe-Protokoll mit Merle |
| TF-19 | Ton und Anrede | „sachlich, hilfsbereit, per Sie“ | Alle Textinhalte sichten | Durchgängig Sie-Anrede, sachlicher/hilfsbereiter Ton, kein Duzen |
| TF-20 | Nicht-Ziele bewusst ausgeschlossen | Nicht-Ziele im PRD | Prüfen, dass kein eigener Checkout, kein Login-Bereich, kein Custom-Rad-Konfigurator vorhanden ist; Onlineshop-Link bleibt rein extern | Es existiert kein eigener Onlineshop/Checkout, kein Kunden-Login, kein Konfigurator; Partnerportal ist höchstens als Platzhalter/Vorbereitung erkennbar, nicht funktional |
| TF-21 | Navigationskonsistenz | implizit aus Struktur | Hauptnavigation auf allen sechs Seiten vergleichen | Identische Reihenfolge und Linkziele (Für Unternehmen, Privatkunden, Werkstatt, FAQ, Kontakt, Onlineshop) auf jeder Seite |

## 7. Freigabekriterien (Definition of Done)

Laut PRD gilt die Seite als fertig, wenn **alle** Akzeptanzkriterien erfüllt sind **und**
Merle Vogelsang die Seite freigibt. Für den aktuellen Prototypstand bedeutet das:

- Alle Testfälle TF-01 bis TF-21 sind durchgeführt und bestanden, **oder**
- bei offenen Punkten (TF-10 Shop-URL, TF-11 FAQ-Inhalte, TF-12 Referenzfreigabe, TF-13
  Tracking) liegt eine dokumentierte Zulieferung/Entscheidung von Radwerk Mitte vor, mit
  erneutem Test vor Launch.

## 8. Bekannte Einschränkungen des Prototyps (keine Fehler, sondern offene Zulieferungen)

Diese Punkte sind laut PRD-Annahmen Zulieferungen durch Radwerk Mitte und daher im
jetzigen Entwurf bewusst als Platzhalter (`<mark class="ph">`) markiert. Sie sind kein
Testversagen, sondern offene Abhängigkeiten:

- Telefonnummern, Adressen, Öffnungszeiten beider Standorte.
- Leasing-Konditionen/-Faktor und Leasingpartner im Rechner (aktuell Platzhalterwerte in `main.js`).
- SLA-Inhalte, die öffentlich gezeigt werden dürfen.
- Referenzzitate und Logos von Geschäftskunden.
- Endgültige FAQ-Fragen und -Antworten (abgestimmt mit Amara Osei).
- Echte Onlineshop-URL.

## 9. Offene Fragen an Merle mit Auswirkung auf den Test

Aus dem PRD-Abschnitt „Offene Fragen an Merle“ – diese Antworten bestimmen, ob bzw. wie
bestimmte Testfälle final abgenommen werden können:

- Woran genau wird Erfolg gemessen (B2B-Anfragen, weniger Standardmails, beides)? → betrifft Messkriterien zu TF-13.
- Welche Leasing-Konditionen/Partner fließen in den Rechner? → betrifft TF-02/TF-03 (Erwartungswerte).
- Welche SLA-Inhalte dürfen öffentlich gezeigt werden? → betrifft Inhalt auf `dienstrad-leasing.html` und `werkstatt.html`.
- Umfang der visuellen Neugestaltung und Anzahl Freigaberunden? → betrifft TF-18.
