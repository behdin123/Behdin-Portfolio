<template>
  <main class="video-page">

    <!-- HERO -->
    <section class="page-hero">
      <div class="page-hero-inner">
        <div class="page-hero-text">
          <span class="kicker" v-reveal>{{ ui.kicker }}</span>
          <h1 v-reveal="{ delay: 80 }">{{ ui.title }}</h1>
          <p class="lead" v-reveal="{ delay: 160 }">{{ ui.intro }}</p>

          <div class="hero-cta" v-reveal="{ delay: 240 }">
            <a href="#showreel" class="btn btn-primary">{{ ui.heroCtaReel }}</a>
            <router-link class="btn btn-ghost" to="/projekter/viking-employer-branding-video">{{ ui.heroCtaCase }}</router-link>
          </div>
        </div>

        <div class="page-hero-media" v-reveal="{ delay: 200 }">
          <img src="@/assets/Behdin/CameraBG.webp" :alt="'Behdin Bagheri – ' + ui.kicker" width="640" height="426" />
        </div>
      </div>
    </section>

    <!-- SHOWREEL -->
    <section id="showreel" class="showreel">
      <header class="section-head" v-reveal>
        <span class="kicker">{{ ui.reelKicker }}</span>
        <h2>{{ ui.reelTitle }}</h2>
        <p class="section-sub">{{ ui.reelSub }}</p>
      </header>

      <div class="video-wrap" v-reveal>
        <iframe
          src="https://www.youtube.com/embed/KlG4LaJnUZ0"
          title="Behdin Bagheri – Video assets"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </section>

    <!-- PROCES -->
    <section class="process">
      <header class="section-head" v-reveal>
        <span class="kicker">{{ ui.processKicker }}</span>
        <h2>{{ ui.processTitle }}</h2>
      </header>

      <ol class="process-grid">
        <li v-for="(step, i) in processSteps" :key="step.key" class="p-step" v-reveal="{ delay: i * 90 }">
          <span class="p-num">{{ i + 1 }}</span>
          <h3>{{ pick(step.title) }}</h3>
          <p>{{ pick(step.text) }}</p>
        </li>
      </ol>
    </section>

    <!-- EMPLOYER BRANDING -->
    <section class="branding">
      <header class="section-head" v-reveal>
        <span class="kicker">VIKING Life-Saving</span>
        <h2>{{ ui.ebTitle }}</h2>
        <p class="section-sub">{{ ui.ebSub }}</p>
      </header>

      <div class="branding-grid">
        <figure class="eb-video" v-reveal>
          <video class="lazy-video" controls preload="none" playsinline :poster="thumbnail">
            <source data-src="/video/VIKING_Office_Theme_LinkedIn.mp4" type="video/mp4" />
            {{ ui.browserSupport }}
          </video>
          <figcaption>{{ ui.ebCaption1 }}</figcaption>
        </figure>

        <figure class="eb-video" v-reveal="{ delay: 120 }">
          <video class="lazy-video" controls preload="none" playsinline :poster="thumbnail2">
            <source data-src="/video/VIKING_Production_Theme_LinkedIn.mp4" type="video/mp4" />
            {{ ui.browserSupport }}
          </video>
          <figcaption>{{ ui.ebCaption2 }}</figcaption>
        </figure>
      </div>
    </section>

    <!-- CTA -->
    <section class="video-cta" v-reveal>
      <h2>{{ ui.ctaTitle }}</h2>
      <p>{{ ui.ctaText }}</p>
      <router-link class="btn btn-light" to="/projekter/viking-employer-branding-video">{{ ui.ctaBtn }}</router-link>
    </section>

  </main>
</template>

<script setup>
import { computed, defineProps, onMounted, onBeforeUnmount } from 'vue';
import thumbnail from '@/assets/Thumbnail.webp';
import thumbnail2 from '@/assets/Thumbnail2.webp';
import { lang, pick } from '@/js/lang';
import { vReveal } from '@/js/reveal';

defineProps({ dark: {} });

// Lazy-load af selvhostede videoer: src sættes først når videoen nærmer sig viewport
let io;
onMounted(() => {
  const videos = Array.from(document.querySelectorAll('video.lazy-video'));
  const activate = (v) => {
    v.querySelectorAll('source[data-src]').forEach((s) => {
      s.src = s.dataset.src;
      s.removeAttribute('data-src');
    });
    if (typeof v.load === 'function') v.load();
  };

  if (!('IntersectionObserver' in window) || videos.length === 0) {
    videos.forEach(activate);
    return;
  }

  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        activate(entry.target);
        io.unobserve(entry.target);
      });
    },
    { rootMargin: '200px 0px', threshold: 0.1 }
  );

  videos.forEach((v) => io.observe(v));
});

onBeforeUnmount(() => {
  if (io) io.disconnect();
});

