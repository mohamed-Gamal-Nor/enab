<template lang="pug">
.image-shuffle
  .container-fluid
    #list-complete-demo.demo
      .button-area
        button.active(v-on:click="filter('all'); active()") All
        button(v-on:click="filter('tag1'); active()") Breakfast
        button(v-on:click="filter('tag2'); active()") Cold Meza
        button(v-on:click="filter('tag3'); active()") Hot Meza
        button(v-on:click="filter('tag4'); active()") Salads
        button(v-on:click="filter('tag5'); active()") Grill
        button(v-on:click="filter('tag6'); active()") Oven
        button(v-on:click="filter('tag7'); active()") Sweets
        button(v-on:click="filter('tag8'); active()") Drinkes
      <transition-group name="list-complete" class="list-complete" tag="section">
        <div v-for="item in filteredItems" v-bind:key="item.id" class="list-complete-item">
          lazy-image.list-complete-img.AppImage(
            :src="item.src",
            :placeholder="loading"
          )
        </div>
      </transition-group>
</template>
<script>
import Vue from "vue";
import VueLazyImage from "vue-lazy-images";
Vue.use(VueLazyImage);
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          tags: ["all", "all"],
          src: require("../../assets/gallery/1.jpg"),
        },
        {
          id: 2,
          tags: ["all", "tag3"],
          src: require("../../assets/gallery/2.jpg"),
        },
        {
          id: 3,
          tags: ["all", "all"],
          src: require("../../assets/gallery/3.jpg"),
        },
        {
          id: 4,
          tags: ["all", "tag5"],
          src: require("../../assets/gallery/4.jpg"),
        },
        {
          id: 5,
          tags: ["all", "tag5"],
          src: require("../../assets/gallery/5.jpg"),
        },
        {
          id: 6,
          tags: ["all", "tag3"],
          src: require("../../assets/gallery/6.jpg"),
        },
        {
          id: 7,
          tags: ["all", "tag1"],
          src: require("../../assets/gallery/7.jpg"),
        },
        {
          id: 8,
          tags: ["all", "tag3"],
          src: require("../../assets/gallery/8.jpg"),
        },
        {
          id: 9,
          tags: ["all", "tag5"],
          src: require("../../assets/gallery/9.jpg"),
        },
        {
          id: 10,
          tags: ["all", "tag5"],
          src: require("../../assets/gallery/10.jpg"),
        },
        {
          id: 11,
          tags: ["all", "tag3"],
          src: require("../../assets/gallery/11.jpg"),
        },
        {
          id: 12,
          tags: ["all", "tag6"],
          src: require("../../assets/gallery/12.jpg"),
        },
        {
          id: 13,
          tags: ["all", "tag5"],
          src: require("../../assets/gallery/13.jpg"),
        },

        {
          id: 14,
          tags: ["all", "tag5"],
          src: require("../../assets/gallery/14.jpg"),
        },
        {
          id: 15,
          tags: ["all", "tag1"],
          src: require("../../assets/gallery/15.jpg"),
        },
        {
          id: 16,
          tags: ["all", "tag5"],
          src: require("../../assets/gallery/16.jpg"),
        },
        {
          id: 17,
          tags: ["all", "tag5"],
          src: require("../../assets/gallery/17.jpg"),
        },
        {
          id: 18,
          tags: ["all", "tag7"],
          src: require("../../assets/gallery/18.jpg"),
        },
        {
          id: 19,
          tags: ["all", "tag5"],
          src: require("../../assets/gallery/19.jpg"),
        },
        {
          id: 20,
          tags: ["all", "tag8"],
          src: require("../../assets/gallery/20.jpg"),
        },
        {
          id: 21,
          tags: ["all", "tag3"],
          src: require("../../assets/gallery/21.jpg"),
        },
        {
          id: 22,
          tags: ["all", "tag7"],
          src: require("../../assets/gallery/22.jpg"),
        },
        {
          id: 23,
          tags: ["all", "tag1"],
          src: require("../../assets/gallery/23.jpg"),
        },
        {
          id: 24,
          tags: ["all", "tag5"],
          src: require("../../assets/gallery/24.jpg"),
        },
        {
          id: 25,
          tags: ["all", "tag3"],
          src: require("../../assets/gallery/25.jpg"),
        },
        {
          id: 26,
          tags: ["all", "tag5"],
          src: require("../../assets/gallery/26.jpg"),
        },
        {
          id: 27,
          tags: ["all", "tag6"],
          src: require("../../assets/gallery/27.jpg"),
        },
        {
          id: 28,
          tags: ["all", "tag1"],
          src: require("../../assets/gallery/28.jpg"),
        },
        {
          id: 29,
          tags: ["all", "tag7"],
          src: require("../../assets/gallery/29.jpg"),
        },
        {
          id: 30,
          tags: ["all", "tag5"],
          src: require("../../assets/gallery/30.jpg"),
        },
        {
          id: 31,
          tags: ["all", "tag3"],
          src: require("../../assets/gallery/31.jpg"),
        },
        {
          id: 32,
          tags: ["all", "tag3"],
          src: require("../../assets/gallery/32.jpg"),
        },
        {
          id: 33,
          tags: ["all", "tag7"],
          src: require("../../assets/gallery/33.jpg"),
        },
        {
          id: 34,
          tags: ["all", "tag1"],
          src: require("../../assets/gallery/34.jpg"),
        },
        {
          id: 35,
          tags: ["all", "tag5"],
          src: require("../../assets/gallery/35.jpg"),
        },
        {
          id: 36,
          tags: ["all", "tag6"],
          src: require("../../assets/gallery/36.jpg"),
        },
        {
          id: 37,
          tags: ["all", "tag4"],
          src: require("../../assets/gallery/37.jpg"),
        },
        {
          id: 38,
          tags: ["all", "tag7"],
          src: require("../../assets/gallery/38.jpg"),
        },
        {
          id: 39,
          tags: ["all", "tag5"],
          src: require("../../assets/gallery/39.jpg"),
        },
        {
          id: 40,
          tags: ["all", "tag3"],
          src: require("../../assets/gallery/40.jpg"),
        },
        {
          id: 41,
          tags: ["all", "tag8"],
          src: require("../../assets/gallery/41.jpg"),
        },
        {
          id: 42,
          tags: ["all", "tag7"],
          src: require("../../assets/gallery/42.jpg"),
        },
        {
          id: 43,
          tags: ["all", "tag7"],
          src: require("../../assets/gallery/43.jpg"),
        },
        {
          id: 44,
          tags: ["all", "tag3"],
          src: require("../../assets/gallery/44.jpg"),
        },
        {
          id: 45,
          tags: ["all", "tag7"],
          src: require("../../assets/gallery/45.jpg"),
        },
        {
          id: 46,
          tags: ["all", "tag8"],
          src: require("../../assets/gallery/46.jpg"),
        },
        {
          id: 47,
          tags: ["all", "tag7"],
          src: require("../../assets/gallery/47.jpg"),
        },
        {
          id: 48,
          tags: ["all", "tag7"],
          src: require("../../assets/gallery/48.jpg"),
        },
        {
          id: 49,
          tags: ["all", "tag7"],
          src: require("../../assets/gallery/49.jpg"),
        },
        {
          id: 50,
          tags: ["all", "tag6"],
          src: require("../../assets/gallery/50.jpg"),
        },
        {
          id: 51,
          tags: ["all", "tag4"],
          src: require("../../assets/gallery/51.jpg"),
        },
        {
          id: 52,
          tags: ["all", "tag4", "tag6"],
          src: require("../../assets/gallery/52.jpg"),
        },
        {
          id: 53,
          tags: ["all", "tag4"],
          src: require("../../assets/gallery/53.jpg"),
        },
        {
          id: 54,
          tags: ["all", "tag8"],
          src: require("../../assets/gallery/54.jpg"),
        },
        {
          id: 55,
          tags: ["all", "tag8"],
          src: require("../../assets/gallery/55.jpg"),
        },
        {
          id: 56,
          tags: ["all", "tag3"],
          src: require("../../assets/gallery/56.jpg"),
        },
        {
          id: 57,
          tags: ["all", "tag6"],
          src: require("../../assets/gallery/57.jpg"),
        },
        {
          id: 58,
          tags: ["all", "tag2"],
          src: require("../../assets/gallery/58.jpg"),
        },
        {
          id: 59,
          tags: ["all", "tag8"],
          src: require("../../assets/gallery/59.jpg"),
        },
        {
          id: 60,
          tags: ["all", "tag7"],
          src: require("../../assets/gallery/60.jpg"),
        },
      ],
      currentTag: "all",
      loading: require("../../assets/gallery/gallery_loading.gif"),
    };
  },
  computed: {
    filteredItems: function () {
      var filter = this.currentTag;
      return this.items.filter(function (item) {
        return item.tags.indexOf(filter) !== -1;
      });
    },
  },
  methods: {
    filter: function (tag) {
      this.currentTag = tag;
    },
    active: function () {
      let buttons = document.querySelectorAll(
        ".image-shuffle .button-area button"
      );
      buttons.forEach((but) => {
        but.addEventListener("click", (e) => {
          // remove active classs from all children
          e.target.parentElement
            .querySelectorAll(".active")
            .forEach((Element) => {
              Element.classList.remove("active");
            });
          // add active class
          e.target.classList.add("active");
        });
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.demo {
  padding-top: 50px;
  .button-area {
    width: 100%;
    text-align: center;
    padding-bottom: 50px;
    button {
      margin: 10px;
      outline: none;
      padding: 10px 20px 10px 20px;
      border: 1px solid #ddd;
      background-color: transparent;
      color: var(--seconed-color);
      font-weight: bold;
      font-family: var(--main-font);
      &.active {
        background-color: var(--seconed-color);
        color: var(--main-color);
        border: 1px solid var(--main-color);
      }
      &:hover {
        transition: 0.3s;
        background-color: var(--seconed-color);
        color: var(--main-color);
        border: 1px solid var(--main-color);
      }
    }
  }
  .list-complete {
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    .list-complete-item {
      transition: transform 1s;
      width: 25%;
      height: 200px;
      padding: 10px;
      .list-complete-img {
        height: 100%;
        width: 100%;
      }
    }
  }
}

.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for <2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}

@media (max-width: 991px) {
  .demo {
    .button-area {
      width: 100%;
      padding-bottom: 20px;
      button {
        margin: 5px;
        padding: 5px 10px 5px 10px;
        font-size: 12px;
      }
    }
    .list-complete {
      .list-complete-item {
        width: 50%;
      }
    }
  }
}
</style>