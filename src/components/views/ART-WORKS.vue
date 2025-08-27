<template>
    <div class="ART WORKS">
        <div id="Art-works-dark-version-image" class="bg-img img" :class="[{ 'dark-mode-cover-home': dark }]">
            <h1 data-aos="fade-right" data-aos-duration="3000">{{ $t('artworks.title') }}</h1>
            <div class="scroll-indicator">
                <span>{{ $t('artworks.scrollDown') }}</span>
                <div class="line"></div>
            </div>
        </div>


        <!-- Scroll Navigation Buttons -->
        <div class="scroll-buttons primary">
            <button @click="scrollToSection('section2')">
                <p>{{ $t('artworks.navigation.workPhotos') }}</p>
                <img src="../../assets/photo.webp" alt="">
            </button>
            <button @click="scrollToSection('section1')">
                <p>{{ $t('artworks.navigation.officePhotos') }}</p>
                <img src="../../assets/photo.webp" alt="">
            </button>
            <button @click="scrollToSection('section3')">
                <p>{{ $t('artworks.navigation.logoBusinessCard') }}</p>
                <img src="../../assets/logoSymbol.webp" alt="">
            </button>
            <button @click="scrollToSection('section4')">
                <p>{{ $t('artworks.navigation.webdesign') }}</p>
                <img src="../../assets/WebDesign.webp" alt="">
            </button>
            <button @click="scrollToSection('section5')">
                <p>{{ $t('artworks.navigation.multimediaPhotos') }}</p>
                <img src="../../assets/photo.webp" alt="">
            </button>
        </div>

        <div id="section2" class="IMGSlide secondary">
            <div class="title-box">
                <h1>{{ $t('artworks.sections.photographyHighlights') }}</h1>
                <b>{{ $t('artworks.sections.workPhotosSubtitle') }}</b>
            </div>
            <ImageSlider loading="lazy" :images="forthImages" />
        </div>

        <div id="section1" class="IMGSlide primary">
            <div class="title-box">
                <h1>{{ $t('artworks.sections.photographyHighlights') }}</h1>
                <b>{{ $t('artworks.sections.officePhotosSubtitle') }}</b>
            </div>
            <ImageSlider loading="lazy" :images="firstImages" />
        </div>

        <div id="section3" class="IMGSlide secondary">
            <div class="title-box">
                <h1>{{ $t('artworks.sections.logoBusinessCard.title') }}</h1>
                <b>{{ $t('artworks.sections.logoBusinessCard.subtitle') }}</b>
            </div>
            <ImageSlider loading="lazy" :images="secondImages" />
        </div>

        <div id="section4" class="IMGSlide primary">
            <div class="title-box">
                <h1>{{ $t('artworks.sections.webDesign.title') }}</h1>
                <b>{{ $t('artworks.sections.webDesign.subtitle') }}</b>
            </div>
            <ImageSlider loading="lazy" :images="thirdImages" />
        </div>

        <div class="title secondary">
            <div class="title-box">
                <h1>{{ $t('artworks.sections.webDesign.title') }}</h1>
            </div>
            <div class="xd-works h1">
                <div class="xd-img"><img src="../../assets/Artworks/adobe xd framework.webp" width="100%"></div>
                <div class="xd-txt">
                    <h1>{{ $t('artworks.sections.webDesign.adobeXD.title') }}</h1>
                    <p class="colorCorrect">{{ $t('artworks.sections.webDesign.adobeXD.description') }}</p>
                </div>
            </div>
        </div>

        <div id="section5" class="IMGSlide primary">
            <div class="title-box">
                <h1>{{ $t('artworks.sections.multimediaPhotos.title') }}</h1>
                <b>{{ $t('artworks.sections.multimediaPhotos.subtitle') }}</b>
            </div>
            <ImageSlider loading="lazy" :images="fifthImages" />
        </div>

        <div class="title secondary">
            <div class="title-box">
                <h1>{{ $t('artworks.sections.posters') }}</h1>
            </div>
            <div class="poster-box">
                <div class="poster">
                    <img src="../../assets/Plaketer (artwork).webp" width="100%" height="auto">
                </div>
            </div>
        </div>

    </div>

</template>





