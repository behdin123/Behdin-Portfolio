<template>
  <main class="home2">

    <!-- HERO -->
    <section class="hero2">
      <div class="hero2-inner">
        <div class="hero2-text">
          <span class="badge" v-reveal>
            <span class="badge-dot"></span>
            {{ ui.badge }}
          </span>

          <h1 class="hero2-name" v-reveal="{ delay: 80 }">Behdin<br />Bagheri</h1>

          <p class="hero2-role" v-reveal="{ delay: 160 }">
            <span class="role-design">{{ ui.role1 }}</span>
            <span class="amp">&times;</span>
            <span class="role-code">{{ ui.role2 }}</span>
          </p>

          <p class="hero2-lead" v-reveal="{ delay: 240 }">{{ ui.lead }}</p>

          <div class="hero2-cta" v-reveal="{ delay: 320 }">
            <router-link class="btn btn-primary" to="/projekter">{{ ui.ctaProjects }}</router-link>
            <a class="btn btn-ghost" href="mailto:behdin2010@gmail.com">{{ ui.ctaContact }}</a>
          </div>

          <div class="hero2-stats" v-reveal="{ delay: 400 }">
            <div class="stat">
              <strong>140&nbsp;→&nbsp;560</strong>
              <span>{{ ui.stat1 }}</span>
            </div>
            <div class="stat">
              <strong>30+</strong>
              <span>{{ ui.stat2 }}</span>
            </div>
            <div class="stat">
              <strong>3</strong>
              <span>{{ ui.stat3 }}</span>
            </div>
          </div>
        </div>

        <div class="hero2-portrait" v-reveal="{ delay: 200 }">
          <div class="portrait-frame">
            <img src="@/assets/Behdin/Behdin-Bagheri_2.webp" :alt="'Behdin Bagheri – ' + ui.role1" width="480" height="640" />
          </div>
        </div>
      </div>

      <div class="hero2-spectrum" v-reveal="{ delay: 480 }">
        <div class="spectrum-labels">
          <span class="s-design">{{ ui.spectrumDesign }}</span>
          <span class="s-code">{{ ui.spectrumCode }}</span>
        </div>
        <div class="spectrum-line" aria-hidden="true"></div>
        <div class="spectrum-tools">
          <span v-for="tool in toolStrip" :key="tool">{{ tool }}</span>
        </div>
      </div>
    </section>

    <!-- UDVALGTE CASES -->
    <section class="featured">
      <header class="section-head" v-reveal>
        <span class="kicker">{{ ui.featuredKicker }}</span>
        <h2>{{ ui.featuredTitle }}</h2>
      </header>

      <div class="featured-grid">
        <router-link
          v-for="(c, i) in featuredCases"
          :key="c.slug"
          :to="'/projekter/' + c.slug"
          class="case-card"
          :class="{ wide: i === 0 }"
          v-reveal="{ delay: i * 100 }"
        >
          <div class="case-media">
            <img :src="c.image" :alt="pick(c.title)" loading="lazy" />
          </div>
          <div class="case-body">
            <div class="case-tags">
              <span v-for="cat in c.categories" :key="cat">{{ pick(categoryLabels[cat]) }}</span>
            </div>
            <h3>{{ pick(c.title) }}</h3>
            <p>{{ pick(c.line) }}</p>
            <span class="case-more">{{ ui.seeCase }} <span class="arrow">→</span></span>
            <div class="mix" :title="ui.mixLabel" aria-hidden="true">
              <span class="mix-dot" :style="{ left: c.mix + '%' }"></span>
            </div>
          </div>
        </router-link>
      </div>

      <div class="featured-all" v-reveal>
        <router-link class="btn btn-ghost" to="/projekter">{{ ui.allProjects }}</router-link>
      </div>
    </section>

    <!-- TO SPOR -->
    <section class="tracks">
      <header class="section-head" v-reveal>
        <span class="kicker">{{ ui.tracksKicker }}</span>
        <h2>{{ ui.tracksTitle }}</h2>
      </header>

      <div class="tracks-grid">
        <router-link to="/projekter?filter=video" class="track track-cc" v-reveal>
          <div class="track-content">
            <h3>{{ ui.trackCcTitle }}</h3>
            <p>{{ ui.trackCcText }}</p>
            <span class="case-more">{{ ui.explore }} <span class="arrow">→</span></span>
          </div>
        </router-link>
        <router-link to="/projekter?filter=web" class="track track-web" v-reveal="{ delay: 120 }">
          <div class="track-content">
            <h3>{{ ui.trackWebTitle }}</h3>
            <p>{{ ui.trackWebText }}</p>
            <span class="case-more">{{ ui.explore }} <span class="arrow">→</span></span>
          </div>
        </router-link>
      </div>
    </section>

    <!-- ANBEFALINGER -->
    <section class="quotes">
      <header class="section-head" v-reveal>
        <span class="kicker">LinkedIn</span>
        <h2>{{ ui.quotesTitle }}</h2>
      </header>

      <div class="quotes-grid">
        <figure v-for="(q, i) in quotes" :key="q.name" class="quote-card" v-reveal="{ delay: i * 100 }">
          <div class="quote-mark">“</div>
          <blockquote>{{ q.quote }}</blockquote>
          <figcaption>
            <div class="q-person">
              <strong>{{ q.name }}</strong>
              <span>{{ pick(q.titleLabel) }}</span>
            </div>
            <img v-if="q.photo" class="q-avatar" :src="q.photo" :alt="q.name" loading="lazy" />
          </figcaption>
        </figure>
      </div>
    </section>

    <!-- KONTAKT CTA -->
    <section class="contact-cta" v-reveal>
      <h2>{{ ui.ctaBannerTitle }}</h2>
      <p>{{ ui.ctaBannerText }}</p>
      <div class="hero2-cta center">
        <a class="btn btn-light" href="mailto:behdin2010@gmail.com">behdin2010@gmail.com</a>
        <a class="btn btn-outline-light" href="https://www.linkedin.com/in/behdin-bagheri-21b893196/" target="_blank" rel="noopener">LinkedIn</a>
      </div>
    </section>

  </main>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import { cases, categoryLabels } from '@/data/cases';
