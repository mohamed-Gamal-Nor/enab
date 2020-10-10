import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import gallery from "../views/gallery.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
        meta: { title: "Enab Beirut - Home Page" }
    },
    {
        path: "/about",
        name: "About",
        component: About,
        meta: { title: "Enab Beirut - About Page" }
    },
    {
        path: "/gallery",
        name: "gallery",
        component: gallery,
        meta: { title: "Enab Beirut - Gallery Image" }
    }
];

const router = new VueRouter({
    routes,
    base: process.env.BASE_URL
});

export default router;