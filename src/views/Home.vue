<template>
  <div class="home">
    <navbar v-bind:navbarStauts="navbarStauts" />
    <slider />
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import slider from "../components/home/slider.vue";
export default {
  name: "Home",
  components: {
    slider,
    navbar,
  },
  data() {
    return {
      navbarStauts: true,
    };
  },
};
</script>
