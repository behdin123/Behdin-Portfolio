<template>
    <div id="video-dark-version-image" class="bg-img img" :class="[{ 'dark-mode-cover-home': dark }]">
        <h1 data-aos="fade-right" data-aos-duration="3000">{{ $t('webDev.mainTitle') }}</h1>
        <h2>{{ $t('webDev.mainSubtitle') }}</h2>
        <div class="scroll-indicator">
            <span>{{ $t('webDev.scrollDown') }}</span>
            <div class="line"></div>
        </div>
    </div>

    <section ref="carouselRef" class="swiper-section">
        <h2 class="title">{{ $t('webDev.swiperTitle') }}</h2>
        <b>{{ $t('webDev.frontendDev') }}</b>

        <!-- Hint -->
        <transition name="fade">
            <div class="swipe-hint" v-if="showHint">
                <img src="@/assets/icons/grab.webp" alt="Swipe hint" />
            </div>
        </transition>

        <Swiper :modules="[EffectCoverflow, Pagination]" effect="coverflow" grabCursor="true" centeredSlides="true"
            slidesPerView="auto" :coverflowEffect="{
                rotate: 30,
                stretch: 0,
                depth: 150,
                modifier: 1.2,
                slideShadows: true
            }" pagination class="mySwiper">
            <SwiperSlide v-for="(project, index) in projects" :key="index">
                <picture>
                    <!-- موبایل: نسخه عمودی -->
                    <source media="(max-width: 700px)" :srcset="project.imageMobile" />
                    <!-- دیفالت: نسخه لنداسکیپ -->
                    <img :src="project.image" :alt="project.name" />
                </picture>
            </SwiperSlide>
        </Swiper>
    </section>

    <section class="ux-ui-split-section" data-aos="fade-up">
        <h2 class="title">{{ $t('webDev.uxUiSectionTitle') }}</h2>
        <div class="content-wrapper">
            <div class="ux-box" data-aos="fade-right">
                <h3 class="icon-title">
                    <img src="@/assets/icons/ux.webp" alt="UX Icon" />
                    {{ $t('webDev.uxTitle') }}
                </h3>
                <p v-html="$t('webDev.uxText')"></p>
            </div>
            <div class="ui-box" data-aos="fade-left">
                <h3 class="icon-title">
                    <img src="@/assets/icons/monitor.webp" alt="Visual Icon" />
                    {{ $t('webDev.uiTitle') }}
                </h3>
                <p v-html="$t('webDev.uiText')"></p>
            </div>
        </div>


        <!-- Divider line -->
        <div class="section-divider" role="separator" aria-hidden="true"></div>

        <!-- Grid of Adobe tools -->
        <h2 class="title">{{ $t('webDev.codeUniverseTitle') }}</h2>
        <div class="logo-grid tool-grid">
            <div class="logo-item tool" v-for="(tool, index) in adobeTools" :key="'tool-' + index" data-aos="zoom-in">
                <div class="tool-logo-wrapper">
                    <img :src="tool.src" :alt="tool.alt" />
                </div>
                <span class="tool-name">{{ tool.alt }}</span>
            </div>
        </div>
    </section>


    <section class="xd-section">
        <h2 class="title">{{ $t('webDev.xdSectionTitle') }}</h2>
        <b>{{ $t('webDev.xdSectionSubtitle') }}</b>

        <!-- Logos row -->
        <div class="design-tool-logos">
            <img class="XDLogo" src="@/assets/Logo/AdobeXD.webp" alt="Adobe XD Logo" />
            <img class="FigmaLogo" src="@/assets/Logo/Figma.webp" alt="Figma Logo" />
        </div>

        <Swiper :modules="[EffectCoverflow, Pagination]" effect="coverflow" grabCursor="true" centeredSlides="true"
            slidesPerView="auto" :coverflowEffect="{
                rotate: 30,
                stretch: 0,
                depth: 150,
                modifier: 1.2,
                slideShadows: true
            }" pagination class="mySwiper">
            <SwiperSlide v-for="(project, index) in projectsXD" :key="index">
                <img :src="project.image" :alt="project.name" />
            </SwiperSlide>
        </Swiper>
    </section>


    <section class="ux-ui-split-section splitBackGround" data-aos="fade-up">
        <h2 class="title">{{ $t('webDev.designProcessSectionTitle') }}</h2>
        <div class="content-wrapper">
            <div class="ux-box" data-aos="fade-right">
                <h3 class="icon-title">
                    <img src="@/assets/icons/Iterative.webp" alt="Design Thinking Icon" />
                    {{ $t('webDev.designThinkingTitle') }}
                </h3>
                <p v-html="$t('webDev.designThinkingText')"></p>
            </div>
            <div class="ui-box" data-aos="fade-left">
                <h3 class="icon-title">
                    <img src="@/assets/icons/userDark.webp" alt="Target Group Icon" />
                    {{ $t('webDev.targetedSolutionsTitle') }}
                </h3>
                <p v-html="$t('webDev.targetedSolutionsText')"></p>
            </div>
        </div>
    </section>


    <!-- Data Tracking & CRO (GA4, Hotjar, Microsoft Clarity) -->
    <section class="social-section" data-aos="fade-up">
        <div class="text-col">
            <h2 class="section-title">{{ $t('webDev.dataTrackingTitle') }}</h2>
            <p v-html="$t('webDev.dataTrackingP1')"></p>
            <p v-html="$t('webDev.dataTrackingP2')"></p>
            <p v-html="$t('webDev.dataTrackingP3')"></p>
        </div>

        <!-- Right side visual -->
        <div class="media-col">
            <!-- جایگزین کن با گرافیک خودت -->
            <img src="@/assets/GA1.webp" alt="GA4 + Hotjar/Clarity CRO overview" />
        </div>
    </section>


    <section class="ux-ui-split-section splitBackGround" data-aos="fade-up">
        <h2 class="title">{{ $t('webDev.abTestingGdprTitle') }}</h2>
        <div class="content-wrapper">
            <div class="ux-box" data-aos="fade-right">
                <h3 class="icon-title">
                    <img src="@/assets/Logo/ABTesting.webp" alt="A/B Testing Icon" />
                    {{ $t('webDev.abTestingTitle') }}
                </h3>
                <p>{{ $t('webDev.abTestingP') }}</p>
            </div>
            <div class="ui-box" data-aos="fade-left">
                <h3 class="icon-title">
                    <img src="@/assets/Logo/gdpr.webp" alt="GDPR Icon" />
                    {{ $t('webDev.gdprTitle') }}
                </h3>
                <p>{{ $t('webDev.gdprP') }}</p>
            </div>
        </div>

        <!-- Divider line -->
        <div class="section-divider" role="separator" aria-hidden="true"></div>

        <!-- CMS tools -->
        <h2 class="title">{{ $t('webDev.cmsToolsTitle') }}</h2>
        <div class="logo-grid tool-grid cms-grid">
            <div class="logo-item tool" v-for="(tool, index) in cmsTools" :key="'cms-' + index" data-aos="zoom-in">
                <div class="tool-logo-wrapper">
                    <img :src="tool.src" :alt="tool.alt" />
                </div>
                <span class="tool-name">{{ tool.alt }}</span>
            </div>
        </div>
    </section>



    <!-- Full Stack & Backend Development -->
    <section class="social-section" data-aos="fade-up">
        <div class="text-col">
            <h2 class="section-title">{{ $t('webDev.fullstackSectionTitle') }}</h2>

            <!-- Logos row -->
            <div class="tool-logos sm-logos">
                <img src="@/assets/Logo/NodeJs.webp" alt="Node.js" />
                <img src="@/assets/Logo/expressJs.webp" alt="Express.js" />
                <img src="@/assets/Logo/MonogDB.webp" alt="MongoDB" />
                <img src="@/assets/Logo/Security.webp" alt="JWT" />
            </div>

            <p v-html="$t('webDev.fullstackText1')"></p>
            <p v-html="$t('webDev.fullstackText2')"></p>
            <p v-html="$t('webDev.fullstackText3')"></p>
        </div>

        <!-- Right side visual -->
        <div class="media-col">
            <img src="@/assets/functionsHashstring.webp" alt="Backend Architecture" />
        </div>
    </section>




    <section class="backend-section" data-aos="fade-up">
        <h2 class="title">{{ $t('webDev.backendSectionTitle') }}</h2>

        <div class="content-wrapper">
            <div class="backend-card" data-aos="fade-right">
                <h3>{{ $t('webDev.backendCard1Title') }}</h3>
                <p v-html="$t('webDev.backendCard1Text')"></p>
            </div>

            <div class="backend-card" data-aos="fade-up">
                <h3>{{ $t('webDev.backendCard2Title') }}</h3>
                <p v-html="$t('webDev.backendCard2Text')"></p>
            </div>

            <div class="backend-card" data-aos="fade-left">
                <h3>{{ $t('webDev.backendCard3Title') }}</h3>
                <p v-html="$t('webDev.backendCard3Text')"></p>
            </div>
        </div>
    </section>


    <!-- Enterprise Platforms – ServiceNow & Dynamics 365 -->
    <section class="social-section" data-aos="fade-up">
        <div class="text-col">
            <h2 class="section-title">{{ $t('webDev.enterpriseSectionTitle') }}</h2>
            <p v-html="$t('webDev.enterpriseText1')"></p>
            <p v-html="$t('webDev.enterpriseText2')"></p>
            <p v-html="$t('webDev.enterpriseText3')"></p>
        </div>

        <!-- Right side visual -->
        <div class="media-col">
            <img src="@/assets/Backend/Dynamics-ServiceNow.webp" alt="ServiceNow & Dynamics 365 overview" />
        </div>
    </section>

