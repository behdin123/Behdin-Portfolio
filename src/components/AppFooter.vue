<template>
  <footer class="footer2">
    <div class="footer2-inner">

      <!-- Brand -->
      <div class="f-brand">
        <router-link to="/" class="f-logo">Behdin<span>Bagheri</span></router-link>
        <p class="f-tagline">{{ ui.tagline }}</p>
        <div class="f-social">
          <a href="https://www.linkedin.com/in/behdin-bagheri-21b893196/" target="_blank" rel="noopener" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-8.5c0-2.03-.04-4.64-2.83-4.64-2.83 0-3.27 2.2-3.27 4.5V24H8V8z"/></svg>
          </a>
          <a href="https://www.facebook.com/behdin.bagheri/" target="_blank" rel="noopener" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.09 24 18.1 24 12.07z"/></svg>
          </a>
          <a href="https://www.youtube.com/watch?v=exRoLR61OAw" target="_blank" rel="noopener" aria-label="Video-CV på YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"/></svg>
          </a>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="f-col" :aria-label="ui.navTitle">
        <h3>{{ ui.navTitle }}</h3>
        <router-link to="/">{{ ui.home }}</router-link>
        <router-link to="/projekter">{{ $t('navigation.projects') }}</router-link>
        <router-link to="/Uddannelse">{{ $t('navigation.education') }}</router-link>
        <router-link to="/VIDEO">{{ $t('navigation.video') }}</router-link>
        <router-link to="/galleri">{{ $t('navigation.artworks') }}</router-link>
        <router-link to="/OM-MIG">{{ $t('navigation.about') }}</router-link>
      </nav>

      <!-- Udvalgte cases -->
      <nav class="f-col" :aria-label="ui.casesTitle">
        <h3>{{ ui.casesTitle }}</h3>
        <router-link v-for="c in footerCases" :key="c.slug" :to="'/projekter/' + c.slug">
          {{ pick(c.kicker) }}
        </router-link>
      </nav>

      <!-- Kontakt -->
      <div class="f-col">
        <h3>{{ ui.contactTitle }}</h3>
        <a href="mailto:behdin2010@gmail.com">behdin2010@gmail.com</a>
        <a href="tel:+4553525239">+45 53 52 52 39</a>
        <p class="f-location">{{ ui.location }}</p>
      </div>

    </div>

    <div class="footer2-bottom">
      <span>© {{ year }} Behdin Bagheri</span>
      <span>{{ ui.builtWith }}</span>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { cases } from '@/data/cases';
import { lang, pick } from '@/js/lang';

const year = new Date().getFullYear();
const footerCases = cases.filter((c) => c.featured).slice(0, 3);

const uiStrings = {
  tagline: {
    dk: 'Visuel kommunikation og webudvikling – fra idé til målbart resultat.',
    en: 'Visual communication and web development – from idea to measurable results.',
    de: 'Visuelle Kommunikation und Webentwicklung – von der Idee zum messbaren Ergebnis.',
  },
  navTitle: { dk: 'Navigation', en: 'Navigation', de: 'Navigation' },
  home: { dk: 'Forside', en: 'Home', de: 'Startseite' },
  casesTitle: { dk: 'Udvalgte cases', en: 'Selected cases', de: 'Ausgewählte Cases' },
  contactTitle: { dk: 'Kontakt', en: 'Contact', de: 'Kontakt' },
  location: { dk: 'Esbjerg, Danmark', en: 'Esbjerg, Denmark', de: 'Esbjerg, Dänemark' },
  builtWith: { dk: 'Designet & udviklet af mig i Vue.js', en: 'Designed & built by me in Vue.js', de: 'Von mir gestaltet & entwickelt in Vue.js' },
};

const ui = computed(() => {
  const out = {};
  for (const key of Object.keys(uiStrings)) out[key] = uiStrings[key][lang.value] ?? uiStrings[key].dk;
  return out;
});
</script>

<style lang="scss" scoped>
.footer2 {
  background: #16233f;
  color: #e8ecf5;
}

.footer2-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3.5rem 1.5rem 2.5rem;
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 2.5rem;
}

.f-brand {
  .f-logo {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    text-decoration: none;
    color: #fff;

    span { color: #6f8dff; }
  }

  .f-tagline {
    margin: 0.9rem 0 1.4rem;
    font-size: 0.95rem;
    line-height: 1.6;
    opacity: 0.75;
    max-width: 20rem;
  }
}

.f-social {
  display: flex;
  gap: 0.7rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.08);
    color: #e8ecf5;
    transition: background 0.25s ease, transform 0.25s ease, color 0.25s ease;

    svg { width: 17px; height: 17px; }

    &:hover {
      background: #3563ff;
      color: #fff;
      transform: translateY(-2px);
    }
  }
}

.f-col {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;

  h3 {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #8fa3c8;
    margin: 0 0 0.4rem;
  }

  a {
    color: #e8ecf5;
    text-decoration: none;
    font-size: 0.95rem;
    opacity: 0.85;
    transition: opacity 0.2s ease, color 0.2s ease, transform 0.2s ease;
    width: fit-content;

    &:hover {
      opacity: 1;
      color: #6f8dff;
      transform: translateX(3px);
    }
  }

  .f-location {
    margin: 0;
    font-size: 0.95rem;
    opacity: 0.6;
  }
}

.footer2-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.3rem 1.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;

  span {
    font-size: 0.82rem;
    opacity: 0.55;
  }
}

@media (max-width: 1550px) {
  .footer2-inner,
  .footer2-bottom { max-width: 1040px; }
}

@media (max-width: 900px) {
  .footer2-inner {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  .f-brand { grid-column: 1 / -1; }
}

@media (max-width: 520px) {
  .footer2-inner { grid-template-columns: 1fr; }
  .footer2-bottom { flex-direction: column; }
}
</style>
