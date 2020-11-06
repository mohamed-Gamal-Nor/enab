<template lang="pug">
.history
  .ovarlay
  .container
    .history-content(data-aos="fade-left")
      .img
        img(src="../../assets/about/our-year.jpg", alt="alt")
      .our-history
        h4 {{ $t("about-history.head1") }}
        h1 {{ $t("about-history.head2") }}
        .year-history
          .year-content(v-for="our in ourData", :key="our.lenght")
            .year
              span {{ our.year }}
            .text
              h1 {{ $t(our.head) }}
              p {{ $t(our.paragraph) }}
</template>
<script>
export default {
  data() {
    return {
      ourData: [
        {
          year: "2014",
          head: "about-history.branch1.head",
          paragraph: "about-history.branch1.paragraph",
        },
        {
          year: "2015",
          head: "about-history.branch2.head",
          paragraph: "about-history.branch2.paragraph",
        },
        {
          year: "2016",
          head: "about-history.branch3.head",
          paragraph: "about-history.branch3.paragraph",
        },
        {
          year: "2020",
          head: "about-history.branch4.head",
          paragraph: "about-history.branch4.paragraph",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.history {
  background-image: url("../../assets/about/our.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  position: relative;
  .ovarlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba($color: #455c56, $alpha: 0.6);
  }
  .history-content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-wrap: nowrap;
    .img {
      width: 40%;
      margin: 200px 50px 0px 0px;
      img {
        width: 100%;
        border: 10px solid var(--main-color);
      }
    }
    .our-history {
      width: 60%;
      padding: 50px;
      h4 {
        font-family: var(--main-font);
        font-weight: bold;
        color: var(--main-color);
      }
      & > h1 {
        font-family: var(--font-title);
        font-weight: bold;
        font-size: 45px;
        color: #fff;
        margin-bottom: 20px;
      }
      .year-history {
        .year-content {
          display: flex;
          flex-wrap: nowrap;
          .year {
            width: 15%;
            text-align: center;
            margin-right: 20px;
            span {
              display: block;
              background-color: var(--main-color);
              width: 75px;
              height: 75px;
              border-radius: 50%;
              line-height: 75px;
              font-weight: bold;
              font-family: var(--font-title);
              color: var(--seconed-color);
              font-size: 20px;
              transition: 0.3s;
              border: 1px solid var(--seconed-color);
              &:hover {
                color: var(--main-color);
                background-color: var(--seconed-color);
                border: 1px solid var(--main-color);
              }
            }
          }
          .text {
            width: 85%;
            border-left: 2px solid rgba($color: #eee3c7, $alpha: 0.7);
            padding-left: 20px;
            position: relative;
            padding-bottom: 25px;
            &::before {
              content: " ";
              position: absolute;
              left: -10px;
              top: 10%;
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background-color: var(--main-color);
              border: 1px solid var(--seconed-color);
            }
            h1 {
              font-family: var(--font-title);
              font-weight: bold;
              font-size: 30px;
              color: #fff;
              margin-bottom: 20px;
            }
            p {
              font-family: var(--main-title);
              font-weight: bold;
              color: var(--main-color);
              font-size: 13px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 991px) {
  .history {
    .history-content {
      display: block;
      .img {
        display: none;
      }
      .our-history {
        width: 100%;
        padding: 25px;
        & > h1 {
          font-size: 35px;
        }
        .year-history {
          .year-content {
            .text {
              h1 {
                font-size: 25px;
              }
              p {
                font-size: 13px;
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 667px) {
  .history {
    .history-content {
      .our-history {
        .year-history {
          .year-content {
            .year {
              width: 15%;
              text-align: center;
              margin-right: 20px;
              span {
                width: 50px;
                height: 50px;
                line-height: 50px;
                font-size: 15px;
              }
            }
            .text {
              padding-bottom: 15px;
              h1 {
                font-size: 20px;
              }
              p {
                font-size: 10px;
              }
            }
          }
        }
      }
    }
  }
}
</style>