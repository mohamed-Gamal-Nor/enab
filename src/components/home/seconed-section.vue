<template>
  <div class="our-story" id="seconed-section">
    <div class="arrow-down">
      <font-awesome-icon icon="arrow-down" v-scroll-to="'#seconed-section'" />
    </div>
    <div class="container-fluid">
      <div class="story-conent">
        <div class="text">
          <h6>{{$t("ourStory.title")}}</h6>
          <h1>{{$t("ourStory.litleTitle")}}</h1>
          <p>{{$t("ourStory.paragraph")}}</p>
          <div class="counter-story">
            <div class="counter">
              <font-awesome-icon icon="utensils" />
              <div class="counter-num">
                <h1 data-target="400">0</h1>
                <h6>{{$t("ourStory.countFood")}}</h6>
              </div>
            </div>
            <div class="counter">
              <font-awesome-icon icon="glass-cheers" />
              <div class="counter-num">
                <h1 data-target="300">0</h1>
                <h6>{{$t("ourStory.countbev")}}</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="image-story">
          <img src="@/assets/Home/store1.jpg" />
          <img src="@/assets/Home/store2.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "seconedSection",
  mounted() {},
  methods: {
    scrollNow() {
      const seconedSectionOffset = document.getElementById("seconed-section")
        .offsetTop;
      const counterItem = document.querySelectorAll(
        ".our-story .story-conent .counter-story .counter-num h1"
      );
      const currentScrollPos = window.pageYOffset;
      const speed = 1;
      if (currentScrollPos >= seconedSectionOffset) {
        counterItem.forEach((counter) => {
          const updateCount = () => {
            const counterTarget = +counter.dataset.target;
            const counterStart = +counter.innerText;
            const inc = speed;
            if (counterStart < counterTarget) {
              counter.innerText = Math.ceil(counterStart + inc);
              setTimeout(updateCount, 1);
            } else {
              //counterStart.innerText = counterTarget;
            }
          };
          updateCount();
        });
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
.our-story {
  background-image: url("../..//assets/Home/seconed-back.png");
  background-repeat: no-repeat;
  background-position: left;
  min-height: 100vh;
  position: relative;
  .story-conent {
    padding-top: 100px;
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    .text {
      margin-right: 25px;
      width: 40%;
      h6 {
        font-family: var(--main-font);
        font-weight: bold;
        font-size: 20px;
        color: var(--main-color);
        filter: brightness(60%);
        text-transform: uppercase;
      }
      h1 {
        font-family: var(--font-title);
        text-transform: capitalize;
        font-size: 50px;
      }
      p {
        font-family: var(--main-font);
        text-transform: capitalize;
        color: #999;
      }
      .counter-story {
        border-top: 1px solid #ccc;
        display: flex;
        flex-wrap: nowrap;
        width: 100%;
        .counter {
          width: 60%;
          display: flex;
          flex-wrap: nowrap;
          padding: 20px;
          text-align: center;
          svg {
            width: 50%;
            font-size: 50px;
            color: var(--main-color);
            filter: brightness(80%);
          }
          .counter-num {
            width: 50%;
            h1 {
              font-size: 35px;
            }
            h6 {
              font-size: 20px;
              text-transform: capitalize;
              color: #ccc;
              filter: brightness(90%);
            }
          }
          &:nth-of-type(1) {
            border-right: 1px solid #ccc;
          }
        }
      }
    }
    .image-story {
      width: 60%;
      position: relative;
      img {
        width: 70%;
        position: absolute;
        &:nth-of-type(1) {
          left: 50%;
          z-index: 1;
          top: 30%;
          width: 55%;
          border: 5px solid #fff;
          transform: rotate(270deg);
        }
      }
    }
  }
  .arrow-down {
    position: absolute;
    left: 50%;
    top: -59px;
    width: 254px;
    background: url(../../assets/Home/pattern-white.png) no-repeat center center;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    height: 59px;
    z-index: 1;
    text-align: center;
    padding: 20px 0 0 0;
    svg {
      cursor: pointer;
      font-size: 20px;
      color: var(--seconed-color);
    }
  }
}

@media (max-width: 991px) {
  .our-story {
    min-height: auto;
    .story-conent {
      display: block;
      width: 100%;
      padding-top: 50px;
      .text {
        margin-right: 0px;
        width: 100%;
        h1 {
          font-size: 40px;
        }
        .counter-story {
          .counter {
            svg {
              font-size: 45px;
            }
            .counter-num {
              h1 {
                font-size: 30px;
              }
              h6 {
                font-size: 15px;
              }
            }
          }
        }
      }
      .image-story {
        width: 100%;
        margin-top: 20px;
        display: inline-flex;
        img {
          width: 50%;
          position: relative;
           &:nth-of-type(1) {
            left: 0%;
            z-index: 1;
            top: 0%;
            width: 50%;
            border: 5px solid #fff;
            transform: rotate(0deg);
            }
        }
      }
    }
  }
}
</style>