<template>
  <div class="about">
    <navbar v-bind:navbarStauts="navbarStauts" />
    <introPage :introPage="introPage" />
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import introPage from "../components/introPage.vue";

export default {
  name: "About",
  components: {
    navbar,
    introPage,
  },
  data() {
    return {
      navbarStauts: true,
      introPage: "intro-page.gallery",
    };
  },
};
</script>
