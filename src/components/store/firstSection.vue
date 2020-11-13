<template lang="pug">
.branches
  .container-fluid
    .branch
      .content(
        v-for="(mapi, i) in mapData",
        :key="i",
        data-aos="fade-right",
        data-aos-once="true"
      )
        .map
          iframe(:src="mapi.map", width="500", height="300")
        .data
          h1 {{ $t(mapi.name) }}
          .address
            font-awesome-icon(icon="map-marker-alt")
            p {{ $t(mapi.address) }}
          .address
            font-awesome-icon(icon="mobile-alt")
            p (+2) {{ mapi.phone }}

          .address
            font-awesome-icon(icon="utensils")
            p {{ $t(mapi.opening) }}
          .call
            button
              font-awesome-icon(icon="phone-alt")
              a(:href="`tel:+${mapi.phone}`") {{ $t("branche.call") }}
</template>

<script>
export default {
  data() {
    return {
      mapData: [
        {
          name: "branche.store1.name",
          address:"branche.store1.address",
          phone: "01228444424",
          opening: "branche.store1.time",
          map:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1221.283278349753!2d31.410055389636824!3d30.02794149694484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cfd6c86f5cf%3A0xabe83f4255455938!2z2LnZhtioINio2YrYsdmI2Ko!5e0!3m2!1sar!2seg!4v1604567189392!5m2!1sar!2seg",
        },
        {
          name: "branche.store2.name",
          address:"branche.store2.address",
          phone: "01270884444",
          opening: "branche.store2.time",
          map:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1026.3686903494013!2d31.34838234123095!3d30.0861946789067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e020341787f%3A0x1fd6a16d1fe120a0!2z2LnZhtioINmD2KfZgdmK2Yc!5e0!3m2!1sar!2seg!4v1604567025295!5m2!1sar!2seg",
        },
        {
          name: "branche.store3.name",
          address:"branche.store3.address",
          phone: "01208144441",
          opening: "branche.store3.time",
          map:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13812.835959476213!2d31.495168417485203!3d30.059543410027274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581906027d307f%3A0x14e3a863d897c7a2!2sEnab%20Beirut%20City%20Square%20Elrehab!5e0!3m2!1sar!2seg!4v1604566793299!5m2!1sar!2seg",
        },
        {
          name: "branche.store4.name",
          address:"branche.store4.address",
          phone: "01277042444",
          opening: "branche.store4.time",
          map:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1221.0235864951726!2d31.47562119090838!3d30.049013123721263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145823d85b03053f%3A0xace286c1d006a3fe!2sEnab%20Beirut!5e0!3m2!1sar!2seg!4v1604567303945!5m2!1sar!2seg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.ar{
  .branch {
    .content {
      .data {
        text-align: right;
        .address {
          display: flex;
          flex-wrap: nowrap;
          margin: 10px 0;
          svg {
            order: 2;
            margin-left: 5px;
          }
          p {
            order: 1;
            width: 93%;
          }
        }
      }
    }
  }
}
.branch {
  padding-top: 50px;
  .content {
    display: flex;
    flex-wrap: nowrap;
    margin-top: 50px;
    min-height: 75vh;
    .map {
      width: 50%;
      text-align: center;
      iframe {
        //border: 15px solid var(--seconed-color) !important;
        border: none;
        width: 100%;
        height: 100%;
      }
    }
    .data {
      width: 50%;
      margin: 0px 10px;
      background-color: #eee;
      padding: 50px;
      h1 {
        font-family: var(--main-font);
        color: var(--seconed-color);
        font-size: 30px;
        margin-bottom: 10px;
      }
      .address {
        display: flex;
        flex-wrap: nowrap;
        margin: 10px 0;
        svg {
          width: 5%;
          text-align: center;
          color: var(--seconed-color);
          font-size: 30px;
          margin-right: 5px;
        }
        p {
          line-height: 30px;
          font-family: var(--main-font);
          color: var(--main-color);
          filter: brightness(70%);
          font-weight: bold;
        }
        a {
          margin-left: 10px;
          text-decoration: none;
          font-family: var(--main-font);
          background-color: var(--seconed-color);
          padding: 10px;
          line-height: 30px;
          display: block;
        }
      }
      .call {
        text-align: center;
        button {
          border: none;
          outline: none;
          padding: 10px 20px;
          background-color: var(--seconed-color);
          color: var(--main-color);
          font-family: var(--main-color);
          a {
            margin: 0px 5px;
            text-decoration: none;
            color: var(--main-color);
          }
        }
      }
    }
    &:nth-of-type(even) {
      .map {
        order: 2;
      }
      .data {
        order: 1;
      }
    }
  }
}

@media (max-width: 991px) {
  .branch {
    padding-top: 0px;
    .content {
      display: block;
      flex-wrap: nowrap;
      margin-top: 20px;
      min-height: auto;
      .map {
        width: 100%;
      }
      .data {
        width: 100%;
        margin: 0;
        padding: 10px;
        h1 {
          font-size: 20px;
        }
        .address {
          display: flex;
          flex-wrap: nowrap;
          margin: 5px 0;
          svg {
            width: 5%;
            font-size: 20px;
          }
          p {
            font-size: 15px;
          }
        }
        .call {
          text-align: center;
          button {
            padding: 5px 15px;
            font-size: 13px;
            a {
              font-size: 13px;
            }
          }
        }
      }
    }
  }
}
</style>