/* ==========================================================
   Rashad Bayramov, portfolio script
   1. Azerbaijani texts   2. Project data   3. Project map
   4. Language switch     5. Photo frame    6. Start
   ========================================================== */


/* 1. Azerbaijani texts.
   Keys match the data-i attributes in index.html. English lives in the HTML itself. */
const AZ = {
  n1: 'Layihələr', n2: 'Təcrübə', n3: 'Bacarıqlar', n4: 'Əlaqə',
  role: 'S/4HANA inteqrasiyaları üzrə SAP ABAP developer',
  lead: 'SAP-ı onu əhatə edən sistemlərlə birləşdirirəm: banklar, telekom platformaları və giriş nəzarəti. Üç ildir ABAP ilə REST, JSON və XML interfeysləri qururam, hazırda isə Özbəkistanda beynəlxalq layihədə çalışıram.',
  cl: 'SOCAR Polymer, AzInTelecom və Veysəloğlu üçün icra olunub.',
  b1: 'Mənə yazın', b2: 'LinkedIn profilim',

  hp: 'Seçilmiş layihələr',
  sp: 'Sistemi seçin və onun SAP ilə necə əlaqələndiyini görün.',
  pn: 'İllüstrativ nümunə, müştəri məlumatı deyil.',

  he: 'Təcrübə',
  se: 'Bir ildə təcrübəçidən developerə, indi isə beynəlxalq komandada.',
  w1: 'CoLink FE LLC, Özbəkistan', d1: 'Apr 2026 – hazırda',
  b11: 'Beynəlxalq layihə komandasında müştəri biznes prosesləri üçün xüsusi SAP ABAP həlləri hazırlayır və dəstəkləyirəm.',
  b12: 'REST API, JSON və XML ilə SAP-ı xarici sistemlərə bağlayıram.',
  w2: 'Project Management Systems LLC, Bakı', d2: 'Avq 2024 – May 2026',
  b21: 'SOCAR Polymer, AzInTelecom və Veysəloğlu üçün SAP ilə xarici sistemlər arasında ABAP əsaslı inteqrasiyalar dizayn etmişəm.',
  b22: 'Bank, telekom və giriş nəzarəti ssenariləri üçün REST, JSON və XML interfeysləri qurmuşam.',
  t3: 'SAP ABAP Təcrübəçi', d3: 'Avq 2023 – İyl 2024',
  b31: 'Canlı layihədə ABAP-ı öyrənmiş, kodlaşdırma və debaqa dəstək vermişəm. 2024-cü ilin avqustunda developer vəzifəsinə yüksəlmişəm.',

  hs: 'Bacarıqlar',
  ss: 'Hər gün işlətdiyim alətlər və front-end təcrübəmdən gələn bir neçə bacarıq.',
  k3: 'Data və hesabat', k5: 'Təhlükəsizlik', k6: 'İş üslubu',
  kw: 'Analitik düşüncə, problemlərin həlli, komanda işi, uyğunlaşma bacarığı, dəqiq data təhlili və rəyə açıqlıq.',

  hd: 'Təhsil', hl: 'Dillər',
  ed1: '<h3>Bakalavr, Kompüter mühəndisliyi</h3><p>Odlar Yurdu Universiteti<br>Sen 2024 – İyn 2028 (gözlənilir)</p>',
  ed2: '<h3>Kollec, Kompüter şəbəkə avadanlıqlarının təmiri və servisi</h3><p>Bakı Dövlət Rabitə və Nəqliyyat Kolleci<br>Sen 2021 – İyn 2024</p>',
  l1: '<h3>Azərbaycan dili</h3><p>Ana dili</p>',
  l2: '<h3>Türk dili</h3><p>Orta (B1)</p>',
  l3: '<h3>İngilis dili</h3><p>Orta (B1)</p>',

  fh: 'Qurulacaq SAP inteqrasiyanız var?',
  fs: 'Bakıda yaşayıram, hazırda Özbəkistandakı layihə komandası ilə işləyirəm.'
};


/* 2. Project data. Each text is [English, Azerbaijani].
   n = label on the map, c = client, t = title, d = description, g = tags.
   p = optional illustrative sample message, f = its format ('json' or 'xml').
   Projects without p show no sample. */
