<template>
  <div class="about">
    <introPage :introPage="introPage" />
    <firstSection />
    <seconedSection />
    <forSection />
    <thiredSection />
  </div>
</template>

<script>
import introPage from "../components/introPage.vue";
import firstSection from "../components/about/firstSection.vue";
import seconedSection from "../components/about/seconedSection.vue";
import thiredSection from "../components/about/thiredSection.vue";
import forSection from "../components/home/fore-section.vue";
export default {
  name: "About",
  components: {
    introPage,
    firstSection,
    seconedSection,
    thiredSection,
    forSection,
  },
  data() {
    return {
      introPage: "intro-page.about",
    };
  },
};
</script>
