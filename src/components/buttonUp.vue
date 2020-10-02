<template>
  <div class="button-up">
    <font-awesome-icon icon="caret-up" v-scroll-to="'#app'" />
  </div>
</template>
<script>
export default {
  name: "buttonUp",
  methods: {
    scrollNow() {
      let buttonUp = document.querySelector(".button-up");
      if (window.pageYOffset > 400) {
        buttonUp.style.display = "block";
      } else {
        buttonUp.style.display = "none";
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.scrollNow);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollNow);
  },
};
</script>
<style lang="scss" scoped>
.button-up {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: var(--main-color);
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 40px;
  color: var(--seconed-color);
  z-index: 3;
  display: none;
  border-radius: 50%;
  svg {
    font-size: 25px;
    cursor: pointer;
  }
  &:hover {
    background-color: var(--seconed-color);
    color: var(--main-color);
    transition: 0.3s;
  }
}
</style>