const P = [
  {
    n: ['Access control', 'Giriş nəzarəti'],
    c: '',
    t: ['Access control system ↔ SAP', 'Giriş nəzarəti sistemi ↔ SAP'],
    d: [
      'Automated data exchange between an access-control system and SAP, built in ABAP.',
      'Giriş nəzarəti sistemi ilə SAP arasında ABAP ilə qurulmuş avtomatik məlumat mübadiləsi.'
    ],
    g: ['ABAP', 'Data integration', 'Access control']
  },
  {
    n: ['Kapital Bank'],
    c: 'SOCAR Polymer',
    t: ['Kapital Bank ↔ SAP', 'Kapital Bank ↔ SAP'],
    d: [
      'Developed and implemented the integration between Kapital Bank and SOCAR Polymer systems for secure, automated financial transactions. Data is exchanged through API services in JSON format, connected directly to the bank, and the process is optimized for efficiency and reliability.',
      'Kapital Bank ilə SOCAR Polymer sistemləri arasında təhlükəsiz və avtomatlaşdırılmış maliyyə əməliyyatları üçün inteqrasiya hazırlamış və tətbiq etmişəm. Məlumat API xidmətləri ilə JSON formatında, birbaşa bankla qoşulmaqla mübadilə olunur, proses səmərəlilik və etibarlılıq üçün optimallaşdırılıb.'
    ],
    g: ['ABAP', 'API', 'JSON'],
    f: 'json',
    p: { message: 'payment-status', documentNo: '1900001234', status: 'booked' }
  },
  {
    n: ['ABB'],
    c: 'SOCAR Polymer',
    t: ['ABB ↔ SAP', 'ABB ↔ SAP'],
    d: [
      'Took part in integrating ABB systems with SOCAR Polymer to automate operational data flows and improve reporting accuracy. Helped implement middleware that keeps transactional and operational data in sync across both platforms. I also carried out many of the payment changes introduced on the bank side in SAP.',
      'SOCAR Polymer ilə ABB sistemlərinin inteqrasiyasında iştirak etmişəm: məqsəd əməliyyat data axınlarını avtomatlaşdırmaq və hesabatların dəqiqliyini artırmaq idi. Hər iki platforma arasında tranzaksiya və əməliyyat datasını sinxronlaşdıran middleware həllərinin tətbiqinə kömək etmişəm. Bank tərəfində edilən bir çox ödəniş dəyişikliklərini SAP-də icra etmişəm.'
    ],
    g: ['ABAP', 'XML', 'Middleware', 'Payments'],
    f: 'xml',
    p: { message: 'payment-order', documentNo: '1900001235', status: 'sent' }
  },
  {
    n: ['OMS'],
    c: 'AzInTelecom',
    t: ['OMS ↔ SAP', 'OMS ↔ SAP'],
    d: [
      'Interface between AzInTelecom’s OMS and SAP. REST-based exchange of JSON and XML messages, written in ABAP.',
      'AzInTelecom-un OMS sistemi ilə SAP arasında interfeys. ABAP ilə yazılmış, JSON və XML mesajları ilə REST əsaslı mübadilə.'
    ],
    g: ['ABAP', 'REST', 'JSON', 'XML']
  },
  {
    n: ['ARAZ BI'],
    c: 'Veysəloğlu',
    t: ['ARAZ BI project', 'ARAZ BI layihəsi'],
    d: [
      'Business intelligence on SAP data for Veysəloğlu. I also debugged, tested and improved SAP programs with cross-functional teams.',
      'Veysəloğlu üçün SAP datası üzərində biznes analitika. Həmçinin müxtəlif komandalarla birgə SAP proqramlarını debaq, test və təkmilləşdirmişəm.'
    ],
    g: ['BI reporting', 'SQL', 'ABAP']
  }
];


/* Helpers and state */
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const SVG_NS = 'http://www.w3.org/2000/svg';

let lang = 'en';
let current = 0;
let packet = null;

const pickText = pair => pair[lang === 'az' ? 1 : 0] ?? pair[0];

function svg(tag, attrs, parent) {
  const node = document.createElementNS(SVG_NS, tag);
  for (const key in attrs) node.setAttribute(key, attrs[key]);
  if (parent) parent.append(node);
  return node;
}

