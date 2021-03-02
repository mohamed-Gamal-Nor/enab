<template>
  <div class="gallery">
    <introPage :introPage="introPage" />
    <imageShuffle />
  </div>
</template>

<script>
import introPage from "../components/introPage.vue";
import imageShuffle from "../components/gallery/imageShuffle.vue";
export default {
  name: "About",
  components: {
    introPage,
    imageShuffle,
  },
  data() {
    return {
      navbarStauts: true,
      introPage: "intro-page.gallery",
    };
  },
};
</script>
