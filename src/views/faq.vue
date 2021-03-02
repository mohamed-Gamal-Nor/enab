<template>
  <div class="faq">
    <introPage :introPage="introPage" />
    <firstSection/>
  </div>
</template>

<script>
import introPage from "../components/introPage.vue";
import firstSection from "../components/faq/firstSection.vue"
export default {
  name: "About",
  components: {
    introPage,
    firstSection
  },
  data() {
    return {
      introPage: "intro-page.faq",
    };
  },
};
</script>