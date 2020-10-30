import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import gallery from "../views/gallery.vue";
import menu from "../views/menu.vue";
import store from "../views/store.vue";
import faq from "../views/faq.vue";
import i18n from "../i18n";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        redirect: `/${i18n.locale}`
    },
    {
        path: "/:lang",
        component: {
            render(c) {
                return c("router-view");
            }
        },
        children: [{
                path: "/",
                name: "Home",
                component: Home,
                meta: { title: "Enab Beirut - Home Page" }
            },
            {
                path: "about",
                name: "About",
                component: About,
                meta: { title: "Enab Beirut - About Page" }
            },
            {
                path: "gallery",
                name: "gallery",
                component: gallery,
                meta: { title: "Enab Beirut - Gallery Image" }
            },
            {
                path: "menu",
                name: "menu",
                component: menu,
                meta: { title: "Enab Beirut - Menu" }
            },
            {
                path: "store",
                name: "store",
                component: store,
                meta: { title: "Enab Beirut - Stores" }
            },
            {
                path: "faq",
                name: "faq",
                component: faq,
                meta: { title: "Enab Beirut - Faq" }
            }
        ]
    }
];

const router = new VueRouter({
    routes,
    base: process.env.BASE_URL
});

export default router;