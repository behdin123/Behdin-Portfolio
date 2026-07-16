<template>
  <main v-if="c" class="case-page">

    <!-- Case hero -->
    <header class="case-hero">
      <div class="Case-backinfo-div">
        <router-link class="back-link" to="/projekter">← {{ ui.back }}</router-link>
        <span class="kicker" v-reveal>{{ pick(c.kicker) }}</span>
      </div>
      <h1 v-reveal="{ delay: 80 }">{{ pick(c.title) }}</h1>
      <p class="tagline" v-reveal="{ delay: 160 }">{{ pick(c.tagline) }}</p>

      <dl class="meta" v-reveal="{ delay: 240 }">
        <div><dt>{{ ui.role }}</dt><dd>{{ pick(c.role) }}</dd></div>
        <div><dt>{{ ui.client }}</dt><dd>{{ clientLabel }}</dd></div>
        <div><dt>{{ ui.year }}</dt><dd>{{ c.year }}</dd></div>
        <div><dt>{{ ui.tools }}</dt><dd>{{ c.tools.join(' · ') }}</dd></div>
      </dl>
    </header>

    <div class="case-hero-media" v-reveal>
      <video
        v-if="c.heroVideo"
        class="case-hero-video"
        autoplay
        muted
        loop
        playsinline
        preload="metadata"
        :poster="c.heroVideo.poster"
      >
        <source v-for="s in c.heroVideo.sources" :key="s.src" :src="s.src" :type="s.type" />
      </video>
      <div v-else-if="c.heroImages" class="hero-rotator" :class="'fit-' + (c.heroImages.fit || 'cover')">
        <Transition name="hero-fade">
          <img :key="heroIdx" :src="c.heroImages.images[heroIdx]" :alt="pick(c.title)" decoding="async" />
        </Transition>
      </div>
      <img v-else :src="c.image" :alt="pick(c.title)" :style="c.imagePosition ? { objectPosition: c.imagePosition } : null" />
    </div>

    <!-- Stats -->
    <section v-if="c.stats" class="case-stats" v-reveal>
      <div v-for="(s, i) in c.stats" :key="i" class="stat-block">
        <strong>
          <template v-if="s.from">{{ s.from }} → </template><span :ref="(el) => setCountRef(el, s)">{{ s.to }}</span><template v-if="s.suffix">{{ s.suffix }}</template>
        </strong>
        <span>{{ pick(s.label) }}</span>
      </div>
    </section>

    <!-- Indhold -->
    <article class="case-content">
      <section v-reveal>
        <h2>{{ ui.challenge }}</h2>
        <p>{{ pick(c.challenge) }}</p>
      </section>

      <section v-reveal>
        <h2>{{ ui.process }}</h2>
        <p v-for="(p, i) in pick(c.process)" :key="i">{{ p }}</p>
      </section>

      <div v-if="c.gallery" class="case-gallery">
        <img v-for="(img, i) in c.gallery" :key="i" :src="img" :alt="pick(c.title) + ' – ' + (i + 1)" loading="lazy" decoding="async" v-reveal="{ delay: (i % 2) * 100 }" />
      </div>

      <div v-if="c.mockup" class="case-mockup" :class="'mockup-' + c.mockup.frame" v-reveal>
        <div v-if="c.mockup.frame === 'phone'" class="device-phones">
          <div v-for="(s, i) in (c.mockup.srcs || [c.mockup.src])" :key="i" class="device-phone">
            <span class="device-notch" aria-hidden="true"></span>
            <div class="device-screen">
              <img :src="s" :alt="pick(c.title)" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
        <img v-else class="mockup-image" :src="c.mockup.src" :alt="pick(c.title)" loading="lazy" decoding="async" />
        <p v-if="c.mockup.caption" class="mockup-caption">{{ pick(c.mockup.caption) }}</p>
      </div>

      <section v-if="c.catalog" class="case-catalog" v-reveal>
        <h2>{{ pick(c.catalog.title) }}</h2>
        <div class="catalog-viewer" :class="{ single: currentSpread.length === 1 }">
          <div class="catalog-stage">
            <Transition name="slide-fade">
              <div class="catalog-spread" :key="catIdx">
                <img
                  v-for="pg in currentSpread"
                  :key="pg"
                  :src="catPageUrl(pg)"
                  :alt="pick(c.title) + ' – side ' + pg"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Transition>
          </div>
          <button class="slide-nav prev" :aria-label="ui.prev" @click="stepCatalog(-1)">‹</button>
          <button class="slide-nav next" :aria-label="ui.next" @click="stepCatalog(1)">›</button>
          <span class="slide-counter">{{ catCounter }} / {{ c.catalog.pageCount }}</span>
        </div>
      </section>

      <section v-if="c.logos" class="case-logos" v-reveal>
        <h2>{{ pick(c.logos.title) }}</h2>
        <div class="logo-row">
          <div v-for="(l, i) in c.logos.items" :key="i" class="logo-chip">
            <img :src="l.src" :alt="l.label" loading="lazy" decoding="async" />
            <span>{{ l.label }}</span>
          </div>
        </div>
      </section>

      <section class="result-block" v-reveal>
        <h2>{{ ui.result }}</h2>
        <p>{{ pick(c.result) }}</p>
        <router-link v-if="c.resultCta" class="btn btn-result" :to="c.resultCta.to">
          {{ pick(c.resultCta.label) }} →
        </router-link>
      </section>

      <section v-if="c.slides" class="case-slides" v-reveal>
        <h2>{{ pick(c.slides.title) }}</h2>
        <div class="slide-viewer">
          <div class="slide-stage">
            <Transition name="slide-fade">
              <img
                :key="slideIndex"
                :src="c.slides.items[slideIndex]"
                :alt="pick(c.title) + ' – slide ' + (slideIndex + 1)"
                loading="lazy"
                decoding="async"
              />
            </Transition>
          </div>
          <button class="slide-nav prev" :aria-label="ui.prev" @click="stepSlide(-1)">‹</button>
          <button class="slide-nav next" :aria-label="ui.next" @click="stepSlide(1)">›</button>
          <span class="slide-counter">{{ slideIndex + 1 }} / {{ c.slides.items.length }}</span>
        </div>
        <div class="slide-dots">
          <button
            v-for="(s, i) in c.slides.items"
            :key="i"
            :class="{ active: i === slideIndex }"
            :aria-label="'Slide ' + (i + 1)"
            @click="slideIndex = i"
          ></button>
        </div>
      </section>

      <figure v-if="c.testimonial" class="case-quote" v-reveal>
        <blockquote>“{{ c.testimonial.quote }}”</blockquote>
        <figcaption>
          <div class="q-person">
            <strong>{{ c.testimonial.name }}</strong>
            <span>{{ pick(c.testimonial.titleLabel) }}</span>
          </div>
          <img v-if="c.testimonial.photo" class="q-avatar" :src="c.testimonial.photo" :alt="c.testimonial.name" loading="lazy" />
        </figcaption>
      </figure>

      <div v-if="c.links" class="case-links" v-reveal>
        <a v-for="l in c.links" :key="l.url" :href="l.url" target="_blank" rel="noopener" class="btn btn-ghost">
          {{ l.label }} ↗
        </a>
      </div>
    </article>

    <!-- Næste case -->
    <nav class="case-nav">
      <router-link v-if="prevCase" :to="'/projekter/' + prevCase.slug" class="nav-card">
        <span>← {{ ui.prev }}</span>
        <strong>{{ pick(prevCase.title) }}</strong>
      </router-link>
      <router-link v-if="nextCase" :to="'/projekter/' + nextCase.slug" class="nav-card next">
        <span>{{ ui.next }} →</span>
        <strong>{{ pick(nextCase.title) }}</strong>
      </router-link>
    </nav>

  </main>
