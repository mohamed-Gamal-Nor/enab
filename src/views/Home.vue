<template>
  <div class="home">
    <navbar v-bind:navbarStauts="navbarStauts" />
    <slider />
    <seconedSection />
    <tihrdSection />
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import slider from "../components/home/slider.vue";
import seconedSection from "../components/home/seconed-section.vue";
import tihrdSection from "../components/home/thired-section.vue";
export default {
  name: "Home",
  components: {
    slider,
    navbar,
    seconedSection,
    tihrdSection,
  },
  data() {
    return {
      navbarStauts: true,
    };
  },
};
</script>
