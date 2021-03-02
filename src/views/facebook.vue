<template>
  <div class="facebook">
    <introPage :introPage="introPage" />
    <firstSection/>
  </div>
</template>

<script>
import introPage from "../components/introPage.vue";
import firstSection from "../components/facebook/firstSection.vue";
export default {
  name: "About",
  components: {
    introPage,
    firstSection
  },
  data() {
    return {
      introPage: "intro-page.facebook",
    };
  },
};
</script>