</template>




<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { ref, onMounted } from 'vue'
import { defineProps } from 'vue';

defineProps({
    dark: {},
});

const showHint = ref(false)
const carouselRef = ref(null)

const projects = [
    {
        name: 'My Portfolio',
        image: new URL('@/assets/behdin3.webp', import.meta.url).href,          // لنداسکیپ
        imageMobile: new URL('@/assets/screenshots/webMob2.webp', import.meta.url).href // پرتره/ورتیكال
    },
    {
        name: 'DK Skønhedsklinik',
        image: new URL('@/assets/DSK2.webp', import.meta.url).href,
        imageMobile: new URL('@/assets/screenshots/webMob1.webp', import.meta.url).href
    },
    {
        name: 'DK Skønhedsklinik',
        image: new URL('@/assets/DSK3.webp', import.meta.url).href,
        imageMobile: new URL('@/assets/screenshots/webMob3.webp', import.meta.url).href
    },
]


const projectsXD = [
    {
        name: 'Homepage Wireframe',
        image: new URL('@/assets/screenshots/Portfolio.webp', import.meta.url).href
    },
    {
        name: 'Booking UX Flow',
        image: new URL('@/assets/screenshots/NemTakeAway.webp', import.meta.url).href
    },
    {
        name: 'Responsive Layout',
        image: new URL('@/assets/screenshots/VIKING_PPE.webp', import.meta.url).href
    },
    {
        name: 'Homepage Wireframe',
        image: new URL('@/assets/screenshots/Figma1.webp', import.meta.url).href
    },
    {
        name: 'Homepage Wireframe',
        image: new URL('@/assets/screenshots/Figma2.webp', import.meta.url).href
    },
    {
        name: 'Homepage Wireframe',
        image: new URL('@/assets/screenshots/Figma3.webp', import.meta.url).href
    }
]


