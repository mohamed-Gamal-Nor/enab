<template>
  <div class="Page404">
    <navbar />
    <loader />
    <sectionFirst/>
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import loader from "../components/loader.vue";
import sectionFirst from "../components/404/sectionFirst.vue";
export default {
  name: "About",
  components: {
    navbar,
    loader,
    sectionFirst
  }
};
</script>