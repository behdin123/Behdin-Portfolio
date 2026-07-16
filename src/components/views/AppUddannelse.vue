<template>
  <main class="edu-page">

    <!-- HERO -->
    <section class="page-hero">
      <div class="page-hero-inner">
        <span class="kicker" v-reveal>{{ ui.kicker }}</span>
        <h1 v-reveal="{ delay: 80 }">{{ ui.title }}</h1>
        <p class="lead" v-reveal="{ delay: 160 }">{{ ui.intro }}</p>
      </div>
    </section>

    <!-- UDDANNELSESKORT -->
    <section class="degrees">
      <div class="degrees-grid">
        <article class="degree-card tone-design" v-reveal>
          <div class="degree-media">
            <img src="@/assets/Behdin/IMG_25001.webp" :alt="ui.mmdTitle" loading="lazy" />
          </div>
          <div class="degree-body">
            <span class="degree-year">2020–2022 · {{ ui.easv }}</span>
            <h2>{{ ui.mmdTitle }}</h2>
            <p>{{ ui.mmdText }}</p>
            <div class="chips">
              <span v-for="chip in mmdChips" :key="chip">{{ chip }}</span>
            </div>
          </div>
        </article>

        <article class="degree-card tone-code" v-reveal="{ delay: 120 }">
          <div class="degree-media">
            <img src="@/assets/Behdin/EASV33.webp" :alt="ui.webTitle" loading="lazy" />
          </div>
          <div class="degree-body">
            <span class="degree-year">2022–2024 · {{ ui.easv }}</span>
            <h2>{{ ui.webTitle }}</h2>
            <p>{{ ui.webText }}</p>
            <div class="chips">
              <span v-for="chip in webChips" :key="chip">{{ chip }}</span>
            </div>
          </div>
        </article>
      </div>

      <div class="hhx-bar" v-reveal>
        <span class="degree-year">2016–2019</span>
        <div>
          <h3>{{ ui.hhxTitle }}</h3>
          <p>{{ ui.hhxText }}</p>
        </div>
      </div>
    </section>

    <!-- DET TOG JEG MED -->
    <section class="takeaways">
      <header class="section-head" v-reveal>
        <span class="kicker">{{ ui.takeKicker }}</span>
        <h2>{{ ui.takeTitle }}</h2>
      </header>

      <div class="take-grid">
        <article v-for="(t, i) in takeaways" :key="t.key" class="take-card" v-reveal="{ delay: i * 100 }">
          <img :src="dark ? t.imgDark : t.img" :alt="pick(t.title)" loading="lazy" />
          <h3>{{ pick(t.title) }}</h3>
          <p>{{ pick(t.text) }}</p>
        </article>
      </div>
    </section>

    <!-- CTA -->
    <section class="edu-cta" v-reveal>
      <h2>{{ ui.ctaTitle }}</h2>
      <p>{{ ui.ctaText }}</p>
      <router-link class="btn btn-light" to="/projekter">{{ ui.ctaBtn }}</router-link>
    </section>

  </main>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import { lang, pick } from '@/js/lang';
import { vReveal } from '@/js/reveal';

const props = defineProps({ dark: {} });
const dark = computed(() => !!props.dark);

const mmdChips = ['UI-design', 'UX', 'Content creation', 'Frontend', 'Idéudvikling', 'Projektledelse'];
const webChips = ['Vue.js', 'React', 'Node & Express', 'REST APIs', 'Web security', 'Agile metoder'];

