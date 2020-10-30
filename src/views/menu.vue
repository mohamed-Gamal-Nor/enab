<template>
  <div class="about">
    <navbar />
    <introPage :introPage="introPage" />
    <sectionFirst />
    <sectionSeconed />
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import introPage from "../components/introPage.vue";
import sectionFirst from "../components/menu/sectionFirst.vue";
import sectionSeconed from "../components/menu/sectionSeconed.vue";
export default {
  name: "About",
  components: {
    navbar,
    introPage,
    sectionFirst,
    sectionSeconed,
  },
  data() {
    return {
      navbarStauts: true,
      introPage: "intro-page.menu",
    };
  },
};
</script>