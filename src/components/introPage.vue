<template lang="pug">
.intro-page
  .container-fluid
    .overlay
      .text(data-aos="zoom-in")
        h1 {{ $t(introPage) }}
        .link
          router-link(:to="`/${$i18n.locale}`") {{ $t('menuLinks.home') }}
          span -
          span {{ $t(introPage) }}
</template>

<script>
export default {
  name: "introPage",
  props: ["introPage"],
};
</script>

<style lang="scss" scoped>
.ar {
  .intro-page {
    .overlay {
      .text {
        .link {
          a {
            margin-left: 15px;
          }
          span {
            text-transform: capitalize;
            &:nth-of-type(1) {
              font-weight: bold;
              color: #fff;
            }
            &:nth-of-type(2) {
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
}
.intro-page {
  min-height: 55vh;
  background-image: url("https://i.ibb.co/74h4c0f/intro2.jpg");
  background-size: cover;
  position: relative;
  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #455c56, $alpha: 0.5);
    .text {
      text-align: center;
      width: 30%;
      margin: 22.5vh auto;
      h1 {
        font-family: var(--font-title);
        font-weight: bold;
        font-size: 60px;
        color: #fff;
        text-transform: capitalize;
      }
      .link {
        margin-top: 15px;
        a {
          text-decoration: none;
          font-family: var(--main-font);
          font-weight: bold;
          color: var(--main-color);
          font-size: 20px;
          margin-right: 15px;
        }
        span {
          text-transform: capitalize;
          &:nth-of-type(1) {
            font-weight: bold;
            color: #fff;
          }
          &:nth-of-type(2) {
            font-weight: bold;
            color: #fff;
            margin-left: 15px;
          }
        }
      }
    }
  }
}
@media (max-width: 991px) {
  .intro-page {
    min-height: 30vh;
    .overlay {
      .text {
        text-align: center;
        width: 40%;
        margin: 100px auto;
        h1 {
          font-size: 40px;
        }
        .link {
          margin-top: 10px;
          a {
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>