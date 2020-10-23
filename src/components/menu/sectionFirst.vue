<template lang="pug">
.menu
  .container
    .capture
      h1 Scan the code with the phone's camera to download the menu
      .image-menu
        div
          img(:src="gif", alt="alt")
        div
          img(:src="menuImage", alt="alt")
      .button-download
        a(href="https://scnv.io/GkvE?qr=1", target="_blank") Download Menu Now
</template>

<script>
export default {
  data() {
    return {
      gif: require("@/assets/menu/menu.gif"),
      menuImage: require("@/assets/menu/enab.jpeg"),
    };
  },
};
</script>
<style lang="scss" scoped>
.menu {
  .capture {
    padding-top: 50px;
    h1 {
      font-family: var(--font-title);
      text-align: center;
      color: var(--seconed-color);
    }
    .image-menu {
      text-align: center;
      display: flex;
      flex-wrap: nowrap;
      div {
        width: 50%;
        &:nth-of-type(1) {
          text-align: right;
        }

        &:nth-of-type(2) {
          text-align: left;
        }
      }
    }
    .button-download {
      text-align: center;

      a {
        outline: none;
        background-color: var(--seconed-color);
        color: var(--main-color);
        font-family: var(--main-font);
        border: none;
        padding: 15px;
        font-weight: bold;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
}
</style>