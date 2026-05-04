const palette = {
  red: '#c9162e',
  green: '#567b3c',
  blue: '#164081',
  clay: '#9d5731',
  line: '#e4d7bd',
  muted: '#6c6152',
  text: '#2b2018',
};

const stages = ['persona', 'google', 'serp', 'landing', 'locator'];

const personas = {
  giammaria: {
    name: 'Giammaria',
    tag: '45 anni · sportivo salutista',
    color: palette.green,
    soft: '#eef4e8',
    line: 'Voglio qualcosa di buono, ma voglio capire cosa sto mangiando.',
    keyword: 'biscotti con grani antichi siciliani',
    serpTitle: 'GraniSi Tumminello · biscotti con grani antichi',
    serpSnippet: 'Ingredienti leggibili, fibre e gusto siciliano per una colazione premium.',
    serpIntent: 'Wellness + ingredienti',
    serpGoal: 'Portare traffico qualificato alla linea GraniSi',
    serpReason: 'Match tra query informativa e pagina prodotto ingredient-driven.',
    landingTitle: 'GraniSi: colazione buona, scelta bene',
    landingSubtitle: 'Una landing ingredient-driven per chi legge etichette e cerca valore nutrizionale.',
    productLine: 'GraniSi',
    productImage: './assets/granisi-product.png',
    productAlt: 'Confezione GraniSi al Cioccolato di Modica IGP',
    productFit: 'cover',
    productPosition: '50% 47%',
    cta: 'Scopri la linea GraniSi',
    retailer: 'Emporio del Gusto',
    location: 'Torino · 1,4 km',
    narrator: 'Search intercetta il bisogno wellness e lo trasforma in visita qualificata.',
    chips: ['ingredienti', 'wellness', 'CRM'],
  },
  lucrezia: {
    name: 'Lucrezia',
    tag: '34 anni · interior designer',
    color: palette.red,
    soft: '#fff0f2',
    line: 'Mi serve un regalo bello, non la solita scatola anonima.',
    keyword: 'biscotti in latta regalo premium',
    serpTitle: 'Buatte del Mito · regalo gourmet riutilizzabile',
    serpSnippet: 'Latte da collezione, biscotti artigianali e packaging da tenere in casa.',
    serpIntent: 'Regalo premium',
    serpGoal: 'Convertire il bisogno regalo in bundle e store visit',
    serpReason: 'La SERP valorizza packaging, riuso e gifting prima del prezzo.',
    landingTitle: 'Un regalo siciliano che resta',
    landingSubtitle: 'La promessa gifting porta Lucrezia da Pinterest e Search verso bundle e retailer premium.',
    productLine: 'Buatte del Mito / Arca',
    productImage: './assets/buatte-product.png',
    productAlt: 'Buatte del Mito Tumminello con dolcini mandorle pistacchio e cocco',
    productFit: 'cover',
    productPosition: '76% 66%',
    cta: 'Crea la tua box regalo',
    retailer: 'La Dispensa Etnea',
    location: 'Milano · 900 m',
    narrator: 'Il packaging diventa motivo di click, regalo e passaggio in negozio.',
    chips: ['gifting', 'design', 'bundle'],
  },
  vito: {
    name: 'Vito',
    tag: '63 anni · nostalgico siciliano',
    color: palette.clay,
    soft: '#fff2e9',
    line: 'Cerco il sapore di casa, quello che riconosco subito.',
    keyword: 'biscotti siciliani artigianali dove comprare',
    serpTitle: 'Tumminello · biscotti siciliani e tradizione delle Madonie',
    serpSnippet: 'Classici, Zuccotti e Duci Siculi: sapori autentici, online o vicino a te.',
    serpIntent: 'Nostalgia + dove comprare',
    serpGoal: 'Far comparire Tumminello nel momento della decisione',
    serpReason: 'La query contiene gia intenzione locale: serve aggancio allo Store Locator.',
    landingTitle: 'La Sicilia da ritrovare',
    landingSubtitle: 'Una pagina heritage rassicura, racconta origine e chiude con il punto vendita.',
    productLine: 'Classici / Duci Siculi',
    productImage: './assets/zuccotti-product.png',
    productAlt: 'Confezione Zuccotti Duci Siculi Tumminello',
    productFit: 'contain',
    productPosition: '50% 50%',
    cta: 'Trova i sapori vicino a te',
    retailer: 'Bottega Sicula',
    location: 'Palermo · 2,1 km',
    narrator: 'La nostalgia entra come emozione e arriva a una scelta concreta.',
    chips: ['Sicilia', 'tradizione', 'local SEO'],
  },
  carmela: {
    name: 'Carmela',
    tag: '59 anni · retailer specializzato',
    color: palette.blue,
    soft: '#edf4ff',
    line: 'Voglio una marca premium che faccia vetrina e porti clienti.',
    keyword: 'fornitore biscotti premium negozio gourmet',
    serpTitle: 'Tumminello per rivenditori · prodotti premium siciliani',
    serpSnippet: 'Linee regalo, materiali punto vendita e schede retailer ottimizzate per Local SEO.',
    serpIntent: 'B2B retail',
    serpGoal: 'Trasformare ricerca professionale in contatto commerciale',
    serpReason: 'La SERP separa il bisogno B2B dal normale shop consumer.',
    landingTitle: 'Retailer pages che vendono anche in vetrina',
    landingSubtitle: 'Il B2B entra nella stessa infrastruttura: foto, assortimento, contatti e CTA tracciabili.',
    productLine: 'Linea completa retail',
    productImage: './assets/retailer-area-product.svg',
    productAlt: 'Pagina Area Rivenditori Tumminello',
    productFit: 'contain',
    productPosition: '50% 50%',
    cta: 'Richiedi kit punto vendita',
    retailer: 'Alimentari Carmela',
    location: 'Ragusa · retailer partner',
    narrator: 'Il digitale supporta il sell-out dei negozi senza snaturare il canale premium.',
    chips: ['B2B', 'retail kit', 'vetrina'],
  },
};

