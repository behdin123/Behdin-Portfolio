<template>
  <main class="gallery-page">

    <!-- HERO -->
    <section class="page-hero">
      <div class="page-hero-inner">
        <span class="kicker" v-reveal>{{ ui.kicker }}</span>
        <h1 v-reveal="{ delay: 80 }">{{ ui.title }}</h1>
        <p class="lead" v-reveal="{ delay: 160 }">{{ ui.intro }}</p>

        <div class="filters" v-reveal="{ delay: 240 }">
          <button
            v-for="key in filterKeys"
            :key="key"
            :class="{ active: activeFilter === key }"
            @click="activeFilter = key"
          >
            {{ pick(filterLabels[key]) }}
          </button>
        </div>
      </div>
    </section>

    <!-- GRID -->
    <TransitionGroup name="cards" tag="div" class="gallery-grid">
      <figure
        v-for="(item, i) in filteredItems"
        :key="item.src"
        class="g-item"
        :class="{ tall: item.tall }"
        @click="openLightbox(i)"
      >
        <img :src="item.src" :alt="pick(item.caption)" loading="lazy" decoding="async" />
        <figcaption>
          <span class="g-tag">{{ pick(filterLabels[item.cat]) }}</span>
          <span class="g-caption">{{ pick(item.caption) }}</span>
        </figcaption>
      </figure>
    </TransitionGroup>

    <!-- CTA -->
    <section class="gallery-cta" v-reveal>
      <h2>{{ ui.ctaTitle }}</h2>
      <p>{{ ui.ctaText }}</p>
      <router-link class="btn btn-light" to="/projekter/viking-fotografi">{{ ui.ctaBtn }}</router-link>
    </section>

    <!-- LIGHTBOX -->
    <Transition name="lb">
      <div v-if="lightboxIndex !== null" class="lightbox" @click.self="closeLightbox">
        <button class="lb-close" :aria-label="ui.close" @click="closeLightbox">✕</button>
        <button class="lb-nav lb-prev" :aria-label="ui.prev" @click.stop="stepLightbox(-1)">‹</button>
        <figure class="lb-stage">
          <Transition name="lb-swap" mode="out-in">
            <img
              :key="filteredItems[lightboxIndex].src"
              :src="filteredItems[lightboxIndex].src"
              :alt="pick(filteredItems[lightboxIndex].caption)"
              decoding="async"
            />
          </Transition>
          <figcaption class="lb-caption">{{ pick(filteredItems[lightboxIndex].caption) }}</figcaption>
        </figure>
        <button class="lb-nav lb-next" :aria-label="ui.next" @click.stop="stepLightbox(1)">›</button>
      </div>
    </Transition>

  </main>
</template>

<script setup>
import { computed, defineProps, onMounted, onBeforeUnmount, ref } from 'vue';
import { lang, pick } from '@/js/lang';
import { vReveal } from '@/js/reveal';

defineProps({ dark: {} });

const filterKeys = ['all', 'work', 'office', 'design', 'web', 'photo'];

const filterLabels = {
  all: { dk: 'Alle', en: 'All', de: 'Alle' },
  work: { dk: 'Arbejdsbilleder', en: 'Work photos', de: 'Arbeitsfotos' },
  office: { dk: 'Kontor', en: 'Office', de: 'Büro' },
  design: { dk: 'Design', en: 'Design', de: 'Design' },
  web: { dk: 'Webdesign', en: 'Web design', de: 'Webdesign' },
  photo: { dk: 'Foto', en: 'Photo', de: 'Foto' },
};

const capViking = { dk: 'VIKING HQ – taget af mig', en: 'VIKING HQ – shot by me', de: 'VIKING HQ – von mir fotografiert' };
const capOffice = { dk: 'Kontorbilleder, VIKING HQ', en: 'Office photos, VIKING HQ', de: 'Bürofotos, VIKING HQ' };
const capLogo = { dk: 'Logo & visitkort – eget design', en: 'Logo & business card – my design', de: 'Logo & Visitenkarte – eigenes Design' };
const capProto = { dk: 'Prototype – Adobe XD/Figma', en: 'Prototype – Adobe XD/Figma', de: 'Prototyp – Adobe XD/Figma' };
const capPhoto = { dk: 'Fra multimediedesigner-uddannelsen', en: 'From the multimedia design programme', de: 'Aus der Multimediadesign-Ausbildung' };
const capPoster = { dk: 'Posters – eget design', en: 'Posters – my design', de: 'Poster – eigenes Design' };

