<template>
    <!-- Botón del menú mobile -->
    <button
      class="navbar__mobile-toggle"
      :class="{ 'is-open': isMenuOpen }"
      @click="toggleMenu"
      aria-label="Toggle menu"
    >
      <i v-if="!isMenuOpen" class="icon-menu"></i>
      <span v-else>✕</span>
    </button>

    <!-- Navbar -->
    <nav
      class="navbar"
      :class="{ 'is-open': isMenuOpen }"
      role="navigation"
      aria-label="Main"
    >
      <div class="gradiantOne"></div>
      <div class="navbar__photo-container">
        <img class="navbar__photo" src="/public/images/only-photo-gabriel.png" alt="Foto principal" />
      </div>
      <h2 class="navbar__title">{{ $t('nav.title') }}</h2>

      <router-link
        to="/"
        class="navbar__btn"
        active-class="is-active"
        exact
        @click="closeMenu"
      >
        {{ $t('nav.aboutMe') }}
      </router-link>

      <router-link
        to="/experience"
        class="navbar__btn"
        active-class="is-active"
        @click="closeMenu"
      >
        {{ $t('nav.experience') }}
      </router-link>

      <!-- Selector de idioma -->
      <div class="navbar__lang-selector">
        <label for="lang-select">{{ $t('nav.language') }}</label>
        <select id="lang-select" v-model="currentLocale" @change="changeLocale">
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </div>

      <div class="gradiantTwo"></div>
    </nav>
  </template>

  <script>
  const { ref, computed } = Vue;
  const { useI18n } = window.VueI18n;

  export default {
    name: 'NavBar',
    setup() {
      const isMenuOpen = ref(false);
      const { locale } = useI18n();

      const currentLocale = computed({
        get: () => locale.value,
        set: (val) => {
          locale.value = val;
        }
      });

      const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
      };

      const closeMenu = () => {
        isMenuOpen.value = false;
      };

      const changeLocale = () => {
        // El cambio se maneja automáticamente a través del computed
      };

      return {
        isMenuOpen,
        toggleMenu,
        closeMenu,
        currentLocale,
        changeLocale
      };
    }
  };
  </script>
  