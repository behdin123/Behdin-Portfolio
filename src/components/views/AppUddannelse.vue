<template>
  <div class="Min-concept">


    <div id="min-concept-darkversion-image" class="bg-img img" :class="[{'dark-mode-cover-home': dark }]">
      <h1 data-aos="fade-right" data-aos-duration="3000"><b>{{ $t('education.institution') }}</b></h1>
      <div class="scroll-indicator">
        <span>{{ $t('education.scrollDown') }}</span>
        <div class="line"></div>
      </div>
    </div>




    <div class="container Multimediedesigner first-mode">
      <div class="webmock">
        <img data-aos="fade-right" data-aos-duration="1000" data-aos-offset="400" class="first-img"
          src="../../assets/Behdin/BehdinEASV.webp" width="100%" height="auto">
      </div>
      <div class="txt h1 h2 first-txt">
        <h3 data-aos="fade-up" data-aos-duration="1000">{{ $t('education.multimedia.startYear') }}</h3>
        <h1 data-aos="fade-up" data-aos-duration="1000">{{ $t('education.multimedia.title') }}</h1>
        <p class="colorCorrect" data-aos="fade-up" data-aos-duration="1000" v-html="$t('education.multimedia.description')"></p>
        <div id="uix" class="container">
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100" class="ui-ux ui">
            <div v-if="!dark"><img src="../../assets/icons/monitor.svg" width="100px" height="auto"></div>
            <div v-else><img src="../../assets/icons/monitor-dark-version.svg" width="100px" height="auto"></div>
            <div>
              <h2>{{ $t('education.multimedia.ui.title') }}</h2>
            </div>
            <div class="ui-x-txt margin-right">
              <p class="colorCorrect" v-html="$t('education.multimedia.ui.description')"></p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" class="ui-ux ux">
            <div v-if="!dark"><img src="../../assets/icons/ux.svg" width="80px" height="auto"></div>
            <div v-else><img src="../../assets/icons/ux-dark-version.svg" width="80px" height="auto"></div>
            <div>
              <h2>{{ $t('education.multimedia.ux.title') }}</h2>
            </div>
            <div class="ui-x-txt">
              <p class="colorCorrect" v-html="$t('education.multimedia.ux.description')"></p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="container website flex-direction" id="webudvikling">
      <div data-aos="fade-right" data-aos-duration="2000" data-aos-offset="300" class=" txt h1 h2 txt-box website-txt">
        <div>
          <h3>{{ $t('education.webdev.startYear') }}</h3>
          <h1>{{ $t('education.webdev.title') }}</h1>
          <p class="txt-two" v-html="$t('education.webdev.description1')"> </p> 
          <p class="txt-two" v-html="$t('education.webdev.description2')"></p>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="2000" data-aos-offset="300" class="code-lang image"><img
          src="../../assets/Behdin/EASV3.webp" width="100%" height="auto"></div>
    </div>

    <div class="div-padding">

      <div class="titel h1 h2">
        <div>
          <h3>{{ $t('education.uiDesign.subtitle') }}</h3>
        </div>
        <div>
          <h1 v-html="$t('education.uiDesign.title')"> </h1>
        </div>
      </div>

      <div class="container h1 h2">
        <div class="txt colorCorrect">
          <p class="p colorCorrect" v-html="$t('education.uiDesign.description')"></p>
        </div>
        <div class="min-concept-image" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="50">
          <img v-if="dark == false || dark == null" src="../../assets/Design.webp" width="250px" height="auto">
          <img v-else src="../../assets/DesignLight.webp" width="250px" height="auto">
        </div>
      </div>

      <div class="line"></div>

      <div class="titel h1 h2 no-padding">
        <div >
          <h3>{{ $t('education.uxDesign.subtitle') }}</h3>
        </div>
        <div class="h3-width">
          <h1 v-html="$t('education.uxDesign.title')"></h1>
        </div>
      </div>

      <div class="container h1 h2">
        <div class="txt colorCorrect">
          <p class="p colorCorrect" v-html="$t('education.uxDesign.description')"></p>
        </div>
        <div class="min-concept-image" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="50">
          <img v-if="dark == false || dark == null" src="../../assets/USDDark.webp" width="250px" height="auto">
          <img v-else src="../../assets/USD.webp" width="250px" height="auto">
        </div>
      </div>

      <div class="line"></div>


      <div class="titel h1 h2 no-padding">
        <div>
          <h3>{{ $t('education.agile.subtitle') }}</h3>
        </div>
        <div>
          <h1 v-html="$t('education.agile.title')"></h1>
        </div>
      </div>

      <div class="container h1 h2">
        <div class="txt colorCorrect">
          <p class="p colorCorrect" v-html="$t('education.agile.description')"></p>
        </div>
        <div class="min-concept-image" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="50">
          <img v-if="dark == false || dark == null" src="../../assets/Agil.webp" width="250px" height="auto">
          <img v-else src="../../assets/AgilLight.webp" width="250px" height="auto">
        </div>
      </div>
    </div>


  </div>
