<template>
  <div class="home">

    <div id="image-dark-version-home" :class="['bg-img', 'img', { 'dark-mode-cover-home': dark }]">
      <h1 data-aos="fade-right" data-aos-duration="3000">{{ $t('home.contentCreation') }}</h1>
      <h2 data-aos="fade-right" data-aos-duration="3000">{{ $t('home.visualization') }}</h2>
      <h3 data-aos="fade-right" data-aos-duration="3000">{{ $t('home.designCommunication') }}</h3>

      <div class="scroll-indicator">
        <span>{{ $t('video.scrollDown') }}</span>
        <div class="line"></div>
      </div>

    </div>


    <div class="container Multimediedesigner VIKING">
      <div class="VideoCV-title">
        <h1>{{ $t('home.videoCVTitle') }}</h1>
        <b class="quality-note">
          {{ $t('home.qualityNote') }}
        </b>
      </div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/exRoLR61OAw?si=wDxoXbE1wvj_6uBj"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
      </iframe>
    </div>

    <!--<div class="container Multimediedesigner VIKING">
      <div class="VIKING-image">
        <img data-aos="fade-right" data-aos-duration="1000" data-aos-offset="400" class="first-img"
          src="../../assets/Behdin/Behdin-Bagheri.jpg" width="100%" height="auto">
      </div>

      <div class="txt h1 h2 first-txt">
        <h3 data-aos="fade-up" data-aos-duration="1000">{{ $t('home.since2021') }}</h3>
        <h1 data-aos="fade-up" data-aos-duration="1000">{{ $t('home.vikingTitle') }}</h1>
        
        <p data-aos="fade-up" data-aos-duration="1000" v-html="$t('home.vikingDescription1')"></p>

        <transition name="fade">
          <p v-if="showMoreText" data-aos="fade-up" data-aos-duration="1000" v-html="$t('home.vikingDescription2')"></p>
        </transition>
        
        <p class="see-mere" @click="toggleText">
          {{ showMoreText ? $t('home.seeLess') : $t('home.seeMore') }}
        </p>
      </div>
    </div>-->

    <div class="contain first-mode primary-color padding">
      <div class="informations h1">
        <div data-aos="fade-up" data-aos-duration="2000" data-aos-offset="300" class="info" id="Info-div">
          <div id="FirstIcons" class="icons">
            <img src="../../assets/icons/video.webp" width="100px" height="auto">
          </div>
          <div>
            <h2>{{ $t('home.videoTitle') }}</h2>
          </div>
          <p v-html="$t('home.videoDescription')"></p>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000" data-aos-offset="300" class="info" id="Info-div">
          <div id="FirstIcons" class="icons">
            <img src="../../assets/icons/picture.webp" width="80px" height="auto">
          </div>
          <div>
            <h2>{{ $t('home.photographyTitle') }}</h2>
          </div>
          <p v-html="$t('home.photographyDescription')"></p>
        </div>
      </div>
    </div>

    <div class="container min-concept flex-direction second-mode">
      <div data-aos="fade-right" data-aos-duration="2000" data-aos-offset="300" class="txt h1 h2 txt-box">
        <div class="colorCorrect">
          <h3>{{ $t('home.videoExperienceTitle') }}</h3>
          <h1>{{ $t('home.videoExperienceSubtitle') }}</h1>
          <p class="colorCorrect" v-html="$t('home.videoExperienceDescription1')"></p>
          <p class="colorCorrect" v-html="$t('home.videoExperienceDescription2')"></p>

          <transition name="fade">
            <p v-if="showMoreTextSecond" class="more-text colorCorrect" data-aos="fade-up" data-aos-duration="1000"
              v-html="$t('home.videoExperienceDescription3')">
            </p>
          </transition>
          <p class="see-mere colorCorrect" @click="toggleTextSecond">
            {{ showMoreTextSecond ? $t('home.seeLess') : $t('home.seeMore') }}
          </p>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="2000" data-aos-offset="300" class="gyldne-trekant image">
        <img src="../../assets/Behdin/Viking-camera.webp" width="100%" height="auto">
      </div>
    </div>

    <div class="contain first-mode">
      <div class="informations h1">
        <div data-aos="fade-up" data-aos-duration="2000" data-aos-offset="300" class="info">
          <img src="../../assets/procent dark-version.webp" width="150px" height="auto">
          <p>{{ $t('home.statistics.visualMemory') }}</p>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" data-aos-offset="300" class="info">
          <img src="../../assets/Video-dark-version.webp" width="150px" height="auto">
          <p>{{ $t('home.statistics.videoEngagement') }}</p>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" data-aos-offset="300" class="info">
          <img src="../../assets/SoMe dark-version.webp" width="150px" height="auto">
          <p>{{ $t('home.statistics.visualEffectiveness') }}</p>
        </div>
      </div>
    </div>

    <div class="container Multimediedesigner VIKING flex-row">
      <div class="VIKING-image">
        <img data-aos="fade-right" data-aos-duration="1000" data-aos-offset="400" class="first-img"
          src="../../assets/Powerpoint-slide.webp" width="100%" height="auto">
      </div>
      <div class="txt h1 h2 first-txt colorCorrect">
        <h3 data-aos="fade-up" data-aos-duration="1000">{{ $t('home.presentationDesignTitle') }}</h3>
        <h1 data-aos="fade-up" data-aos-duration="1000">{{ $t('home.presentationDesignSubtitle') }}</h1>

        <p class="colorCorrect" data-aos="fade-up" data-aos-duration="1000"
          v-html="$t('home.presentationDesignDescription1')"></p>
        <p class="colorCorrect" v-html="$t('home.presentationDesignDescription2')"></p>

        <transition name="fade">
          <p v-if="showMoreText" class="more-text colorCorrect" data-aos="fade-up" data-aos-duration="1000"
            v-html="$t('home.presentationDesignDescription3')">
          </p>
        </transition>
        <p class="see-mere colorCorrect" @click="toggleText">
          {{ showMoreText ? $t('home.seeLess') : $t('home.seeMore') }}
        </p>
      </div>
    </div>

    <div class="om-mig first-mode">
      <div data-aos="fade-right" data-aos-duration="2000" data-aos-offset="300" class="bussines-card">
        <img src="../../assets/Artworks/large/visitcard (artwork).webp" width="100%" height="100%">
      </div>
      <div class="displayFlex colorCorrect">
        <div class="om-mig-txt h1 h2 first-mode">
          <h1 data-aos="fade-up" data-aos-duration="2000" data-aos-offset="300">{{ $t('home.aboutMeTitle') }}</h1>
          <p class="colorCorrect" data-aos="fade-up" data-aos-duration="2000" data-aos-offset="300"
            v-html="$t('home.aboutMeDescription1')"></p>
          <p class="colorCorrect" data-aos="fade-up" data-aos-duration="2000" data-aos-offset="300"
            v-html="$t('home.aboutMeDescription2')"></p>
        </div>
      </div>
    </div>
  </div>



  <!--   <div class="main" :class="[{'dark-mode-cover-home-application': dark }]">
        <div class="om-mig-txt">
            <div>
                <div class="h1">
                    <h1 data-aos="fade-right" data-aos-duration="3000">{{ $t('about.title') }}</h1>
                </div>
                <div class="h1">
                    <p v-html="$t('about.description')"></p>
                </div>
            </div>
            <div class="cv-download-section">
                <div class="cv-preview">    
                    <img src="../../assets/CVLight.png" width="100%" height="auto" alt="CV Preview">
                </div>
                <div class="download-buttons">
                    <a href="/files/Behdin-Bagheri-CV-DK.pdf" target="_blank" class="cv-button btn">
                        <span class="flag-emoji">🇩🇰</span>{{ $t('about.downloadDanish') }}
                    </a>
                    <a href="/files/Behdin-Bagheri-CV-EN.pdf" target="_blank" class="cv-button btn">
                        <span class="flag-emoji">🇬🇧</span>{{ $t('about.downloadEnglish') }}
                    </a>
                </div>
            </div>
        </div>
    </div> -->


