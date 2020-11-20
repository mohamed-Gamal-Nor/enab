<template lang="pug">
.not-found
  .overlay
  .container-fluid
    .text
      .svg
        | 4
        img(src="https://i.ibb.co/3rVZd9m/output-onlinepngtools-1.png").
        | 4
      h1 {{ $t('eror404.head') }}
      p {{ $t('eror404.paragraph') }}
      p {{ $t('eror404.para') }}
        router-link(:to="`/${$i18n.locale}`") {{ $t('eror404.button') }}
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.not-found {
  min-height: 100vh;
  background-image: url("https://i.ibb.co/pWdcNdW/first-Section.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba($color: #455C56, $alpha: 0.7);
  }
  .text {
    width: 50%;
    position: absolute;
    z-index: 2;
    top: 25%;
    left: 25%;
    text-align: center;
    .svg {
      font-size: 150px;
      color: var(--main-color);
      font-family: var(--main-font);
      margin-bottom: 25px;
      img {
        margin: 0px 40px;
      }
    }
    h1 {
      color: #fff;
      font-family: var(--main-font);
      font-weight: bold;
      font-size: 50px;
    }
    p {
      font-family: var(--main-font);
      text-align: center;
      color: var(--main-color);
      font-size: 22px;
      a {
        text-decoration: underline;
        color: #fff;
      }
    }
  }
}

@media (max-width: 991px) {
  .not-found {
    .text {
      width: 100%;
      left: 0%;
      .svg {
        font-size: 75px;
        color: var(--main-color);
        font-family: var(--main-font);
        margin-bottom: 25px;
        img {
          margin: 0px 20px;
          max-width: 20%;
        }
      }
      h1 {
        font-size: 30px;
      }
      p {
        font-size: 15px;
      }
    }
  }
}
</style>