const adobeTools = ref([
    { src: new URL('@/assets/Logo/HTML.webp', import.meta.url).href, alt: 'HTML' },
    { src: new URL('@/assets/Logo/CSS.webp', import.meta.url).href, alt: 'CSS' },
    { src: new URL('@/assets/Logo/JS11.webp', import.meta.url).href, alt: 'JavaScript' },
    { src: new URL('@/assets/Logo/Vue.webp', import.meta.url).href, alt: 'Vue.js' },
    { src: new URL('@/assets/Logo/React.webp', import.meta.url).href, alt: 'React' },
    { src: new URL('@/assets/Logo/swagger.webp', import.meta.url).href, alt: 'Swagger' },
    { src: new URL('@/assets/Logo/Mocha.webp', import.meta.url).href, alt: 'Mocha' },
    { src: new URL('@/assets/Logo/Chai.webp', import.meta.url).href, alt: 'Chaii' },
    { src: new URL('@/assets/Logo/Git.webp', import.meta.url).href, alt: 'Git' }
])


const cmsTools = [
    { src: new URL('@/assets/Logo/webflow.webp', import.meta.url).href, alt: 'Webflow' },
    { src: new URL('@/assets/Logo/Framer.avif', import.meta.url).href, alt: 'Framer' },
    { src: new URL('@/assets/Logo/WordPress.webp', import.meta.url).href, alt: 'WordPress' },
]

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            const entry = entries[0]
            if (entry.isIntersecting) {
                // نمایش با تأخیر ۲ ثانیه
                setTimeout(() => {
                    showHint.value = true

                    // حذف با fade بعد از ۴ ثانیه
                    setTimeout(() => {
                        showHint.value = false
                    }, 4000)

                }, 2000)

                observer.disconnect()
            }
        },
        { threshold: 0.5 }
    )

    if (carouselRef.value) {
        observer.observe(carouselRef.value)
    }
})



</script>





<style scoped>
@import '../css/style.scss';