import { lang, pick } from '@/js/lang';
import { vReveal } from '@/js/reveal';

defineProps({ dark: {} });

const featuredCases = cases.filter((c) => c.featured);

// Sorteret langs spektret: content creation → full stack
const toolStrip = [
  'Premiere Pro', 'After Effects', 'Photoshop', 'Illustrator', 'InDesign',
  'Meta Ads', 'Figma', 'SEO', 'WordPress', 'Shopify', 'Vue.js', 'React', 'Node.js',
];

const quotes = [
  {
    quote:
      'Behdin has demonstrated a solid understanding of visual storytelling and a strong ability to create impactful communication materials. I can fully recommend him.',
    name: 'Malte Vermehren Eggers',
    photo: require('@/assets/VIKING/Leder/malte.webp'),
    titleLabel: {
      dk: 'Kommunikationschef, VIKING – ledede Behdin direkte',
      en: 'Head of Communications, VIKING – Behdin’s direct manager',
      de: 'Kommunikationschef, VIKING – direkter Vorgesetzter',
    },
  },
  {
    quote:
      'Behdin’s strength in video creation is remarkable. He has a talent for turning ideas into engaging and meaningful visuals.',
    name: 'Marie Louise Cooper',
    photo: require('@/assets/VIKING/Leder/louise.webp'),
    titleLabel: {
      dk: 'Digital Learning Specialist, VIKING Safety Academy',
      en: 'Digital Learning Specialist, VIKING Safety Academy',
      de: 'Digital Learning Specialist, VIKING Safety Academy',
    },
  },
  {
    quote:
      'Behdin consistently delivered engaging video content tailored to specific target audiences, making complex topics accessible and memorable.',
    name: 'Camilla Runge Nissen',
    photo: require('@/assets/VIKING/Leder/camilla.webp'),
    titleLabel: {
      dk: 'Senior Manager, VIKING – ledede Behdin direkte',
      en: 'Senior Manager, VIKING – Behdin’s direct manager',
      de: 'Senior Manager, VIKING – direkte Vorgesetzte',
    },
  },
];

