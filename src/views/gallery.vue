<template>
  <div class="gallery">
    <navbar />
    <introPage :introPage="introPage" />
    <imageShuffle />
    <loader />
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import introPage from "../components/introPage.vue";
import imageShuffle from "../components/gallery/imageShuffle.vue";
import loader from "../components/loader.vue";
export default {
  name: "About",
  components: {
    navbar,
    introPage,
    imageShuffle,
    loader,
  },
  data() {
    return {
      navbarStauts: true,
      introPage: "intro-page.gallery",
    };
  },
};
</script>
