<template lang="pug">
.footer
  .container-fluid 
    .footer-text
      .logo
        img(src="https://i.ibb.co/8B58bPB/logo.png")
      .text
        p {{ $t('footer.pargraph') }}
      .socail-media
        a(
          href="https://www.facebook.com/EnabbeirutEg",
          v-b-tooltip.hover,
          title="FaceBook Page",
          target="_blank"
        )
          font-awesome-icon(:icon="{ prefix: 'fab', iconName: 'facebook-f' }")
        a(
          href="https://www.instagram.com/enabbeiruteg/",
          v-b-tooltip.hover,
          title="Instagram Page",
          target="_blank"
        )
          font-awesome-icon(:icon="{ prefix: 'fab', iconName: 'instagram' }")
        a(
          target="_blank",
          href="https://www.google.com.eg/search?sxsrf=ALeKk02GVt_xdgC6rjB835mJyUNZBby7ig%3A1600866668702&source=hp&ei=bElrX7btJ_Ly5gLZ96XAAg&q=%D8%B9%D9%86%D8%A8+%D8%A8%D9%8A%D8%B1%D9%88%D8%AA&oq=%D8%B9%D9%86%D8%A8+%D8%A8%D9%8A%D8%B1%D9%88&gs_lcp=CgZwc3ktYWIQARgAMgQIIxAnMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAOgUILhCxAzoICAAQsQMQgwE6CAguELEDEIMBOgUIABCxAzoCCC5Q7uwLWPn6C2DZiQxoAHAAeACAAZACiAHZDZIBBTAuNC40mAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab",
          v-b-tooltip.hover,
          title="Google search"
        )
          font-awesome-icon(:icon="{ prefix: 'fab', iconName: 'google' }")
    .footer-links
      .location
        h1 {{ $t('footerText.location.heading') }}
        .address(v-for="addres in address", :key="address.phone")
          .info
            .icon
              font-awesome-icon(icon="map-marker-alt")
            .text
              p {{ $t(addres.address1) }}
          .phone
            .icon
              font-awesome-icon(icon="mobile-alt")
            .text
              p {{ $t(addres.phone) }}
      .links
        .link
          h1 {{ $t('footerText.links.otherPage') }}
          ul
            li
              router-link(
                :to="`/${$i18n.locale}`",
                @click.native="closeMenu()"
              ) {{ $t('menuLinks.home') }}
            li
              router-link(
                :to="`/${$i18n.locale}/about`",
                @click.native="closeMenu()"
              ) {{ $t('menuLinks.about') }}
            li
              router-link(
                :to="`/${$i18n.locale}/gallery`",
                @click.native="closeMenu()"
              ) {{ $t('menuLinks.gallery') }}
            li
              router-link(
                :to="`/${$i18n.locale}/menu`",
                @click.native="closeMenu()"
              ) {{ $t('menuLinks.MenuBook') }}
            li
              router-link(
                :to="`/${$i18n.locale}/store`",
                @click.native="closeMenu()"
              ) {{ $t('menuLinks.branches') }}
            li
              router-link(
                :to="`/${$i18n.locale}/faq`",
                @click.native="closeMenu()"
              ) {{ $t('menuLinks.faq') }}
            li
              router-link(
                :to="`/${$i18n.locale}/facebook-posts`",
                @click.native="closeMenu()"
              ) {{ $t('menuLinks.facebook') }}
      .footer-video
        h1 {{ $t('footerText.footerVideo') }}
        vue-plyr
          video(
            poster="https://i.ibb.co/K6BdWhj/footer-video.jpg",
            src="video.mp4"
          )
            source(:src="video", type="video/mp4", size="720")
            source(:src="video", type="video/mp4", size="1080")
    .copyright
      h3 Copyright © 2020 Enab Beirut Website. By
        a(href="https://www.facebook.com/MohamedJemyNour", target="_blank") Eng.Mohamed Gamal.
</template>

