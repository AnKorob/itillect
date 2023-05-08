import Vue from "vue";
import VueRouter from "vue-router";
import GeneratorPage from "@/views/GeneratorPage.vue";
import CardPage from "@/views/CardPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: GeneratorPage,
  },
  {
    path: "/bcard/:hash",
    name: "generator",
    component: CardPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
