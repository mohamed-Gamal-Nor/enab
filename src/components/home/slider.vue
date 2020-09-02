<template>
  <!-- Swiper -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="slider" v-for="slider in sliders">
        <video autoplay loop muted preload="auto">
          <source :src="slider" type="video/mp4" />
          <source :src="slider" type="video/ogg" />Your browser does not support the video tag.
        </video>
        <div class="overlay"></div>
      </div>
    </div>
    <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>
<script>
export default {
  name: "slider",
  data() {
    return {
      sliders: [
        require("../../assets/Home/slider1.mp4"),
        require("../../assets/Home/slider2.mp4"),
        require("../../assets/Home/slider3.mp4"),
      ],
    };
  },
};
</script>


<style lang="scss" scoped>
.swiper-container {
  position: relative;
  min-height: 100vh;
  .swiper-button-next,
  .swiper-button-prev {
    background-color: var(--main-color);
    padding: 30px;
    opacity: 0.8;
    color: black;
    transition: 0.3s;
    &:hover {
      opacity: 1;
    }
  }
  .swiper-wrapper {
    width: 100%;

    .swiper-slide {
      width: 100%;
      max-height: 100vh;
      video {
        position: relative;
        width: 100%;
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(52, 73, 94, 0.6);
      }
    }
  }
}
</style>
