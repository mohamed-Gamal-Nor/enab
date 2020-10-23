<template>
  <div class="about">
    <navbar v-bind:navbarStauts="navbarStauts" />
    <introPage :introPage="introPage" />
    <sectionFirst />
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import introPage from "../components/introPage.vue";
import sectionFirst from "../components/menu/sectionFirst.vue";
export default {
  name: "About",
  components: {
    navbar,
    introPage,
    sectionFirst,
  },
  data() {
    return {
      navbarStauts: true,
      introPage: "intro-page.menu",
    };
  },
};
</script>