</template>

<script setup>
import { defineProps } from 'vue';
import { ref, onMounted } from 'vue';


const showMoreText = ref(false);
const showMoreTextSecond = ref(false); // Ny tilstand for den anden tekst
const isScreenLarge = ref(window.innerWidth >= 1800);

const toggleText = () => {
  showMoreText.value = !showMoreText.value;
};

const toggleTextSecond = () => { // Funktion til den anden tekst
  showMoreTextSecond.value = !showMoreTextSecond.value;
};


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



<style lang="scss">
@import '../css/style.scss';


.img {
  position: relative;
}

.VideoCV-title {
  margin-bottom: 20px;
  text-align: center;
}

.VideoCV-title h1 {
  margin-bottom: 25px !important;
}

.VideoCV-title b {
  color: var(--tertiary-color);
}

.flex-row {
  flex-direction: row !important;
  align-items: start !important;
}


.icons {
  width: 20%;
  height: auto;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
  }
}



.home {
  .bg-img {
    background-position: right !important;
  }
}

#Info-div {
  width: 35vw;
  text-align: left !important;

  h2 {
    color: #ffffff !important;
  }
}

.more-text {
  transition: opacity 0.5s ease;
}

.see-mere {
  cursor: pointer;
}

.see-mere:hover {
  opacity: 0.5;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* End state of leave */
  {
  opacity: 0;
}

.VIKING-image {
  width: 50vw;

  .first-img {
    width: 100% !important;
  }
}

.primary-color {
  background: #24353F !important;
}





@media only screen and (min-width: 1850px) {
  .container {
    h1 {
      font-size: 45px !important;
    }
  }
}

/* 4K Monitor */
@media only screen and (min-width: 1640px) {
  .img {
    background-image: url('@/assets/startimg.webp');

    h1 {
      font-size: 70px !important;
    }

    h2 {
      font-size: 70px !important;
    }

    h3 {
      font-size: 30px !important;
    }
  }


  .container {
    h1 {
      font-size: 45px;
    }
  }
}

.dark-mode-cover-home {
  background-image: url('@/assets/startpage dark mode.webp') !important;
}

.img {
  background-image: url('@/assets/startimg.webp');

  h1 {
    padding: 17vw 0 0 12%;
    margin: 0;
    font-size: 55px;
    text-align: left;
  }

  h2 {
    padding: 0 0 0 12%;
    font-size: 55px;
    color: var(--tertiary-color);
  }

  h3 {
    color: var(--tertiary-color);
    font-size: 22px;
    padding: 5px 0 0 12%;
  }
}

.VIKING {
  background: var(--secondary-color) !important;
}

.min-concept {
  padding: 110px 8% 70px 8%;
  background: var(--secondary-color);

  h1 {
    margin-bottom: 30px;
  }

  .gyldne-trekant {
    width: 40vw;
  }

  .btn {
    margin-top: 50px;
  }
}

.txt-two {
  margin: 30px 0 0 0;
}

.contain {
  display: flex;
  flex-direction: column;
  background: #24353F;
  align-items: center;

  .btn {
    margin-bottom: 80px;
  }

  .informations {
    display: flex;
    justify-content: center;

    .info {
      width: 15vw;
      margin: 80px 100px;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;

      img {
        width: 100%;
        max-width: 250px;
      }
    }
  }
}




.om-mig {
  height: auto;
  display: flex;
  flex-direction: row-reverse;
  position: relative;
  background: var(--primary-color);
  padding: 50px 8% 50px 8%;
  align-items: start !important;

  .om-mig-txt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 20%;

    h1 {
      margin-bottom: 30px;
      font-size: 45px !important;
    }
  }

  .bussines-card {
    height: 100%;

    img {
      width: 42vw;
    }
  }
}

