import Vue from "vue";
import VueRouter from "vue-router";
import { data } from "../mock/leter-data.js";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: data.currency_information,
  },
  {
    path: data.currency_information,
    component: () => import("@/components/Currency_information.vue"),
  },
  {
    path: data.bizhong_info,
    component: () => import("../components/bizhong_info.vue"),
  },
  {
    path: data.privacy_policy,
    component: () => import("../components/Privacy_policy.vue"),
  },
  {
    path: data.about_us,
    component: () => import("../components/About_us.vue"),
  },
  {
    path: data.user_agreement,
    component: () => import("../components/User_agreement.vue"),
  },
];

// 解决报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  routes,
  mode: "history",
  linkActiveClass: "active",
});
export default router;
