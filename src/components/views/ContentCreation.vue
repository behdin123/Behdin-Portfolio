<template>


    <div id="video-dark-version-image" class="bg-video img" :class="[{ 'dark-mode-cover-home': dark }]">
        <!-- Desktop -->
        <video autoplay loop muted playsinline class="background-video">
            <source src="/video/ContentCreationBanner.mp4" type="video/mp4" />
        </video>

        <!-- Main heading -->
        <h1 data-aos="fade-right" data-aos-duration="3000">
            {{ $t('contentCreation.mainTitle') }}
        </h1>

        <!-- Scroll indicator -->
        <div class="scroll-indicator">
            <span>{{ $t('contentCreation.scrollDown') }}</span>
            <div class="line"></div>
        </div>
    </div>


    <section class="before-after-section" data-aos="fade-up">
        <div class="before-after-text-info">
            <h2 class="section-title">{{ $t('contentCreation.beforeAfterTitle') }}</h2>

            <!-- Logos row -->
            <div class="tool-logos">
                <img src="@/assets/Logo/AdobePhotoshop.webp" alt="Photoshop" />
                <img src="@/assets/Logo/topaz-photo.webp" alt="Topaz Photo AI" />
            </div>

            <!-- Description -->
            <p v-html="$t('contentCreation.beforeAfterDesc1')"></p>
            <p v-html="$t('contentCreation.beforeAfterDesc2')"></p>
        </div>

        <div class="twentytwenty-wrapper" ref="wrapperRef" @mousedown="handleMouseDown" @mousemove="handleMouseMove"
            @touchstart="handleTouchStart" @touchmove="handleTouchMove">
            <img class="twentytwenty-before" src="@/assets/BeforeAfter/DSKBefore.webp" alt="Before" />
            <img class="twentytwenty-after" src="@/assets/BeforeAfter/DSKAfter.webp" alt="After"
                :style="{ clipPath: 'inset(0 ' + (100 - sliderPercent) + '% 0 0)' }" />
            <div class="slider-handle" :style="{ left: sliderPercent + '%' }"></div>
        </div>
    </section>


    <!-- Visual Communication – Storytelling -->
    <section class="vs-split-section" data-aos="fade-up">
        <h2 class="title">Visuel kommunikation & Storytelling</h2>

        <div class="content-wrapper">
            <!-- Visual Communication -->
            <div class="visual-box" data-aos="fade-right">
                <h3 class="icon-title">
                    <img src="@/assets/icons/monitor.webp" alt="Visual Icon" />
                    {{ $t('contentCreation.visualCommTitle') }}
                </h3>
                <p v-html="$t('contentCreation.visualCommDesc')"></p>
            </div>

            <!-- Storytelling -->
            <div class="story-box" data-aos="fade-left">
                <h3 class="icon-title">
                    <img src="@/assets/icons/video-dark.webp" alt="Story Icon" />
                    {{ $t('contentCreation.storytellingTitle') }}
                </h3>
                <p v-html="$t('contentCreation.storytellingDesc')"></p>
            </div>
        </div>
    </section>



    <!-- Social Media – Content Management -->
    <section class="social-section" data-aos="fade-up">
        <div class="text-col">
            <h2 class="section-title">{{ $t('contentCreation.socialTitle') }}</h2>

            <!-- Logos row -->
            <div class="tool-logos sm-logos">
                <img src="@/assets/Logo/Instagram.webp" alt="Instagram" />
                <img src="@/assets/Logo/Facebook_Logo_Primary.webp" alt="Facebook" />
                <img src="@/assets/Logo/LinkedIn_icon.webp" alt="LinkedIn" />
            </div>

            <p v-html="$t('contentCreation.socialDesc1')"></p>
            <p v-html="$t('contentCreation.socialDesc2')"></p>
        </div>

        <!-- Right image (single mockup/post grid/whatever) -->
        <div class="media-col">
            <picture>
                <!-- موبایل -->
                <source media="(max-width: 600px)" srcset="@/assets/MobileScreenMockupMobileVersion.webp">
                <!-- دیفالت (تبلت/دسکتاپ) -->
                <img src="@/assets/MobileScreenMockup.webp" alt="Social content examples" loading="lazy" width="900"
                    height="1200" style="width:100%;height:auto;" />
            </picture>
        </div>
    </section>


    <!-- Brand & Logo Development -->
    <section class="brand-logo-section splitBackGround" data-aos="fade-up">
        <h2 class="title">{{ $t('contentCreation.brandLogoTitle') }}</h2>

        <!-- Grid of logos -->
        <div class="logo-grid">
            <div class="logo-item" v-for="(logo, index) in brandLogos" :key="index" data-aos="zoom-in">
                <img :src="logo.src" :alt="logo.alt" />
            </div>
        </div>

        <!-- Divider line -->
        <div class="section-divider" role="separator" aria-hidden="true"></div>

        <!-- Grid of Adobe tools -->
        <h2 class="title">{{ $t('contentCreation.adobeToolsTitle') }}</h2>
        <div class="logo-grid tool-grid">
            <div class="logo-item tool" v-for="(tool, index) in adobeTools" :key="'tool-' + index" data-aos="zoom-in">
                <div class="tool-logo-wrapper">
                    <img :src="tool.src" :alt="tool.alt" />
                </div>
                <span class="tool-name">{{ tool.alt }}</span>
            </div>
        </div>
    </section>

