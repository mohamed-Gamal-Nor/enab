<template lang="pug">
.history
  .ovarlay
  .container-fluid
    .history-content
      .img(data-aos="zoom-in" data-aos-duration="1500")
        img(src="https://i.ibb.co/GWy6dYk/our-year.jpg", alt="alt")
      .our-history(data-aos="zoom-in" data-aos-duration="1500")
        h4 {{ $t('about-history.head1') }}
        h1 {{ $t('about-history.head2') }}
        .year-history
          .year-content(v-for="our in ourData", :key="our.lenght")
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
          head: "about-history.branch1.head",
          paragraph: "about-history.branch1.paragraph",
        },
        {
          head: "about-history.branch2.head",
          paragraph: "about-history.branch2.paragraph",
        },
        {
          head: "about-history.branch3.head",
          paragraph: "about-history.branch3.paragraph",
        },
        {
          head: "about-history.branch4.head",
          paragraph: "about-history.branch4.paragraph",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.ar {
  .history {
    .history-content {
      .img {
        order: 2;
      }
      .our-history {
        text-align: right;
        .year-history {
          .year-content {
            .text {
              width: 100%;
              border-right: 2px solid rgba($color: #eee3c7, $alpha: 0.7);
              border-left: none;
              padding-right: 20px;
              &::after {
                content: " ";
                position: absolute;
                right: -10px;
                top: 10%;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: var(--main-color);
                border: 1px solid var(--seconed-color);
              }
              &::before {
                display: none;
              }
            }
          }
        }
      }
    }
  }
}
.history {
  background-image: url("https://i.ibb.co/3B34wv5/our.jpg");
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
      width: 45%;
      margin: 100px 25px;
      img {
        width: 100%;
        border: 10px solid var(--main-color);
      }
    }
    .our-history {
      width: 55%;
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
          .text {
            width: 100%;
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