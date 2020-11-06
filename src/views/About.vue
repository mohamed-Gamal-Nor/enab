<template>
  <div class="about">
    <navbar />
    <introPage :introPage="introPage" />
    <firstSection />
    <seconedSection />
    <forSection />
    <thiredSection />
    <loader />
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import introPage from "../components/introPage.vue";
import firstSection from "../components/about/firstSection.vue";
import seconedSection from "../components/about/seconedSection.vue";
import thiredSection from "../components/about/thiredSection.vue";
import forSection from "../components/home/fore-section.vue";
import loader from "../components/loader.vue";
export default {
  name: "About",
  components: {
    navbar,
    introPage,
    firstSection,
    seconedSection,
    thiredSection,
    forSection,
    loader,
  },
  data() {
    return {
      introPage: "intro-page.about",
    };
  },
};
</script>
