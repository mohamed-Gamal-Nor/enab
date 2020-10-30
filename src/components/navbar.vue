<template lang="pug">
div
  .mini-navbar(:class="{ active: menu }")
    .logo
      router-link(:to="`/${$i18n.locale}`")
        img(src="../assets/logo.png")
      .close
        font-awesome-icon(icon="times", @click="closeMenu()")
    .links
      router-link(:to="`/${$i18n.locale}`") {{ $t('menuLinks.home') }}
      router-link(:to="`/${$i18n.locale}/about`") {{ $t('menuLinks.about') }}
      router-link(:to="`/${$i18n.locale}/gallery`") {{ $t('menuLinks.gallery') }}
      router-link(:to="`/${$i18n.locale}/menu`") {{ $t('menuLinks.MenuBook') }}
      router-link(:to="`/${$i18n.locale}`") {{ $t('menuLinks.home') }}
      router-link(:to="`/${$i18n.locale}/about`") {{ $t('menuLinks.about') }}
      router-link(:to="`/${$i18n.locale}/gallery`") {{ $t('menuLinks.gallery') }}
      router-link(:to="`/${$i18n.locale}/menu`") {{ $t('menuLinks.MenuBook') }}
    .lang(v-if="$i18n.locale == 'en'")
      button(@click="setLocale('ar')")
        country-flag(country="eg")
        span AR
    .lang(v-else="$i18n.locale == 'ar'")
      button(@click="setLocale('en')")
        country-flag(country="us")
        span EN
  .navbar(:class="{ 'navbar-fixed': getMainNavClasses }")
    .container-fluid
      .links.link1
        router-link(:to="`/${$i18n.locale}`") {{ $t('menuLinks.home') }}
        router-link(:to="`/${$i18n.locale}/about`") {{ $t('menuLinks.about') }}
        router-link(:to="`/${$i18n.locale}/gallery`") {{ $t('menuLinks.gallery') }}
        router-link(:to="`/${$i18n.locale}/menu`") {{ $t('menuLinks.MenuBook') }}
      .logo
        router-link(:to="`/${$i18n.locale}`")
          img(src="../assets/logo.png")
      .links.link2
        router-link(:to="`/${$i18n.locale}/store`") {{ $t('menuLinks.stores') }}
        router-link(:to="`/${$i18n.locale}/faq`") {{ $t('menuLinks.faq') }}
      .lang(v-if="$i18n.locale == 'en'")
        button(@click="setLocale('ar')")
          country-flag(country="eg")
          span AR
      .lang(v-else="$i18n.locale == 'ar'")
        button(@click="setLocale('en')")
          country-flag(country="us")
          span EN
      .menu-icon
        font-awesome-icon(icon="bars", @click="openMenu()")
</template>

<script>
import CountryFlag from "vue-country-flag";

export default {
  name: "navbar",
  components: {
    CountryFlag,
  },
  data() {
    return {
      scrollingDown: false,
      menu: false,
    };
  },
  computed: {
    getMainNavClasses() {
      return this.scrollingDown;
    },
  },
  methods: {
    scrollNow() {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos === 0) {
        this.scrollingDown = false;
      } else {
        this.scrollingDown = true;
      }
    },
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale },
      });
    },
    openMenu() {
      this.menu = true;
    },
    closeMenu() {
      this.menu = false;
    },
  },
  created() {
    window.addEventListener("scroll", this.scrollNow);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollNow);
  },
};
</script>

<style lang="scss" scoped>
.mini-navbar {
  display: none;
}
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: rgba($color: #455c56, $alpha: 0.3);
  justify-content: flex-start;
  .menu-icon {
    display: none;
  }
  .logo {
    width: 20%;
    text-align: center;
  }
  .links {
    &.link1 {
      width: 40%;
      text-align: right;
    }
    &.link2 {
      width: 30%;
      text-align: left;
    }
    a {
      text-decoration: none;
      font-family: var(--font-title);
      color: var(--main-color);
      margin: 0px 15px;
      font-size: 30px;
      position: relative;
      text-transform: capitalize;
      &::after {
        left: 0;
        top: 100%;
        position: absolute;
        content: "";
        width: 0%;
        padding: 1px;
        background-color: var(--main-color);
        transition: 0.3s;
        opacity: 0;
      }
      &:hover {
        &::after {
          width: 100%;
          opacity: 1;
        }
      }
    }
  }
  .lang {
    width: 10%;
    button {
      background-color: transparent;
      outline: none;
      display: flex;
      border: none;
      justify-content: center;
      span {
        height: 40px;
        line-height: 40px;
        font-weight: bold;
        color: var(--main-color);
      }
    }
  }
  &.navbar-fixed {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    background-color: rgba($color: #eee3c7, $alpha: 0.8);
    .logo {
      img {
        width: 30%;
      }
    }
    .links {
      a {
        color: var(--seconed-color);
        margin: 0px 15px;
        font-size: 25px;
        &::after {
          background-color: var(--seconed-color);
        }
      }
    }
    .lang {
      button {
        span {
          color: var(--seconed-color);
        }
      }
    }
  }
}

@media (max-width: 991px) {
  .navbar {
    .menu-icon {
      display: block;
      svg {
        color: var(--main-color);
        font-size: 25px;
      }
    }
    .logo {
      width: 80%;
      text-align: left;
      img {
        width: 30%;
      }
    }
    .links {
      display: none;
    }
    .lang {
      display: none;
    }
    &.navbar-fixed {
      position: fixed;
      width: 100%;
      left: 0;
      top: 0;
      background-color: rgba($color: #eee3c7, $alpha: 0.8);
      .logo {
        img {
          width: 25%;
        }
      }
      .menu-icon {
        svg {
          color: var(--seconed-color);
        }
      }
    }
  }

  .mini-navbar {
    display: block;
    position: fixed;
    padding: 5px;
    top: 0px;
    left: -100%;
    width: 100%;
    height: 100vh;
    background-color: rgba($color: #eee3c7, $alpha: 1);
    z-index: 9999;
    transition: 0.3s;
    &.active {
      transition: 0.3s;
      left: 0%;
    }
    .logo {
      display: flex;
      justify-content: center;
      a {
        width: 80%;
      }
      .close {
        width: 20%;
        text-align: center;
        padding: 5px;
        line-height: 40px;
        svg {
          color: var(--seconed-color);
          font-size: 30px;
        }
      }
    }
    .links {
      padding-top: 25px;
      padding: 5px;
      border-bottom: 1px solid var(--seconed-color);
      a {
        display: block;
        text-decoration: none;
        font-family: var(--font-title);
        color: var(--seconed-color);
        font-size: 30px;
        text-transform: capitalize;
        margin-bottom: 10px;
      }
    }
    .lang {
      text-align: center;
      button {
        background-color: transparent;
        outline: none;
        display: flex;
        border: none;
        justify-content: center;
        span {
          height: 40px;
          line-height: 40px;
          font-weight: bold;
          color: var(--seconed-color);
        }
      }
    }
  }
}
</style>