</template>




<script setup>
import { defineProps } from 'vue';

defineProps({
  dark: {},
});

</script>






<style lang="scss" scoped>
@import '../css/style.scss';


.Multimediedesigner{
    padding: 110px 8% 70px 8% !important;
}

.h3-width{
  width: 50%;
}

.img {
  position: relative;
  /* Gør det muligt for ::before at positionere sig relativt til .img */
  background-image: url('@/assets/EASV.webp') !important;
  background-size: cover;
  background-position: top;
  overflow: hidden;

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

  h1 {
    margin-left: 0;
    position: relative;
    z-index: 2;
    text-align: center;
    font-size: 55px;
    padding: 20vw 0 0 0 !important;
    text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.7);

    b {
      color: #CC9F00;
      font-weight: bold;
      position: relative;
    }
  }
}

.dark-mode-cover-home {
    &::before {
        background-color: rgba(0, 0, 0, 0.5) !important;
    }
    h1 {
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  }
}

#webudvikling {
  margin-top: 0 !important;

  .txt {
    align-items: flex-start !important;
  }
}

.Multimediedesigner {
  .txt {
    align-items: flex-start !important;
  }
}


.titel {
  padding-top: 100px;

  h1 {
    line-height: 50px;
    margin: 0 0 100px 0;
  }
}

.container {
  .txt {
    display: flex;
    align-items: center;

    p {
      width: 550px;
    }
  }
}

.div-padding {
  background: var(--primary-color);
  padding: 50px 8% 100px 8%;

  h1 {
    padding: 0 !important;
  }
}

.line {
  width: 100% !important;
}

.txt {
  .p {
    width: 60% !important;
  }
}

.Multimediedesigner .webmock {
  width: 30vw;

  .first-img {
    width: 100%;
  }
}

.no-padding{
  padding-top: 20px !important;
}

@media only screen and (max-width: 1120px) {
  .container {
    margin-top: 50px;
    flex-direction: column;

    .txt {
      p {
        width: 100%;
      }
    }
  }

  .txt .p {
    width: 100% !important;
  }

  .txt-two {
    margin-bottom: 30px;
  }

  .Multimediedesigner .webmock {
    width: 60vw;
  }

}





@media only screen and (max-width: 940px) {
  .bg-img {
    h1 {
      padding-top: 30vw !important;
    }
  }

  .h3-width{
  width: 90%;
  }

  .webmock {
    width: 100% !important;
  }

  .Multimediedesigner .webmock .first-img {
    width: 100% !important;
  }

  .titel {
    margin: 0 !important;
    padding-top: 0 !important;
  }

  .container {
    margin: 0 !important;
  }

  .line {
    width: 100%;
  }

  .min-concept-image {
    width: 200px !important;
    margin: 20px !important;
    img {
      width: 100%;
    }
  }


  .div-padding {
    padding: 50px 5% !important;
  }
}

@media only screen and (max-width: 666px) {
  .bg-img {
    h1 {
      padding-top: 40vw !important;
    }
  }
}

@media only screen and (max-width: 500px) {

  .bg-img {
    background-position: left !important;

    h1 {
      padding-top: 50vw !important;
    }
  }
}

@media only screen and (max-width: 420px) {
  .bg-img {
    h1 {
      padding-top: 60vw !important;
    }
  }

  .gylden-trekant-img {
    width: 100%;
  }
}

@media only screen and (max-width: 378px) {
  .titel {
    width: 86%;
    margin: 0 0 0 5%;
  }

  .container {
    margin: 0 0 0 5%;
    width: 90%;
  }

  .line {
    width: 100%;
  }

}
</style>