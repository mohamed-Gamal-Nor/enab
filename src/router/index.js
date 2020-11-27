import Vue from "vue";
import VueRouter from "vue-router";
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
                component: () => import('../views/Home.vue'),
                meta: { title: "Enab Beirut - Home Page" }
            },
            {
                path: "about",
                name: "About",
                component: () => import('../views/About.vue'),
                meta: { title: "Enab Beirut - About Page" }
            },
            {
                path: "gallery",
                name: "gallery",
                component: () => import('../views/gallery.vue'),
                meta: { title: "Enab Beirut - Gallery Image" }
            },
            {
                path: "menu",
                name: "menu",
                component: () => import('../views/menu.vue'),
                meta: { title: "Enab Beirut - Menu" }
            },
            {
                path: "store",
                name: "store",
                component: () => import('../views/store.vue'),
                meta: { title: "Enab Beirut - Stores" }
            },
            {
                path: "faq",
                name: "faq",
                component: () => import('../views/faq.vue'),
                meta: { title: "Enab Beirut - Faq" }
            },
            {
                path: "facebook-posts",
                name: "facebook",
                component: () => import('../views/facebook.vue'),
                meta: { title: "Enab Beirut - FaceBook Posts" }
            },
            {
                path: "*",
                name: "404",
                component: () => import('../views/404.vue'),
                meta: { title: "Enab Beirut - 404 Page Not Found" }
            }
        ]
    }
];

const router = new VueRouter({
    routes,
    base: process.env.BASE_URL,
    scrollBehavior() {
        return {x: 0, y: 0}
    }
});

export default router;