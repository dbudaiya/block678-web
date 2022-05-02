import Vue from "vue";
import router from "./routes";
import store from "./store";
import "./plugins/element";
import("./assets/css/base.css");
import App from "./App.vue";

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");