.displayFlex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media only screen and (min-width: 2000px) {
  .webmock {
    .first-img {
      width: 24vw !important;
    }

    .second-img {
      width: 73%;
    }
  }
}

@media only screen and (max-width: 1380px) {
  .bg-img {
    h1 {
      padding-top: 19vw;
      font-size: 45px !important;
    }

    h2 {
      font-size: 45px !important;
    }

    h3 {
      font-size: 20px !important;
    }
  }

  .info {
    margin: 80px 5vw !important;
  }
}

@media only screen and (max-width: 1200px) {
  .bg-img {
    h1 {
      padding-top: 22vw;
    }
  }

}

@media only screen and (min-width: 1900px) {
  .padding {
    padding: 50px 0;
  }
}

@media only screen and (max-width: 1120px) {
  .bg-img {
    h1 {
      padding: 25vw 0 0 8%;
      font-size: 35px !important;
    }

    h2 {
      padding-left: 8%;
      font-size: 35px !important;
    }

    h3 {
      padding-left: 8%;
      font-size: 18px !important;
    }
  }

  .Multimediedesigner {
    .txt {
      margin: 0 !important;
      width: auto !important;
    }
  }

  .contain .informations {
    flex-direction: column !important;
  }

  .VIKING-image {
    width: 65vw;
  }

  #Info-div {
    width: auto !important;
    text-align: left !important;
    padding: 70px 8% 50px 8%;
    margin: 0 !important;
  }

  .contain .informations .info {
    width: 50vw;
    margin: 30px 5vw !important;
  }

  .btn {
    margin-top: 20px !important;
  }

  .flex-row {
    flex-direction: column-reverse !important;
  }

  .flex-direction {
    flex-direction: column !important;
  }

  .webmock {
    .second-img {
      display: flex !important;
      width: 90%;
      margin: 50px 0 0 0;
    }
  }

  .ui-ux {
    img {
      margin-top: 40px !important;
    }
  }

  .Multimediedesigner {
    padding: 70px 8% 50px 8%;
  }

  #uix {
    flex-direction: row;
    justify-content: space-between;
  }

  .om-mig {
    padding: 0 !important;
    flex-direction: column;

    .om-mig-txt {
      padding: 100px 7% !important;
      width: 85%;
      margin-right: 0 !important;

      h1 {
        padding: 0 !important;
      }
    }
  }

  #facts-btn {
    align-items: center;
    justify-content: center;
  }

  .txt-box {
    display: flex;
    flex-direction: column;
    width: auto !important;
  }

  .bussines-card {
    height: 100%;

    img {
      width: 100% !important;
    }
  }



  .gyldne-trekant {
    width: 65vw !important;
  }

  .code-lang {
    margin: 20px 0 50px 0 !important;
    width: 65vw !important;
    height: 80%;
    overflow: hidden;
    position: relative;
  }


  .informations {
    flex-direction: row;

    .info {
      img {
        width: 45%;
      }
    }
  }
}






