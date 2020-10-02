<template>
  <div id="app">
    <div>
      <vue-scroll-progress-bar
        height="4px"
        backgroundColor="#455C56"
        zIndex="505050"
      />
    </div>
    <vue-page-transition name="overlay-left-right">
        <router-view></router-view>
    </vue-page-transition>
    <buttonUp />
    <footter />
    <loader />
  </div>
</template>
<script>
import buttonUp from "./components/buttonUp.vue";
import footter from "./components/footter.vue";
import loader from "./components/loader.vue";
export default {
  name: "app",
  components: {
    buttonUp,
    footter,
    loader,
  },
};
</script>

<style lang="scss" scoped>
</style>
