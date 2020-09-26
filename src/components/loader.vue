<template lang="pug">
#loader
  h1 Hello
</template>
<script>
export default {
  name: "loader",
  methods: {
    onReaload() {
      //document.querySelector(".loader").style.display = "none";
      console.log(document.getElementById("loader"));
    },
  },
  created() {
    this.onReaload();
  },
};
</script>
<style lang="scss" scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  background-color: red;
  width: 100%;
  height: 100%;
  z-index: 1558948541;
}
</style>