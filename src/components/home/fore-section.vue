<template>
  <div class="time-food">
    <div class="icon">
      <img src="https://i.ibb.co/p2vwV8n/delv.png" alt />
    </div>
    <div class="container-fluid">
      <div class="time" data-aos="fade-up" data-aos-duration="1500">
        <div class="content" v-for="time in timeData" :key="time.image">
          <img :src="time.image" alt />
          <h1>{{ $t(time.heading) }}</h1>
          <h6>{{ $t(time.time) }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "forSection",
  data() {
    return {
      timeData: [
        {
          image: "https://i.ibb.co/d4zGwg7/break.png",
          heading: "timeFood.time1.name",
          time: "timeFood.time1.time",
        },
        {
          image: "https://i.ibb.co/wyrM2Ps/lanuch.png",
          heading: "timeFood.time2.name",
          time: "timeFood.time2.time",
        },
        {
          image: "https://i.ibb.co/NpRrWT0/dinner.png",
          heading: "timeFood.time3.name",
          time: "timeFood.time3.time",
        },
        {
          image: "https://i.ibb.co/7vf5jvN/dessert.png",
          heading: "timeFood.time4.name",
          time: "timeFood.time4.time",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.time-food {
  position: relative;
  .icon {
    position: absolute;
    left: 50%;
    top: -59px;
    width: 254px;
    background: url("https://i.ibb.co/C1bp3nn/pattern-white.png") no-repeat
      center center;
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
  .time {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    padding-top: 120px;
    padding-bottom: 120px;
    .content {
      width: 25%;
      text-align: center;
      margin: 0px 70px 0px 70px;
      height: 200px;
      line-height: 100px;
      &:nth-of-type(2),
      &:nth-of-type(3) {
        position: relative;
        &::after {
          content: "";
          position: absolute;
          width: 150px;
          height: 2px;
          border-top: 2px dashed var(--seconed-color);
          left: 100%;
          top: 25%;
        }
        &::before {
          content: "";
          position: absolute;
          width: 150px;
          height: 2px;
          border-top: 2px dashed var(--seconed-color);
          right: 100%;
          top: 25%;
        }
      }
      img {
        margin-bottom: 10px;
      }
      h1 {
        color: var(--main-color);
        filter: brightness(85%);
        margin-bottom: 10px;

        font-family: var(--main-font);
      }
      h6 {
        color: var(--seconed-color);
        font-weight: bold;
      }
    }
  }
}

@media (max-width: 991px) {
  .time-food {
    .icon {
      svg {
        font-size: 18px;
      }
    }
    .time {
      display: block;
      width: 100%;
      padding-top: 60px;
      padding-bottom: 30px;
      .content {
        width: 100%;
        text-align: center;
        height: auto;
        margin: 10px 0px 20px 0px;
        &:nth-of-type(2),
        &:nth-of-type(3) {
          position: relative;
          &::after {
            display: none;
          }
          &::before {
            display: none;
          }
        }
        h1 {
          font-size: 25px;

          font-family: var(--main-font);
        }
        h6 {
          color: var(--seconed-color);
          font-weight: bold;
        }
      }
    }
  }
}
</style>