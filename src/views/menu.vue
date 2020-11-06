<template>
  <div class="menu">
    <navbar />
    <introPage :introPage="introPage" />
    <sectionFirst />
    <sectionSeconed />
    <loader />
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import introPage from "../components/introPage.vue";
import sectionFirst from "../components/menu/sectionFirst.vue";
import sectionSeconed from "../components/menu/sectionSeconed.vue";
import loader from "../components/loader.vue";
export default {
  name: "About",
  components: {
    navbar,
    introPage,
    sectionFirst,
    sectionSeconed,
    loader,
  },
  data() {
    return {
      navbarStauts: true,
      introPage: "intro-page.menu",
    };
  },
};
</script>