const processSteps = [
  {
    key: 'idea',
    title: { dk: 'Idé & scenarie', en: 'Idea & scenario', de: 'Idee & Szenario' },
    text: {
      dk: 'Formål, målgruppe og platform fastlægges først – historien planlægges, før kameraet tændes.',
      en: 'Purpose, audience and platform come first – the story is planned before the camera turns on.',
      de: 'Zweck, Zielgruppe und Plattform zuerst – die Geschichte wird vor dem Dreh geplant.',
    },
  },
  {
    key: 'shoot',
    title: { dk: 'Optagelse', en: 'Filming', de: 'Dreh' },
    text: {
      dk: 'Professionelt udstyr: kamera, lysopsætning, gimbal-stabilisering og mikrofoner – interviews, b-roll og stemningsklip.',
      en: 'Professional equipment: camera, lighting, gimbal stabilisation and microphones – interviews, b-roll and atmosphere.',
      de: 'Professionelles Equipment: Kamera, Licht, Gimbal und Mikrofone – Interviews, B-Roll und Stimmung.',
    },
  },
  {
    key: 'edit',
    title: { dk: 'Klip & motion', en: 'Edit & motion', de: 'Schnitt & Motion' },
    text: {
      dk: 'Postproduktion i Premiere Pro og After Effects: klipning, farver, lyd, grafik og animation.',
      en: 'Post-production in Premiere Pro and After Effects: editing, colour, sound, graphics and animation.',
      de: 'Postproduktion in Premiere Pro und After Effects: Schnitt, Farbe, Ton, Grafik und Animation.',
    },
  },
  {
    key: 'deliver',
    title: { dk: 'Platform-tilpasning', en: 'Platform delivery', de: 'Plattform-Anpassung' },
    text: {
      dk: 'Formater, længder og tekster tilpasses kanalen – LinkedIn, intranet, e-læring eller sociale medier.',
      en: 'Formats, lengths and copy adapted to the channel – LinkedIn, intranet, e-learning or social media.',
      de: 'Formate, Längen und Texte an den Kanal angepasst – LinkedIn, Intranet, E-Learning oder Social Media.',
    },
  },
];

const uiStrings = {
  kicker: { dk: 'Video', en: 'Video', de: 'Video' },
  title: { dk: 'Fra optagelse til færdig produktion', en: 'From filming to finished production', de: 'Vom Dreh zur fertigen Produktion' },
  intro: {
    dk: 'Jeg tager videoen hele vejen: scenarie, optagelse med professionelt udstyr, klipning og motion graphics – og tilpasning til den platform, videoen skal leve på.',
    en: 'I take video all the way: scenario, filming with professional equipment, editing and motion graphics – adapted to the platform the video will live on.',
    de: 'Ich begleite Video den ganzen Weg: Szenario, Dreh mit professionellem Equipment, Schnitt und Motion Graphics.',
  },
  heroCtaReel: { dk: 'Se showreel', en: 'Watch showreel', de: 'Showreel ansehen' },
  heroCtaCase: { dk: 'Se casen', en: 'View the case', de: 'Case ansehen' },
  reelKicker: { dk: 'Showreel', en: 'Showreel', de: 'Showreel' },
  reelTitle: { dk: 'Video assets', en: 'Video assets', de: 'Video-Assets' },
  reelSub: {
    dk: 'Alle scener er optaget af mig. Vælg 4K i indstillingerne for bedste kvalitet.',
    en: 'Every scene filmed by me. Select 4K in the settings for the best quality.',
    de: 'Alle Szenen von mir gefilmt. Wählen Sie 4K für die beste Qualität.',
  },
  processKicker: { dk: 'Processen', en: 'The process', de: 'Der Prozess' },
  processTitle: { dk: 'Sådan arbejder jeg med video', en: 'How I work with video', de: 'So arbeite ich mit Video' },
  ebTitle: { dk: 'Employer branding-videoer', en: 'Employer branding videos', de: 'Employer-Branding-Videos' },
  ebSub: {
    dk: 'Produceret til VIKINGs employer branding og tilpasset LinkedIn – optaget med professionelt udstyr, klippet i Premiere Pro og formateret gennem Storykit.',
    en: 'Produced for VIKING’s employer branding and adapted for LinkedIn – filmed with professional equipment, edited in Premiere Pro and formatted through Storykit.',
    de: 'Produziert für VIKINGs Employer Branding und für LinkedIn angepasst – gedreht, geschnitten in Premiere Pro, formatiert mit Storykit.',
  },
  ebCaption1: { dk: 'VIKING – Office Theme (LinkedIn)', en: 'VIKING – Office Theme (LinkedIn)', de: 'VIKING – Office Theme (LinkedIn)' },
  ebCaption2: { dk: 'VIKING – Production Theme (LinkedIn)', en: 'VIKING – Production Theme (LinkedIn)', de: 'VIKING – Production Theme (LinkedIn)' },
  browserSupport: { dk: 'Din browser understøtter ikke video-tagget.', en: 'Your browser does not support the video tag.', de: 'Ihr Browser unterstützt das Video-Tag nicht.' },
  ctaTitle: { dk: 'Historien bag videoerne', en: 'The story behind the videos', de: 'Die Geschichte hinter den Videos' },
  ctaText: {
    dk: 'Læs casen om strategi-kommunikation og employer branding hos VIKING.',
    en: 'Read the case about strategy communication and employer branding at VIKING.',
    de: 'Lesen Sie den Case über Strategiekommunikation und Employer Branding bei VIKING.',
  },
  ctaBtn: { dk: 'Se casen', en: 'View the case', de: 'Case ansehen' },
};