const takeaways = [
  {
    key: 'ui',
    img: require('@/assets/Design.webp'),
    imgDark: require('@/assets/DesignLight.webp'),
    title: { dk: 'UI-design & visuel kommunikation', en: 'UI design & visual communication', de: 'UI-Design & visuelle Kommunikation' },
    text: {
      dk: 'Skærme, websider, knapper og ikoner, der understøtter brandidentiteten og gør komplekse budskaber enkle. Interfacet er brugerens første møde med produktet – det skal både guide og engagere.',
      en: 'Screens, web pages, buttons and icons that support the brand identity and make complex messages simple. The interface is the user’s first meeting with the product – it must both guide and engage.',
      de: 'Screens, Webseiten, Buttons und Icons, die die Markenidentität stützen und komplexe Botschaften einfach machen.',
    },
  },
  {
    key: 'ux',
    img: require('@/assets/USDDark.webp'),
    imgDark: require('@/assets/USD.webp'),
    title: { dk: 'UX, brugertest & data', en: 'UX, user testing & data', de: 'UX, Nutzertests & Daten' },
    text: {
      dk: 'Brugercentreret design med afsæt i målgruppeanalyser og brugertest. Jeg designer oplevelser, der skaber værdi og loyalitet – og validerer beslutningerne hos brugerne, før der bygges.',
      en: 'User-centred design based on audience analysis and user testing. I design experiences that create value and loyalty – and validate decisions with users before building.',
      de: 'Nutzerzentriertes Design auf Basis von Zielgruppenanalysen und Nutzertests – validiert, bevor gebaut wird.',
    },
  },
  {
    key: 'agile',
    img: require('@/assets/Agil.webp'),
    imgDark: require('@/assets/AgilLight.webp'),
    title: { dk: 'Agil projektledelse', en: 'Agile project management', de: 'Agiles Projektmanagement' },
    text: {
      dk: 'Fra idé til afslutning med fleksible, iterative forløb, hvor feedback integreres undervejs. Strukturerede processer, der optimerer arbejdsflowet – og leverer til deadline uden at gå på kompromis med detaljen.',
      en: 'From idea to completion with flexible, iterative processes where feedback is integrated along the way. Structured workflows that deliver on deadline without compromising the details.',
      de: 'Von der Idee bis zum Abschluss mit flexiblen, iterativen Prozessen – strukturiert und termintreu.',
    },
  },
];

const uiStrings = {
  kicker: { dk: 'Uddannelse', en: 'Education', de: 'Ausbildung' },
  title: { dk: 'Uddannet i begge spor', en: 'Educated in both tracks', de: 'Ausgebildet in beiden Spuren' },
  intro: {
    dk: 'To videregående uddannelser fra Erhvervsakademi SydVest i Esbjerg – én i digitalt design og én i webudvikling. Tilsammen fundamentet for at kunne tage et projekt hele vejen fra idé til færdig løsning.',
    en: 'Two higher educations from Business Academy SouthWest in Esbjerg – one in digital design and one in web development. Together the foundation for taking a project all the way from idea to finished solution.',
    de: 'Zwei Ausbildungen an der Business Academy SouthWest in Esbjerg – eine in digitalem Design und eine in Webentwicklung.',
  },
  easv: { dk: 'Erhvervsakademi SydVest', en: 'Business Academy SouthWest', de: 'Business Academy SouthWest' },
  mmdTitle: { dk: 'Multimediedesigner', en: 'Multimedia Designer', de: 'Multimediadesigner' },
  mmdText: {
    dk: 'Digitalt design på alle niveauer: webløsninger, digitale brugeroplevelser, indholdsproduktion til digitale medier og frontend-udvikling – med idéudvikling og projektledelse som ramme.',
    en: 'Digital design at every level: web solutions, digital user experiences, content production for digital media and front-end development – framed by ideation and project management.',
    de: 'Digitales Design auf allen Ebenen: Weblösungen, digitale Nutzererlebnisse, Content-Produktion und Frontend-Entwicklung.',
  },
  webTitle: { dk: 'Webudvikler', en: 'Web Developer', de: 'Webentwickler' },
  webText: {
    dk: 'Fullstack-udvikling med fokus på kvalitet: Vue og React i frontend, Node og Express i backend, REST APIs, web security med JWT og role-based access – testet med unit- og end-to-end tests.',
    en: 'Full-stack development with a focus on quality: Vue and React on the front end, Node and Express on the back end, REST APIs, web security with JWT and role-based access – covered by unit and end-to-end tests.',
    de: 'Fullstack-Entwicklung mit Qualitätsfokus: Vue und React, Node und Express, REST APIs und Web Security.',
  },
  hhxTitle: { dk: 'HHX – Rybners Handelsgymnasium', en: 'HHX – Rybners Business College', de: 'HHX – Rybners Handelsgymnasium' },
  hhxText: {
    dk: 'Afsætning, økonomi og it – forståelsen for forretningen bag kommunikationen.',
    en: 'Marketing, economics and IT – understanding the business behind communication.',
    de: 'Marketing, Wirtschaft und IT – das Geschäft hinter der Kommunikation.',
  },
  takeKicker: { dk: 'Kompetencer', en: 'Competencies', de: 'Kompetenzen' },
  takeTitle: { dk: 'Det tog jeg med', en: 'What I took with me', de: 'Was ich mitgenommen habe' },
  ctaTitle: { dk: 'Teori er kun halvdelen', en: 'Theory is only half of it', de: 'Theorie ist nur die Hälfte' },
  ctaText: {
    dk: 'Se hvordan uddannelserne bliver til resultater i mine cases.',
    en: 'See how the education turns into results in my cases.',
    de: 'Sehen Sie, wie die Ausbildung in meinen Cases zu Ergebnissen wird.',
  },
  ctaBtn: { dk: 'Se mine projekter', en: 'See my projects', de: 'Meine Projekte' },
};

