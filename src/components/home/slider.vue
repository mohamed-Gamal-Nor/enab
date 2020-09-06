<template>
  <!-- Swiper -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="slide in sliders" :key="slide.video">
        <video autoplay loop muted preload="auto">
          <source :src="slide.video" type="video/mp4" />
          <source :src="slide.video" type="video/ogg" />Your browser does not support the video tag.
        </video>
        <div class="overlay">
          <div class="container">
            <div class="slider-intro slide-top">
              <h3>{{$t(slide.firstHead)}}</h3>
              <h1>{{$t(slide.seconedHead)}}</h1>
              <div class="icon-slider">
                <div class="icon">
                  <font-awesome-icon icon="utensils" />
                </div>
              </div>
              <p>{{$t(slide.paragraph)}}</p>
              <button >
                <router-link :to="{ name: 'About' }">{{$t(button)}}</router-link>
              </button>
            </div>
          </div>
        </div>
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
        {
          video: require("@/assets/Home/slider1.mp4"),
          firstHead: "slider.slider1.firstHead",
          seconedHead: "slider.slider1.seconedHead",
          paragraph: "slider.slider1.paragraph",
        },
        {
          video: require("@/assets/Home/slider2.mp4"),
          firstHead: "slider.slider2.firstHead",
          seconedHead: "slider.slider2.seconedHead",
          paragraph: "slider.slider2.paragraph",
        },
        {
          video: require("@/assets/Home/slider3.mp4"),
          firstHead: "slider.slider3.firstHead",
          seconedHead: "slider.slider3.seconedHead",
          paragraph: "slider.slider3.paragraph",
        },
      ],
      button: "slider.button",
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
    padding: 25px;
    color: var(--seconed-color);
    transition: 0.3s;
    top: 85%;
    &::after {
      font-size: 30px;
    }

    &:hover {
      background-color: var(--seconed-color);
      color: var(--main-color);
    }
  }
  .swiper-button-prev {
    right: 70px;
    left: auto;
  }
  .swiper-wrapper {
    width: 100%;

    .swiper-slide {
      width: 100%;
      max-height: 100vh;
        
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(52, 73, 94, 0.7);
        .slider-intro {
          margin: auto;
          width: 100%;
          text-align: center;
          margin-top: 20%;
          transition: 0.3s;
          &.slide-top{-webkit-animation:slide-top .5s cubic-bezier(.25,.46,.45,.94) reverse both;animation:slide-top .5s cubic-bezier(.25,.46,.45,.94) reverse both}
          @-webkit-keyframes slide-top{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(-100px);transform:translateY(-100px)}}@keyframes slide-top{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(-100px);transform:translateY(-100px)}}
          h3 {
            font-family: var(--font-title);
            font-weight: bold;
            color: var(--main-color);
            font-size: 50px;
          }
          h1 {
            font-family: var(--main-font);
            text-transform: uppercase;
            text-align: center;
            line-height: 72px;
            letter-spacing: 2px;
            font-weight: 700;
            font-size: 50px;
            border-color: rgba(0, 0, 0, 0.26);
            border-style: none;
            margin: 0px;
            border-radius: 0px;
            padding: 0px;
            height: auto;
            color: rgb(255, 255, 255);
            text-decoration: none;
            white-space: normal;
            min-height: 0px;
            min-width: 0px;
            max-height: none;
            max-width: none;
            transform-origin: 50% 50%;
            opacity: 1;
            transform: perspective(600px);
          }
          p {
            font-family: var(--main-font);
            text-align: center;
            line-height: 27px;
            letter-spacing: 0px;
            font-weight: bold;
            font-size: 18px;
            border-color: rgb(119, 119, 119);
            border-style: none;
            margin: auto;
            color: rgb(255, 255, 255);
            white-space: normal;
            max-width: 600px;
            transform-origin: 50% 50%;
            transform: perspective(600px);
            padding-bottom: 15px;
          }
          button {
            outline: none;
            border: none;
            width: 200px;
            padding: 10px;
            background-color: var(--main-color);
            transition: 0.3s;
            a {
              text-decoration: none;
              color: black;
              font-family: var(--main-font);
              font-weight: bold;
            }

            &:hover {
              background-color: var(--seconed-color);
              a {
                color: var(--main-color);
              }
            }
          }
          .icon-slider {
            padding: 10px;
            .icon {
              width: 50px;
              margin: auto;
              position: relative;
              svg {
                color: var(--main-color);
                font-size: 35px;
              }
              &::before,
              &::after {
                content: " ";
                width: 150px;
                padding: 1px;
                background-color: var(--main-color);
                position: absolute;

                top: 50%;
              }
              &::before {
                right: 50px;
              }
              &::after {
                left: 50px;
              }
            }
          }
        }
      }
    }
  }
}
@media (min-width: 1200px) {
  video {
    width: 100%;
  }
}
@media (max-width: 1200px) {
  video {
    height: 100vh;
  }
}
@media (max-width: 768px) {
  .swiper-container {
    .swiper-button-next,
    .swiper-button-prev {
      padding: 20px;
      transition: 0.3s;
      top: 80%;
      &::after {
        font-size: 25px;
      }
    }
    .swiper-wrapper {
      .swiper-slide {
        .overlay {
          .slider-intro {
            margin-top: 30%;
            h3 {
              font-size: 30px;
            }
            h1 {
              font-size: 30px;
              letter-spacing: 1px;
              line-height: 40px;
            }
            p {
              font-size: 16px;
            }
            .icon-slider {
              .icon {
                svg {
                  font-size: 30px;
                }
                &::before,
                &::after {
                  width: 100px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
