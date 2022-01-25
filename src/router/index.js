import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Statistics from "../pages/Statistics.vue";
import Styles from "../pages/OverwriteStyles.vue";

//Routes
const routes = [
  { path: "/", name: "Home", component: Home },

  { path: "/statistics", name: "Statistics", component: Statistics },

  { path: "/styles", name: "Styles", component: Styles },
];

//Router Setup
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
