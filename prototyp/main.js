// Radwerk Mitte – Prototyp v0.1 (ohne Build-Schritt, ohne Abhängigkeiten)

// Mobile Navigation
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('main-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();

// Leasing-Rechner
// PRD: „Radpreis + Bruttogehalt → monatliche Belastung, Hinweis ‚unverbindlich‘“.
// ALLE Werte unten sind PLATZHALTER. Konditionen und Leasingpartner sind eine offene Frage an Merle.
var LEASING = {
  laufzeitMonate: 36,          // Platzhalter
  leasingfaktor: 0.0315,       // Platzhalter: Monatsrate = Radpreis × Faktor (inkl. Versicherung/Service)
  geldwerterVorteil: 0.0025,   // 0,25 %-Regel für Diensträder (Stand der Annahme, steuerlich prüfen)
  // Grobe Abgabenquote (Lohnsteuer + Sozialabgaben) nach Bruttogehalt – nur zur Veranschaulichung
  abgabenquote: function (brutto) {
    if (brutto < 2000) return 0.30;
    if (brutto < 3000) return 0.36;
    if (brutto < 4500) return 0.41;
    if (brutto < 6000) return 0.44;
    return 0.42; // oberhalb der Beitragsbemessungsgrenzen sinkt der Sozialversicherungsanteil
  }
};

function euro(n) {
  return n.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
}

(function () {
  var form = document.getElementById('leasing-calc');
  if (!form) return;
  var preis = form.querySelector('#radpreis');
  var brutto = form.querySelector('#brutto');
  var out = {
    netto: document.getElementById('res-netto'),
    rate: document.getElementById('res-rate'),
    vorteil: document.getElementById('res-vorteil'),
    ersparnis: document.getElementById('res-ersparnis'),
    status: document.getElementById('calc-status')
  };

  function berechne() {
    var p = parseFloat(preis.value);
    var b = parseFloat(brutto.value);
    if (!(p > 0) || !(b > 0)) {
      out.netto.textContent = '–';
      out.rate.textContent = out.vorteil.textContent = out.ersparnis.textContent = '–';
      out.status.textContent = 'Bitte Radpreis und Bruttogehalt eingeben.';
      return;
    }
    var rate = p * LEASING.leasingfaktor;
    var quote = LEASING.abgabenquote(b);
    // geldwerter Vorteil: 0,25 % des auf volle 100 € abgerundeten Listenpreises
    var vorteil = Math.floor(p / 100) * 100 * LEASING.geldwerterVorteil;
    var netto = rate * (1 - quote) + vorteil * quote;
    var gesamtLeasing = netto * LEASING.laufzeitMonate;
    var ersparnis = Math.max(0, 1 - gesamtLeasing / p);

    out.netto.textContent = euro(netto);
    out.rate.textContent = euro(rate);
    out.vorteil.textContent = euro(vorteil);
    out.ersparnis.textContent = 'ca. ' + Math.round(ersparnis * 100) + ' %';
    out.status.textContent = 'Ihre geschätzte monatliche Belastung: ' + euro(netto) + ' (unverbindlich).';
  }

  form.addEventListener('input', berechne);
  form.addEventListener('submit', function (e) { e.preventDefault(); berechne(); });
  berechne();
})();

// Anfrageformular
// PRD: Kategorie ist Pflicht; Weiterleitung per Mail an die zuständige Person (keine neue Support-Software).
var ROUTING = {
  b2b:       'B2B-Vertrieb (Dilan Aydın)',
  werkstatt: 'Werkstatt-Team [Ansprechperson offen]',
  bestellung:'Kundenservice (Amara Osei)',
  sonstiges: 'Kundenservice (Amara Osei)'
};

(function () {
  var form = document.getElementById('anfrage');
  if (!form) return;
  var b2bFields = document.getElementById('b2b-fields');
  var radios = form.querySelectorAll('input[name="kategorie"]');

  function update() {
    var sel = form.querySelector('input[name="kategorie"]:checked');
    var isB2b = sel && sel.value === 'b2b';
    b2bFields.hidden = !isB2b;
    b2bFields.querySelectorAll('[data-required]').forEach(function (el) { el.required = isB2b; });
  }

  // Vorauswahl über ?kategorie=b2b (z. B. aus dem Leasing-Rechner)
  var param = new URLSearchParams(location.search).get('kategorie');
  if (param) {
    var r = form.querySelector('input[name="kategorie"][value="' + param + '"]');
    if (r) r.checked = true;
  }
  radios.forEach(function (r) { r.addEventListener('change', update); });
  update();

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;
    var sel = form.querySelector('input[name="kategorie"]:checked');
    var box = document.getElementById('anfrage-erfolg');
    box.querySelector('[data-routing]').textContent = ROUTING[sel.value];
    form.hidden = true;
    box.hidden = false;
    box.focus();
    // Tracking-Platzhalter: hier später das Ereignis „Anfrage gesendet“ (inkl. Kategorie) erfassen.
  });
})();