.h1 {

  h1,
  h3 {
    padding-left: 0 !important;
  }
}

@media only screen and (max-width: 1020px) {
  h1 {
    padding-left: 5% !important;
  }

  h2 {
    padding-left: 5% !important;
  }

  h3 {
    padding-left: 5% !important;
  }
}


@media only screen and (max-width: 940px) {
  .bg-img {
    h1 {
      padding-top: 28vw;
    }
  }

  .image {
    width: 100% !important;
  }

  .info[data-v-48676f02] {
    margin: 40px 5vw 0 5vw !important;
  }

  .om-mig-txt {
    width: auto !important;
  }
}

@media only screen and (max-width: 780px) {
  .img {
    background-image: url('@/assets/startimg(small-version).webp') !important;
  }

  .dark-mode-cover-home {
    background-image: url('@/assets/startimg(small-version) dark-version.webp') !important;
  }

  #facts-btn {
    justify-content: center !important;
  }

  .image {
    margin: 20px 0 0 0 !important;
  }

  .website {
    padding: 50px 5% 50px 5%;
  }

  .flex-direction {
    margin: 0;
  }

  .txt-box {
    width: auto !important;
  }

  .informations {
    flex-direction: row;

    .info {
      margin: 80px 2vw !important;

      img {
        width: 70%;
      }
    }
  }

}

@media only screen and (max-width: 660px) {
  .bg-img {
    h1 {
      padding-top: 23vw;
    }
  }


  .VIKING {
    padding: 70px 5% 60px 5% !important;
  }

  .VIKING-image {
    width: 87vw !important;

  }

  #Info-div {
    padding: 70px 0 0 0 !important;
  }

  #Info-div:first-child {
    padding-top: 0 !important;
  }

  .container {
    justify-content: left;

    .ui {
      margin-right: 5%;
    }
  }

  .om-mig .om-mig-txt {
    padding: 50px 7% !important;
  }

  .Multimediedesigner[data-v-48676f02] {
    padding: 100px 5% 20px 5%;
  }

  .min-concept {
    padding: 50px 5% 70px 5% !important;
  }

  .image[data-v-48676f02] {
    margin: 20px 0 50px 0 !important;
  }

  .first-mode {
    padding: 50px 5% 50px 5%;
  }

  .image[data-v-48676f02] {
    width: 100% !important;
  }

  .website[data-v-48676f02][data-v-48676f02] {
    padding: 50px 6% 0 6% !important;
  }

  .om-mig-txt[data-v-48676f02] {
    padding: 50px 7% !important;
  }

  .min-concept[data-v-48676f02] {
    padding: 50px 5% 20px 5%;
  }

  .website .btn[data-v-48676f02] {
    margin-top: 20px !important;
  }

  .website[data-v-48676f02] {
    padding: 110px 6% 0 6% !important;
  }

  .concept-txt-box {
    flex-direction: column !important;
  }

  .btn-box {
    justify-content: flex-start;
  }

  .informations {
    flex-direction: column;

    .info {
      margin: 20px auto !important;
    }
  }
}

@media only screen and (max-width: 580px) {
  #FirstIcons {
    width: 35% !important;
  }
}

@media only screen and (max-width: 500px) {
  h1 {
    padding: 29vw 0 0 5% !important;
  }

  h2 {
    padding-left: 5% !important;
  }

  h3 {
    padding-left: 5% !important;
  }

  #uix {
    flex-direction: column;
  }

  .webmock {
    .second-img {
      width: 100%;
    }
  }

  .informations:first-child {
    margin-top: 0 !important;
  }

  .informations .info img {
    width: 90%;
  }
}

