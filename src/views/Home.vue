<template>
  <div class="home">
    <navbar v-bind:navbarStauts="navbarStauts" :navbarRegular="navbarRegular" />
    <slider />
    <seconedSection />
    <tihrdSection />
    <forSection />
    <fiveSection />
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import slider from "../components/home/slider.vue";
import seconedSection from "../components/home/seconed-section.vue";
import tihrdSection from "../components/home/thired-section.vue";
import forSection from "../components/home/fore-section.vue";
import fiveSection from "../components/home/five-section.vue";
export default {
  name: "Home",
  components: {
    slider,
    navbar,
    seconedSection,
    tihrdSection,
    forSection,
    fiveSection,
  },
  data() {
    return {
      navbarStauts: true,
      navbarRegular: false,
    };
  },
};
</script>
