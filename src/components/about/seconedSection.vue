<template lang="pug">
.about-counter
  .ovarlay
  .container
    .counter(data-aos="fade-right")
      .count(v-for="count in counterData", :key="count.lenght")
        .icon
          font-awesome-icon(:icon="count.icon")
        .num
          span(:data-count="$t(count.numCount)") 0
        .text
          span {{ $t(count.text) }}
</template>
<script>
export default {
  name: "seconedSection",
  data() {
    return {
      counterData: [
        {
          icon: "smile-beam",
          numCount: "about-counter.count1.num",
          text: "about-counter.count1.title",
        },
        {
          icon: "book-open",
          numCount: "about-counter.count2.num",
          text: "about-counter.count2.title",
        },
        {
          icon: "store",
          numCount: "about-counter.count3.num",
          text: "about-counter.count3.title",
        },
        {
          icon: "smile-beam",
          numCount: "about-counter.count4.num",
          text: "about-counter.count4.title",
        },
      ],
    };
  },
  methods: {
    scrollNow() {
      const counterOffset = document.querySelector(".about-counter").offsetTop;
      const counterItem = document.querySelectorAll(
        ".about-counter .counter .count .num span"
      );
      const currentScrollPos = window.pageYOffset;
      const speed = 1;
      if (currentScrollPos >= counterOffset - 200) {
        counterItem.forEach((counter) => {
          const updateCount = () => {
            const counterTarget = +counter.dataset.count;
            const counterStart = +counter.innerText;
            const inc = speed;
            if (counterStart < counterTarget) {
              counter.innerText = Math.ceil(counterStart + inc);
              setTimeout(updateCount, 20);
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
.about-counter {
  background-image: url("https://i.ibb.co/XyRwKV4/counter.jpg");
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  .ovarlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba($color: #455c56, $alpha: 0.6);
  }
  .counter {
    position: relative;
    z-index: 1;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 70px;
    .count {
      width: 25%;
      border-right: 1px solid var(--main-color);
      margin: 5px;
      &:nth-of-type(4) {
        border-right: 0px solid var(--main-color);
      }
      .icon {
        margin-bottom: 10px;
        color: var(--main-color);
        font-size: 40px;
      }
      .num {
        color: #fff;
        font-family: var(--main-font);
        font-size: 35px;
        margin-bottom: 20px;
        span {
          border-bottom: 2px solid #fff;
        }
      }
      .text {
        font-family: var(--font-title);
        font-weight: bold;
        color: var(--main-color);
        font-size: 20px;
      }
    }
  }
}
@media (max-width: 991px) {
  .about-counter {
    background-position: center;
    .counter {
      display: block;
      .count {
        width: 100%;
        border-right: 0 px solid var(--main-color);
        margin-bottom: 10px;
        .icon {
          font-size: 35px;
        }
        .num {
          font-size: 25px;
        }
        .text {
          font-family: var(--font-title);
          font-weight: bold;
          color: var(--main-color);
          font-size: 20px;
        }
      }
    }
  }
}
</style>