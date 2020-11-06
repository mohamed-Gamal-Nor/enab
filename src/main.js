import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import normlize from "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import VueScrollProgressBar from "@guillaumebriday/vue-scroll-progress-bar";
import VuePageTransition from "vue-page-transition";

import AOS from 'aos'
import 'aos/dist/aos.css'  
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faUtensils,
    faBars,
    faTimes,
    faArrowDown,
    faGlassCheers,
    faConciergeBell,
    faCameraRetro,
    faCaretUp,
    faMapMarkerAlt,
    faMobileAlt,
    faSmileBeam,
    faBookOpen,
    faStore,
    faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF,
    faInstagram,
    faGoogle
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
    faUtensils,
    faBars,
    faTimes,
    faArrowDown,
    faGlassCheers,
    faConciergeBell,
    faCameraRetro,
    faCaretUp,
    faFacebookF,
    faInstagram,
    faGoogle,
    faMapMarkerAlt,
    faMobileAlt,
    faSmileBeam,
    faBookOpen,
    faStore,
    faPhoneAlt
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(BootstrapVue);
Vue.use(normlize);
Vue.use(VueScrollProgressBar);
var VueScrollTo = require("vue-scrollto");
Vue.use(VueScrollTo);
Vue.use(VuePageTransition);

Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;

    let language = to.params.lang;
    if (!language) {
        language = "en";
    }

    i18n.locale = language;
    next();
});
new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount("#app");

Vue.use(VueScrollTo, {
    container: "body",
    duration: 2000,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
});

AOS.init();