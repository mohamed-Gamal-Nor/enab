import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import normlize from "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import "jquery/src/jquery.js";
// import Swiper styles
import "swiper/swiper-bundle.css";
// core version + navigation, pagination modules:
import Swiper, {
    Navigation,
    Pagination,
    Autoplay,
    EffectFade,
    Keyboard
} from "swiper";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUtensils, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUtensils, faBars, faTimes);

Vue.component("font-awesome-icon", FontAwesomeIcon);

// configure Swiper to use modules
Swiper.use([Navigation, Pagination, Autoplay, EffectFade, Keyboard]);
Vue.use(BootstrapVue);
Vue.use(normlize);
Vue.config.productionTip = false;

new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount("#app");
new Swiper(".swiper-container", {
    loop: true,
    speed: 1000,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    autoplay: {
        delay: 10000
    },
    fadeEffect: {
        crossFade: true
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false
    }
});