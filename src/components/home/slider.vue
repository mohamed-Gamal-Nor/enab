<template>
  <div class="slider-video">
    <video autoplay loop muted preload="auto">
      <source src="../../assets/Home/slider1.mp4" type="video/mp4" />
      <source src="../../assets/Home/slider1.mp4" type="video/ogg" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>
<script>
export default {
  name: "slider",
};
</script>

<style lang="scss" scoped>
.slider-video {
  max-height: 100vh;
  video {
    width: 100%;
    height: 100%;
  }
}
</style>