<script>
import Vue from "vue";
import VuePlyr from "vue-plyr";
Vue.use(VuePlyr);
export default {
  name: "footter",
  data() {
    return {
      video: require("@/assets/media/footer.mp4"),
      address: [
        {
          address1: "footerText.location.address1.address",
          phone: "footerText.location.address1.phone",
        },
        {
          address1: "footerText.location.address2.address",
          phone: "footerText.location.address2.phone",
        },
        {
          address1: "footerText.location.address3.address",
          phone: "footerText.location.address3.phone",
        },
        {
          address1: "footerText.location.address4.address",
          phone: "footerText.location.address4.phone",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.ar {
  .footer {
    .footer-links {
      justify-content: center;
      .location {
        order: 3;
        text-align: right;
        .address {
          border-bottom: 1px solid rgba($color: #455c56, $alpha: 0.3);
          max-width: 100%;
          margin-left: 10px;
          .info,
          .phone {
            display: flex;
            flex-wrap: nowrap;
            width: 100%;

            .icon {
              width: 2%;
              order: 2;
              margin-left: 10px;
              text-align: right;
            }
            .text {
              width: 98%;
              text-align: right;
            }
          }
        }
      }
      .links {
        order: 2;
        text-align: right;
        width: 30%;
        ul {
          li {
            padding-right: 8px;
            &::before {
              content: "";
            }
            &::after {
              content: "•";
              padding-left: 8px;
              color: var(--main-color);
            }
          }
        }
      }
      .footer-video {
        width: 35%;
        z-index: 0;
        order: 1;
        margin-right: 10px;
        h1 {
          text-align: right;
        }
      }
    }
  }
}
.footer {
  padding-top: 50px;
  background-color: #fff;
  .footer-text {
    text-align: center;
    padding-bottom: 25px;
    border-bottom: 1px solid var(--seconed-color);
    margin-bottom: 10px;
    .logo {
      margin-bottom: 25px;
    }
    p {
      width: 50%;
      margin: auto;
      margin-bottom: 25px;
      font-weight: bold;
      font-family: var(--main-font);
    }
    .socail-media {
      a {
        margin-right: 10px;
        text-decoration: none;
        padding: 5px 10px 5px 10px;
        border: 1px solid var(--seconed-color);
        border-radius: 50%;
        color: var(--seconed-color);
        transition: 0.3s;
        &:hover {
          transition: 0.3s;
          background-color: var(--seconed-color);
          color: var(--main-color);
        }
      }
    }
  }
  .footer-links {
    justify-content: center;
    display: inline-flex;
    flex-wrap: nowrap;
    width: 100%;
    padding-top: 25px;
    padding-bottom: 25px;
    .location {
      width: 30%;
      margin-right: 10px;
      h1 {
        color: var(--seconed-color);
        font-family: var(--main-font);
        text-transform: capitalize;
        font-weight: bold;
      }
      .address {
        border-bottom: 1px solid rgba($color: #455c56, $alpha: 0.3);
        max-width: 100%;
        .info,
        .phone {
          display: flex;
          flex-wrap: nowrap;
          width: 100%;
          .icon {
            margin-right: 10px;
            color: var(--seconed-color);
          }
          .text {
            font-family: var(--main-font);
            font-weight: bold;
          }
        }
      }
    }
    .links {
      h1 {
        color: var(--seconed-color);
        font-family: var(--main-font);
        text-transform: capitalize;
        font-weight: bold;
      }
      width: 30%;
      ul {
        list-style: none;
        width: 100%;
        li {
          padding-left: 8px;
          margin-bottom: 5px;
          &::before {
            content: "•";
            padding-right: 8px;
            color: var(--main-color);
          }
          a {
            font-family: var(--font-title);
            color: var(--seconed-color);
            font-weight: bold;
            font-size: 20px;
            padding-bottom: 5px;
          }
        }
      }
    }

    .footer-video {
      width: 35%;
      z-index: 0;
      h1 {
        color: var(--seconed-color);
        font-family: var(--main-font);
        text-transform: capitalize;
        font-weight: bold;
      }
    }
  }
  .copyright {
    h3 {
      text-align: center;
      font-size: 13px;
      font-weight: bold;
      a {
        text-decoration: none;
        color: var(--seconed-color);
      }
    }
  }
}
@media (max-width: 991px) {
  .ar {
    .footer {
      .footer-text {
        p {
          width: 100%;
          font-weight: 400;
        }
      }
      .footer-links {
        display: block;
        width: 100%;
        .location {
          width: 100%;
          margin-bottom: 10px;
        }
        .links {
          width: 100%;
          margin-bottom: 10px;
        }
        .footer-video {
          width: 100%;
        }
      }
    }
  }
  .footer {
    .footer-text {
      p {
        width: 100%;
        font-weight: 400;
      }
    }
    .footer-links {
      display: block;
      width: 100%;
      .location {
        width: 100%;
        margin-bottom: 10px;
      }
      .links {
        width: 100%;
        margin-bottom: 10px;
      }
      .footer-video {
        width: 100%;
      }
    }
  }
}
</style>