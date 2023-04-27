import { createRouter, createWebHistory } from "vue-router";
import ClocksPage from "../views/ClocksPage.vue";

const routes = [
  {
    path: "/clocks",
    name: "clocks",
    component: ClocksPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