<script setup>
import { defineProps } from 'vue';
import ImageSlider from '@/components/ImageSlider.vue';

const firstImages = [
    { src: require('@/assets/VIKING/IT6.webp'), alt: 'Image 1' },
    { src: require('@/assets/VIKING/HR1.webp'), alt: 'Image 2' },
    { src: require('@/assets/VIKING/IT3.webp'), alt: 'Image 3' },
    { src: require('@/assets/VIKING/HR2.webp'), alt: 'Image 4' },
    { src: require('@/assets/VIKING/IT7.webp'), alt: 'Image 5' },
    { src: require('@/assets/VIKING/IT5.webp'), alt: 'Image 6' },
    { src: require('@/assets/VIKING/HR3.webp'), alt: 'Image 7' },
];

const secondImages = [
    { src: require('@/assets/Artworks/large/logo (artwork).webp'), alt: 'Image 1' },
    { src: require('@/assets/Artworks/large/visitcard (artwork).webp'), alt: 'Image 2' },
    { src: require('@/assets/Artworks/large/logo fit (artwork).webp'), alt: 'Image 3' },
    { src: require('@/assets/Artworks/large/fitshape visitcard (artwork).webp'), alt: 'Image 4' },
];

const thirdImages = [
    { src: require('@/assets/Artworks/small/DSK_1.webp'), alt: 'Image 1' },
    { src: require('@/assets/Artworks/small/DSK_2.webp'), alt: 'Image 2' },
    { src: require('@/assets/Artworks/small/DSK_3.webp'), alt: 'Image 3' },
    { src: require('@/assets/Artworks/large/xd webdesign-two-one (artwork).webp'), alt: 'Image 4' },
];


const forthImages = [
    { src: require('@/assets/VIKING/PPE5.webp'), alt: 'Image 1' },
    { src: require('@/assets/VIKING/Sy2.webp'), alt: 'Image 4' },
    { src: require('@/assets/VIKING/Lager1.webp'), alt: 'Image 4' },
    { src: require('@/assets/VIKING/Rely5.webp'), alt: 'Image 2' },
    { src: require('@/assets/VIKING/Lager4.webp'), alt: 'Image 4' },
    { src: require('@/assets/VIKING/PPE3.webp'), alt: 'Image 3' },
    { src: require('@/assets/VIKING/Rely4.webp'), alt: 'Image 4' },
    { src: require('@/assets/VIKING/Harbor4.webp'), alt: 'Image 4' },
    { src: require('@/assets/VIKING/PPE1.webp'), alt: 'Image 4' },
    { src: require('@/assets/VIKING/Rely3.webp'), alt: 'Image 4' },
    { src: require('@/assets/VIKING/Harbor3.webp'), alt: 'Image 4' },
    { src: require('@/assets/VIKING/Lager6.webp'), alt: 'Image 4' },
    { src: require('@/assets/VIKING/Lager5.webp'), alt: 'Image 4' },
];

const fifthImages = [
    { src: require('@/assets/photos/IMG_3821.CR2.webp'), alt: 'Image 1' },
    { src: require('@/assets/photos/IMG_3710.CR2.webp'), alt: 'Image 2' },
    { src: require('@/assets/photos/content-page1.webp'), alt: 'Image 3' },
];


// Funktion til at scrolle til sektion
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - window.innerHeight + element.offsetHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}


defineProps({
    dark: {},
});

</script>


<style lang="scss" scoped>
@import '../css/style.scss';

.IMGSlide {
    padding: 70px 5%;
    display: flex;
    flex-direction: column;
    align-items: center;

    b {
        color: var(--tertiary-color);
        margin-top: 20px;
    }

    .title-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 30px;
    }
}

.primary {
    background: var(--primary-color) !important;
}

.secondary {
    background: var(--secondary-color) !important;
}


.img {
    position: relative;
    /* Gør det muligt for ::before at positionere sig relativt til .img */
    background-image: url('@/assets/Behdin/CameraBG.webp') !important;
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
        background-color: rgba(0, 0, 0, 0.1);
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
        text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);

        b {
            color: #CC9F00;
            font-weight: bold;
            position: relative;
        }
    }
}



