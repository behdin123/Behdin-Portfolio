<template>
  <main>
    <div class="hero">
      <div class="section left" @click="goTo('/Content-Creation')">
        <div class="section-content">
          <h1>{{ $t('hero.contentCreationTitle') }}</h1>
          <p>
            <span>{{ $t('hero.contentCreation') }}</span><br>
            <span>{{ $t('hero.contentCreation1') }}</span><br>
            <span>{{ $t('hero.contentCreation2') }}</span>
          </p>
        </div>
      </div>
      <div class="section right" @click="goTo('/Web-Development')">
        <div class="section-content">
          <h1>{{ $t('hero.webDevTitle') }}</h1>
          <p>
            <span>{{ $t('hero.webDev') }}</span><br>
            <span>{{ $t('hero.webDev1') }}</span><br>
            <span>{{ $t('hero.webDev2') }}</span>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { defineProps } from 'vue';
import { ref, onMounted } from 'vue';

import { useRouter } from 'vue-router'
const router = useRouter()

function goTo(path) {
  router.push(path)
}


const showMoreText = ref(false);
const showMoreTextSecond = ref(false); // Ny tilstand for den anden tekst
const isScreenLarge = ref(window.innerWidth >= 1800);

const handleResize = () => {
  isScreenLarge.value = window.innerWidth >= 1800;
  if (isScreenLarge.value) {
    showMoreText.value = true;
    showMoreTextSecond.value = true; // Sikre begge tekster vises på store skærme
  } else {
    showMoreText.value = false;
    showMoreTextSecond.value = false;
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize(); // Initial check
});

defineProps({
  dark: {},
});

</script>






<style lang="scss" scoped>
@import '../css/style.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  height: 100%;
  font-family: 'Inter', sans-serif;
}

.hero {
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
}

.section {
  flex: 1;
  position: relative;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  overflow: hidden;
  transition: transform 0.4s ease, filter 0.4s ease;
  cursor: pointer;
}

/* Effekten implementeres på pseudo-elementet, som har baggrunden */
.section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  z-index: 1;
  filter: brightness(0.6);
  transition: transform 0.5s ease, filter 0.5s ease;
}

/* Hover-effekt på hele section */
.section:hover::before {
  transform: scale(1.08);
  /* zoom-effekt */
  filter: brightness(0.9);
  /* lidt lysere */
}


.section-content {
  position: relative;
  z-index: 2;
  /* background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(5px);
  border-radius: 16px;
  padding: 5rem;*/
  display: flex;
  flex-direction: column;
  align-items: center;
  text-shadow: 0 4px 12px rgba(0, 0, 50, 0.2);
  transition: transform 0.4s ease, opacity 0.4s ease;
}

.section:hover .section-content {
  transform: translateY(-4px);
  /* løft teksten en smule op */
  opacity: 1;
}

.section-content h1 {
  font-size: 2vw;
  margin-bottom: 50px !important;
  text-shadow: 5px 5px 8px rgba(0, 0, 50, 0.5);
}

.section p {
  font-size: 1vw;
  line-height: 2;
}

.section p span {
  display: block;
  font-size: 1.5vw;
  font-weight: 600;
  text-shadow: 5px 5px 8px rgba(0, 0, 50, 0.5);
}

.left::before {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('@/assets/ContentCreation.webp');
  /* Content creation background */
  background-position: top;
}

.right::before {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('@/assets/web_background1.webp');
  /* Web dev background */
  background-position: top;
}

/* Responsive Design */
@media only screen and (max-width: 1500px) {

  .section-content {
    margin-top: 80px;
    padding: 2rem;
  }

  .section-content h1 {
    font-size: 3vw;
  }

  .section-content p {
    font-size: 1.2vw;
  }
}




@media (max-width: 1000px) {
  .hero {
    flex-direction: column;
  }

  .left::before {
    /* Content creation background */
    background-position: center;
  }

  .section {
    height: 50vh;
  }

  .section-content {
    margin-top: 0;
    padding: 3rem;
  }

  .section-content h1 {
    font-size: 5vw !important;
  }

  .section-content p span {
    font-size: 2.5vw;
  }
}


@media (max-width: 700px) {
  .section-content h1 {
    font-size: 6vw !important;
  }

  .section-content p span {
    font-size: 3vw;
  }
}


@media (max-width: 550px) {
  .section-content h1 {
    font-size: 7vw !important;
    margin-bottom: 25px !important;
  }

  .section-content p span {
    font-size: 5.5vw;
  }

  .section-content {
    padding: 0;
    /* juster alt efter navbarens højde */
    margin-top: 70px;
  }

  .right .section-content {
    margin-top: 0 !important;
  }
}
</style>
