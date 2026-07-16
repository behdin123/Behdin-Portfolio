<template>
  <main class="about-page">

    <!-- HERO -->
    <section class="about-hero">
      <div class="about-hero-inner">
        <div class="about-hero-text">
          <span class="kicker" v-reveal>{{ ui.kicker }}</span>
          <h1 v-reveal="{ delay: 80 }">{{ ui.title1 }}<br />{{ ui.title2 }}</h1>
          <p class="lead" v-reveal="{ delay: 160 }">{{ ui.intro1 }}</p>
          <p class="lead" v-reveal="{ delay: 240 }">{{ ui.intro2 }}</p>

          <div class="cv-buttons" v-reveal="{ delay: 320 }">
            <a href="mailto:behdin2010@gmail.com" class="btn btn-primary">{{ ui.ctaTalk }}</a>
            <a href="https://www.linkedin.com/in/behdin-bagheri-21b893196/" target="_blank" rel="noopener" class="btn btn-ghost">{{ ui.ctaLinkedin }}</a>
          </div>
        </div>

        <div class="about-portrait" v-reveal="{ delay: 200 }">
          <img src="@/assets/Behdin/IMG_2500.webp" alt="Behdin Bagheri" width="440" height="640" />
        </div>
      </div>
    </section>

    <!-- REJSEN -->
    <section class="journey">
      <header class="section-head" v-reveal>
        <span class="kicker">{{ ui.journeyKicker }}</span>
        <h2>{{ ui.journeyTitle }}</h2>
      </header>

      <ol class="timeline">
        <li v-for="(step, i) in timeline" :key="step.year" class="t-step" :class="'tone-' + step.tone" v-reveal="{ delay: (i % 3) * 80 }">
          <span class="t-dot" aria-hidden="true"></span>
          <span class="t-year">{{ step.year }}</span>
          <h3>{{ pick(step.title) }}</h3>
          <span class="t-org">{{ pick(step.org) }}</span>
          <p>{{ pick(step.text) }}</p>
        </li>
      </ol>
    </section>

    <!-- VIDEO-CV -->
    <section class="videocv">
      <header class="section-head" v-reveal>
        <span class="kicker">{{ ui.videoKicker }}</span>
        <h2>{{ ui.videoTitle }}</h2>
        <p class="section-sub">{{ ui.videoSub }}</p>
      </header>

      <div class="video-wrap" v-reveal>
        <iframe
          src="https://www.youtube.com/embed/exRoLR61OAw"
          title="Behdin Bagheri – Video-CV"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </section>

    <!-- VÆRKTØJSKASSEN -->
    <section class="toolbox">
      <header class="section-head" v-reveal>
        <span class="kicker">{{ ui.toolboxKicker }}</span>
        <h2>{{ ui.toolboxTitle }}</h2>
      </header>

      <div class="toolbox-grid">
        <div v-for="(group, i) in toolGroups" :key="group.key" class="tool-group" :class="'tone-' + group.tone" v-reveal="{ delay: i * 100 }">
          <h3>{{ pick(group.title) }}</h3>
          <div class="tool-chips">
            <span v-for="tool in group.tools" :key="tool">{{ tool }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ANBEFALINGER I FULD LÆNGDE -->
    <section class="recommendations">
      <header class="section-head" v-reveal>
        <span class="kicker">LinkedIn</span>
        <h2>{{ ui.recTitle }}</h2>
        <p class="section-sub">{{ ui.recSub }}</p>
      </header>

      <div class="rec-list">
        <figure v-for="(r, i) in recommendations" :key="r.name" class="rec-block" v-reveal="{ delay: (i % 2) * 100 }">
          <div class="rec-mark" aria-hidden="true">“</div>
          <blockquote>
            <p v-for="(para, j) in r.paragraphs" :key="j">{{ para }}</p>
          </blockquote>
          <figcaption>
            <div class="rec-person">
              <strong>{{ r.name }}</strong>
              <span>{{ pick(r.titleLabel) }}</span>
              <span class="rec-source">{{ pick(r.relation) }}</span>
            </div>
            <img v-if="r.photo" class="rec-avatar" :src="r.photo" :alt="r.name" loading="lazy" />
          </figcaption>
        </figure>
      </div>
    </section>

  </main>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import { lang, pick } from '@/js/lang';
import { vReveal } from '@/js/reveal';

defineProps({ dark: {} });

const timeline = [
  {
    year: '2009',
    tone: 'mix',
    title: { dk: 'Ny start i Danmark', en: 'A new start in Denmark', de: 'Ein Neuanfang in Dänemark' },
    org: { dk: 'Danmark', en: 'Denmark', de: 'Dänemark' },
    text: {
      dk: 'Siden 2009 har jeg boet i Danmark. Her voksede nysgerrigheden for både det visuelle og det tekniske – to spor, der har fulgt mig lige siden.',
      en: 'I have lived in Denmark since 2009. Here my curiosity for both the visual and the technical grew – two tracks that have followed me ever since.',
      de: 'Seit 2009 lebe ich in Dänemark. Hier wuchs meine Neugier für das Visuelle und das Technische – zwei Spuren, die mich seitdem begleiten.',
    },
  },
  {
    year: '2016–2019',
    tone: 'mix',
    title: { dk: 'HHX – Handelsgymnasium', en: 'HHX – Business College', de: 'HHX – Wirtschaftsgymnasium' },
    org: { dk: 'Rybners Handelsgymnasium', en: 'Rybners Business College', de: 'Rybners Handelsgymnasium' },
    text: {
      dk: 'Afsætning, økonomi og it. HHX gav mig forståelsen for forretningen bag kommunikationen – den vinkel, jeg stadig designer og udvikler ud fra.',
      en: 'Marketing, economics and IT. HHX gave me an understanding of the business behind communication – the angle I still design and develop from.',
      de: 'Marketing, Wirtschaft und IT. Das HHX gab mir das Verständnis für das Geschäft hinter der Kommunikation.',
    },
  },
  {
    year: '2020',
    tone: 'design',
    title: { dk: 'Multimediedesigner', en: 'Multimedia Design', de: 'Multimediadesign' },
    org: { dk: 'Erhvervsakademi SydVest', en: 'Business Academy SouthWest', de: 'Business Academy SouthWest' },
    text: {
      dk: 'Digitalt design, UX, content creation og frontend. Her opdagede jeg, at jeg trives bedst i krydsfeltet mellem design og teknik.',
      en: 'Digital design, UX, content creation and front end. This is where I discovered that I thrive at the intersection of design and technology.',
      de: 'Digitales Design, UX, Content Creation und Frontend. Hier entdeckte ich, dass ich an der Schnittstelle von Design und Technik aufblühe.',
    },
  },
  {
    year: '2021–2024',
    tone: 'design',
    title: { dk: 'Grafisk designer', en: 'Graphic Designer', de: 'Grafikdesigner' },
    org: { dk: 'VIKING Life-Saving Equipment', en: 'VIKING Life-Saving Equipment', de: 'VIKING Life-Saving Equipment' },
    text: {
      dk: 'Sideløbende med studierne arbejdede jeg som grafisk designer hos VIKING med grafik, print og digitalt indhold – mine første erfaringer med at levere design i en stor, global organisation.',
      en: 'Alongside my studies I worked as a graphic designer at VIKING with graphics, print and digital content – my first experience delivering design in a large, global organisation.',
      de: 'Neben dem Studium arbeitete ich als Grafikdesigner bei VIKING mit Grafik, Print und digitalen Inhalten – meine ersten Erfahrungen in einer großen, globalen Organisation.',
    },
  },
  {
    year: '2022',
    tone: 'code',
    title: { dk: 'Webudvikler', en: 'Web Development', de: 'Webentwicklung' },
    org: { dk: 'Erhvervsakademi SydVest', en: 'Business Academy SouthWest', de: 'Business Academy SouthWest' },
    text: {
      dk: 'Fullstack-udvikling: Vue og React i frontend, Node og Express i backend, REST APIs, web security og agile projektforløb.',
      en: 'Full-stack development: Vue and React on the front end, Node and Express on the back end, REST APIs, web security and agile projects.',
      de: 'Fullstack-Entwicklung: Vue und React im Frontend, Node und Express im Backend, REST APIs, Web Security und agile Projekte.',
    },
  },
  {
    year: '2024',
    tone: 'design',
    title: { dk: 'Fra Academy til Corporate Communication', en: 'From Academy to Corporate Communication', de: 'Von Academy zu Corporate Communication' },
    org: { dk: 'VIKING Life-Saving Equipment', en: 'VIKING Life-Saving Equipment', de: 'VIKING Life-Saving Equipment' },
    text: {
      dk: 'Først grafisk designer i VIKING Academy med e-læringsvideoer og animation – derefter Corporate Communication Specialist med video, foto, præsentationsdesign og employer branding for en global organisation.',
      en: 'First graphic designer in VIKING Academy creating e-learning video and animation – then Corporate Communication Specialist working with video, photography, presentation design and employer branding for a global organisation.',
      de: 'Zuerst Grafikdesigner in der VIKING Academy mit E-Learning-Videos und Animation – danach Corporate Communication Specialist mit Video, Foto, Präsentationsdesign und Employer Branding.',
    },
  },
  {
    year: '2025',
    tone: 'mix',
    title: { dk: 'Social media & website med målbare resultater', en: 'Social media & website with measurable results', de: 'Social Media & Website mit messbaren Ergebnissen' },
    org: { dk: 'DK Skønhedsklinik', en: 'DK Skønhedsklinik', de: 'DK Skønhedsklinik' },
    text: {
      dk: 'Visuel identitet, Meta Ads og nyt website for klinikken: 140 → 560 Instagram-følgere og 30+ kundebookinger. Hele spektret i ét projekt.',
      en: 'Visual identity, Meta Ads and a new website for the clinic: 140 → 560 Instagram followers and 30+ client bookings. The whole spectrum in one project.',
      de: 'Visuelle Identität, Meta Ads und neue Website für die Klinik: 140 → 560 Instagram-Follower und 30+ Buchungen.',
    },
  },
  {
    year: '2026',
    tone: 'mix',
    title: { dk: 'Visual Communication Specialist', en: 'Visual Communication Specialist', de: 'Visual Communication Specialist' },
    org: { dk: 'InoPlay ApS', en: 'InoPlay ApS', de: 'InoPlay ApS' },
    text: {
      dk: 'Kataloger og branding på tværs af sub-brands – og en samlet produktdatabase, der binder virksomhedens webshops sammen. Design og data i samme rolle.',
      en: 'Catalogues and branding across sub-brands – and a unified product database connecting the company’s webshops. Design and data in the same role.',
      de: 'Kataloge und Branding über Sub-Brands hinweg – und eine zentrale Produktdatenbank für die Webshops. Design und Daten in einer Rolle.',
    },
  },
];

const toolGroups = [
  {
    key: 'create',
    tone: 'design',
    title: { dk: 'Content creation', en: 'Content creation', de: 'Content Creation' },
    tools: ['Premiere Pro', 'After Effects', 'Photoshop', 'Illustrator', 'InDesign', 'Kamera & lys'],
  },
  {
    key: 'web',
    tone: 'code',
    title: { dk: 'Web & kode', en: 'Web & code', de: 'Web & Code' },
    tools: ['Vue.js', 'React', 'Node.js', 'Express', 'JavaScript', 'HTML/CSS', 'WordPress', 'Shopify'],
  },
  {
    key: 'growth',
    tone: 'mix',
    title: { dk: 'Vækst & data', en: 'Growth & data', de: 'Wachstum & Daten' },
    tools: ['Meta Ads', 'SEO', 'Google Analytics 4', 'A/B-test', 'Figma', 'Microsoft 365'],
  },
];

const recommendations = [
  {
    name: 'Malte Vermehren Eggers',
    photo: require('@/assets/VIKING/Leder/malte.webp'),
    titleLabel: {
      dk: 'Strategic Leadership | Corporate Communication & PR, VIKING',
      en: 'Strategic Leadership | Corporate Communication & PR, VIKING',
      de: 'Strategic Leadership | Corporate Communication & PR, VIKING',
    },
    relation: { dk: 'Ledede Behdin direkte · februar 2025', en: 'Managed Behdin directly · February 2025', de: 'Direkter Vorgesetzter · Februar 2025' },
    paragraphs: [
      'Behdin has worked as a Corporate Communication Specialist in the Corporate Communication department at VIKING Life-Saving Equipment A/S, Denmark. During this time, he has worked with visual storytelling, video production, and internal communication, contributing to our Employer Branding efforts and effectively communicating our values and culture to a wider audience.',
      'Additionally, he has helped improve our PowerPoint templates, collaborating with both Marketing and Corporate Communication to transform strategic content into clear and engaging presentations. The role required strong skills in visual communication, creativity, and attention to detail, as well as the ability to translate complex information into compelling and easily digestible formats.',
      'Behdin has demonstrated a solid understanding of visual storytelling and a strong ability to create impactful communication materials. I can fully recommend him and am confident that he will be successful in his future career.',
    ],
  },
  {
    name: 'Marie Louise Cooper',
    photo: require('@/assets/VIKING/Leder/louise.webp'),
    titleLabel: {
      dk: 'Digital Learning Specialist, VIKING Safety Academy',
      en: 'Digital Learning Specialist, VIKING Safety Academy',
      de: 'Digital Learning Specialist, VIKING Safety Academy',
    },
    relation: { dk: 'Overordnet i afdelingen · januar 2025', en: 'Senior colleague in the department · January 2025', de: 'Vorgesetzte in der Abteilung · Januar 2025' },
    paragraphs: [
      'I had the pleasure of working with Behdin during his time as Graphic designer in VIKING Academy. Behdin’s strength in video creation is remarkable. Whether it’s crafting impactful training content or producing visually stunning animations, he has a talent for turning ideas into engaging and meaningful visuals.',
      'He has a welcoming and kind personality. His positive attitude, strong work ethic, and collaborative spirit create an environment where great ideas and solutions thrive.',
      'I wholeheartedly recommend him and look forward to seeing the amazing things he will achieve in his career.',
    ],
  },
  {
    name: 'Camilla Runge Nissen',
    photo: require('@/assets/VIKING/Leder/camilla.webp'),
    titleLabel: {
      dk: 'Senior Manager, Product Management, VIKING',
      en: 'Senior Manager, Product Management, VIKING',
      de: 'Senior Manager, Product Management, VIKING',
    },
    relation: { dk: 'Ledede Behdin direkte · november 2024', en: 'Managed Behdin directly · November 2024', de: 'Direkte Vorgesetzte · November 2024' },
    paragraphs: [
      'As Behdin’s manager in the Academy department at VIKING, I had the pleasure of witnessing him using his great skills in creating visual aids for our e-learning courses. Behdin consistently delivered engaging video content tailored to specific target audiences, making complex topics accessible and memorable.',
      'His ability to transform written materials into visually compelling and effective resources significantly enhanced our training.',
      'He is a fantastic colleague, a true team player, and I highly recommend him for roles that prioritize quality and impactful visual communication.',
    ],
  },
];

const uiStrings = {
  kicker: { dk: 'Om mig', en: 'About me', de: 'Über mich' },
  title1: { dk: 'To fagligheder', en: 'Two disciplines', de: 'Zwei Disziplinen' },
  title2: { dk: '– én rejse', en: '– one journey', de: '– eine Reise' },
  intro1: {
    dk: 'Siden 2009 har jeg boet i Danmark, og nysgerrigheden har drevet mig gennem to uddannelser og fire arbejdspladser – altid i krydsfeltet mellem det visuelle og det tekniske.',
    en: 'I have lived in Denmark since 2009, and curiosity has carried me through two educations and four workplaces – always at the intersection of the visual and the technical.',
    de: 'Seit 2009 lebe ich in Dänemark, und meine Neugier hat mich durch zwei Ausbildungen und vier Arbeitsplätze geführt – immer an der Schnittstelle von Visuellem und Technischem.',
  },
  intro2: {
    dk: 'I dag arbejder jeg som Visual Communication Specialist hos InoPlay, hvor begge fagligheder er i spil hver dag – fra kataloger og branding til produktdata og webshops.',
    en: 'Today I work as a Visual Communication Specialist at InoPlay, where both disciplines are in play every day – from catalogues and branding to product data and webshops.',
    de: 'Heute arbeite ich als Visual Communication Specialist bei InoPlay, wo beide Disziplinen täglich im Einsatz sind – von Katalogen und Branding bis zu Produktdaten und Webshops.',
  },
  ctaTalk: { dk: 'Lad os tage en snak', en: 'Let’s talk', de: 'Lassen Sie uns sprechen' },
  ctaLinkedin: { dk: 'Se min LinkedIn', en: 'View my LinkedIn', de: 'Mein LinkedIn' },
  journeyKicker: { dk: 'Rejsen', en: 'The journey', de: 'Die Reise' },
  journeyTitle: { dk: 'Fra nysgerrighed til profession', en: 'From curiosity to profession', de: 'Von der Neugier zum Beruf' },
  videoKicker: { dk: 'Video-CV', en: 'Video CV', de: 'Video-CV' },
  videoTitle: { dk: 'Mød mig på 3 minutter', en: 'Meet me in 3 minutes', de: 'Lernen Sie mich in 3 Minuten kennen' },
  videoSub: {
    dk: 'Et kort indblik i min faglighed og drivkraft. Vælg 4K i indstillingerne for bedste kvalitet.',
    en: 'A short look at my skills and motivation. Select 4K in the settings for the best quality.',
    de: 'Ein kurzer Einblick in meine Fähigkeiten und Motivation. Wählen Sie 4K für die beste Qualität.',
  },
  toolboxKicker: { dk: 'Værktøjskassen', en: 'The toolbox', de: 'Der Werkzeugkasten' },
  toolboxTitle: { dk: 'Det jeg arbejder med', en: 'What I work with', de: 'Womit ich arbeite' },
  recTitle: { dk: 'Det siger mine ledere', en: 'What my managers say', de: 'Das sagen meine Vorgesetzten' },
  recSub: {
    dk: 'Anbefalinger fra LinkedIn – gengivet i fuld længde.',
    en: 'Recommendations from LinkedIn – reproduced in full.',
    de: 'Empfehlungen von LinkedIn – in voller Länge.',
  },
};

const ui = computed(() => {
  const out = {};
  for (const key of Object.keys(uiStrings)) out[key] = uiStrings[key][lang.value] ?? uiStrings[key].dk;
  return out;
});
</script>

<style lang="scss" scoped>
.about-page {
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
    line-height: 1.12;
    margin: 0;
  }

  .section-sub {
    margin: 0.8rem 0 0;
    font-size: 1rem;
    opacity: 0.75;
    max-width: 36rem;
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

/* ---------- Hero ---------- */
.about-hero {
  position: relative;
  padding: 9rem 1.5rem 3.5rem;

  /* Glød og grid strækker sig forbi sektionsgrænsen og fader naturligt ind i næste sektion */
  &::before {
    content: '';
    position: absolute;
    inset: 0 0 -320px 0;
    background:
      radial-gradient(ellipse 52% 46% at 85% 15%, rgba(53, 99, 255, 0.26), transparent 66%),
      radial-gradient(ellipse 45% 40% at 5% 72%, rgba(245, 184, 0, 0.2), transparent 70%);
    pointer-events: none;
  }

  /* Blueprint-grid: designerens lærred / udviklerens grid */
  &::after {
    content: '';
    position: absolute;
    inset: 0 0 -320px 0;
    background-image:
      linear-gradient(rgba(11, 18, 32, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(11, 18, 32, 0.05) 1px, transparent 1px);
    background-size: 46px 46px;
    -webkit-mask-image: radial-gradient(ellipse 90% 75% at 50% 25%, #000 30%, transparent 85%);
    mask-image: radial-gradient(ellipse 90% 75% at 50% 25%, #000 30%, transparent 85%);
    pointer-events: none;
  }
}

.dark-theme .about-hero::after {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.055) 1px, transparent 1px);
}

.about-hero-inner {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 3rem;
  align-items: stretch;
}

.about-hero-text {
  h1 {
    font-size: clamp(2.2rem, 5.5vw, 4rem) !important;
    font-weight: 800;
    letter-spacing: -0.025em;
    line-height: 1.05;
    margin: 0 0 1.4rem;
  }

  .lead {
    font-size: clamp(1rem, 1.4vw, 1.12rem);
    line-height: 1.75;
    opacity: 0.85;
    max-width: 36rem;
    margin: 10px 0 1rem 0;
  }
}

.cv-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.6rem;
}

.about-portrait {
  display: flex;
  align-items: stretch;
  justify-content: center;
  overflow: hidden;
  border-radius: 24px;
  box-shadow: 0 30px 70px rgba(0, 0, 30, 0.25);

  img {
    width: 100%;
    height: 100%;
    min-height: 340px;
    max-height: 480px;
    object-fit: cover;
    object-position: center 38%;
    transform: scale(1.25);
    transform-origin: 50% 78%;
  }
}

/* ---------- Timeline ---------- */
.journey { padding: 3rem 0 1.5rem; }

.timeline {
  max-width: 860px;
  margin: 0 auto;
  padding: 0.5rem 1.5rem 0 1.5rem;
  list-style: none;
  position: relative;
}

.t-step {
  position: relative;
  padding: 0 0 2.4rem 2.4rem;
  border-left: 2px solid rgba(128, 128, 128, 0.25);
  margin-left: 0.5rem;

  &:last-child { border-left-color: transparent; padding-bottom: 0.5rem; }

  .t-dot {
    position: absolute;
    left: -9px;
    top: 0.1rem;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 3px solid var(--primary-color);
    box-shadow: 0 0 0 2px rgba(128, 128, 128, 0.3);
  }

  &.tone-design .t-dot { background: var(--gold); }
  &.tone-code .t-dot { background: var(--accent); }
  &.tone-mix .t-dot { background: linear-gradient(135deg, var(--gold), var(--accent)); }

  .t-year {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: var(--accent);
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: -0.01em;
    margin: 0.3rem 0 0.15rem;
  }

  .t-org {
    display: block;
    font-size: 0.9rem;
    font-weight: 600;
    opacity: 0.65;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.98rem;
    line-height: 1.7;
    opacity: 0.85;
    margin: 0;
    max-width: 40rem;
  }
}

/* ---------- Video-CV ---------- */
.videocv {
  position: relative;
  padding: 3rem 0 1.5rem;

  /* Farve-glød bag video-CV'et */
  &::before {
    content: '';
    position: absolute;
    inset: 12% 0 0 0;
    background:
      radial-gradient(ellipse 48% 68% at 24% 55%, rgba(53, 99, 255, 0.16), transparent 68%),
      radial-gradient(ellipse 48% 68% at 76% 55%, rgba(245, 184, 0, 0.13), transparent 68%);
    pointer-events: none;
  }
}

.video-wrap {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem;

  iframe {
    width: 100%;
    aspect-ratio: 16 / 9;
    border: 0;
    border-radius: 20px;
    box-shadow: 0 24px 60px rgba(0, 0, 30, 0.2);
    display: block;
  }
}

/* ---------- Værktøjskassen ---------- */
.toolbox { padding: 3rem 0 1.5rem; }

.toolbox-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
}

.tool-group {
  padding: 1.6rem 1.7rem;
  border-radius: 18px;
  background: var(--card-backgroundColor);
  box-shadow: 0 6px 24px rgba(0, 0, 30, 0.08);
  border-top: 3px solid transparent;

  &.tone-design { border-top-color: var(--gold); }
  &.tone-code { border-top-color: var(--accent); }
  &.tone-mix { border-top-color: var(--accent); border-image: linear-gradient(90deg, #F5B800, #3563FF) 1; }

  h3 {
    font-size: 1.05rem;
    font-weight: 700;
    margin: 0 0 1rem;
  }
}

.tool-chips {
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

/* ---------- Anbefalinger ---------- */
.recommendations { padding: 3rem 0 4.5rem; }

.rec-list {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
}

.rec-block {
  margin: 0;
  padding: 2.2rem 2.4rem;
  border-radius: 20px;
  background: var(--card-backgroundColor);
  box-shadow: 0 6px 24px rgba(0, 0, 30, 0.08);
  position: relative;

  .rec-mark {
    font-family: var(--font-display);
    font-size: 3.4rem;
    line-height: 1;
    font-weight: 800;
    color: var(--gold);
    margin-bottom: 0.5rem;
  }

  blockquote {
    margin: 0 0 1.5rem;

    p {
      font-size: 1.02rem;
      line-height: 1.75;
      opacity: 0.9;
      margin: 0 0 1rem;

      &:last-child { margin-bottom: 0; }
    }
  }

  figcaption {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    border-top: 1px solid rgba(128, 128, 128, 0.2);
    padding-top: 1.1rem;

    .rec-person { display: flex; flex-direction: column; min-width: 0; }
    strong { font-size: 1rem; }
    span { font-size: 0.85rem; opacity: 0.7; margin-top: 0.15rem; }

    .rec-source {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      opacity: 0.55;
      margin-top: 0.35rem;
    }

    .rec-avatar {
      width: 58px;
      height: 58px;
      border-radius: 50%;
      object-fit: cover;
      flex-shrink: 0;
      box-shadow: 0 4px 14px rgba(0, 0, 30, 0.18);
    }
  }
}

/* ---------- Responsivt ---------- */
@media (max-width: 1550px) {
  .about-hero { padding-top: 7.5rem; }

  .about-hero-inner,
  .section-head,
  .toolbox-grid { max-width: 1020px; }

  .about-hero-text h1 { font-size: clamp(2rem, 4.6vw, 3.2rem) !important; }
  .about-hero-text .lead { font-size: 1rem; max-width: 32rem; }
  .about-portrait img { min-height: 300px; max-height: 420px; transform: scale(1.2); }
  .btn { padding: 0.8rem 1.5rem; font-size: 0.95rem; }
  .section-head h2 { font-size: clamp(1.5rem, 2.8vw, 2.2rem) !important; }
  .rec-block { padding: 1.8rem 2rem; }
}

@media (max-width: 1000px) {
  .about-hero-inner { grid-template-columns: 1fr; gap: 2rem; }
  .about-portrait {
    order: -1;
    max-width: 420px;
    margin: 0 auto;

    img {
      min-height: 0;
      height: auto;
      aspect-ratio: 4 / 5;
      max-height: none;
      object-position: center 30%;
      transform: scale(1.12);
      transform-origin: 50% 60%;
    }
  }
  .toolbox-grid { grid-template-columns: 1fr; }
}

@media (max-width: 650px) {
  .about-hero { padding-top: 6.5rem; }
  .t-step { padding-left: 1.8rem; }
  .rec-block { padding: 1.5rem 1.3rem; }
  .cv-buttons .btn { width: 100%; text-align: center; }
}
</style>
