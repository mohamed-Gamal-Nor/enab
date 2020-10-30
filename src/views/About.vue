<template>
  <div class="about">
    <navbar />
    <introPage :introPage="introPage" />
    <firstSection />
    <seconedSection />
    <forSection />
    <thiredSection />
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import introPage from "../components/introPage.vue";
import firstSection from "../components/about/firstSection.vue";
import seconedSection from "../components/about/seconedSection.vue";
import thiredSection from "../components/about/thiredSection.vue";
import forSection from "../components/home/fore-section.vue";

export default {
  name: "About",
  components: {
    navbar,
    introPage,
    firstSection,
    seconedSection,
    thiredSection,
    forSection,
  },
  data() {
    return {
      navbarStauts: true,
      introPage: "intro-page.about",
    };
  },
};
</script>