const uiStrings = {
  badge: { dk: 'Visual Communication Specialist hos InoPlay', en: 'Visual Communication Specialist at InoPlay', de: 'Visual Communication Specialist bei InoPlay' },
  role1: { dk: 'Multimediedesigner', en: 'Multimedia Designer', de: 'Multimediadesigner' },
  role2: { dk: 'Webudvikler', en: 'Web Developer', de: 'Webentwickler' },
  lead: {
    dk: 'Jeg forener to fagligheder i én profil: Som content creator producerer jeg video, foto og grafisk design, der har styrket brands som VIKING Life-Saving – og som webudvikler bygger jeg hurtige, brugervenlige løsninger i Vue, React og Node, fra frontend til backend. Fra første idé til færdigt produkt – altid med brugeren i centrum og resultater, der kan måles.',
    en: 'I unite two disciplines in one profile: As a content creator I produce video, photography and graphic design that has strengthened brands like VIKING Life-Saving – and as a web developer I build fast, user-friendly solutions in Vue, React and Node, from front end to back end. From first idea to finished product – always with the user at the centre and results that can be measured.',
    de: 'Ich vereine zwei Disziplinen in einem Profil: Als Content Creator produziere ich Video, Foto und Grafikdesign, das Marken wie VIKING Life-Saving gestärkt hat – und als Webentwickler baue ich schnelle, benutzerfreundliche Lösungen in Vue, React und Node, vom Frontend bis zum Backend. Von der ersten Idee bis zum fertigen Produkt – immer mit dem Nutzer im Mittelpunkt und messbaren Ergebnissen.',
  },
  ctaProjects: { dk: 'Se mine projekter', en: 'See my projects', de: 'Meine Projekte' },
  spectrumDesign: { dk: 'Content creation', en: 'Content creation', de: 'Content Creation' },
  spectrumCode: { dk: 'Full stack', en: 'Full stack', de: 'Full Stack' },
  mixLabel: { dk: 'Casens balance mellem design og kode', en: 'The case’s balance between design and code', de: 'Balance zwischen Design und Code' },
  ctaContact: { dk: 'Kontakt mig', en: 'Contact me', de: 'Kontakt' },
  stat1: { dk: 'Instagram-vækst for kunde', en: 'Instagram growth for client', de: 'Instagram-Wachstum (Kunde)' },
  stat2: { dk: 'bookinger via Meta Ads', en: 'bookings via Meta Ads', de: 'Buchungen über Meta Ads' },
  stat3: { dk: 'sprog på dette site', en: 'languages on this site', de: 'Sprachen auf dieser Website' },
  featuredKicker: { dk: 'Udvalgte cases', en: 'Selected cases', de: 'Ausgewählte Cases' },
  featuredTitle: { dk: 'Arbejde der har skabt resultater', en: 'Work that created results', de: 'Arbeit mit Ergebnissen' },
  seeCase: { dk: 'Se casen', en: 'View case', de: 'Case ansehen' },
  allProjects: { dk: 'Alle projekter', en: 'All projects', de: 'Alle Projekte' },
  tracksKicker: { dk: 'To spor – én profil', en: 'Two tracks – one profile', de: 'Zwei Spuren – ein Profil' },
  tracksTitle: { dk: 'Det jeg arbejder med', en: 'What I work with', de: 'Womit ich arbeite' },
  trackCcTitle: { dk: 'Content Creation', en: 'Content Creation', de: 'Content Creation' },
  trackCcText: {
    dk: 'Videoproduktion, fotografi, grafisk design og social media – fra idé til levering.',
    en: 'Video production, photography, graphic design and social media – from idea to delivery.',
    de: 'Videoproduktion, Fotografie, Grafikdesign und Social Media – von der Idee bis zur Lieferung.',
  },
  trackWebTitle: { dk: 'Webudvikling', en: 'Web Development', de: 'Webentwicklung' },
  trackWebText: {
    dk: 'UX/UI-design, frontend i Vue og React, backend med Node – hurtigt og responsivt.',
    en: 'UX/UI design, front end in Vue and React, back end with Node – fast and responsive.',
    de: 'UX/UI-Design, Frontend in Vue und React, Backend mit Node – schnell und responsiv.',
  },
  explore: { dk: 'Udforsk', en: 'Explore', de: 'Entdecken' },
  quotesTitle: { dk: 'Det siger mine ledere', en: 'What my managers say', de: 'Das sagen meine Vorgesetzten' },
  ctaBannerTitle: { dk: 'Lad os skabe resultater sammen', en: 'Let’s create results together', de: 'Lassen Sie uns Ergebnisse schaffen' },
  ctaBannerText: {
    dk: 'Har du et projekt eller en idé, hvor visuel kommunikation og webudvikling mødes? Lad os tage en snak.',
    en: 'Do you have a project or an idea where visual communication and web development meet? Let’s talk.',
    de: 'Haben Sie ein Projekt oder eine Idee, wo visuelle Kommunikation und Webentwicklung sich treffen? Lassen Sie uns sprechen.',
  },
};

