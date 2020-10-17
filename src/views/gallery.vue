<template>
  <div class="about">
    <navbar v-bind:navbarStauts="navbarStauts" />
    <introPage :introPage="introPage" />
    <imageShuffle/>
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import introPage from "../components/introPage.vue";
import imageShuffle from "../components/gallery/imageShuffle.vue";
export default {
  name: "About",
  components: {
    navbar,
    introPage,
    imageShuffle
  },
  data() {
    return {
      navbarStauts: true,
      introPage: "intro-page.gallery",
    };
  },
};
</script>
