<template lang="pug">
.menu-item
  .container-fluid
    .item-link
      .link(v-for="(catogry, i) in enabMenu", @click="classActive(i)")
        a {{ $t(catogry.heading) }}
    .item-part(
      v-for="(catogry, i) in enabMenu",
      :id="i",
      :class="catogry.class"
    )
      .img
        img(src="../../assets/logo.png", alt="alt")
      .text
        h4 {{ $t(catogry.heading) }}
        p {{ $t(catogry.paragraph) }}
      .items
        .item(v-for="item in catogry.items")
          .item-name
            h6 {{ $t(item.name) }}
            p {{ $t(item.price) }}
          .descrption
            p {{ $t(item.desc) }}
</template>

<script>
import menu from "./menu.json";
export default {
  data() {
    return {
      enabMenu: menu,
    };
  },
  methods: {
    classActive(id) {
      let item = document.querySelectorAll(".menu-item .item-part");
      item.forEach((ele) => {
        ele.classList.remove("active");
      });
      document.getElementById(id).classList.add("active");
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-item {
  padding-top: 50px;
  .item-link {
    text-align: center;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    .link {
      padding: 10px;
      background-color: #fff;
      color: var(--seconed-color);
      border: 1px solid var(--seconed-color);
      margin: 0 10px;
      cursor: pointer;
      transition: 0.3s;
      a {
        font-family: var(--main-font);
        font-weight: bold;
        text-transform: capitalize;
      }
      &:hover {
        background-color: var(--seconed-color);
        color: var(--main-color);
        border: 1px solid var(--main-color);
      }
    }
  }
  .item-part {
    padding-top: 50px;
    text-align: center;
    //position: absolute;
    background-color: #fff;
    opacity: 0;
    transition: 0.3s;
    display: none;
    &.active {
      opacity: 1;
      transition: 0.3s;
      display: block;
    }
    .img {
      margin-bottom: 15px;
    }
    .text {
      h4 {
        font-family: var(--main-font);
        color: var(--seconed-color);
        font-weight: bold;
        font-size: 30px;
        text-transform: capitalize;
      }
      p {
        font-family: var(--font-title);
        color: #9a9a9a;
        font-size: 25px;
        text-transform: capitalize;
      }
    }
    .items {
      width: 100%;
      display: inline-flex;
      flex-wrap: wrap;
      padding-top: 10px;
      .item {
        width: 23%;
        text-align: left;
        margin-right: 25px;
        margin-top: 15px;
        .item-name {
          display: flex;
          flex-wrap: nowrap;
          border-bottom: 1px dashed var(--seconed-color);
          margin-bottom: 15px;
          h6 {
            width: 75%;
            font-family: var(--main-font);
            font-weight: bold;
            color: var(--seconed-color);
            text-transform: capitalize;
            line-height: 20px;
          }
          p {
            width: 25%;
            color: var(--main-color);
            font-weight: bold;
            filter: brightness(90%);
            text-align: right;
            text-transform: capitalize;
          }
        }
        .descrption {
          font-family: var(--main-font);
          font-weight: 600;
          color: #9a9a9a;
          text-transform: capitalize;
        }
      }
    }
  }
}

@media (max-width: 991px) {
  .menu-item {
    padding-top: 50px;
    .item-part {
      .text {
        h4 {
          font-size: 25px;
        }
        p {
          font-family: var(--font-title);
          color: #9a9a9a;
          font-size: 18px;
        }
      }
      .items {
        display: block;
        .item {
          width: 100%;
          margin-right: 0px;
          .item-name {
            p {
              font-size: 15px;
            }
          }
          .descrption {
            font-size: 15px;
          }
        }
      }
    }
  }
}
</style>