const ui = computed(() => {
  const out = {};
  for (const key of Object.keys(uiStrings)) out[key] = uiStrings[key][lang.value] ?? uiStrings[key].dk;
  return out;
});
</script>

<style lang="scss" scoped>
.home2 {
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

/* ---------- Reveal ---------- */
:deep(.reveal) {
  opacity: 0;
  transform: translateY(26px);
  transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}
:deep(.reveal.is-revealed) {
  opacity: 1;
  transform: none;
}

/* ---------- Fælles ---------- */
.section-head {
  max-width: 1200px;
  margin: 0 auto 2rem;
  padding: 0 1.5rem;

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
    margin-bottom: 0.75rem;

    &::before {
      content: '';
      width: 26px;
      height: 2px;
      background: linear-gradient(90deg, var(--gold), var(--accent));
    }
  }

  h2 {
    font-size: clamp(1.8rem, 3.6vw, 2.8rem) !important;
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 1.1;
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
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, color 0.25s ease;
  cursor: pointer;

  &:hover { transform: translateY(-2px); }
}
.btn-primary {
  background: var(--accent);
  color: #fff;
  box-shadow: 0 10px 26px rgba(53, 99, 255, 0.35);
  &:hover { background: var(--quaternary-hover-color); }
}
.btn-ghost {
  border: 1.5px solid var(--ink);
  color: var(--ink);
  &:hover { background: var(--ink); color: var(--primary-color); }
}
.btn-light { background: #fff; color: #16233f; }
.btn-outline-light { border: 1.5px solid rgba(255,255,255,0.7); color: #fff; }

/* ---------- Hero ---------- */
.hero2 {
  position: relative;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* Glød og grid strækker sig forbi sektionsgrænsen og fader naturligt ind i næste sektion */
  &::before {
    content: '';
    position: absolute;
    inset: 0 0 -340px 0;
    background:
      radial-gradient(ellipse 58% 44% at 78% 22%, rgba(53, 99, 255, 0.3), transparent 66%),
      radial-gradient(ellipse 48% 36% at 10% 68%, rgba(245, 184, 0, 0.22), transparent 70%);
    pointer-events: none;
  }

  /* Blueprint-grid: designerens lærred / udviklerens grid */
  &::after {
    content: '';
    position: absolute;
    inset: 0 0 -340px 0;
    background-image:
      linear-gradient(rgba(11, 18, 32, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(11, 18, 32, 0.05) 1px, transparent 1px);
    background-size: 46px 46px;
    -webkit-mask-image: radial-gradient(ellipse 90% 72% at 55% 28%, #000 30%, transparent 85%);
    mask-image: radial-gradient(ellipse 90% 72% at 55% 28%, #000 30%, transparent 85%);
    pointer-events: none;
  }
}

.dark-theme .hero2::after {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.055) 1px, transparent 1px);
}

.hero2-inner {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 3rem;
  align-items: center;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.45rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(53, 99, 255, 0.35);
  background: rgba(53, 99, 255, 0.08);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  margin-bottom: 1.8rem;
}
.badge-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--accent);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(53, 99, 255, 0.5); }
  70% { box-shadow: 0 0 0 9px rgba(53, 99, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(53, 99, 255, 0); }
}

.hero2-name {
  font-size: clamp(3rem, 8vw, 6rem) !important;
  font-weight: 800;
  line-height: 1.02;
  letter-spacing: -0.03em;
  margin: 0 0 2rem;
}

.hero2-role {
  font-size: clamp(1.15rem, 2.2vw, 1.55rem);
  font-weight: 600;
  color: var(--ink);
  margin: 1rem 0;
  display: flex;
  align-items: baseline;
  gap: 0.7rem;
  flex-wrap: wrap;

  .amp {
    font-family: var(--font-mono);
    font-size: 0.8em;
    opacity: 0.45;
  }

  .role-design,
  .role-code {
    position: relative;
    z-index: 1;

    &::after {
      content: '';
      position: absolute;
      left: -2px;
      right: -2px;
      bottom: 0.08em;
      height: 0.34em;
      z-index: -1;
      border-radius: 2px;
    }
  }

  .role-design::after { background: rgba(245, 184, 0, 0.4); }
  .role-code::after { background: rgba(53, 99, 255, 0.28); }
}

.hero2-lead {
  font-size: clamp(0.98rem, 1.35vw, 1.1rem);
  line-height: 1.75;
  max-width: 38rem;
  opacity: 0.85;
  margin: 0 0 2.2rem;
}

.hero2-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2.6rem;

  &.center { justify-content: center; margin-bottom: 0; }
}

.hero2-stats {
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;

  .stat {
    display: flex;
    flex-direction: column;

    strong {
      font-family: var(--font-display);
      font-size: 1.5rem;
      font-weight: 800;
      letter-spacing: -0.02em;
    }
    span {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      letter-spacing: 0.02em;
      opacity: 0.65;
      margin-top: 0.3rem;
      max-width: 12rem;
    }
  }
}

.hero2-portrait {
  display: flex;
  justify-content: center;
  height: 100%;
  .portrait-frame {
    position: relative;
    border-radius: 26px;
    overflow: hidden;
    width: min(450px, 100%);
    box-shadow: 0 30px 70px rgba(0, 0, 30, 0.28);
    transition: transform 0.4s ease;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 26px;
      border: 1px solid rgba(255, 255, 255, 0.15);
      pointer-events: none;
    }

    &:hover { transform: translateY(-6px) rotate(-0.5deg); }

    img {
      display: block;
      width: 100%;
      height: 100%;
      aspect-ratio: 3 / 4;
      object-fit: cover;
      object-position: center top;
    }
  }
}