const ui = computed(() => {
  const out = {};
  for (const key of Object.keys(uiStrings)) out[key] = uiStrings[key][lang.value] ?? uiStrings[key].dk;
  return out;
});
</script>

<style lang="scss" scoped>
.edu-page {
  --accent: var(--quaternary-color);
  --gold: #F5B800;
  --ink: var(--white-black-color);
  background: var(--primary-color);
  color: var(--ink);
  overflow-x: hidden;
  font-family: var(--font-body);

  h1, h2, h3 {
    font-family: var(--font-display);
  }
}

:deep(.reveal) {
  opacity: 0;
  transform: translateY(26px);
  transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}
:deep(.reveal.is-revealed) { opacity: 1; transform: none; }

@media (prefers-reduced-motion: reduce) {
  :deep(.reveal) { transition: none; transform: none; opacity: 1; }
}

/* ---------- Fælles ---------- */
.kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.8rem;

  &::before {
    content: '';
    width: 26px;
    height: 2px;
    background: linear-gradient(90deg, var(--gold), var(--accent));
  }
}

.section-head {
  max-width: 1200px;
  margin: 0 auto 2rem;
  padding: 0 1.5rem;

  h2 {
    font-size: clamp(1.7rem, 3.4vw, 2.6rem) !important;
    font-weight: 800;
    letter-spacing: -0.02em;
    margin: 0;
  }
}

.btn {
  display: inline-block;
  padding: 0.9rem 1.8rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: transform 0.25s ease, background 0.25s ease, color 0.25s ease;

  &:hover { transform: translateY(-2px); }
}
.btn-light { background: #fff; color: #16233f; }

/* ---------- Hero ---------- */
.page-hero {
  position: relative;
  padding: 9rem 1.5rem 0 1.5rem;

  &::before {
    content: '';
    position: absolute;
    inset: 0 0 -280px 0;
    background:
      radial-gradient(ellipse 50% 45% at 85% 15%, rgba(53, 99, 255, 0.16), transparent 65%),
      radial-gradient(ellipse 42% 38% at 5% 72%, rgba(245, 184, 0, 0.13), transparent 70%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0 0 -280px 0;
    background-image:
      linear-gradient(rgba(11, 18, 32, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(11, 18, 32, 0.05) 1px, transparent 1px);
    background-size: 46px 46px;
    -webkit-mask-image: radial-gradient(ellipse 90% 75% at 50% 25%, #000 30%, transparent 85%);
    mask-image: radial-gradient(ellipse 90% 75% at 50% 25%, #000 30%, transparent 85%);
    pointer-events: none;
  }
}

.dark-theme .page-hero::after {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.055) 1px, transparent 1px);
}

.page-hero-inner {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    font-size: clamp(2.2rem, 5.5vw, 4rem) !important;
    font-weight: 800;
    letter-spacing: -0.025em;
    line-height: 1.05;
    margin: 0 0 1.2rem;
  }

  .lead {
    font-size: clamp(1rem, 1.4vw, 1.12rem);
    line-height: 1.75;
    opacity: 0.85;
    max-width: 42rem;
    margin: 10px 0 0 0;
  }
}

/* ---------- Uddannelseskort ---------- */
.degrees {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem 1.5rem;
}

.degrees-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.8rem;
}

.degree-card {
  border-radius: 20px;
  overflow: hidden;
  background: var(--card-backgroundColor);
  box-shadow: 0 6px 24px rgba(0, 0, 30, 0.08);
  border-top: 4px solid transparent;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(0, 0, 30, 0.14); }

  &.tone-design { border-top-color: var(--gold); }
  &.tone-code { border-top-color: var(--accent); }
}