</template>

<script setup>
import { computed, watch, ref, onMounted, onBeforeUnmount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { cases, getCase } from '@/data/cases';
import { lang, pick } from '@/js/lang';
import { vReveal, animateCount } from '@/js/reveal';

const route = useRoute();
const router = useRouter();

const c = computed(() => getCase(route.params.slug));

const slideIndex = ref(0);
function stepSlide(dir) {
  const n = c.value?.slides?.items?.length || 0;
  if (!n) return;
  slideIndex.value = (slideIndex.value + dir + n) % n;
}

// Roterende hero (heroImages) – blødt cross-fade på interval
const heroIdx = ref(0);
let heroTimer = null;
function startHeroRotation() {
  clearInterval(heroTimer);
  heroIdx.value = 0;
  const hi = c.value?.heroImages;
  if (hi && hi.images && hi.images.length > 1) {
    const ms = hi.interval || 4500;
    heroTimer = setInterval(() => {
      heroIdx.value = (heroIdx.value + 1) % hi.images.length;
    }, ms);
  }
}

// Katalog-viewer – sider grupperes i opslag: forside alene, derefter 2 sider ad gangen, bagside alene
function catPageUrl(n) {
  const cat = c.value?.catalog;
  return cat ? cat.pathBase + n + '.webp' : '';
}
const catalogSpreads = computed(() => {
  const cat = c.value?.catalog;
  if (!cat) return [];
  const N = cat.pageCount || (cat.pages ? cat.pages.length : 0);
  if (!N) return [];
  const spreads = [[1]]; // forside alene
  let i = 2;
  while (i <= N - 1) {
    if (i + 1 <= N - 1) {
      spreads.push([i, i + 1]);
      i += 2;
    } else {
      spreads.push([i]);
      i += 1;
    }
  }
  if (N >= 2) spreads.push([N]); // bagside alene
  return spreads;
});
const catIdx = ref(0);
const currentSpread = computed(() => catalogSpreads.value[catIdx.value] || []);
const catCounter = computed(() => {
  const s = currentSpread.value;
  return s.length === 2 ? s[0] + '–' + s[1] : String(s[0] || '');
});
function stepCatalog(dir) {
  const n = catalogSpreads.value.length;
  if (!n) return;
  catIdx.value = (catIdx.value + dir + n) % n;
}

watch(
  c,
  (val) => {
    if (!val) router.replace('/projekter');
    slideIndex.value = 0;
    catIdx.value = 0;
    startHeroRotation();
  },
  { immediate: true }
);

onMounted(startHeroRotation);
onBeforeUnmount(() => clearInterval(heroTimer));

const clientLabel = computed(() => (typeof c.value.client === 'string' ? c.value.client : pick(c.value.client)));

const idx = computed(() => cases.findIndex((x) => x.slug === route.params.slug));
const prevCase = computed(() => (idx.value > 0 ? cases[idx.value - 1] : null));
const nextCase = computed(() => (idx.value < cases.length - 1 ? cases[idx.value + 1] : null));

const counted = new WeakSet();
function setCountRef(el, stat) {
  if (!el || counted.has(el)) return;
  counted.add(el);
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(el, stat.to, 1100);
        io.disconnect();
      }
    });
  });
  io.observe(el);
}

