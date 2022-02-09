import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/test",
    name: "Test",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/test.vue"),
  },
  {
    path: "/input",
    name: "Input",
    component: () => import("../views/components/input.vue"),
  },
  {
    path: "/table",
    name: "Table",
    component: () => import("../views/components/table.vue"),
  },
  {
    path: "/icon",
    name: "IconPark",
    component: () => import("../views/components/icon.vue"),
  },
  {
    path: "/button",
    name: "Button",
    component: () => import("../views/components/button.vue"),
  },
  {
    path: "/tooltip",
    name: "Tooltip",
    component: () => import("../views/components/tooltip.vue"),
  },
  {
    path: "/collapse",
    name: "Collapse",
    component: () => import("../views/components/collapse.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