@media only screen and (max-width: 420px) {
  .img {
    background-image: url('@/assets/startimg(extrasmall-version).webp') !important;
  }

  .dark-mode-cover-home {
    background-image: url('@/assets/startimg(extrasmall-version) dark-version.webp') !important;
  }

  .bg-img {
    height: 600px !important;

    h1 {
      padding-top: 40vw !important;
    }
  }

  .min-concept .btn[data-v-48676f02] {
    margin-top: 20px !important;
  }

  .ux {
    align-items: flex-start !important;
  }

}

@media only screen and (max-width: 378px) {
  .bg-img {
    h1 {
      padding: 46vw 0 0 5% !important;
    }

    h2 {
      padding-left: 5% !important;
      font-size: 25px !important;
    }

    h3 {
      padding-left: 5% !important;
    }
  }

  .txt {
    width: 90vw !important;
  }

  .txt-two {
    width: 90vw;
  }
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('@/assets/Behdin/portræt-edited-v2.webp') !important;
  background-size: cover;
  background-position: center;
  overflow: hidden;

  p {
    width: 30vw;
  }

  .om-mig-txt {
    display: flex;
    flex-direction: column;
    max-width: 80%;
    /* Begrænser bredden */
    padding: 3% 6%;
    /* Padding fra toppen og siderne */
    height: 40%;
    justify-content: space-between;
    position: relative;
    z-index: 4;
    background: rgba(255, 255, 255, 0.8);
    /* Optional for baggrund i midten */
    border-radius: 8px;
    /* Bløde hjørner for bedre design */
    width: 25%;

    h1 {
      color: #000;
    }

    p {
      color: #000;
    }
  }

  /* Overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    /* Sort overlay med 50% gennemsigtighed */
    z-index: 1;
    /* Sørger for, at overlayet ligger over baggrunden */
  }
}

.cv-dowenload-box {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  .cv-box {
    width: 120px;
  }
}

@media only screen and (max-width: 1120px) {
  main {
    flex-direction: column;

    p {
      width: 65vw;
    }
  }

  .iframe-container {
    iframe {
      width: 80vw;
      height: 50vh;
    }

  }

  .btn-box {
    padding: 0;
    display: flex;
    justify-content: flex-end;
  }

  .cv-dowenload-box {
    flex-direction: row;
    justify-content: space-between !important;
  }

  .om-mig-txt {
    height: 300px;
    margin-bottom: 50px;
  }

  .btn-box {
    justify-content: flex-end !important;
  }
}

@media only screen and (max-width: 780px) {
  .cv-box {
    width: 20vw !important;
  }

  main {
    padding: 0 5%;

    p {
      width: auto !important;
    }
  }

  .om-mig-txt {
    padding: 65px 10% !important;
  }

  main .om-mig-txt {
    padding: 3% 8%;
    height: 50vh;
  }

  main {
    background-position: center;
  }
}

@media only screen and (max-width: 500px) {
  .cv-box {
    width: 30vw !important;
  }
}

@media only screen and (max-width: 420px) {
  .cv-dowenload-box {
    margin: 25px 0 !important;
  }

  .cv-box {
    width: 35vw !important;
  }

  .om-mig-txt {
    height: 225x px !important;
  }
}


.cv-download-section {
  display: flex;
  align-items: flex-end;
  gap: 2rem;
  margin-top: 1rem;

  .cv-preview {
    width: 120px;
    flex-shrink: 0;
  }

  .download-buttons {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
    width: 100%;
  }

  .cv-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;

    .flag-emoji {
      font-size: 1.5rem;
    }

    &.btn {
      padding: 0.5rem 1.5rem;
      align-items: center;
      display: flex;
      justify-content: space-around;
      width: 55%;
      border: none;
      border-radius: 30px;
      background-color: "#2d2d2d";
      color: white;
      cursor: pointer;
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 0.7;
        background: #24353F;
      }
    }
  }
}

@media only screen and (max-width: 780px) {
  .cv-download-section {
    flex-direction: column;
    align-items: stretch;

    .cv-preview {
      width: 70px;
    }

    .download-buttons {
      flex-direction: row;
      justify-content: center;
      gap: 1rem;
    }
  }
}

@media only screen and (max-width: 500px) {
  .cv-download-section {
    .download-buttons {
      flex-direction: column;
    }
  }

  .btn {
    font-size: 14px;
    width: 80% !important;
    margin-top: 0px !important;
  }

  .cv-download-section {
    flex-direction: row;
  }

  .om-mig-txt {
    margin-bottom: 0px !important;
  }
}
</style>