const uiStrings = {
  back: { dk: 'Alle projekter', en: 'All projects', de: 'Alle Projekte' },
  role: { dk: 'Rolle', en: 'Role', de: 'Rolle' },
  client: { dk: 'Kunde', en: 'Client', de: 'Kunde' },
  year: { dk: 'År', en: 'Year', de: 'Jahr' },
  tools: { dk: 'Værktøjer', en: 'Tools', de: 'Tools' },
  challenge: { dk: 'Udfordringen', en: 'The challenge', de: 'Die Herausforderung' },
  process: { dk: 'Processen', en: 'The process', de: 'Der Prozess' },
  result: { dk: 'Resultatet', en: 'The result', de: 'Das Ergebnis' },
  prev: { dk: 'Forrige case', en: 'Previous case', de: 'Vorheriger Case' },
  next: { dk: 'Næste case', en: 'Next case', de: 'Nächster Case' },
};

const ui = computed(() => {
  const out = {};
  for (const key of Object.keys(uiStrings)) out[key] = uiStrings[key][lang.value] ?? uiStrings[key].dk;
  return out;
});
</script>

<style lang="scss" scoped>
.case-page {
  --gold: #F5B800;
  background: var(--primary-color);
  color: var(--white-black-color);
  padding-top: 7.5rem;
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

.case-hero {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 1.5rem 2.5rem;

  .Case-backinfo-div{
    display: flex;
    align-items: start;
    margin-bottom: 2rem;
  }

  .back-link {
    display: inline-block;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--white-black-color);
    opacity: 0.6;
    text-decoration: none;
    margin-right: 20px;
    transition: opacity 0.2s ease;
    &:hover { opacity: 1; }
  }

  .kicker {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    font-family: var(--font-mono);
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--quaternary-color);

    &::before {
      content: '';
      width: 26px;
      height: 2px;
      background: linear-gradient(90deg, var(--gold), var(--quaternary-color));
    }
  }

  h1 {
    font-size: clamp(2rem, 5vw, 3.4rem) !important;
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 1.08;
    margin: 0 0 1rem;
  }

  .tagline {
    font-size: clamp(1.02rem, 1.6vw, 1.25rem);
    line-height: 1.6;
    opacity: 0.8;
    margin: 10px 0 2.2rem 0;
  }
}