const initialParams = new URLSearchParams(window.location.search);
let personaId = personas[initialParams.get('persona')] ? initialParams.get('persona') : 'lucrezia';
let stage = stages.includes(initialParams.get('stage')) ? initialParams.get('stage') : 'persona';
let view = initialParams.get('stage') || initialParams.get('persona') ? 'demo' : 'home';
let typeTimer = null;

const personaGrid = document.querySelector('#personaGrid');
const activeKeyword = document.querySelector('#activeKeyword');
const activeNarrator = document.querySelector('#activeNarrator');
const demoPanel = document.querySelector('#demoPanel');
const backButton = document.querySelector('#backButton');
const nextButton = document.querySelector('#nextButton');
const fullscreenButton = document.querySelector('#fullscreenButton');
const startDemoButton = document.querySelector('#startDemoButton');
const stageElement = document.querySelector('.stage');

const googleLetters = `
  <span style="color:#4285f4">G</span><span style="color:#db4437">o</span><span style="color:#f4b400">o</span><span style="color:#4285f4">g</span><span style="color:#0f9d58">l</span><span style="color:#db4437">e</span>
`;

function currentPersona() {
  return personas[personaId];
}

function enterDemo() {
  view = 'demo';
  render();
}

window.tumminelloEnterDemo = enterDemo;

function setStage(nextStage) {
  if (view === 'home') view = 'demo';
  stage = nextStage;
  render();
}

function setPersona(nextPersonaId) {
  if (view === 'home') view = 'demo';
  personaId = nextPersonaId;
  stage = 'persona';
  render();
}

function advance() {
  if (view === 'home') {
    enterDemo();
    return;
  }
  const index = stages.indexOf(stage);
  stage = index === stages.length - 1 ? 'persona' : stages[index + 1];
  render();
}

function retreat() {
  if (view === 'home') return;
  const index = stages.indexOf(stage);
  stage = index === 0 ? 'persona' : stages[index - 1];
  render();
}

function render() {
  document.body.classList.toggle('is-home', view === 'home');
  const persona = currentPersona();
  document.documentElement.style.setProperty('--active', persona.color);
  activeKeyword.textContent = `"${persona.keyword}"`;
  activeNarrator.textContent = persona.narrator;
  renderPersonaButtons();
  updateButtons();
  renderPanel();
}

function fitStage() {
  const scale = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
  stageElement.style.setProperty('--stage-scale', String(scale));
}

