<template>
  <div class="about">
    <navbar v-bind:navbarStauts="navbarStauts" />
    <introPage :introPage="introPage" />
    <firstSection />
    <seconedSection />
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import introPage from "../components/introPage.vue";
import firstSection from "../components/about/firstSection.vue";
import seconedSection from "../components/about/seconedSection.vue";
export default {
  name: "About",
  components: {
    navbar,
    introPage,
    firstSection,
    seconedSection,
  },
  data() {
    return {
      navbarStauts: true,
      introPage: "intro-page.about",
    };
  },
};
</script>