.scroll-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
    padding: 70px 0;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    flex-wrap: wrap;

    button {
        background-color: var(--primary-hover-color);
        color: #000;
        border: none;
        padding: 15px 40px;
        border-radius: 50px;
        cursor: pointer;
        transition: background-color 0.3s;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
        transition: transform 0.3s ease;
        margin: 20px 12px;
        font-size: 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-grow: 1;
        max-width: 300px;
        p{
         font-weight: bold !important;
        }

        &:hover {
            transform: scale(1.05);
        }

        &:focus {
            outline: none;
            background-color: var(--primary-hover-color);
        }
    }
    img{
        width: 100%;
        max-width: 40px;
    }
}

.gallery {
    margin-bottom: 50px;
}

.img2 {
    width: 23vw;
}

.dark-mode-cover-home {
    &::before {
        background-color: rgba(0, 0, 0, 0.5) !important;
    }

    h1 {
        text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
    }
}

@media only screen and (max-width: 1020px) {
    h1 {
        padding-left: 0 !important;
    }
}

h1 {
    color: var(--title-color);
}

.gallery img {
    transition: 0.5s;
}

.gallery img:hover {
    filter: drop-shadow(1px 5px 3px #24353F);
    transform: scale(1.08);
}

.title {
    padding: 70px 12% 70px 12%;

    .title-box {
        display: flex;
        flex-direction: column;
        margin-bottom: 80px;
        align-items: center;

        b {
            margin-top: 25px;
            color: var(--tertiary-color);
        }
    }
}

.gallery {
    display: flex;
    justify-content: space-between;

    .img1 {
        width: 30vw;
        margin-bottom: 110px;
    }

    .line {
        content: "";
        height: 60vh;
        width: 1px;
        background: var(--title-color);
        margin-top: 0 !important;
    }
}

.webdeign-box {
    flex-wrap: wrap;
}

.xd-works {
    display: flex;
    justify-content: space-between;

    .xd-img {
        width: 45vw;
    }

    .xd-txt {
        width: 24vw;
        margin-left: 10px;
        display: flex;
        flex-direction: column;

    }
}

.poster {
    width: 65vw;
}

.poster-box {
    display: flex;
    justify-content: center;
}

@media only screen and (max-width: 1600px) {
    .slider-container {
        max-width: 900px;
    }
}


@media only screen and (max-width: 1200px) {
    .img {
        background-image: url("@/assets/startimg(extrasmall-version).webp");
    }

    .title {
        padding: 70px 5% 70px 5% !important;
    }

    .gallery {
        display: flex;
        justify-content: space-between;

        .img1 {
            width: 40vw;
            margin-bottom: 110px;
        }
    }
}

@media only screen and (max-width: 768px) {
    .line {
        display: none !important;
    }

    .gallery {
        flex-direction: column;
        align-items: center;

        .img1 {
            width: 90vw;
        }
    }

    .img2 {
        width: 87vw !important;
    }

    .poster {
        width: 87vw;
    }

    .title {
        .title-box {
            align-items: flex-start !important;
        }
    }

    .xd-works .xd-txt {
        margin-left: 0 !important;
    }

    .gallery .img1 {
        margin-bottom: 50px !important;
    }

    .title {
        padding: 50px 5% 70px 5%;
    }

    #app .bg-img {
        background-position: left;
    }

    .title-box {
        margin-bottom: 20px !important;
    }
}


@media only screen and (max-width: 680px) {
    .img {
        h1{
            padding-top: 50vw !important;
        }
    }

    .xd-works {
        flex-direction: column-reverse;

        .xd-img {
            width: 87vw !important;

            img {
                width: 100%;
            }
        }
    }

    .xd-txt {
        width: 87vw !important;
        margin-bottom: 50px;
    }

    .IMGSlide {
        padding: 70px 5%;
        b {
            text-align: center;
        }
    }
}

    @media only screen and (max-width: 550px) {
        .xd-works {
            img {
                width: 99vw;
            }
        }
    }

    @media only screen and (max-width: 500px) {
        h1 {
            padding: 0 !important;
        }

        .IMGSlide {
            align-items: flex-start !important;

            .title-box {
                align-items: flex-start !important;
            }
            b{
                text-align: left;
            }
        }

        

    }</style>