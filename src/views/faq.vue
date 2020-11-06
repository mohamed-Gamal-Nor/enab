<template>
  <div class="faq">
    <navbar />
    <introPage :introPage="introPage" />
    <firstSection />
    <seconedSection />
    <forSection />
    <thiredSection />
    <loader />
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import introPage from "../components/introPage.vue";
import loader from "../components/loader.vue";
export default {
  name: "About",
  components: {
    navbar,
    introPage,
    loader,
  },
  data() {
    return {
      introPage: "intro-page.faq",
    };
  },
};
</script>