.meta {
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 2.4rem;
  margin: 0;
  padding: 1.4rem 0 0;
  border-top: 1px solid rgba(128, 128, 128, 0.25);

  dt {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.55;
    margin-bottom: 0.3rem;
  }
  dd {
    margin: 0;
    font-size: 0.95rem;
    font-weight: 600;
    max-width: 16rem;
  }
}

.case-hero-media {
  max-width: 1200px;
  margin: 0 auto 3rem;
  padding: 0 1.5rem;

  > img,
  .case-hero-video,
  .hero-rotator {
    width: 100%;
    max-height: 640px;
    object-fit: cover;
    border-radius: 22px;
    display: block;
    box-shadow: 0 24px 60px rgba(0, 0, 30, 0.2);
  }

  .case-hero-video {
    aspect-ratio: 16 / 9;
    background: #0b0f1a;
  }
}

/* Roterende hero med blødt cross-fade */
.hero-rotator {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #0b0f1a;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
  }

  &.fit-cover img { object-fit: cover; }
  &.fit-contain img { object-fit: contain; }

  &.fit-contain {
    background:
      radial-gradient(ellipse 60% 60% at 50% 40%, rgba(53, 99, 255, 0.14), transparent 70%),
      radial-gradient(ellipse 50% 50% at 50% 90%, rgba(245, 184, 0, 0.12), transparent 70%),
      var(--primary-color);
  }
}

.hero-fade-enter-active,
.hero-fade-leave-active {
  transition: opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1);
}
.hero-fade-enter-from,
.hero-fade-leave-to { opacity: 0; }

@media (prefers-reduced-motion: reduce) {
  .hero-fade-enter-active,
  .hero-fade-leave-active { transition: none; }
}

/* Katalog-viewer: bladr side for side */
.case-catalog {
  margin-bottom: 2.8rem;

  h2 { margin-bottom: 1.2rem; }
}

.catalog-viewer {
  position: relative;
  max-width: 980px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  background: #0b0f1a;
  box-shadow: 0 18px 46px rgba(0, 0, 30, 0.24);
  transition: max-width 0.4s ease;

  .catalog-stage {
    position: relative;
    aspect-ratio: 2480 / 1755;
  }

  /* Bog-gutter: blød skygge i midten af opslaget */
  &:not(.single) .catalog-stage::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 44px;
    transform: translateX(-50%);
    background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.15), transparent);
    pointer-events: none;
    z-index: 1;
  }

  .catalog-spread {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;

    img {
      width: 50%;
      height: 100%;
      object-fit: contain;
      display: block;
      background: #fff;
    }
  }

  .slide-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    width: 46px;
    height: 46px;
    border: 1px solid rgba(255, 255, 255, 0.28);
    border-radius: 50%;
    background: rgba(11, 15, 26, 0.6);
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
    color: #fff;
    font-size: 1.8rem;
    line-height: 1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.35);
    transition: background 0.2s ease, transform 0.2s ease;

    &:hover { background: rgba(11, 15, 26, 0.82); }
    &:active { transform: translateY(-50%) scale(0.94); }
    &.prev { left: 0.7rem; }
    &.next { right: 0.7rem; }
  }

  .slide-counter {
    position: absolute;
    bottom: 0.8rem;
    right: 0.9rem;
    z-index: 2;
    padding: 0.25rem 0.7rem;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.55);
    color: #fff;
    font-family: var(--font-mono);
    font-size: 0.75rem;
  }
}

/* ---------- Logo-showcase (programmer / kanaler) ---------- */
.case-logos {
  margin-bottom: 2.8rem;

  h2 { margin-bottom: 1.2rem; }
}

.logo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
}

