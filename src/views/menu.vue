<template>
  <div class="menu">
    <introPage :introPage="introPage" />
    <sectionFirst />
    <sectionSeconed />
    <sectionThird />
  </div>
</template>

<script>
import introPage from "../components/introPage.vue";
import sectionFirst from "../components/menu/sectionFirst.vue";
import sectionSeconed from "../components/menu/sectionSeconed.vue";
import sectionThird from "../components/menu/sectionThird.vue";
export default {
  name: "About",
  components: {
    introPage,
    sectionFirst,
    sectionSeconed,
    sectionThird,
  },
  data() {
    return {
      navbarStauts: true,
      introPage: "intro-page.menu",
    };
  },
};
</script>