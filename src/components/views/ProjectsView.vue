<template>
  <main class="projects-page">
    <header class="projects-head">
      <span class="kicker" v-reveal>{{ ui.kicker }}</span>
      <h1 v-reveal="{ delay: 80 }">{{ ui.title }}</h1>
      <p v-reveal="{ delay: 160 }">{{ ui.sub }}</p>

      <div class="filters" v-reveal="{ delay: 240 }">
        <button
          v-for="key in filterKeys"
          :key="key"
          :class="{ active: activeFilter === key }"
          @click="setFilter(key)"
        >
          {{ pick(categoryLabels[key]) }}
        </button>
      </div>
    </header>

    <TransitionGroup name="cards" tag="div" class="projects-grid">
      <router-link
        v-for="c in filteredCases"
        :key="c.slug"
        :to="'/projekter/' + c.slug"
        class="p-card"
      >
        <div class="p-media">
          <img :src="c.cardImage || c.image" :alt="pick(c.title)" loading="lazy" />
        </div>
        <div class="p-body">
          <div class="p-tags">
            <span v-for="cat in c.categories" :key="cat">{{ pick(categoryLabels[cat]) }}</span>
            <span class="year">{{ c.year }}</span>
          </div>
          <h3>{{ pick(c.title) }}</h3>
          <p>{{ pick(c.line) }}</p>
          <div class="mix-wrap" :title="ui.mixLabel">
            <div class="mix-labels" aria-hidden="true">
              <span class="mix-design">{{ ui.mixDesign }}</span>
              <span class="mix-web">{{ ui.mixWeb }}</span>
            </div>
            <div class="mix">
              <span class="mix-dot" :style="{ left: c.mix + '%' }"></span>
            </div>
          </div>
        </div>
      </router-link>
    </TransitionGroup>
  </main>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { cases, categoryLabels } from '@/data/cases';
import { lang, pick } from '@/js/lang';
import { vReveal } from '@/js/reveal';

const route = useRoute();
const router = useRouter();

const filterKeys = ['all', 'video', 'foto', 'design', 'web', 'social', 'uxui'];
const activeFilter = ref(filterKeys.includes(route.query.filter) ? route.query.filter : 'all');

watch(
  () => route.query.filter,
  (f) => {
    activeFilter.value = filterKeys.includes(f) ? f : 'all';
  }
);

function setFilter(key) {
  activeFilter.value = key;
  router.replace({ query: key === 'all' ? {} : { filter: key } });
}

const filteredCases = computed(() =>
  activeFilter.value === 'all' ? cases : cases.filter((c) => c.categories.includes(activeFilter.value))
);

const uiStrings = {
  kicker: { dk: 'Portfolio', en: 'Portfolio', de: 'Portfolio' },
  mixLabel: { dk: 'Casens balance mellem multimediedesign og webudvikling', en: 'The case’s balance between multimedia design and web development', de: 'Balance zwischen Multimediadesign und Webentwicklung' },
  mixDesign: { dk: 'Multimediedesign', en: 'Multimedia design', de: 'Multimediadesign' },
  mixWeb: { dk: 'Webudvikling', en: 'Web development', de: 'Webentwicklung' },
  title: { dk: 'Projekter & cases', en: 'Projects & cases', de: 'Projekte & Cases' },
  sub: {
    dk: 'Udvalgt arbejde fra VIKING, DK Skønhedsklinik, InoPlay og egne projekter – med fokus på proces og resultater.',
    en: 'Selected work from VIKING, DK Skønhedsklinik, InoPlay and personal projects – focused on process and results.',
    de: 'Ausgewählte Arbeiten von VIKING, DK Skønhedsklinik, InoPlay und eigenen Projekten – mit Fokus auf Prozess und Ergebnisse.',
  },
};

const ui = computed(() => {
  const out = {};
  for (const key of Object.keys(uiStrings)) out[key] = uiStrings[key][lang.value] ?? uiStrings[key].dk;
  return out;
});
</script>

<style lang="scss" scoped>
.projects-page {
  --gold: #F5B800;
  background: var(--primary-color);
  color: var(--white-black-color);
  padding: 8rem 0 6rem;
  min-height: 100vh;
  font-family: var(--font-body);

  h1, h3 {
    font-family: var(--font-display);
  }
}

:deep(.reveal) {
  opacity: 0;
  transform: translateY(26px);
  transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}
:deep(.reveal.is-revealed) { opacity: 1; transform: none; }

.projects-head {
  max-width: 1200px;
  margin: 0 auto 2.5rem;
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
    color: var(--quaternary-color);
    margin-bottom: 0.8rem;

    &::before {
      content: '';
      width: 26px;
      height: 2px;
      background: linear-gradient(90deg, var(--gold), var(--quaternary-color));
    }
  }

  h1 {
    font-size: clamp(2.2rem, 5vw, 3.6rem) !important;
    font-weight: 800;
    letter-spacing: -0.02em;
    margin: 0 0 1rem;
  }

  p {
    font-size: 1.05rem;
    line-height: 1.65;
    opacity: 0.8;
    max-width: 38rem;
    margin: 0 0 2rem;
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
    color: var(--white-black-color);
    font-family: var(--font-mono);
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.25s ease;

    &:hover { border-color: var(--quaternary-color); color: var(--quaternary-color); }

    &.active {
      background: var(--quaternary-color);
      border-color: var(--quaternary-color);
      color: #fff;
    }
  }
}

.projects-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.8rem;
}

.cards-enter-active,
.cards-leave-active,
.cards-move {
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.cards-enter-from,
.cards-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.98);
}
.cards-leave-active { position: absolute; visibility: hidden; }

.p-card {
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  overflow: hidden;
  background: var(--card-backgroundColor);
  text-decoration: none;
  color: var(--white-black-color);
  box-shadow: 0 6px 24px rgba(0, 0, 30, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(0, 0, 30, 0.15);
    .p-media img { transform: scale(1.05); }
  }
}

.p-media {
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

.p-body {
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;

  h3 {
    font-size: 1.15rem;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.01em;
    margin: 0;
  }

  p {
    font-size: 0.92rem;
    line-height: 1.55;
    opacity: 0.75;
    margin: 0;
  }
}

.p-tags {
  display: flex;
  gap: 0.45rem;
  flex-wrap: wrap;
  align-items: center;

  span {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--quaternary-color);
    background: rgba(53, 99, 255, 0.1);
    padding: 0.22rem 0.6rem;
    border-radius: 4px;

    &.year {
      color: var(--white-black-color);
      background: rgba(128, 128, 128, 0.15);
      opacity: 0.8;
    }
  }
}

/* Mix-slider: casens balance mellem multimediedesign (guld) og webudvikling (blå) */
.mix-wrap {
  margin-top: auto;
  padding-top: 0.9rem;
}

.mix-labels {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.58rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 0.45rem;

  .mix-design { color: #A87E00; }
  .mix-web { color: var(--quaternary-color); }
}

.mix {
  position: relative;
  height: 3px;
  border-radius: 3px;
  background: linear-gradient(90deg, var(--gold), var(--quaternary-color));
  opacity: 0.9;

  .mix-dot {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--primary-color);
    border: 3px solid var(--white-black-color);
  }
}

@media (max-width: 1000px) {
  .projects-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 650px) {
  .projects-grid { grid-template-columns: 1fr; }
}
</style>
