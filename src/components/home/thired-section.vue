<template>
  <div class="our-exclusive">
    <div class="overlay"></div>
    <div class="container-fluid">
      <div class="our" >
        <div class="icon">
          <font-awesome-icon icon="concierge-bell" />
        </div>
        <div class="text" data-aos="zoom-in" data-aos-duration="1500">
          <h4>{{ $t("ourExlosive.intro.head1") }}</h4>
          <h1>{{ $t("ourExlosive.intro.head2") }}</h1>
          <span>&diams; &diams; &diams; &diams; &diams; &diams;</span>
        </div>
        <swiper class="swiper container" :options="swiperOption" data-aos="zoom-in" data-aos-duration="1500">
          <swiper-slide
            class="swiper-slide"
            v-for="our in ourData"
            :key="our.image"
          >
            <div class="our-icon">
              <img :src="our.image" alt />
            </div>
            <h1>{{ $t(our.heading) }}</h1>
            <p>{{ $t(our.pragraph) }}</p>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
export default {
  name: "thirdSection",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      ourData: [
        {
          image: "https://i.ibb.co/NpRrWT0/dinner.png",
          heading: "ourExlosive.our1.heading",
          pragraph: "ourExlosive.our1.pargraph",
        },
        {
          image: "https://i.ibb.co/YhpLKcx/serv.png",
          heading: "ourExlosive.our2.heading",
          pragraph: "ourExlosive.our2.pargraph",
        },
        {
          image: "https://i.ibb.co/p2vwV8n/delv.png",
          heading: "ourExlosive.our3.heading",
          pragraph: "ourExlosive.our3.pargraph",
        },
        {
          image: "https://i.ibb.co/CwNccff/menu.png",
          heading: "ourExlosive.our4.heading",
          pragraph: "ourExlosive.our4.pargraph",
        },
      ],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 50,
        loop: true,
        loopFillGroupWithBlank: true,
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.our-exclusive {
  background-image: url("https://i.ibb.co/HhGqsc3/our-services.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  margin-top: 59px;
  position: relative;
  min-height: 100vh;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #455c56, $alpha: 0.7);
  }
  .our {
    position: relative;
    text-align: center;
    .icon {
      position: relative;
      left: 50%;
      top: 0px;
      width: 254px;
      background: url("https://i.ibb.co/C1bp3nn/pattern-white.png") no-repeat
        center center;
      -webkit-transform: translateX(-50%) rotate(180deg);
      -moz-transform: translateX(-50%) rotate(180deg);
      -ms-transform: translateX(-50%) rotate(180deg);
      -o-transform: translateX(-50%) rotate(180deg);
      transform: translateX(-50%) rotate(180deg);
      height: 59px;
      z-index: 1;
      text-align: center;
      padding: 20px 0 0 0;
      svg {
        font-size: 50px;
        color: var(--seconed-color);
        transform: rotate(180deg);
      }
    }
    .text {
      margin-top: 20px;
      margin-bottom: 20px;
      h4 {
        font-family: var(--main-font);
        font-weight: bold;
        color: var(--main-color);
      }
      h1 {
        font-family: var(--font-title);
        font-weight: bold;
        color: #fff;
        font-size: 50px;
        margin-bottom: 25px;
      }
      span {
        text-align: center;
        position: relative;
        padding: 5px;
        color: transparent;
        text-shadow: 0 0 0 var(--main-color);
        &::after {
          left: 100%;
          top: 50%;
          position: absolute;
          content: "";
          width: 200px;
          height: 2px;
          background: var(--main-color);
        }
        &::before {
          right: 100%;
          top: 50%;
          position: absolute;
          content: "";
          width: 200px;
          height: 2px;
          background: var(--main-color);
        }
      }
    }
    .swiper-slide {
      background-color: rgba($color: #455c56, $alpha: 0.8);
      border: 0.1px solid rgba($color: #eee3c7, $alpha: 0.5);
      padding: 51px 10px 50px 10px;
      height: 320px;
      .our-icon {
        position: relative;
        left: 35%;
        width: 80px;
        background-color: var(--main-color);
        height: 80px;
        line-height: 70px;
        border-radius: 50%;
        img {
          width: 70%;
        }
      }
      h1 {
        margin-top: 25px;
        font-family: var(--main-font);
        color: var(--main-color);
        font-size: 30px;
      }
      p {
        font-weight: bold;
        color: #ccc;
        font-size: 15px;
      }
    }
  }
}
@media (max-width: 991px) {
  .our-exclusive {
    .our {
      .icon {
        svg {
          font-size: 35px;
        }
      }
      .text {
        margin-top: 30px;
        h1 {
          font-size: 35px;
        }
        span {
          font-size: 12px;
          &::after {
            width: 100px;
          }
          &::before {
            width: 100px;
          }
        }
      }
      .swiper-slide {
        .our-icon {
          left: 40%;
        }
        p {
          font-weight: bold;
          color: #ccc;
          font-size: 13px;
        }
      }
    }
  }
}
</style>

