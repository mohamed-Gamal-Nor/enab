<template>
  <div class="faq">
    <navbar />
    <introPage :introPage="introPage" />
    <firstSection />
    <seconedSection />
    <forSection />
    <thiredSection />
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
      introPage: "intro-page.faq",
    };
  },
};
</script>