.degree-media {
  aspect-ratio: 16 / 9;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 25%;
    display: block;
  }
}

.degree-body {
  padding: 1.8rem;

  .degree-year {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    opacity: 0.6;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: -0.015em;
    margin: 0.5rem 0 0.8rem;
  }

  p {
    font-size: 0.98rem;
    line-height: 1.7;
    opacity: 0.85;
    margin: 0 0 1.2rem;
  }
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  span {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    font-weight: 500;
    padding: 0.32rem 0.7rem;
    border-radius: 4px;
    background: rgba(128, 128, 128, 0.12);
  }
}

.hhx-bar {
  margin-top: 1.8rem;
  padding: 1.4rem 1.8rem;
  border-radius: 16px;
  background: var(--card-backgroundColor);
  box-shadow: 0 6px 24px rgba(0, 0, 30, 0.06);
  display: flex;
  align-items: baseline;
  gap: 1.6rem;

  .degree-year {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    opacity: 0.6;
    white-space: nowrap;
  }

  h3 {
    font-size: 1.05rem;
    font-weight: 700;
    margin: 0 0 0.2rem;
  }

  p {
    font-size: 0.92rem;
    opacity: 0.75;
    margin: 0;
  }
}

/* ---------- Det tog jeg med ---------- */
.takeaways { padding: 3rem 0 1.5rem; }

.take-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
}

.take-card {
  padding: 1.8rem;
  border-radius: 18px;
  background: var(--card-backgroundColor);
  box-shadow: 0 6px 24px rgba(0, 0, 30, 0.08);

  img {
    width: 84px;
    height: auto;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin: 0 0 0.6rem;
  }

  p {
    font-size: 0.94rem;
    line-height: 1.65;
    opacity: 0.82;
    margin: 0;
  }
}

/* ---------- CTA ---------- */
.edu-cta {
  margin: 3rem auto 4rem;
  max-width: 1200px;
  padding: 3.5rem 2rem;
  border-radius: 26px;
  text-align: center;
  color: #fff;
  background: linear-gradient(135deg, #16233f 0%, #3563ff 100%);

  h2 {
    font-size: clamp(1.6rem, 3vw, 2.3rem) !important;
    font-weight: 800;
    margin: 0 0 0.7rem;
  }

  p {
    font-size: 1.02rem;
    opacity: 0.85;
    margin: 0 0 1.8rem;
  }
}

/* ---------- Responsivt ---------- */
@media (max-width: 1550px) {
  .page-hero { padding-top: 7.5rem; }
  .page-hero-inner, .degrees, .take-grid, .section-head, .edu-cta { max-width: 1020px; }
  .page-hero-inner h1 { font-size: clamp(2rem, 4.6vw, 3.2rem) !important; }
  .degree-body { padding: 1.5rem; }
}

@media (max-width: 900px) {
  .degrees-grid { grid-template-columns: 1fr; }
  .take-grid { grid-template-columns: 1fr; }
  .hhx-bar { flex-direction: column; gap: 0.4rem; }
  .edu-cta { margin: 2.5rem 1.5rem 3.5rem; }
}
</style>
