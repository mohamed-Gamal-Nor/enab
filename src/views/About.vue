<template>
  <div class="about">
    <navbar v-bind:navbarStauts="navbarStauts" />
  </div>
  
</template>

<script>
import navbar from "../components/navbar.vue";
export default {
  name: "About",
  components: {
      navbar,
  },
  data() {
    return {
      navbarStauts: false,
    };
  },
};
</script>
