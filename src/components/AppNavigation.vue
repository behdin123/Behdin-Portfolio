<template>

  <div class="logo">
    <router-link to="/">
      <img v-if="!dark || isSticky" class="logo-img" src="../assets/final-logo-light.webp" width="90px" height="90px" />
      <img v-else class="logo-img" src="../assets/Behdin_Bagheri_logo_(PNG).webp" width="90px" height="90px" />
    </router-link>
  </div>

  <div class="justify">
    <div class="navbar-links">
      <router-link to="/Uddannelse">{{ $t('navigation.education') }}</router-link>
      <router-link to="/VIDEO">{{ $t('navigation.video') }}</router-link>
      <router-link to="/ART-WORKS">{{ $t('navigation.artworks') }}</router-link>
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
        <span class="flag-emoji">
          {{ currentLanguage === 'dk' ? '🇩🇰' : currentLanguage === 'en' ? '🇬🇧' : '🇩🇪' }}
        </span>
        <span class="language-code">{{ currentLanguage.toUpperCase() }}</span>
      </div>
        
    <div class="language-dropdown" v-show="showLanguageDropdown">
      <div class="language-option" @click="changeLanguage('dk')">
        <span class="flag-emoji">🇩🇰</span>
        <span>Dansk</span>
      </div>
      <div class="language-option" @click="changeLanguage('en')">
        <span class="flag-emoji">🇬🇧</span>
        <span>English</span>
      </div>
      <div class="language-option" @click="changeLanguage('de')">
        <span class="flag-emoji">🇩🇪</span>
        <span>Deutsch</span>
      </div>
    </div>
  </div>

  
    <!-- Toggle knap ikon -->
    <div class="toggel-btn">
      <img v-if="!dark || isSticky" class="icon toggle-menu" src="../assets/toggel-menu.svg" width="23px"
        height="23px" />
      <img v-else class="icon toggle-menu" src="../assets/toggel-menu dark-version.svg" width="23px" height="23px" />
    </div>
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

const showLanguageDropdown = ref(false);
const currentLanguage = ref('');

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



onMounted(() => {
  const burger = document.querySelector('.toggel-btn');
  const nav = document.querySelector('.justify');
  const router = useRouter();

   // Initialize language on mount
   initializeLanguage();

  // Handle clicking outside of language dropdown
  const handleClickOutside = (event) => {
    const dropdown = document.querySelector('.language-selector');
    if (dropdown && !dropdown.contains(event.target)) {
      showLanguageDropdown.value = false;
    }
  };

  document.addEventListener('click', handleClickOutside);

  // Cleanup
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
  });

  // Funktion til at tjekke om skærmen er mobil (f.eks. under 768px)
  const isMobile = () => window.innerWidth <= 768;

  // Toggle navigation visibility on burger click
  burger.addEventListener('click', () => {
    nav.classList.toggle('show');
    if (nav.matches('.show')) {
      nav.classList.remove('end');
      nav.style.setProperty('display', 'flex', 'important');
    } else {
      nav.classList.add('end');
      setTimeout(() => {
        nav.style.setProperty('display', 'none', 'important');
      }, 1000);
    }
  });

  // Hide navigation on link click (kun i mobilversion)
  const navLinks = document.querySelectorAll('.justify a');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (isMobile()) { // Kun skjul navigation, hvis det er mobilversion
        nav.classList.remove('show');
        nav.style.setProperty('display', 'none', 'important');
      }
    });
  });

  // Hide navigation on logo click (kun i mobilversion)
  const logo = document.querySelector('.logo');
  logo.addEventListener('click', () => {
    if (isMobile()) { // Kun skjul navigation, hvis det er mobilversion
      nav.classList.remove('show');
      nav.style.setProperty('display', 'none', 'important');
    }
  });

  // Lyt til ruteændringer og luk navigationen (kun i mobilversion)
  router.afterEach(() => {
    if (isMobile()) { // Kun skjul navigation, hvis det er mobilversion
      nav.classList.remove('show');
      nav.style.setProperty('display', 'none', 'important');
    }
  });

  // Opdatering af isMobile ved ændring af vinduestørrelse (tilføj lytter)
  window.addEventListener('resize', () => {
    if (!isMobile()) {
      // Hvis skærmstørrelsen ændres til større end mobil, vis navigation
      nav.classList.remove('show');
      nav.style.setProperty('display', 'flex', 'important');
    }
  });
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
    width: 100%;
    height: 435px;
    top: 144px;
    position: absolute;
    z-index: 20;
    display: none !important;
    justify-content: flex-end;
    padding: 21px 0 0 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #24353F) !important;
    animation-name: toggleMenu;
    animation-duration: 1s;
  }


  .show {
    animation-name: toggleMenu;
    animation-duration: 1s;
  }

  .end {
    animation-name: toggleMenuEnd;
    animation-duration: 1s;
  }

  @keyframes toggleMenu {
    from {
      opacity: 0;
      height: 50px;
    }

    to {
      opacity: 1;
      height: 450px;
    }
  }

  @keyframes toggleMenuEnd {
    from {
      opacity: 1;
      height: 450px;
    }

    to {
      opacity: 0;
      height: 50px;
    }
  }

  .navbar-links {
    flex-direction: column;
    text-align: right;

    a {
      padding-bottom: 80px !important;
      color: #EAEAEA !important;
      font-size: 24px !important;
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
    }
  }

  .toggel-btn {
    display: flex !important;
  }

  .icon {
    margin: 0 15px;
  }
}

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
    
    .flag-emoji {
      font-size: 20px;
      line-height: 1;
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

      .flag-emoji {
        font-size: 16px; // Adjust emoji size
        margin-right: 8px;
        display: flex;
        align-items: center;
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