</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { defineProps } from 'vue';


defineProps({
    dark: {},
});


const wrapperRef = ref(null)
const sliderPercent = ref(50)
const dragging = ref(false)

const updateSlider = (x) => {
    const wrapper = wrapperRef.value
    if (!wrapper) return
    const rect = wrapper.getBoundingClientRect()
    let pos = ((x - rect.left) / rect.width) * 100
    sliderPercent.value = Math.min(100, Math.max(0, pos))
}

const handleMouseDown = (e) => {
    dragging.value = true
    updateSlider(e.clientX)
}

const handleMouseMove = (e) => {
    if (dragging.value) {
        updateSlider(e.clientX)
    }
}

const handleMouseUp = () => {
    dragging.value = false
}

const handleTouchStart = (e) => {
    dragging.value = true
    if (e.touches.length > 0) {
        updateSlider(e.touches[0].clientX)
    }
}

const handleTouchMove = (e) => {
    if (dragging.value && e.touches.length > 0) {
        updateSlider(e.touches[0].clientX)
    }
}

const handleTouchEnd = () => {
    dragging.value = false
}

onMounted(() => {
    sliderPercent.value = 50
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('touchend', handleTouchEnd)
})

onUnmounted(() => {
    window.removeEventListener('mouseup', handleMouseUp)
    window.removeEventListener('touchend', handleTouchEnd)
})


const brandLogos = ref([
    { src: require('@/assets/Logo/Logo_Blue_PNG.webp'), alt: 'Brand Logo 1' },
    { src: require('@/assets/Logo/Logo_Blue_ICO.webp'), alt: 'Brand Logo 2' },
    { src: require('@/assets/Logo/final-logo-light.webp'), alt: 'Brand Logo 3' },
    { src: require('@/assets/Logo/logo-shape-black&gold.webp'), alt: 'Brand Logo 4' },
])


const adobeTools = ref([
    { src: new URL('@/assets/Logo/AdobePhotoshop.webp', import.meta.url).href, alt: 'Adobe Photoshop' },
    { src: new URL('@/assets/Logo/AdobeIllustrator.webp', import.meta.url).href, alt: 'Adobe Illustrator' },
    { src: new URL('@/assets/Logo/AdobeAfterEffects.webp', import.meta.url).href, alt: 'Adobe After Effects' },
    { src: new URL('@/assets/Logo/PremierePro.webp', import.meta.url).href, alt: 'Adobe Premiere Pro' },
    { src: new URL('@/assets/Logo/AdobeInDesign.webp', import.meta.url).href, alt: 'Adobe InDesign' },
    { src: new URL('@/assets/Logo/AdobeXD.webp', import.meta.url).href, alt: 'Adobe XD' }
])

</script>





<style scoped lang="scss">
@import '../css/style.scss';

.img {
    position: relative;
    overflow: hidden;
    height: 100vh !important;

    .background-video {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        /* پر کردن کامل بدون تغییر نسبت */
        object-position: center center;
        /* پیش‌فرض */
        z-index: 0;
        pointer-events: none;
    }

    @media (max-width: 850px) {
        .background-video {
            object-position: left bottom;
        }
    }


    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2); // optional dark overlay
        z-index: 1;
    }

    h1 {
        margin-left: 0;
        position: relative;
        z-index: 2;
        text-align: center;
        font-size: 55px;
        padding: 12vw 0 0 0 !important;
        text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
    }
}

@media (max-width: 600px) {

    .before-after-text-info {
        padding-right: 0 !important;
        margin-bottom: 20px !important;
    }

    .text-col {
        margin-bottom: 20px !important;
        padding-right: 5%;
    }

    .before-after-text-info {
        min-width: auto !important;
    }

    .before-after-section {
        padding: 6rem 5% !important;
    }

    .twentytwenty-wrapper {
        width: 90vw !important;
    }
}


.twentytwenty-wrapper {
    position: relative;
    width: 45vw;
    max-width: 700px;
    aspect-ratio: 4 / 5;
    margin-right: 10%;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        pointer-events: none;
        user-select: none;
    }

    .twentytwenty-before {
        z-index: 1;
    }

    .twentytwenty-after {
        z-index: 2;
        clip-path: inset(0 50% 0 0); // default baraye vue inline style override mishe
    }

    .slider-handle {
        position: absolute;
        top: 0;
        height: 100%;
        width: 2px;
        background: white;
        z-index: 3;
        cursor: ew-resize;

        &::after {
            content: '';
            position: absolute;
            top: 50%;
            left: -10px;
            transform: translateY(-50%);
            width: 20px;
            height: 20px;
            background: white;
            border-radius: 50%;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
        }
    }
}

