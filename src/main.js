import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import normlize from "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import "jquery/src/jquery.js";

Vue.use(BootstrapVue);
Vue.use(normlize);
Vue.config.productionTip = false;

new Vue({
    router,
    i18n,
    render: (h) => h(App),
}).$mount("#app");