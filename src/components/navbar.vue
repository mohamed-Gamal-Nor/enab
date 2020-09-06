<template>
  <div class="navbar-all">
    <div class="navbar-mini">
      <div class="close-button">
        <font-awesome-icon icon="times" @click="closeMenu()" />
      </div>

      <ul class="pages-link-mini">
        <li>
          <router-link to="/">{{$t('menuLinks.home')}}</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }">{{$t('menuLinks.about')}}</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }">{{$t('menuLinks.MenuBook')}}</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }">{{$t('menuLinks.gallery')}}</router-link>
        </li>
        <li>
          <router-link to="/">{{$t('menuLinks.contact')}}</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }">{{$t('menuLinks.stores')}}</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }">{{$t('menuLinks.map')}}</router-link>
        </li>
      </ul>
    </div>
    <div v-bind:class="{navbar:navbarStauts,'navbar-regular':navbarRegaulr}">
      <div class="container-fluid">
        <div class="menu-icon">
          <font-awesome-icon icon="bars" @click="openMenu()" />
        </div>
        <div class="pages-link one">
          <router-link to="/">{{$t('menuLinks.home')}}</router-link>
          <router-link :to="{ name: 'About' }">{{$t('menuLinks.about')}}</router-link>
          <router-link :to="{ name: 'About' }">{{$t('menuLinks.MenuBook')}}</router-link>
          <router-link :to="{ name: 'About' }">{{$t('menuLinks.gallery')}}</router-link>
        </div>
        <div class="logo">
          <router-link to="/">
            <img src="../assets/logo.png" />
          </router-link>
        </div>
        <div class="pages-link two">
          <router-link to="/">{{$t('menuLinks.contact')}}</router-link>
          <router-link :to="{ name: 'About' }">{{$t('menuLinks.stores')}}</router-link>
          <router-link :to="{ name: 'About' }">{{$t('menuLinks.map')}}</router-link>
        </div>
        <ul class="translate">
          <li v-for="locale in locales" :key="locale" @click="switchLocale(locale)">{{locale}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  props: ["navbarStauts"],
  data() {
    return {
      navbarRegaulr: false,
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(","),
    };
  },
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
      }
    },
    openMenu() {
      document
        .querySelector(".navbar-all .navbar-mini")
        .classList.add("active");
    },
    closeMenu() {
      document
        .querySelector(".navbar-all .navbar-mini")
        .classList.remove("active");
    }
  },
};
</script>

<style lang="scss" scoped>
.navbar-mini {
  display: none;
}
.navbar {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  left: 0;
  position: absolute;
  right: 0;
  z-index: 999;
  display: inline-flex;
  flex-wrap: nowrap;
  width: 100%;
  .menu-icon {
    display: none;
  }
  .logo {
    width: 20%;
    text-align: center;
    img {
      max-width: 50%;
    }
  }
  .pages-link {
    width: 40%;
    text-align: right;
    a {
      text-decoration: none;
      margin: 10px;
      font-family: var(--font-title);
      color: var(--main-color);
      font-size: 30px;
      text-transform: capitalize;
      transition: 0.3s;
      padding-bottom: 5px;
      position: relative;

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
    &.two {
      width: 30%;
      text-align: left;
    }
  }
  .translate {
    width: 10%;
    list-style: none;

    li {
      display: inline-block;
      margin: 5px;
      color: var(--seconed-color);
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;
      background-color: var(--main-color);
      padding: 5px;
    }
  }
}
@media (max-width: 990px) {
  .navbar-mini {
    padding: 0;
    display: block;
    position: fixed;
    z-index: 1050505;
    background-color: var(--main-color);
    width: 50%;
    left: -50%;
    top: 0;
    height: 100vh;
    border-right: 1px solid var(--seconed-color);
    transition: 0.3s;
    &.active {
      left: 0%;
    }
    .pages-link-mini {
      list-style: none;
      width: 100%;
      padding-left: 20px;
      li {
        margin: 20px 0px 0px 0px;
        &:nth-of-type(1) {
          margin: 0;
        }
        a {
          color: var(--seconed-color);
          text-decoration: none;
          font-weight: bold;
          font-family: var(--font-title);
          font-size: 20px;
        }
      }
    }
    .close-button {
      text-align: right;
      padding-right: 10px;
      svg {
        font-weight: bold;
        font-size: 23px;
        margin: 10px;
        cursor: pointer;
        color: var(--seconed-color);
      }
    }
  }
  .navbar {
    .logo {
      width: 30%;
      text-align: center;
      img {
        max-width: 100%;
      }
    }
    .menu-icon {
      display: block;
      width: 35%;
      height: 40px;
      svg {
        color: var(--main-color);
        font-weight: bold;
        font-size: 25px;
        line-height: 25px;
        cursor: pointer;
      }
    }
    .pages-link {
      display: none;
    }
    .translate {
      width: 35%;
      text-align: right;
      li {
        margin: 4px;
        padding: 3px;
      }
    }
  }
}
</style>