const items = [
  { src: require('@/assets/VIKING/PPE5.webp'), cat: 'work', caption: capViking },
  { src: require('@/assets/VIKING/Sy2.webp'), cat: 'work', caption: capViking },
  { src: require('@/assets/Artworks/large/logo (artwork).webp'), cat: 'design', caption: capLogo },
  { src: require('@/assets/VIKING/Lager1.webp'), cat: 'work', caption: capViking },
  { src: require('@/assets/VIKING/IT6.webp'), cat: 'office', caption: capOffice },
  { src: require('@/assets/Artworks/small/DSK_1.webp'), cat: 'web', caption: capProto, tall: true },
  { src: require('@/assets/VIKING/Rely5.webp'), cat: 'work', caption: capViking },
  { src: require('@/assets/photos/IMG_3821.CR2.webp'), cat: 'photo', caption: capPhoto },
  { src: require('@/assets/VIKING/HR1.webp'), cat: 'office', caption: capOffice },
  { src: require('@/assets/Artworks/large/visitcard (artwork).webp'), cat: 'design', caption: capLogo },
  { src: require('@/assets/VIKING/Lager4.webp'), cat: 'work', caption: capViking },
  { src: require('@/assets/VIKING/IT3.webp'), cat: 'office', caption: capOffice },
  { src: require('@/assets/Artworks/small/DSK_2.webp'), cat: 'web', caption: capProto, tall: true },
  { src: require('@/assets/VIKING/PPE3.webp'), cat: 'work', caption: capViking },
  { src: require('@/assets/photos/IMG_3710.CR2.webp'), cat: 'photo', caption: capPhoto },
  { src: require('@/assets/Artworks/large/logo fit (artwork).webp'), cat: 'design', caption: capLogo },
  { src: require('@/assets/VIKING/HR2.webp'), cat: 'office', caption: capOffice },
  { src: require('@/assets/VIKING/Rely4.webp'), cat: 'work', caption: capViking },
  { src: require('@/assets/Artworks/large/xd webdesign-two-one (artwork).webp'), cat: 'web', caption: capProto },
  { src: require('@/assets/VIKING/Harbor4.webp'), cat: 'work', caption: capViking },
  { src: require('@/assets/VIKING/IT7.webp'), cat: 'office', caption: capOffice },
  { src: require('@/assets/Artworks/large/fitshape visitcard (artwork).webp'), cat: 'design', caption: capLogo },
  { src: require('@/assets/VIKING/PPE1.webp'), cat: 'work', caption: capViking },
  { src: require('@/assets/photos/content-page1.webp'), cat: 'photo', caption: capPhoto },
  { src: require('@/assets/VIKING/IT5.webp'), cat: 'office', caption: capOffice },
  { src: require('@/assets/Artworks/small/DSK_3.webp'), cat: 'web', caption: capProto, tall: true },
  { src: require('@/assets/VIKING/Rely3.webp'), cat: 'work', caption: capViking },
  { src: require('@/assets/VIKING/HR3.webp'), cat: 'office', caption: capOffice },
  { src: require('@/assets/VIKING/Harbor3.webp'), cat: 'work', caption: capViking },
  { src: require('@/assets/Plaketer (artwork).webp'), cat: 'design', caption: capPoster },
  { src: require('@/assets/VIKING/Lager6.webp'), cat: 'work', caption: capViking },
  { src: require('@/assets/VIKING/Lager5.webp'), cat: 'work', caption: capViking },
];

const activeFilter = ref('all');

const filteredItems = computed(() =>
  activeFilter.value === 'all' ? items : items.filter((i) => i.cat === activeFilter.value)
);

// Lightbox
const lightboxIndex = ref(null);

