<template>
  <div class="navbar-all">
    <div class="navbar-mini">
      <div class="close-button">
          <router-link to="/">
            <img src="../assets/logo.png" />
          </router-link>
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
    <div v-bind:class="{navbar:navbarStauts,'navbar-regular':navbarRegaulr,'navbar-fixed':getMainNavClasses}" >
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
const locallangStorge = localStorage.getItem("lang",);
export default {
  name: "navbar",
  props: ["navbarStauts"],
  data() {
    return {
      navbarRegaulr: false,
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(","),
      scrollingDown: false,
    };
  },
  computed:{
      getMainNavClasses() {
        return this.scrollingDown
      }
  },
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        localStorage.setItem("lang",locale);
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
    },
    scrollNow() {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos === 0) {
        this.scrollingDown = false;
      }else{
        this.scrollingDown = true;
      }
    },
  },
  beforeCreate(){
      if(locallangStorge !== null){
          this.$i18n.locale = locallangStorge;
      }else{
          this.$i18n.locale = "en"
      }
  },
    created(){
        window.addEventListener('scroll', this.scrollNow);
    },
    destroyed () {
        window.removeEventListener('scroll', this.scrollNow);
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
  &.navbar-fixed{
    position: fixed;
    width: 100%;
    background-color: rgba($color: #eee3c7, $alpha: 0.9);
    transition: 0.3s;
    .menu-icon {
    color: var(--seconed-color);
  }
    .logo {
      img {
        max-width: 30%;
      }
    }
    .pages-link {
      a {
        color: var(--seconed-color);
        font-size: 25px;
        &::after {
          background-color: var(--seconed-color);
        }
      }
    }
  .translate {
      li {
        color: var(--main-color);
        font-weight: 400;
        background-color: var(--seconed-color);
        padding: 3px;
        font-size: 13px;
      }
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
    width: 100%;
    left: -100%;
    top: 0;
    height: 100vh;
    border-right: 1px solid var(--seconed-color);
    transition: 0.5s;
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
      margin-bottom: 10px;
      margin-top: 10px;
      a{
          text-align: left;
          width: 70%;
          display: inline-block;
      }
      svg {
          width:20%;
          display: inline-block;
          text-align: right;
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
    &.navbar-fixed{
        .menu-icon {
            svg{
                color: var(--seconed-color);
            }
        }
        .logo {
        img {
            max-width: 60%;
        }
        }
    }
  }
}
</style>
