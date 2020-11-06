<template>
  <div id="app" :class="$i18n.locale">
    <div>
      <vue-scroll-progress-bar
        height="4px"
        backgroundColor="#455C56"
        zIndex="505050"
      />
    </div>
    <router-view> </router-view>

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