.img {
    position: relative;
    /* Gør det muligt for ::before at positionere sig relativt til .img */
    background-image: url('@/assets/webBackground3.webp') !important;
    background-size: cover;
    background-position: center !important;
    overflow: hidden;
    height: 100vh !important;

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

    h1,
    h2 {
        margin-left: 0;
        position: relative;
        z-index: 2;
        text-align: center;
        font-size: 55px;
        padding: 12vw 0 0 0 !important;
        text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
    }

    h2 {
        padding: 0 !important;
        color: #fff;
        font-size: 25px !important;
    }
}


.swiper-section {
    padding: 5rem 0;
    background: var(--background-color);
    text-align: center;
    color: white;
    position: relative;
}

.title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.mySwiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
}

.swiper-slide {
    background-position: center;
    background-size: cover;
    width: 70vw;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

.swiper-slide img {
    width: 100%;
    height: auto;
    border-radius: 30px;
}

.swipe-hint {
    position: absolute;
    bottom: 400px;
    left: 70%;
    transform: translateX(-50%);
    width: 100px;
    z-index: 10;
    animation: swipeAnim 4s ease-in-out infinite;
    opacity: 0.7;

    img {
        width: 100%;
        height: auto;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

@keyframes swipeAnim {
    0% {
        transform: translateX(-50%) translateX(0);
    }

    50% {
        transform: translateX(-50%) translateX(-40px);
    }

    100% {
        transform: translateX(-50%) translateX(0);
    }
}



.icon-title {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.5rem;
    color: #0b192e;
    margin-bottom: 1rem;
}

.icon-title img {
    width: 60px;
    height: 60px;
    object-fit: contain;
}

.ux-ui-split-section {
    background: var(--gradient-backgroundColor);
    color: #fff;
    padding: 5rem 2rem;
    font-family: 'Vazirmatn', sans-serif;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.ux-ui-split-section .title {
    text-shadow: 0 5px 8px rgba(0, 0, 0, .2);
    font-size: 2.5rem;
    margin-bottom: 3rem !important;
}

.content-wrapper {
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 3rem;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
    text-align: left;
}

.ux-box,
.ui-box {
    background: var(--block-backgroundColor);
    border-radius: 20px;
    padding: 2rem;
    flex: 1 1 400px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.ux-box:hover,
.ui-box:hover {
    transform: translateY(-5px);
}

.ux-box h3,
.ui-box h3 {
    font-size: 1.5rem;
    color: var(--text-color);
    margin-bottom: 1rem;
}

.ux-box p,
.ui-box p {
    font-size: 1.1rem;
    line-height: 1.9rem;
    color: var(--text-color);
}

.logo-item {
    min-width: 130px !important;
}

.logo-item.tool img {
    max-height: 80px;
    max-width: 80px;
    border-radius: 0 !important;
}



.xd-section {
    padding: 5rem 0;
    background: var(--background-color);
    /* tar tar az swiper ghabli */
    text-align: center;
    color: white;
    position: relative;
}

.xd-section .title {
    font-size: 2.5rem;
    margin-bottom: 3rem;
}

.xd-section .mySwiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
}

.xd-section .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 70vw;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    background: #222;
}

.xd-section .swiper-slide img {
    width: 100%;
    height: auto;
    border-radius: 30px;
}

.design-tool-logos {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    /* فاصله بین لوگوها */
    margin: 2rem 0 0 0;
    /* فاصله بالا و پایین */
}

.design-tool-logos img {
    height: 60px;
    width: auto;
    object-fit: contain;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
    transition: transform 0.2s ease;
}

.design-tool-logos img:hover {
    transform: scale(1.05);
}

.XDLogo {
    border-radius: 12px;
}


@media (max-width: 700px) {
    .design-tool-logos {
        gap: 1.5rem;
        margin: 1.5rem 0;
    }

    .design-tool-logos img {
        height: 45px;
    }
}




.splitBackGround {
    background: var(--split-backgroundColor) !important;
}


.tool-logos {
    img {
        filter: none !important;
    }
}

.sm-logos img {
    width: 90px !important;
    height: 90px !important;
}




.backend-section {
    background: var(--gradient-backgroundColor);
    color: white;
    padding: 5rem 2rem;
    text-align: center;

    .title {
        margin-bottom: 3rem !important;
    }

    .content-wrapper {
        max-width: 1300px;
    }
}

.backend-section .section-icon {
    width: 50px;
    height: 50px;
    margin-bottom: -10px;
}

.backend-card {
    background: var(--block-backgroundColor);
    border-radius: 16px;
    padding: 2rem;
    flex: 1 1 300px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    h3,
    p {
        color: var(--text-color);
    }
}

.backend-card:hover {
    transform: translateY(-6px);
}

.text-col {
    padding-right: 150px;
}


@media (max-width: 1500px) {
    .img {
        h1 {
            font-size: 40px !important;
            padding: 10vw 0 0 0 !important;
        }

        h2 {
            font-size: 20px !important;
        }
    }

    .swiper-slide {
        img {
            border-radius: 25px !important;
        }
    }

    .title {
        margin-bottom: .5rem !important;
    }

    .swipe-hint {
        bottom: 300px;
        left: 75%;
        width: 100px;
    }

    .xd-section .swiper-slide img {
        border-radius: 25px !important;
    }

    .xd-section .title {
        margin-bottom: .5rem !important;
    }

    .social-section {
        padding: 6rem 5% 6rem 10%;
    }

    .media-col {
        width: 40vw;
    }

    .sm-logos img {
        width: 70px !important;
        height: 70px !important;
    }

    .text-col {
        padding-right: 50px;
    }

}


@media (max-width: 1000px) {
    .img {
        background-image: url('@/assets/webBackgroundMobile.webp') !important;

        h1 {
            font-size: 40px !important;
            padding: 140px 0 0 0 !important;
        }
    }

    .swiper-slide {
        width: 85vw;

        img {
            border-radius: 20px !important;
        }
    }

    .swipe-hint {
        bottom: 300px;
        left: 85%;
        width: 70px;
    }

    .xd-section .swiper-slide {
        width: 85vw;
    }

    .xd-section .swiper-slide img {
        border-radius: 20px !important;
    }

    .media-col {
        width: 80vw;
    }

    .swiper-slide {
        box-shadow: none !important;
    }

}




@media (max-width: 700px) {
    .img h1 {
        font-size: 30px !important;
        padding: 140px 0 0 0 !important;
    }

    .swiper-slide {
        width: 80vw;
    }

    .swipe-hint {
        bottom: 270px;
        left: 85%;
        width: 70px;
    }

    /* احتیاط: جلوی اسکرول افقی ریز رو می‌گیره */
    .xd-section {
        overflow-x: hidden;
    }

    .xd-section .mySwiper {
        padding-top: 24px;
        padding-bottom: 24px;
    }

    .xd-section .swiper-slide {
        width: 78vw;
        /* کمی کمتر از عرض ویوپورت تا بیرون نزنه */
        max-width: 420px;
        /* اختیاری */
        aspect-ratio: 9 / 16;
        /* قاب عمودی */
        height: auto;
        /* ارتفاع از aspect-ratio می‌آد */
        overflow: hidden;
        /* کراپ شدن داخل قاب */
        border-radius: 25px;
        box-shadow: none;
        /* اگر سایه باعث بیرون‌زدگی می‌شه */
        background: #222;
        /* پس‌زمینه‌ی یکدست پشت عکس */
    }

    /* تصویر داخل اسلاید کل قاب عمودی رو پر می‌کنه و کراپ می‌شه */
    .xd-section .swiper-slide img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        /* پر کردن قاب با حفظ نسبت و کراپ دو طرف */
        object-position: center;
        /* یا top center اگر بالا مهم‌تره */
        display: block;
        border-radius: inherit;
    }

    .ux-ui-split-section .title {
        font-size: 2rem;
    }

    .ux-box,
    .ui-box {
        padding: 1.5rem;
    }

    .ux-box h3,
    .ui-box h3 {
        font-size: 1.3rem;
    }

    .ux-box p,
    .ui-box p {
        font-size: 1rem;
        line-height: 1.7rem;
    }

    .text-col {
        & .tool-logos {
            gap: 0 !important;
        }
    }

    .logo-item.tool img {
        filter: none !important;
    }

}


@media (max-width: 550px) {
    .img {
        /* Gør det muligt for ::before at positionere sig relativt til .img */
        background-position: top bottom !important;
    }

    .img h1 {
        font-size: 30px !important;
        padding: 160px 0 0 0 !important;
    }

    .title {
        margin-bottom: 1rem !important;
    }

    .swipe-hint {
        bottom: 200px;
        left: 90%;
        width: 50px;
    }

    .xd-section .title {
        font-size: 2rem !important;
        margin-bottom: 1rem !important;
    }

    .xd-section .swiper-slide img {
        border-radius: 15px !important;
    }

    .social-section {
        padding: 6rem 5%;
    }

    .text-col {
        padding-right: 0 !important;
        margin-bottom: 30px !important;
    }

    .ux-ui-split-section {
        padding: 5rem 1.25rem;
    }

    .media-col {
        width: 90vw;
    }

    .backend-section {
        & {
            padding: 5rem 1.25rem;
        }
    }

    .text-col {
        & .section-title {
            font-size: 36px !important;
        }
    }
}
</style>
