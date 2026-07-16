<template>

  <div class="logo">
    <router-link to="/">
      <img v-if="!dark || isSticky" class="logo-img" src="../assets/final-logo-light.webp" width="90px" height="90px" />
      <img v-else class="logo-img" src="../assets/Behdin_Bagheri_logo_(PNG).webp" width="90px" height="90px" />
    </router-link>
  </div>

  <div class="justify" :class="{ open: menuOpen }">
    <div class="navbar-links" @click="menuOpen = false">
      <router-link to="/projekter">{{ $t('navigation.projects') }}</router-link>
      <router-link to="/Uddannelse">{{ $t('navigation.education') }}</router-link>
      <router-link to="/VIDEO">{{ $t('navigation.video') }}</router-link>
      <router-link to="/galleri">{{ $t('navigation.artworks') }}</router-link>
      <router-link to="/OM-MIG">{{ $t('navigation.about') }}</router-link>
    </div>
  </div>

  <div class="navbar-others">
    <label class="switch">
      <input @click="toggleDarkMode" type="checkbox" :checked="darkMode" />
      <span class="slider round"></span>
    </label>
    <div class="nav-icons">
      <div class="line"></div>
      <a v-if="!dark || isSticky" href="https://www.linkedin.com/in/behdin-bagheri-21b893196/" target="_blank">
        <img id="first-icon" class="icon" src="../assets/icons/linkedin(footer).webp" width="23px" height="23px">
      </a>
      <a v-else href="https://www.linkedin.com/in/behdin-bagheri-21b893196/" target="_blank">
        <img id="first-icon" class="icon" src="../assets/icons/linkedin(footer)-dark.webp" width="23px" height="23px">
      </a>
    </div>

    <!-- Facebook ikon -->
    <a v-if="!dark || isSticky" href="https://www.facebook.com/behdin.bagheri/" target="_blank">
      <img class="icon facebook" src="../assets/icons/facebook(nav).svg" width="23px" height="23px" />
    </a>
    <a v-else href="https://www.facebook.com/behdin.bagheri/" target="_blank">
      <img class="icon facebook" src="../assets/icons/facebook-nav-dark-version.svg" width="23px" height="23px" />
    </a>

    <div class="line"></div>


    <!-- World ikon -->
    <div class="language-selector">
      <div class="current-language" @click="toggleLanguageDropdown">
        <span class="flag" v-html="flags[currentLanguage] || flags.dk"></span>
        <span class="language-code">{{ currentLanguage.toUpperCase() }}</span>
      </div>

    <div class="language-dropdown" v-show="showLanguageDropdown">
      <div class="language-option" @click="changeLanguage('dk')">
        <span class="flag" v-html="flags.dk"></span>
        <span>Dansk</span>
      </div>
      <div class="language-option" @click="changeLanguage('en')">
        <span class="flag" v-html="flags.en"></span>
        <span>English</span>
      </div>
      <div class="language-option" @click="changeLanguage('de')">
        <span class="flag" v-html="flags.de"></span>
        <span>Deutsch</span>
      </div>
    </div>
  </div>

  
    <!-- Toggle knap (animeret burger) -->
    <button
      class="toggel-btn"
      :class="{ open: menuOpen }"
      @click="menuOpen = !menuOpen"
      :aria-expanded="menuOpen"
      :aria-label="menuOpen ? 'Luk menu' : 'Åbn menu'"
    >
      <span></span><span></span><span></span>
    </button>
  </div>

</template>