/* Signatur: spektret – værktøjer sorteret fra content creation til full stack */
.hero2-spectrum {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 2.5rem auto 0;
  width: 100%;
}

.spectrum-labels {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 0.55rem;

  .s-design { color: #A87E00; }
  .s-code { color: var(--accent); }
}

.spectrum-line {
  height: 3px;
  border-radius: 3px;
  background: linear-gradient(90deg, var(--gold), var(--accent));
  opacity: 0.85;
}

.spectrum-tools {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 0.5rem 1rem;
  padding-top: 0.8rem;

  span {
    font-family: var(--font-mono);
    font-size: 0.76rem;
    font-weight: 500;
    white-space: nowrap;
    opacity: 0.55;
    transition: opacity 0.2s ease, color 0.2s ease;

    &:hover { opacity: 1; color: var(--accent); }
  }
}

/* Spektret: på store skærme spredes værktøjerne langs linjen (design→kode).
   På mindre skærme falder de om til centrerede chips, så intet overflyder. */
@media (max-width: 1200px) {
  .spectrum-tools { font-size: 0.72rem; }
  .spectrum-tools span:nth-child(even) { display: none; }
}
@media (max-width: 760px) {
  .spectrum-tools {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.4rem 0.5rem;
    padding-top: 0.9rem;
  }
  .spectrum-tools span {
    display: inline-block !important;
    white-space: nowrap;
    opacity: 0.8;
    font-size: 0.68rem;
    padding: 0.22rem 0.6rem;
    border-radius: 999px;
    background: rgba(128, 128, 128, 0.14);
  }
  .spectrum-labels { font-size: 0.6rem; letter-spacing: 0.06em; }
}

/* ---------- Featured cases ---------- */
.featured {
  padding: 3.5rem 0 1.5rem;
}

.featured-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.8rem;
}