.logo-chip {
  flex: 1 1 0;
  min-width: 140px;
  max-width: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.9rem 1.4rem;
  border-radius: 16px;
  /* Hvid chip så brand-logoerne står rent i både lyst og mørkt tema */
  background: #fff;
  box-shadow: 0 6px 24px rgba(0, 0, 30, 0.10);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 34px rgba(0, 0, 30, 0.16);
  }

  img {
    width: auto;
    height: 58px;
    max-width: 82%;
    object-fit: contain;
    display: block;
  }

  span {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: #16233f;
  }
}

.case-stats {
  max-width: 860px;
  margin: 0 auto 3.5rem;
  padding: 0 1.5rem;
  display: flex;
  gap: 3.5rem;
  flex-wrap: wrap;

  .stat-block {
    display: flex;
    flex-direction: column;

    strong {
      font-size: clamp(2rem, 4.5vw, 3.2rem);
      font-weight: 800;
      letter-spacing: -0.02em;
      color: var(--quaternary-color);

      span { font-size: inherit; }
    }
    > span {
      font-size: 0.92rem;
      opacity: 0.7;
      margin-top: 0.3rem;
    }
  }
}

.case-content {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 1.5rem 3rem;

  h2 {
    font-size: clamp(1.35rem, 2.4vw, 1.8rem) !important;
    font-weight: 800;
    letter-spacing: -0.015em;
    margin: 0 0 1rem;
  }

  section { margin-bottom: 2.8rem; }

  p {
    font-size: 1.02rem;
    line-height: 1.75;
    opacity: 0.88;
    margin: 0 0 1rem;
    max-width: 45rem;
  }
}

.case-gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  margin: 0 0 2.8rem;

  img {
    width: 100%;
    border-radius: 16px;
    display: block;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    box-shadow: 0 8px 26px rgba(0, 0, 30, 0.12);
    transition: transform 0.35s ease;
    &:hover { transform: scale(1.02); }
  }
}

/* ---------- Mockups ---------- */
.case-mockup {
  margin: 0 0 2.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .mockup-caption {
    margin: 1.1rem 0 0;
    font-family: var(--font-mono);
    font-size: 0.8rem;
    letter-spacing: 0.02em;
    opacity: 0.6;
    text-align: center;
    max-width: 30rem;
  }
}

.device-phones {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.6rem;
}

/* Telefon-ramme til rå screenshots (fx website i mobilvisning) */
.device-phone {
  position: relative;
  width: min(320px, 78vw);
  aspect-ratio: 1010 / 1920;
  padding: 10px 7px;
  border-radius: 32px;
  background: linear-gradient(155deg, #1c2230, #0b0f1a);
  box-shadow:
    0 30px 70px rgba(0, 0, 30, 0.32),
    inset 0 0 0 2px rgba(255, 255, 255, 0.06);

  .device-notch {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 28%;
    height: 22px;
    border-radius: 14px;
    background: #0b0f1a;
    z-index: 2;
  }

  .device-screen {
    width: 100%;
    height: 100%;
    border-radius: 32px;
    overflow: hidden;
    background: #000;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      display: block;
    }
  }
}

/* Færdig mockup-render vist i fuld størrelse uden baggrund (fx Instagram-profil) */
.mockup-image {
  display: block;
  width: 100%;
  max-width: 400px;
  height: auto;
  filter: drop-shadow(0 24px 44px rgba(0, 0, 30, 0.28));
}

/* Kun social-casen (frame: none): billedet sidder øverst med plads til dets nedadgående skygge */
.case-mockup.mockup-none {
  justify-content: flex-start;
  padding-top: 0.5rem;
  padding-bottom: 3rem;
}

/* ---------- Slide-viewer (PowerPoint) ---------- */
.case-slides {
  margin-bottom: 2.8rem;

  h2 { margin-bottom: 1.2rem; }
}