<script setup>
import { onMounted, onUnmounted, defineProps, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import i18next from 'i18next';

defineProps({
  dark: Boolean,
  toggleDarkMode: Function,
  isSticky: Boolean,
});

const router = useRouter();
const menuOpen = ref(false);
const showLanguageDropdown = ref(false);
const currentLanguage = ref('');

// Luk mobil-menuen ved ruteskift
router.afterEach(() => {
  menuOpen.value = false;
});

// SVG-flag (emoji-flag vises ikke på Windows)
const flags = {
  dk: '<svg viewBox="0 0 37 28" xmlns="http://www.w3.org/2000/svg"><rect width="37" height="28" fill="#C8102E"/><rect x="11" width="5" height="28" fill="#fff"/><rect y="11.5" width="37" height="5" fill="#fff"/></svg>',
  en: '<svg viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg"><clipPath id="ukclip"><rect width="60" height="30"/></clipPath><g clip-path="url(#ukclip)"><rect width="60" height="30" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="3"/><path d="M30,0 V30 M0,15 H60" stroke="#fff" stroke-width="10"/><path d="M30,0 V30 M0,15 H60" stroke="#C8102E" stroke-width="6"/></g></svg>',
  de: '<svg viewBox="0 0 5 3" xmlns="http://www.w3.org/2000/svg"><rect width="5" height="1" fill="#000"/><rect width="5" height="1" y="1" fill="#DD0000"/><rect width="5" height="1" y="2" fill="#FFCE00"/></svg>',
};

// Function to get the current language from localStorage
const getCurrentLanguage = () => {
  const savedLang = localStorage.getItem('i18nextLng');
  return savedLang?.split('-')[0] || 'dk';
};

// Initialize the language
const initializeLanguage = () => {
  const savedLang = getCurrentLanguage();
  currentLanguage.value = savedLang;
  i18next.changeLanguage(savedLang).then(() => {
    localStorage.setItem('i18nextLng', savedLang);
  });
};

const toggleLanguageDropdown = () => {
  showLanguageDropdown.value = !showLanguageDropdown.value;
};

const changeLanguage = (lang) => {
  i18next.changeLanguage(lang).then(() => {
    localStorage.setItem('i18nextLng', lang);
    currentLanguage.value = lang;
    showLanguageDropdown.value = false;
  });
};

// Watch for i18next language changes
watch(() => i18next.language, (newLang) => {
  if (newLang) {
    currentLanguage.value = newLang.split('-')[0];
  }
});



// Luk sprog-dropdown ved klik udenfor
const handleClickOutside = (event) => {
  const dropdown = document.querySelector('.language-selector');
  if (dropdown && !dropdown.contains(event.target)) {
    showLanguageDropdown.value = false;
  }
};

// Luk menuen automatisk når skærmen bliver desktop-bred
const handleResize = () => {
  if (window.innerWidth > 1000) menuOpen.value = false;
};

onMounted(() => {
  initializeLanguage();
  document.addEventListener('click', handleClickOutside);
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  window.removeEventListener('resize', handleResize);
});



</script>


<style scoped lang="scss">

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;


  /* Sticky background effect */

  .logo {
    margin-left: 5%;
  }

  .logo {
    margin-left: 5%;
  }

  .navbar-links {
    display: flex;
    margin-left: 115px;

    a {
      font-family: Arial, Helvetica, sans-serif;
      padding: 0 3vw;
      font-size: var(--font-size-laptop);
      text-decoration: none;
      color: var(--tertiary-color);
      letter-spacing: 0.5px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {

    /* iPad-størrelse */
    .navbar-links {
      a {
        font-size: var(--font-size-ipad);
      }
    }
  }

  @media (min-width: 1290px) and (max-width: 1500px) {

    /* Laptop-størrelse */
    .navbar-links {
      a {
        font-size: 18px !important;
      }
    }

    .navbar-links {
      a {
        padding: 0 4vw;
      }
    }
  }

  @media (min-width: 1000px) and (max-width: 1290px) {
    .navbar-links {
      a {
        padding: 0 3vw;
      }
    }
  }

 

  @media (min-width: 1440px) {

    /* 4K Monitor-størrelse */
    .navbar-links {
      a {
        font-size: var(--font-size-4k);
      }
    }
  }

  .toggel-btn {
    display: none;
  }

  a:hover {
    color: #D9C4A9 !important;
  }

  .navbar-others {
    margin-right: 5%;
    display: flex;
    align-items: center;

    label {
      margin-right: 15px;
    }

    .nav-icons {
      display: flex;
      align-items: center;
    }

    .icon {
      margin-left: 15px;
    }

    .toggle-menu {
      margin-right: 0;
      cursor: pointer;
    }

    .facebook {
      margin: 0 15px;
    }

    .line {
      content: "";
      height: 20px;
      width: 1px;
      background: var(--title-color);
    }
  }
}



.icon:hover {
  opacity: 0.5;
}

.icon:visited {
  opacity: 0.5;
}

.icon:active {
  opacity: 0.5;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #24353F;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked+.slider {
  background-color: #D9C4A9;
}

input:focus+.slider {
  box-shadow: 0 0 1px #D9C4A9;
}

input:checked+.slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}


@media only screen and (max-width: 1120px) {
  #nav {
    .line {
      height: 18px;
    }

    .navbar-links {
      margin-left: 0;
    }

    .nav-icons {
      display: none;
    }

    .icon {
      width: 20px;
    }
  }
}