.case-card {
  grid-column: span 1;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
  background: var(--card-backgroundColor);
  text-decoration: none;
  color: var(--ink);
  box-shadow: 0 6px 24px rgba(0, 0, 30, 0.08);
  transition: transform 0.35s ease, box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 44px rgba(0, 0, 30, 0.16);

    .case-media img { transform: scale(1.05); }
    .arrow { transform: translateX(5px); }
  }

  &.wide {
    grid-column: 1 / -1;
    flex-direction: row;

    .case-media { flex: 1.2; aspect-ratio: auto; min-height: 340px; }
    .case-body { flex: 1; justify-content: center; }
  }
}

.case-media {
  aspect-ratio: 16 / 10;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }
}

.case-body {
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  h3 {
    font-size: clamp(1.2rem, 2vw, 1.6rem);
    font-weight: 700;
    letter-spacing: -0.01em;
    line-height: 1.25;
    margin: 0;
  }

  p {
    font-size: 0.98rem;
    line-height: 1.6;
    opacity: 0.8;
    margin: 0;
  }
}

.case-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;

  span {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--accent);
    background: rgba(53, 99, 255, 0.1);
    padding: 0.28rem 0.7rem;
    border-radius: 4px;
  }
}

/* Mix-bar: casens balance mellem design (guld) og kode (blå) */
.mix {
  position: relative;
  height: 3px;
  border-radius: 3px;
  background: linear-gradient(90deg, var(--gold), var(--accent));
  opacity: 0.9;
  margin-top: 0.9rem;

  .mix-dot {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: var(--primary-color);
    border: 3px solid var(--ink);
  }
}

.case-more {
  margin-top: 0.4rem;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--accent);

  .arrow { display: inline-block; transition: transform 0.25s ease; }
}

.featured-all {
  max-width: 1200px;
  margin: 1.8rem auto 0;
  padding: 0 1.5rem;
  text-align: center;
}

/* ---------- Tracks ---------- */
.tracks { padding: 3rem 0 1.5rem; }

.tracks-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.8rem;
}

.track {
  position: relative;
  min-height: 320px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  text-decoration: none;
  color: #fff;
  background-size: cover;
  background-position: center;
  transition: transform 0.35s ease, box-shadow 0.35s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(6, 12, 34, 0.88) 15%, rgba(6, 12, 34, 0.25) 65%);
    transition: background 0.35s ease;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 44px rgba(0, 0, 30, 0.25);
    .arrow { transform: translateX(5px); }
  }
}

.track-cc { background-image: url('@/assets/ContentCreation.webp'); }
.track-web { background-image: url('@/assets/web_background1.webp'); }

.track-content {
  position: relative;
  padding: 2rem;

  h3 {
    font-size: 1.6rem;
    font-weight: 800;
    letter-spacing: -0.01em;
    margin: 0 0 0.5rem;
  }
  p {
    font-size: 0.98rem;
    line-height: 1.55;
    opacity: 0.9;
    margin: 0 0 0.8rem;
    max-width: 26rem;
  }
  .case-more { color: #fff; }
}

/* ---------- Quotes ---------- */
.quotes { padding: 3rem 0 1.5rem; }

.quotes-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.8rem;
}

.quote-card {
  margin: 0;
  padding: 2rem;
  border-radius: 20px;
  background: var(--card-backgroundColor);
  box-shadow: 0 6px 24px rgba(0, 0, 30, 0.08);
  display: flex;
  flex-direction: column;

  .quote-mark {
    font-family: var(--font-display);
    font-size: 3.2rem;
    line-height: 1;
    font-weight: 800;
    color: var(--gold);
    margin-bottom: 0.4rem;
  }

  blockquote {
    margin: 0 0 1.4rem;
    font-size: 0.98rem;
    line-height: 1.65;
    opacity: 0.9;
    flex: 1;
  }

  figcaption {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.9rem;

    .q-person { display: flex; flex-direction: column; min-width: 0; }
    strong { font-size: 0.95rem; }
    span { font-size: 0.82rem; opacity: 0.65; margin-top: 0.15rem; }

    .q-avatar {
      width: 52px;
      height: 52px;
      border-radius: 50%;
      object-fit: cover;
      flex-shrink: 0;
      box-shadow: 0 4px 14px rgba(0, 0, 30, 0.18);
    }
  }
}