function openLightbox(i) {
  lightboxIndex.value = i;
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightboxIndex.value = null;
  document.body.style.overflow = '';
}
function stepLightbox(dir) {
  const len = filteredItems.value.length;
  lightboxIndex.value = (lightboxIndex.value + dir + len) % len;
}

function onKey(e) {
  if (lightboxIndex.value === null) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') stepLightbox(-1);
  if (e.key === 'ArrowRight') stepLightbox(1);
}

onMounted(() => document.addEventListener('keydown', onKey));
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKey);
  document.body.style.overflow = '';
});

const uiStrings = {
  kicker: { dk: 'Galleri', en: 'Gallery', de: 'Galerie' },
  title: { dk: 'Mit visuelle univers', en: 'My visual universe', de: 'Mein visuelles Universum' },
  intro: {
    dk: 'Fotografi, grafisk design og webdesign – alt her er taget eller designet af mig. Klik på et billede for at se det i fuld størrelse.',
    en: 'Photography, graphic design and web design – everything here is shot or designed by me. Click an image to view it full size.',
    de: 'Fotografie, Grafikdesign und Webdesign – alles hier ist von mir fotografiert oder gestaltet.',
  },
  ctaTitle: { dk: 'Historien bag billederne', en: 'The story behind the images', de: 'Die Geschichte hinter den Bildern' },
  ctaText: {
    dk: 'Læs casen om event- og portrætfotografi hos VIKING.',
    en: 'Read the case about event and portrait photography at VIKING.',
    de: 'Lesen Sie den Case über Event- und Porträtfotografie bei VIKING.',
  },
  ctaBtn: { dk: 'Se casen', en: 'View the case', de: 'Case ansehen' },
  close: { dk: 'Luk', en: 'Close', de: 'Schließen' },
  prev: { dk: 'Forrige billede', en: 'Previous image', de: 'Vorheriges Bild' },
  next: { dk: 'Næste billede', en: 'Next image', de: 'Nächstes Bild' },
};

const ui = computed(() => {
  const out = {};
  for (const key of Object.keys(uiStrings)) out[key] = uiStrings[key][lang.value] ?? uiStrings[key].dk;
  return out;
});
</script>

<style lang="scss" scoped>
.gallery-page {
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

.btn {
  display: inline-block;
  padding: 0.9rem 1.8rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: transform 0.25s ease;

  &:hover { transform: translateY(-2px); }
}
.btn-light { background: #fff; color: #16233f; }

/* ---------- Hero ---------- */
.page-hero {
  position: relative;
  padding: 9rem 1.5rem 2.5rem;

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
    margin: 0 0 1.8rem;
  }
}

.filters {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;

  button {
    padding: 0.55rem 1.2rem;
    border-radius: 999px;
    border: 1.5px solid rgba(128, 128, 128, 0.35);
    background: transparent;
    color: var(--ink);
    font-family: var(--font-mono);
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.25s ease;

    &:hover { border-color: var(--accent); color: var(--accent); }

    &.active {
      background: var(--accent);
      border-color: var(--accent);
      color: #fff;
    }
  }
}

/* ---------- Grid ---------- */
.gallery-grid {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 190px;
  grid-auto-flow: dense;
  gap: 1rem;
}

.cards-enter-active,
.cards-leave-active,
.cards-move {
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.cards-enter-from,
.cards-leave-to {
  opacity: 0;
  transform: translateY(14px) scale(0.98);
}
.cards-leave-active { position: absolute; visibility: hidden; }

.g-item {
  position: relative;
  margin: 0;
  border-radius: 14px;
  overflow: hidden;
  cursor: zoom-in;
  grid-row: span 1;

  &.tall { grid-row: span 2; }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  }

  figcaption {
    position: absolute;
    inset: auto 0 0 0;
    padding: 2rem 0.9rem 0.8rem;
    background: linear-gradient(to top, rgba(6, 12, 34, 0.82), transparent);
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    opacity: 0;
    transition: opacity 0.3s ease;

    .g-tag {
      font-family: var(--font-mono);
      font-size: 0.62rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--gold);
    }

    .g-caption {
      font-size: 0.82rem;
      font-weight: 600;
      color: #fff;
    }
  }

  &:hover {
    img { transform: scale(1.05); }
    figcaption { opacity: 1; }
  }
}