@media only screen and (max-width: 1000px) {
  .justify {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    /* Klip menuens slide-in transform, så den ikke skaber vandret overflow når menuen er lukket */
    overflow: hidden;
    z-index: 20;
    justify-content: flex-end;
    padding: 1.6rem 0 2.2rem;
    background: linear-gradient(to bottom, rgba(36, 53, 63, 0), #24353F 55%) !important;
    /* Skjult som standard – glider blødt ind når .open sættes */
    opacity: 0;
    visibility: hidden;
    transform: translateY(-14px);
    pointer-events: none;
    transition: opacity 0.35s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), visibility 0.4s;
  }

  .justify.open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    pointer-events: auto;
  }

  .navbar-links {
    flex-direction: column;
    text-align: right;

    a {
      padding: 0.85rem 1.6rem !important;
      color: #EAEAEA !important;
      font-size: 22px !important;
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
      opacity: 0;
      transform: translateX(24px);
      transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    }
  }

  /* Værktøjs-links glider ind ét ad gangen når menuen åbnes */
  .justify.open .navbar-links a { opacity: 1; transform: translateX(0); }
  .justify.open .navbar-links a:nth-child(1) { transition-delay: 0.06s; }
  .justify.open .navbar-links a:nth-child(2) { transition-delay: 0.11s; }
  .justify.open .navbar-links a:nth-child(3) { transition-delay: 0.16s; }
  .justify.open .navbar-links a:nth-child(4) { transition-delay: 0.21s; }
  .justify.open .navbar-links a:nth-child(5) { transition-delay: 0.26s; }

  .toggel-btn { display: flex !important; }

  .icon { margin: 0 15px; }
}

/* Animeret burger-ikon (3 streger → X) */
.toggel-btn {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 34px;
  height: 34px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}
.toggel-btn span {
  display: block;
  width: 26px;
  height: 2.5px;
  border-radius: 2px;
  background: var(--tertiary-color);
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s ease, background 0.3s ease;
}
.toggel-btn.open span:nth-child(1) { transform: translateY(7.5px) rotate(45deg); }
.toggel-btn.open span:nth-child(2) { opacity: 0; }
.toggel-btn.open span:nth-child(3) { transform: translateY(-7.5px) rotate(-45deg); }

/* Sticky nav har hvid baggrund – gør burger-stregerne mørke der */
.sticky .toggel-btn span { background: #000; }

/* Aktiv side fremhæves i navigationen */
.navbar-links a.router-link-active { color: var(--quaternary-color) !important; }

@media only screen and (max-width: 525px) {
  .logo-img {
    width: 75px;
    height: 75px;
  }
}

@media only screen and (max-width: 378px) {
  .switch {
    display: none;
  }
}




.language-selector {
  position: relative;
  cursor: pointer;
  padding-left: 10px;

  .current-language {
    display: flex;
    align-items: center;
    padding: 4px;
    
    .flag {
      display: inline-flex;

      :deep(svg) {
        width: 21px;
        height: 15px;
        border-radius: 2px;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.12);
        display: block;
      }
    }

    .language-code {
      font-size: 14px;
      font-weight: 500;
      color: var(--tertiary-color);
      text-transform: uppercase;
      padding-left: 5px;
    }
  }

  .language-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    background: var(--background-color);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 8px 0;
    margin-top: 8px;
    min-width: 150px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;

    .language-option {
      display: flex;
      align-items: center;
      padding: 8px 16px;
      gap: 8px;
      transition: background-color 0.2s;

      .flag {
        margin-right: 8px;
        display: inline-flex;
        align-items: center;

        :deep(svg) {
          width: 19px;
          height: 13px;
          border-radius: 2px;
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.12);
          display: block;
        }
      }

      &:hover {
        background-color: var(--hover-color);
      }

      img {
        border-radius: 2px;
      }

      span {
        color: #fff !important;
        font-size: 14px;
      }
    }
  }
}


</style>