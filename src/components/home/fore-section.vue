<template>
  <div class="time-food">
    <div class="icon">
      <img src="../../assets/Home/time.png" alt />
    </div>
    <div class="container-fluid">
      <div class="time">
        <div class="conent" v-for="time in timeData" :key="time.image">
          <img :src="time.image" alt />
          <h1>{{time.heading}}</h1>
          <h6>{{time.time}}</h6>
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
          image: require("../../assets/Home/break.png"),
          heading: "Breakfast",
          time: "8.00 am / 10.00 am",
        },
        {
          image: require("../../assets/Home/lanuch.png"),
          heading: "Lunch",
          time: "1.00 am / 2.00 am",
        },
        {
          image: require("../../assets/Home/dinner.png"),
          heading: "Dinner",
          time: "7.00 am / 9.00 am",
        },
        {
          image: require("../../assets/Home/dessert.png"),
          heading: "Dessert",
          time: "All Day",
        },
      ],
    };
  },
};
</script>