const ui = computed(() => {
  const out = {};
  for (const key of Object.keys(uiStrings)) out[key] = uiStrings[key][lang.value] ?? uiStrings[key].dk;
  return out;
});
</script>

<style lang="scss" scoped>
.video-page {
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

  .section-sub {
    margin: 0.8rem 0 0;
    font-size: 1rem;
    opacity: 0.75;
    max-width: 40rem;
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
.btn-light { background: #fff; color: #16233f; }
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
.page-hero {
  position: relative;
  padding: 9rem 1.5rem 3rem;

  &::before {
    content: '';
    position: absolute;
    inset: 0 0 -280px 0;
    background:
      radial-gradient(ellipse 52% 46% at 85% 15%, rgba(53, 99, 255, 0.26), transparent 66%),
      radial-gradient(ellipse 45% 40% at 5% 72%, rgba(245, 184, 0, 0.2), transparent 70%);
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
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 3rem;
  align-items: center;

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

.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.8rem;
}

.page-hero-media {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 30px 70px rgba(0, 0, 30, 0.28);
  transition: transform 0.4s ease;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    pointer-events: none;
  }

  &:hover { transform: translateY(-6px); }

  img {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 320px;
    max-height: 460px;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    object-position: center;
  }
}

/* ---------- Showreel ---------- */
.showreel {
  position: relative;
  padding: 2rem 0 1.5rem;

  /* Farve-glød bag showreel-framen */
  &::before {
    content: '';
    position: absolute;
    inset: 10% 0 0 0;
    background:
      radial-gradient(ellipse 46% 70% at 22% 55%, rgba(53, 99, 255, 0.18), transparent 68%),
      radial-gradient(ellipse 46% 70% at 78% 55%, rgba(245, 184, 0, 0.15), transparent 68%);
    pointer-events: none;
  }
}

.video-wrap {
  position: relative;
  max-width: 1000px;
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

/* ---------- Proces ---------- */
.process { padding: 3.5rem 0 1.5rem; }

.process-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.4rem;
}

.p-step {
  padding: 1.6rem;
  border-radius: 18px;
  background: var(--card-backgroundColor);
  box-shadow: 0 6px 24px rgba(0, 0, 30, 0.08);

  .p-num {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 10px;
    font-family: var(--font-mono);
    font-size: 0.9rem;
    font-weight: 700;
    color: #fff;
    background: linear-gradient(135deg, var(--gold), var(--accent));
    margin-bottom: 0.9rem;
  }

  h3 {
    font-size: 1.05rem;
    font-weight: 700;
    margin: 0 0 0.5rem;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.6;
    opacity: 0.8;
    margin: 0;
  }
}

/* ---------- Employer branding ---------- */
.branding {
  position: relative;
  padding: 3rem 0 1.5rem;

  /* Blå/gul glød der giver liv bag de to story-videoer */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 34% 60% at 30% 50%, rgba(53, 99, 255, 0.16), transparent 70%),
      radial-gradient(ellipse 34% 60% at 70% 50%, rgba(245, 184, 0, 0.14), transparent 70%);
    pointer-events: none;
  }
}

.branding-grid {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
}

.eb-video {
  margin: 0;
  width: 100%;
  max-width: 380px;

  video {
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 20px 50px rgba(0, 0, 30, 0.22);
    display: block;
    background: #0b1220;
  }

  figcaption {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    opacity: 0.65;
    margin-top: 0.7rem;
    text-align: center;
  }
}

/* ---------- CTA ---------- */
.video-cta {
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
  .page-hero-inner, .section-head, .process-grid, .branding-grid, .video-cta { max-width: 1020px; }
  .page-hero-inner h1 { font-size: clamp(2rem, 4.6vw, 3.2rem) !important; }
}

@media (max-width: 900px) {
  .page-hero-inner { grid-template-columns: 1fr; gap: 2rem; }
  .page-hero-media { order: -1; max-width: 460px; }
  .page-hero-media img { max-height: 340px; }
}

@media (max-width: 1000px) {
  .process-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 600px) {
  .process-grid { grid-template-columns: 1fr; }
  .video-cta { margin: 2.5rem 1.5rem 3.5rem; }
  .eb-video { max-width: 280px; }
}
</style>