function renderPersonaButtons() {
  personaGrid.innerHTML = Object.entries(personas)
    .map(([id, persona]) => {
      const active = id === personaId ? ' is-active' : '';
      return `
        <button class="persona-button${active}" style="--person-color:${persona.color}; border-color:${id === personaId ? persona.color : palette.line}" data-persona="${id}" type="button">
          <div class="persona-name" style="color:${persona.color}">${persona.name}</div>
          <div class="persona-tag">${persona.tag}</div>
        </button>
      `;
    })
    .join('');

  personaGrid.querySelectorAll('[data-persona]').forEach((button) => {
    button.addEventListener('click', () => setPersona(button.dataset.persona));
  });
}

function updateButtons() {
  document.querySelectorAll('[data-stage]').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.stage === stage);
  });

  const index = stages.indexOf(stage);
  backButton.disabled = index === 0;
  nextButton.textContent = index === stages.length - 1 ? 'Ripeti demo' : 'Avanti';
  nextButton.style.background = currentPersona().color;
  document.querySelector('.keyword-label').style.color = currentPersona().color;
}

function renderPanel() {
  clearInterval(typeTimer);
  typeTimer = null;
  const persona = currentPersona();

  if (stage === 'google') {
    demoPanel.innerHTML = renderGooglePanel(persona);
    animateKeyword(persona.keyword);
    return;
  }

  const panels = {
    persona: renderPersonaPanel,
    serp: renderSerpPanel,
    landing: renderLandingPanel,
    locator: renderLocatorPanel,
  };
  demoPanel.innerHTML = panels[stage](persona);
}

function renderPersonaPanel(persona) {
  return `
    <div class="persona-panel panel-enter" style="color:${persona.color}">
      <div class="tag">${persona.tag}</div>
      <h2>${persona.name}</h2>
      <div class="persona-line">"${persona.line}"</div>
      <div class="chip-row">
        ${persona.chips.map((chip) => `<span class="chip">${chip}</span>`).join('')}
      </div>
      <div class="persona-info-grid">
        <div class="info-box colored" style="background:${persona.soft}; color:${persona.color}">
          <div class="info-label">Bisogno</div>
          <div class="info-text">${persona.narrator}</div>
        </div>
        <div class="info-box">
          <div class="info-label" style="color:${palette.red}">Percorso demo</div>
          <div class="info-text">bisogno, keyword, landing, Store Locator.</div>
        </div>
      </div>
    </div>
  `;
}

function renderGooglePanel(persona) {
  return `
    <div class="google-panel panel-enter is-compact">
      <div class="google-logo">${googleLetters}</div>
      <div class="search-box">
        <span class="search-icon">⌕</span>
        <span class="typed-keyword" id="typedKeyword"><span class="caret">|</span></span>
      </div>
      <div class="intent-grid">
        <div class="intent-card" style="background:${persona.soft}; border-color:${persona.color}">
          <div class="intent-title" style="color:${persona.color}">Search intent</div>
          <div class="intent-copy">L'utente non cerca il brand: cerca una soluzione.</div>
        </div>
        <div class="intent-card">
          <div class="intent-title" style="color:${palette.red}">Obiettivo</div>
          <div class="intent-copy">Far comparire Tumminello nel momento della decisione.</div>
        </div>
      </div>
      <div class="keyword-banner">Keyword attiva: <strong>${persona.keyword}</strong></div>
    </div>
  `;
}

function animateKeyword(keyword) {
  const target = document.querySelector('#typedKeyword');
  let visible = 0;
  const paint = () => {
    target.innerHTML = `${keyword.slice(0, visible)}<span class="caret">|</span>`;
  };
  paint();
  typeTimer = setInterval(() => {
    visible += 1;
    paint();
    if (visible >= keyword.length) {
      clearInterval(typeTimer);
      typeTimer = null;
    }
  }, 28);
}

