<template lang="pug">
.image-shuffle
  .container-fluid
    #list-complete-demo.demo
      .button-area(data-aos="fade-right" data-aos-duration="1500")
        button.active(v-on:click="filter('all'); active()") {{ $t('gallryLink.All') }}
        button(v-on:click="filter('tag1'); active()") {{ $t('gallryLink.Breakfast') }}
        button(v-on:click="filter('tag2'); active()") {{ $t('gallryLink.ColdMeza') }}
        button(v-on:click="filter('tag3'); active()") {{ $t('gallryLink.HotMeza') }}
        button(v-on:click="filter('tag4'); active()") {{ $t('gallryLink.Salads') }}
        button(v-on:click="filter('tag5'); active()") {{ $t('gallryLink.Grill') }}
        button(v-on:click="filter('tag6'); active()") {{ $t('gallryLink.Oven') }}
        button(v-on:click="filter('tag7'); active()") {{ $t('gallryLink.Sweets') }}
        button(v-on:click="filter('tag8'); active()") {{ $t('gallryLink.Drinkes') }}
      vue-picture-swipe(:items="filteredItems" )
</template>
<script>
import Vue from "vue";
import VuePictureSwipe from "vue-picture-swipe";
Vue.component("vue-picture-swipe", VuePictureSwipe);
import imageJson from "./image.json";
export default {
  data() {
    return {
      items: imageJson,
      currentTag: "all",
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
  .my-gallery {
    width: 100%;
    display: flex !important;
    flex-wrap: nowrap !important;

    figure {
      display: block;
      float: left;
      margin: 0 5px 5px 0;
      width: 150px;
      img {
        width: 10%;
        height: auto;
      }
    }
    figcaption {
      display: none;
    }
  }
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
  }
}
</style>