function toXml(obj) {
  const rows = Object.entries(obj).map(([key, value]) => `  <${key}>${value}</${key}>`);
  return ['<payload>', ...rows, '</payload>'].join('\n');
}


/* 3. Project map: SAP on the left, one node per project on the right */
const map = $('#map');

const wires = P.map((project, i) => {
  const y = 31 + i * 74;
  return svg('path', { id: 'w' + i, class: 'wr', d: `M120 175C180 175 180 ${y} 240 ${y}` }, map);
});

const core = svg('g', { class: 'core' }, map);
svg('rect', { x: 10, y: 125, width: 120, height: 100, rx: 14 }, core);
svg('text', { x: 70, y: 172, 'text-anchor': 'middle', class: 'ct' }, core).textContent = 'SAP';
svg('text', { x: 70, y: 194, 'text-anchor': 'middle', class: 'cs' }, core).textContent = 'S/4HANA, ABAP';

const nodes = P.map((project, i) => {
  const y = 8 + i * 74;
  const node = svg('g', { class: 'nd', tabindex: 0, role: 'button' }, map);
  svg('rect', { x: 240, y, width: 150, height: 46, rx: 10 }, node);
  node.label = svg('text', { x: 254, y: y + (project.c ? 20 : 28) }, node);
  if (project.c) svg('text', { x: 254, y: y + 37, class: 's' }, node).textContent = project.c;

  node.onclick = () => select(i);
  node.onkeydown = event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      select(i);
    }
  };
  return node;
});

/* Fill the map labels and the detail panel for the selected project */
function render() {
  nodes.forEach((node, i) => {
    node.label.textContent = pickText(P[i].n);
    node.setAttribute('aria-label', pickText(P[i].t));
    node.classList.toggle('on', i === current);
    wires[i].classList.toggle('on', i === current);
  });

  const project = P[current];
  $('#pc').textContent = project.c ? (lang === 'az' ? 'Müştəri: ' : 'Client: ') + project.c : '';
  $('#pt').textContent = pickText(project.t);
  $('#pd').textContent = pickText(project.d);
  $('#ptags').innerHTML = project.g.map(tag => `<li>${tag}</li>`).join('');

  $('#sample').hidden = !project.p;
  if (project.p) {
    $('#code').textContent = project.f === 'xml' ? toXml(project.p) : JSON.stringify(project.p, null, 2);
  }
}

/* Select a project and send a small packet SAP -> system -> SAP along its wire */
function select(i) {
  current = i;
  render();

  if (packet) packet.remove();
  packet = null;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  packet = svg('circle', { r: 6, class: 'pk' }, map);
  const motion = svg('animateMotion', {
    dur: '3s', repeatCount: 'indefinite', calcMode: 'linear', keyPoints: '0;1;0', keyTimes: '0;0.5;1'
  }, packet);
  svg('mpath', { href: '#w' + i }, motion);
}


/* 4. Language switch: English is read from the page once, Azerbaijani comes from AZ */
const texts = $$('[data-i]');
texts.forEach(node => { node.dataset.en = node.innerHTML; });

function setLang(next) {
  lang = next;
  document.documentElement.lang = next;

  texts.forEach(node => {
    node.innerHTML = next === 'az' ? (AZ[node.dataset.i] ?? node.dataset.en) : node.dataset.en;
  });
  $$('.pill button[data-lang]').forEach(button => {
    button.setAttribute('aria-pressed', button.dataset.lang === next);
  });

  try { localStorage.setItem('lang', next); } catch (error) { /* storage can be unavailable */ }
  render();
}

$$('.pill button[data-lang]').forEach(button => {
  button.onclick = () => setLang(button.dataset.lang);
});


/* 5. Photo frame: the photo fades in only if photo.jpg exists, otherwise the initials stay */
const photo = $('.photo img');
if (photo) {
  const show = () => photo.classList.add('ok');
  if (photo.complete && photo.naturalWidth) show();
  else photo.addEventListener('load', show);
}


/* 6. Start with the saved language (English by default) and the first project */
let saved = 'en';
try { saved = localStorage.getItem('lang') || 'en'; } catch (error) { /* ignore */ }
setLang(saved === 'az' ? 'az' : 'en');
select(0);
