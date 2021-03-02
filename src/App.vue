<template lang="pug">
  div(id="app" :class="$i18n.locale")
    div
      vue-scroll-progress-bar(height="4px" backgroundColor="#455C56" zIndex="505050")
    div(class="content")
        loader
        navbar
        transition(name="zoom" mode="in-out")
            router-view
        setting
        buttonUp
        footter
</template>
<script>
import loader from "./components/loader.vue";
import navbar from "./components/navbar.vue";
import buttonUp from "./components/buttonUp.vue";
import setting from "./components/setting.vue";
import footter from "./components/footter.vue";
export default {
  name: "app",
  components: {
    buttonUp,
    footter,
    setting,
    navbar,
    loader
  },
};
</script>

<style lang="scss" scoped>

.zoom-enter-active,
.zoom-leave-active {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: zoom;
}

.zoom-leave-active {
  animation-direction: reverse;
}

@keyframes zoom {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  100% {
    opacity: 1;
  }
}
</style>