.slide-viewer {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: #0b0f1a;
  box-shadow: 0 18px 46px rgba(0, 0, 30, 0.22);

  .slide-stage {
    position: relative;
    aspect-ratio: 16 / 9;

    img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
      background: #0b0f1a;
    }
  }

  .slide-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    width: 46px;
    height: 46px;
    border: 1px solid rgba(255, 255, 255, 0.28);
    border-radius: 50%;
    /* Mørk baggrund så pilene er synlige – også på slides med hvid baggrund */
    background: rgba(11, 15, 26, 0.6);
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
    color: #fff;
    font-size: 1.8rem;
    line-height: 1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.35);
    transition: background 0.2s ease, transform 0.2s ease;

    &:hover { background: rgba(11, 15, 26, 0.82); }
    &:active { transform: translateY(-50%) scale(0.94); }

    &.prev { left: 0.8rem; }
    &.next { right: 0.8rem; }
  }

  .slide-counter {
    position: absolute;
    bottom: 0.8rem;
    right: 0.9rem;
    padding: 0.25rem 0.7rem;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.45);
    color: #fff;
    font-family: var(--font-mono);
    font-size: 0.75rem;
  }
}

.slide-dots {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;

  button {
    width: 9px;
    height: 9px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background: rgba(128, 128, 128, 0.4);
    cursor: pointer;
    transition: background 0.2s ease, transform 0.2s ease;

    &:hover { background: rgba(128, 128, 128, 0.7); }
    &.active { background: var(--quaternary-color); transform: scale(1.25); }
  }
}

/* Blødt cross-fade mellem slides – begge billeder overlapper og toner over i hinanden */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.55s cubic-bezier(0.4, 0, 0.2, 1), transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-fade-enter-from { opacity: 0; transform: scale(1.02); }
.slide-fade-leave-to { opacity: 0; transform: scale(0.99); }

@media (prefers-reduced-motion: reduce) {
  .slide-fade-enter-active,
  .slide-fade-leave-active { transition: none; }
}

.result-block {
  padding: 1.8rem 2rem;
  border-radius: 18px;
  background: rgba(53, 99, 255, 0.08);
  border-left: 4px solid var(--quaternary-color);

  p { margin: 0; }
}

.case-quote {
  margin: 2.8rem 0;
  padding: 2rem 2.2rem;
  border-radius: 18px;
  background: var(--card-backgroundColor);
  box-shadow: 0 6px 24px rgba(0, 0, 30, 0.08);

  blockquote {
    margin: 0 0 1.2rem;
    font-size: 1.08rem;
    line-height: 1.7;
    font-style: italic;
    opacity: 0.92;
  }

  figcaption {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    .q-person { display: flex; flex-direction: column; min-width: 0; }
    strong { font-size: 0.95rem; }
    span { font-size: 0.82rem; opacity: 0.65; margin-top: 0.15rem; }

    .q-avatar {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      object-fit: cover;
      flex-shrink: 0;
      box-shadow: 0 4px 14px rgba(0, 0, 30, 0.18);
    }
  }
}

.btn-result {
  display: inline-block;
  margin-top: 1.4rem;
  padding: 0.7rem 1.5rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  background: var(--quaternary-color);
  color: #fff;
  box-shadow: 0 10px 26px rgba(53, 99, 255, 0.32);
  transition: transform 0.25s ease, background 0.25s ease;

  &:hover { transform: translateY(-2px); background: var(--quaternary-hover-color); }
}

.case-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.25s ease;
}
.btn-ghost {
  border: 1.5px solid var(--white-black-color);
  color: var(--white-black-color);
  &:hover { background: var(--white-black-color); color: var(--primary-color); }
}

.case-nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.4rem;

  .nav-card {
    padding: 1.6rem 1.8rem;
    border-radius: 18px;
    background: var(--card-backgroundColor);
    text-decoration: none;
    color: var(--white-black-color);
    box-shadow: 0 6px 24px rgba(0, 0, 30, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    &:hover { transform: translateY(-4px); box-shadow: 0 14px 36px rgba(0, 0, 30, 0.14); }

    span { font-size: 0.82rem; font-weight: 600; opacity: 0.6; }
    strong { font-size: 1.05rem; font-weight: 700; line-height: 1.3; }

    &.next { text-align: right; align-items: flex-end; grid-column: 2; }
  }
}

@media (max-width: 800px) {
  .meta { grid-template-columns: 1fr 1fr; gap: 1.4rem; }
  .case-gallery { grid-template-columns: 1fr; }
  .case-stats { gap: 2rem; }
  .case-nav { grid-template-columns: 1fr; .nav-card.next { grid-column: 1; } }
}
</style>
