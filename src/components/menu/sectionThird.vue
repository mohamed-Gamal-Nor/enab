<template lang="pug">
.menu-doc
  .overlay
  .container-fluid
    vue-picture-swipe(:items="items")
</template>

<script>
import Vue from "vue";
import VuePictureSwipe from "vue-picture-swipe";
Vue.component("vue-picture-swipe", VuePictureSwipe);
import menuDoc from "./menuDoc.json";
export default {
  data() {
    return {
      items: menuDoc,
    };
  },
};
</script>

<style lang="scss" scoped>
.menu-doc {
  background-image: url("https://i.ibb.co/CbK2C6k/28423488-1329500583861728-7094109988330534056-o.jpg");
  background-position: center;
  background-size: cover;
  padding: 50px 0;
  background-attachment: fixed;
  position: relative;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(#eee3c7, 0.7), rgba(#455c56, 0.7));
    z-index: 0;
  }
}
</style>
