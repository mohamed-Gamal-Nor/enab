<template lang="pug">
div
  .mini-navbar(:class="{ active: menu }")
    .logo
      router-link(:to="`/${$i18n.locale}`")
        img(src="https://i.ibb.co/8B58bPB/logo.png")
      .close
        font-awesome-icon(icon="times", @click="closeMenu()")
    .links
      router-link(:to="`/${$i18n.locale}`" @click.native="closeMenu()") {{ $t('menuLinks.home') }}
      router-link(:to="`/${$i18n.locale}/about`" @click.native="closeMenu()") {{ $t('menuLinks.about') }}
      router-link(:to="`/${$i18n.locale}/gallery`" @click.native="closeMenu()") {{ $t('menuLinks.gallery') }}
      router-link(:to="`/${$i18n.locale}/menu`" @click.native="closeMenu()") {{ $t('menuLinks.MenuBook') }}
      router-link(:to="`/${$i18n.locale}/store`" @click.native="closeMenu()") {{ $t('menuLinks.branches') }}
      router-link(:to="`/${$i18n.locale}/faq`" @click.native="closeMenu()") {{ $t('menuLinks.faq') }}
      router-link(:to="`/${$i18n.locale}/facebook-posts`" @click.native="closeMenu()") {{ $t('menuLinks.facebook') }}
  .navbar(:class="{ 'navbar-fixed': getMainNavClasses }")
    .container-fluid
      .links.link1
        router-link(:to="`/${$i18n.locale}`") {{ $t('menuLinks.home') }}
        router-link(:to="`/${$i18n.locale}/about`") {{ $t('menuLinks.about') }}
        router-link(:to="`/${$i18n.locale}/gallery`") {{ $t('menuLinks.gallery') }}
        router-link(:to="`/${$i18n.locale}/menu`") {{ $t('menuLinks.MenuBook') }}
      .logo
        router-link(:to="`/${$i18n.locale}`")
          img(src="https://i.ibb.co/8B58bPB/logo.png")
      .links.link2
        router-link(:to="`/${$i18n.locale}/store`") {{ $t('menuLinks.branches') }}
        router-link(:to="`/${$i18n.locale}/faq`") {{ $t('menuLinks.faq') }}
        router-link(:to="`/${$i18n.locale}/facebook-posts`") {{ $t('menuLinks.facebook') }}
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
.ar {
  .navbar {
    justify-content: center;
    .logo {
      order: 3;
    }
    .links {
      &.link1 {
        text-align: left;
        order: 4;
      }
      &.link2 {
        text-align: right;
        order: 2;
      }
      a {
        padding-bottom: 2px;
      }
    }
    .lang {
      order: 1;
      button {
        span {
          &:nth-of-type(1) {
            order: 2;
          }
        }
      }
    }
  }
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
      line-height: 1px;
    &.link1 {
      width: 40%;
      text-align: right;
    }
    &.link2 {
      width: 40%;
      text-align: left;
    }
    a {
      text-decoration: none;
      font-family: var(--font-title);
      color: var(--main-color);
      margin: 0px 15px;
      font-size: 25px;
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
  .ar {
    .navbar {
      .logo {
        text-align: right;
      }
    }
    .mini-navbar {
      .logo {
        display: flex;
        justify-content: center;
        a {
          width: 80%;
          order: 2;
          text-align: right;
        }
        .close {
          order: 1;
        }
      }
      .links {
        a {
          text-align: right;
        }
      }
    }
  }
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
        width: 20%;
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
          width: 20%;
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
  }
}
</style>
