<template>
  <div class="faq">
    <navbar />
    <introPage :introPage="introPage" />
    <firstSection/>
    <loader />
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import introPage from "../components/introPage.vue";
import loader from "../components/loader.vue";
import firstSection from "../components/faq/firstSection.vue"
export default {
  name: "About",
  components: {
    navbar,
    introPage,
    loader,
    firstSection
  },
  data() {
    return {
      introPage: "intro-page.faq",
    };
  },
};
</script>