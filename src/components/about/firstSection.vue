<template lang="pug">
.welocme-store
  .container
    .content
      .img
        img(src="https://i.ibb.co/pWdcNdW/first-Section.jpg", alt="alt")
      .message
        .content
          .heading
            h6 {{ $t('ourStory.title') }}
            h1 {{ $t('ourStory.litleTitle') }}
            span &diams; &diams; &diams; &diams; &diams; &diams;
          .paragraph
            p {{ $t('ourStory.paragraph') }}
          .logo
            h4 {{ $t('ourStory.team') }}
            img(src="https://i.ibb.co/8B58bPB/logo.png", alt="alt")
</template>
<script>
export default {
  name: "firstSection",
};
</script>
<style lang="scss" scoped>
.welocme-store {
  padding-top: 100px;
  padding-bottom: 100px;
  .content {
    position: relative;
    .img {
      text-align: center;
      img {
        height: 500px;
        width: 1000px;
        border: 13px solid var(--main-color);
      }
    }
    .message {
      background-image: url("https://i.ibb.co/L65GzpX/seconed-back.png");
      background-color: #fff;
      background-repeat: no-repeat;
      background-position: center;
      width: 500px;
      position: absolute;
      top: -10%;
      left: 30%;
      min-height: 70vh;
      z-index: 1;
      padding: 15px;
      .content {
        border: 1px dashed var(--seconed-color);
        padding: 10px;
        padding-bottom: 25px;
        text-align: center;
        .heading {
          margin: 20px 0 20px 0;
          h6 {
            margin-bottom: 15px;
            color: var(--seconed-color);
            font-weight: bold;
            font-size: 20px;
            font-family: var(--main-font);
          }
          h1 {
            margin-bottom: 20px;
            color: var(--main-color);
            filter: brightness(80%);
            font-weight: bold;
            font-family: var(--font-title);
          }
          span {
            text-shadow: 0 0 0 var(--seconed-color);
            color: transparent;
          }
        }
        .paragraph {
          font-family: var(--main-font);
          line-height: 30px;
          color: #ccc;
          filter: brightness(85%);
        }
        .logo {
          margin: 20px 0 20px 0;
          h4 {
            margin-bottom: 20px;
            color: var(--main-color);
            filter: brightness(80%);
            font-weight: bold;
            font-family: var(--font-title);
          }
        }
      }
    }
  }
}
@media (max-width: 991px) {
  .welocme-store {
    padding-top: 20px;
    padding-bottom: 20px;
    .content {
      position: relative;
      .img {
        display: none;
      }
      .message {
        width: 100%;
        position: relative;
        top: 0%;
        left: 0%;
        padding: 10px;
        .content {
          .heading {
            h1 {
              font-size: 30px;
            }
            span {
              font-size: 12px;
            }
          }
          .paragraph {
            font-size: 13px;
          }
        }
      }
    }
  }
}
</style>