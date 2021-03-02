<template>
  <div class="home">
    <slider />
    <seconedSection />
    <tihrdSection />
    <forSection />
    <fiveSection />
  </div>
</template>

<script>
import slider from "../components/home/slider.vue";
import seconedSection from "../components/home/seconed-section.vue";
import tihrdSection from "../components/home/thired-section.vue";
import forSection from "../components/home/fore-section.vue";
import fiveSection from "../components/home/five-section.vue";
export default {
  name: "Home",
  components: {
    slider,
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