.section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
    color: #fff;
}



.before-after-section {
    background: var(--background-color);
    color: #fff;
    padding: 6rem 10%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    .section-title {
        text-align: left !important;
        font-size: 50px !important;
    }

    p {
        font-size: 18px !important;
    }

    @media (max-width: 950px) {
        flex-direction: column;
    }
}

.before-after-text-info {
    flex: 1;
    min-width: 280px;

    .section-title {
        font-size: 2.2rem;
        margin-bottom: 1rem;
    }

    .tool-logos {
        display: flex;
        padding: 1rem 2rem 1rem 0;

        img {
            width: 100px;
            height: auto;
            object-fit: contain;
        }

        img:first-child {
            margin-right: 2rem;
        }
    }

    p {
        font-size: 1.05rem;
        line-height: 1.6;
        max-width: 500px;
    }
}











/* ===== Visual Communication & Storytelling (two-card split) ===== */
.vs-split-section {
    background: var(--gradient-backgroundColor);
    color: #fff;
    padding: 5rem 2rem;
    text-align: center;
}

.vs-split-section .title {
    text-shadow: 0 5px 8px rgba(0, 0, 0, .2);
    font-size: 2.5rem;
    margin-bottom: 3rem !important;
}

.vs-split-section .content-wrapper {
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 3rem;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
    text-align: left;
}

.visual-box,
.story-box {
    background: var(--block-backgroundColor);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 20px;
    padding: 2rem;
    flex: 1 1 400px;
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
    transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
}

.visual-box:hover,
.story-box:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 38px rgba(0, 0, 0, 0.35);
    border-color: rgba(255, 255, 255, 0.12);
}

.vs-split-section .icon-title {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1.5rem;
    color: var(--text-color);
    margin-bottom: 1rem;
}

.vs-split-section .icon-title img {
    width: 44px;
    height: 44px;
    object-fit: contain;
}

.visual-box p,
.story-box p {
    font-size: 1.075rem;
    line-height: 1.85rem;
    color: var(--text-color);
}

.splitBackGround {
    background: var(--split-backgroundColor) !important;
}






@media (max-width: 1500px) {
    .img h1 {
        font-size: 45px !important;
        padding: 11vw 0 0 0 !important;
    }

    .before-after-text-info {
        padding-right: 10vw;
    }

    .twentytwenty-wrapper {
        width: 30vw;
        margin-right: 0;
    }
}

@media (max-width: 1000px) {
    .img h1 {
        font-size: 50px !important;
        padding: 23vw 0 0 0 !important;
    }

    .before-after-section,
    .social-section {
        align-items: flex-end;
    }

    .social-section {
        padding: 6rem 0 6rem 10%;
    }

    .twentytwenty-wrapper {
        width: 60vw;
    }

    .tool-logos {
        img {
            filter: none !important;
        }
    }

    .vs-split-section .title {
        font-size: 2.1rem;
        margin-bottom: 2rem !important;
    }

    .visual-box,
    .story-box {
        padding: 1.75rem;
    }

    .vs-split-section .icon-title {
        font-size: 1.35rem;
    }

    .vs-split-section .icon-title img {
        width: 40px;
        height: 40px;
    }

    .visual-box p,
    .story-box p {
        font-size: 1rem;
        line-height: 1.75rem;
    }

    .brand-logo-section .title {
        font-size: 2.1rem;
    }

    .logo-grid {
        gap: 2.5rem 2rem;
    }

    .logo-item img {
        max-height: 120px;
        max-width: 160px;
    }

    .logo-item.tool img {
        max-height: 64px;
        max-width: 110px;
    }
}

@media (max-width: 700px) {
    .vs-split-section .title {
        font-size: 1.9rem;
    }

    .visual-box,
    .story-box {
        padding: 1.5rem;
    }
}

@media (max-width: 550px) {
    .img h1 {
        font-size: 50px !important;
        padding: 35vw 0 0 0 !important;
    }

    .before-after-section,
    .social-section {
        .section-title {
            font-size: 40px !important;
        }
    }

    .social-section {
        padding: 6rem 0 6rem 5%;
    }

    .media-col {
        width: 90vw !important;
    }

    .twentytwenty-wrapper {
        width: 80vw;
    }

    .vs-split-section {
        padding: 4rem 1.25rem;
    }

    .vs-split-section .title {
        font-size: 1.8rem !important;
        margin-bottom: 1.25rem !important;
    }

    .vs-split-section .icon-title {
        font-size: 1.2rem;
        gap: 10px;
    }

    .vs-split-section .icon-title img {
        width: 36px;
        height: 36px;
    }

    .brand-logo-section {
        padding: 4rem 1.25rem;
    }

    .brand-logo-section .title {
        font-size: 1.8rem !important;
    }

    .logo-grid {
        gap: 1.5rem;
    }
}
</style>