/* ---------- Kontakt CTA ---------- */
.contact-cta {
  margin: 3rem auto 4rem;
  max-width: 1200px;
  padding: 3.5rem 2rem;
  border-radius: 26px;
  text-align: center;
  color: #fff;
  background: linear-gradient(135deg, #16233f 0%, #3563ff 100%);

  h2 {
    font-size: clamp(1.8rem, 3.4vw, 2.6rem) !important;
    font-weight: 800;
    letter-spacing: -0.02em;
    margin: 0 0 0.8rem;
    color: #fff;
  }
  p {
    font-size: 1.05rem;
    opacity: 0.85;
    margin: 0 0 2rem;
  }
}

/* ---------- Responsivt ---------- */

/* Laptop (< 1550px): strammere skala og luft */
@media (max-width: 1550px) {
  .hero2 { padding: 6.5rem 1.5rem 1.5rem; min-height: 90vh; }

  .hero2-inner {
    max-width: 1020px;
    gap: 2.5rem;
    grid-template-columns: 1.2fr 0.8fr;
  }

  .hero2-name {
    font-size: clamp(2.6rem, 5.5vw, 4.4rem) !important;
    margin-bottom: 1.5rem;
  }

  .hero2-role { font-size: clamp(1.05rem, 1.6vw, 1.3rem); margin-bottom: 1.1rem; }

  .hero2-lead {
    font-size: 0.98rem;
    line-height: 1.7;
    max-width: 33rem;
    margin-bottom: 1.8rem;
  }

  .badge { margin-bottom: 1.4rem; font-size: 0.85rem; }

  .hero2-cta { margin-bottom: 2rem; }
  .btn { padding: 0.8rem 1.5rem; font-size: 0.95rem; }

  .hero2-stats {
    gap: 2rem;
    .stat strong { font-size: 1.3rem; }
    .stat span { font-size: 0.8rem; }
  }

  .hero2-portrait .portrait-frame { width: min(320px, 100%); border-radius: 20px; }

  .hero2-spectrum { max-width: 1020px; margin-top: 2rem; }
  .spectrum-tools { gap: 0.4rem 0.7rem; span { font-size: 0.68rem; } }
  .spectrum-labels { font-size: 0.66rem; }

  .section-head,
  .featured-grid,
  .tracks-grid,
  .quotes-grid,
  .featured-all,
  .contact-cta { max-width: 1020px; }

  .section-head h2 { font-size: clamp(1.6rem, 3vw, 2.3rem) !important; }

  .featured { padding: 3rem 0 1.2rem; }
  .tracks, .quotes { padding: 2.5rem 0 1.2rem; }

  .case-card.wide .case-media { min-height: 300px; }
  .case-body { padding: 1.5rem; }
  .track { min-height: 280px; }
  .quote-card { padding: 1.6rem; }
  .contact-cta { padding: 3rem 2rem; margin: 2.5rem auto 3.5rem; }
}

/* Lave skærme (laptops med begrænset højde) */
@media (max-height: 820px) and (min-width: 1000px) {
  .hero2 { min-height: auto; padding-bottom: 1.2rem; }
}

@media (max-width: 1000px) {
  .hero2-inner { grid-template-columns: 1fr; }
  .hero2-portrait { order: -1; .portrait-frame { max-width: 300px; } }
  .featured-grid, .tracks-grid { grid-template-columns: 1fr; }
  .featured-grid {width: 90%;}
  .case-card.wide { flex-direction: column; .case-media { min-height: 0; aspect-ratio: 16/10; } }
  .quotes-grid { grid-template-columns: 1fr; }
  .contact-cta { margin: 3rem 1.5rem 4rem; }
}

@media (max-width: 550px) {
  .hero2 { padding-top: 6.5rem; }
  .hero2-stats { gap: 1.4rem; .stat strong { font-size: 1.2rem; } }
  .btn { padding: 0.8rem 1.4rem; font-size: 0.95rem; }
}
</style>