/* ---------- CTA ---------- */
.gallery-cta {
  margin: 3.5rem auto 4rem;
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

/* ---------- Lightbox ---------- */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 999;
  /* Lysere baggrund + blur, så man stadig fornemmer siden bagved */
  background: rgba(10, 16, 34, 0.55);
  -webkit-backdrop-filter: blur(16px) saturate(120%);
  backdrop-filter: blur(16px) saturate(120%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.5rem 4.5rem;

  .lb-stage {
    position: relative;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
  }

  img {
    max-width: 100%;
    max-height: 82vh;
    border-radius: 14px;
    box-shadow: 0 40px 90px rgba(0, 0, 0, 0.45);
    background: var(--primary-color);
  }

  .lb-caption {
    margin: 1rem 0 0;
    padding: 0.4rem 1rem;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.35);
    color: rgba(255, 255, 255, 0.92);
    font-family: var(--font-mono);
    font-size: 0.82rem;
    letter-spacing: 0.02em;
  }

  .lb-close,
  .lb-nav {
    position: absolute;
    background: rgba(255, 255, 255, 0.14);
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    color: #fff;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s ease, transform 0.2s ease;

    &:hover { background: rgba(255, 255, 255, 0.28); transform: scale(1.08); }
    &:active { transform: scale(0.96); }
  }

  .lb-nav:hover { transform: translateY(-50%) scale(1.08); }

  .lb-close {
    top: 1.2rem;
    right: 1.2rem;
    width: 44px;
    height: 44px;
    font-size: 1.1rem;
  }

  .lb-nav {
    top: 50%;
    transform: translateY(-50%);
    width: 52px;
    height: 52px;
    font-size: 2rem;
    line-height: 1;
  }

  .lb-prev { left: 1.2rem; }
  .lb-next { right: 1.2rem; }
}

/* Åbne-/luk-animation for hele lightboxen */
.lb-enter-active { transition: opacity 0.32s ease, backdrop-filter 0.32s ease; }
.lb-leave-active { transition: opacity 0.28s ease, backdrop-filter 0.28s ease; }
.lb-enter-from,
.lb-leave-to {
  opacity: 0;
  -webkit-backdrop-filter: blur(0) saturate(100%);
  backdrop-filter: blur(0) saturate(100%);
}
.lb-enter-active .lb-stage {
  animation: lb-pop 0.42s cubic-bezier(0.22, 1, 0.36, 1);
}
@keyframes lb-pop {
  0% { opacity: 0; transform: scale(0.88) translateY(12px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}

/* Blødt skift mellem billeder ved pil-navigation */
.lb-swap-enter-active { transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1); }
.lb-swap-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.lb-swap-enter-from { opacity: 0; transform: scale(0.97); }
.lb-swap-leave-to { opacity: 0; transform: scale(1.02); }

@media (prefers-reduced-motion: reduce) {
  .lb-enter-active .lb-stage { animation: none; }
  .lb-swap-enter-active,
  .lb-swap-leave-active { transition: none; }
}

/* ---------- Responsivt ---------- */
@media (max-width: 1550px) {
  .page-hero { padding-top: 7.5rem; }
  .page-hero-inner, .gallery-grid, .gallery-cta { max-width: 1020px; }
  .page-hero-inner h1 { font-size: clamp(2rem, 4.6vw, 3.2rem) !important; }
  .gallery-grid { grid-auto-rows: 170px; }
}

@media (max-width: 1000px) {
  .gallery-grid { grid-template-columns: repeat(3, 1fr); grid-auto-rows: 160px; }
}

@media (max-width: 700px) {
  .gallery-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 150px; gap: 0.7rem; }
  .gallery-cta { margin: 2.5rem 1.5rem 3.5rem; }
  .lightbox { padding: 3rem 0.8rem; }
  .lightbox .lb-nav { width: 42px; height: 42px; }
}
</style>
