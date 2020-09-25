<template>
  <div id="app">
    <div>
      <vue-scroll-progress-bar
        height="4px"
        backgroundColor="#455C56"
        zIndex="505050"
      />
    </div>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <buttonUp />
    <footter />
  </div>
</template>
<script>
import buttonUp from "./components/buttonUp.vue";
import footter from "./components/footter.vue";
export default {
  name: "app",
  components: {
    buttonUp,
    footter,
  },
};
</script>

<style lang="scss" scoped>
</style>