function renderSerpPanel(persona) {
  return `
    <div class="serp-panel panel-enter">
      <div class="serp-top">
        <div class="serp-logo">${googleLetters}</div>
        <div class="serp-search">${persona.keyword}</div>
      </div>
      <div class="serp-meta-row">
        <div class="result-count">Circa 42.000 risultati · Annuncio + organico + local intent</div>
        <div class="serp-intent-badge" style="border-color:${persona.color}; color:${persona.color}">${persona.serpIntent}</div>
      </div>

      <section class="serp-grid">
        <article class="result-card">
          <div class="ad-label">
            <span>Annuncio</span>
            <strong>tumminello.it</strong>
          </div>
          <div class="serp-url">https://www.biscottitumminello.it/${persona.productLine.toLowerCase().replaceAll(' ', '-')}</div>
          <div class="serp-title">${persona.serpTitle}</div>
          <div class="serp-snippet">${persona.serpSnippet}</div>
          <div class="serp-links">
            <span>Store locator</span>
            <span>Linea prodotto</span>
            <span>Shop online</span>
          </div>
        </article>

        <aside class="serp-strategy-card" style="--persona-color:${persona.color};">
          <div class="strategy-kicker">Perche funziona</div>
          <strong>${persona.serpGoal}</strong>
          <p>${persona.serpReason}</p>
        </aside>
      </section>

      <section class="serp-lower-grid">
        <article class="organic-card">
          <div class="organic-label">Risultato organico</div>
          <div class="organic-title">Biscotti Tumminello · linee siciliane artigianali</div>
          <p>Contenuto SEO coerente con keyword, prodotto e storia del brand.</p>
        </article>

        <article class="local-result" style="--persona-color:${persona.color}; color:${persona.color}">
          <div class="local-pin">⌖</div>
          <div>
            <div class="local-result-title">Store Locator Tumminello</div>
            <p>${persona.retailer} · ${persona.location}<br />Indicazioni, telefono e assortimento disponibile.</p>
          </div>
        </article>
      </section>
    </div>
  `;
}

function renderLandingPanel(persona) {
  return `
    <div class="landing-panel panel-enter">
      <div class="site-header">
        <div class="brand">TUMMINELLO</div>
        <div class="site-nav">PRODOTTI</div>
        <div class="site-nav">LE NOSTRE LINEE</div>
        <div class="site-nav last">STORE LOCATOR</div>
      </div>
      <div class="landing-hero">
        <div>
          <div class="product-line" style="color:${persona.color}">${persona.productLine}</div>
          <h3>${persona.landingTitle}</h3>
          <p class="landing-subtitle">${persona.landingSubtitle}</p>
        </div>
        <div class="product-frame" style="--fit:${persona.productFit}; --position:${persona.productPosition}">
          <img src="${persona.productImage}" alt="${persona.productAlt}" />
        </div>
      </div>
      <div class="proof-grid">
        <div class="proof-card">Copy coerente con keyword</div>
        <div class="proof-card">CTA primaria visibile</div>
        <div class="proof-card">Tracciamento GA4</div>
      </div>
      <div class="landing-actions">
        <button class="primary-cta" style="background:${persona.color}" type="button">${persona.cta}</button>
        <div class="landing-note colored" style="background:${persona.soft}; color:${persona.color}">
          <div class="landing-note-label">Keyword</div>
          <div class="landing-note-text">${persona.keyword}</div>
        </div>
        <div class="landing-note">
          <div class="landing-note-label" style="color:${palette.red}">Seconda CTA</div>
          <div class="landing-note-text">Trova un rivenditore vicino a te.</div>
        </div>
      </div>
    </div>
  `;
}

function renderLocatorPanel() {
  return `
    <div class="locator-panel panel-enter">
      <img src="./assets/store-locator-page.png" alt="Store Locator Tumminello" />
    </div>
  `;
}

document.querySelectorAll('[data-stage]').forEach((button) => {
  button.addEventListener('click', () => setStage(button.dataset.stage));
});

backButton.addEventListener('click', retreat);
nextButton.addEventListener('click', advance);

fullscreenButton.addEventListener('click', () => {
  if (document.fullscreenElement) {
    document.exitFullscreen().catch(() => {});
    return;
  }
  document.documentElement.requestFullscreen?.().catch(() => {});
});

startDemoButton.addEventListener('click', enterDemo);

document.addEventListener('keydown', (event) => {
  if (event.target instanceof HTMLElement && event.target.matches('input, textarea, button')) return;

  if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(event.key)) {
    event.preventDefault();
    advance();
  } else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(event.key)) {
    event.preventDefault();
    retreat();
  } else if (event.key >= '1' && event.key <= '4') {
    event.preventDefault();
    setPersona(Object.keys(personas)[Number(event.key) - 1]);
  } else if (event.key.toLowerCase() === 'f') {
    event.preventDefault();
    fullscreenButton.click();
  }
});

document.addEventListener('click', (event) => {
  if (event.target instanceof Element && event.target.closest('#startDemoButton')) {
    enterDemo();
  }
});

window.addEventListener('resize', fitStage);
fitStage();
render();
