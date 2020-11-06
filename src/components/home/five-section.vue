<template>
  <div class="enab-album">
    <div class="icon">
      <font-awesome-icon icon="camera-retro" />
    </div>
    <div class="overlay"></div>
    <div class="container-fluid album">
      <div class="text">
        <h1>{{ $t("album.head") }}</h1>
        <p>{{ $t("album.pragraph") }}</p>
      </div>
      <vue-picture-swipe :items="items"></vue-picture-swipe>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VuePictureSwipe from "vue-picture-swipe";
Vue.component("vue-picture-swipe", VuePictureSwipe);
import imageJson from "./image.json";
export default {
  name: "fiveSection",
  data() {
    return {
      items: imageJson,
    };
  },
};
</script>

<style lang="scss" scoped>
.enab-album {
  background-image: url("https://i.ibb.co/p16p1JF/album.jpg");
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
  position: relative;
  padding-bottom: 50px;
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba($color: #455c56, $alpha: 0.7);
  }
  .icon {
    position: relative;
    left: 50%;
    top: 0px;
    width: 254px;
    background: url("https://i.ibb.co/C1bp3nn/pattern-white.png") no-repeat
      center center;
    -webkit-transform: translateX(-50%) rotate(180deg);
    -moz-transform: translateX(-50%) rotate(180deg);
    -ms-transform: translateX(-50%) rotate(180deg);
    -o-transform: translateX(-50%) rotate(180deg);
    transform: translateX(-50%) rotate(180deg);
    height: 59px;
    z-index: 1;
    text-align: center;
    padding: 20px 0 0 0;
    svg {
      font-size: 50px;
      color: var(--seconed-color);
      transform: rotate(180deg);
    }
  }
  .album {
    position: relative;

    .text {
      margin-top: 25px;
      text-align: center;
      z-index: 10;
      h1 {
        font-family: var(--font-title);
        color: var(--main-color);
        font-size: 50px;
        margin-bottom: 20px;
      }
      p {
        font-family: var(--main-font);
        color: #fff;
        font-weight: bold;
        letter-spacing: 1px;
        font-size: 18px;
      }
    }
    .album {
      width: 100%;
      text-align: center;
      padding: 25px 0 25px 0;
    }
  }
}
</style>