import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

// 模拟数据
import require from "../service/index";
import { currency_info, bizhong_info, user_agree,privacy_policy } from "../mock/leter-data";
import copyArr from "../util/arrpush.js";
let currency_infos = copyArr(currency_info);
let bizhong_infos = copyArr(bizhong_info);

const store = new Vuex.Store({
  state: {
    currency_infos,
    bizhong_infos,
    user_agree,
    privacy_policy,
    name: "杜审言",
    info: {
      name: "周杰伦",
      age: 21,
    },
    analogData: {},
  },
  mutations: {
    // 在组件中使用commit进行接收
    // 可将一些变量量抽离出来变成常量
    ["changeName"]: function(state) {
      state.name = "李知恩";
    },
    changevuexNum: function(state, payload) {
      state.name = payload.name;
    },
    updateObj: function(state) {
      // 能查看到在vuex中数据并未发生任何改变
      // state.info.name = "lziien";
      Vue.set(state.info, "name", "李知恩");

      //删除,下面方法做不到响应式
      delete state.info.age;

      Vue.delete(state.info, "age");
    },
    getAxios: function(state) {
      axios({
        url: "/user/userinfo",
        method: "get",
      }).then((res) => {
        state.analogData = res.data;
      });
    },
  },
  getters: {
    // 可以结合使用一些工具函数
    splieName(state) {
      return state.name + "!!!";
    },
  },
  actions: {
    // 进行异步操作,保证vuetools能最终到数据
    //context  :上下文
    promisedate(context, payload) {
      console.log(context);
      context.commit("getAxios");
      console.log(payload.message);
      payload.success();
    },
  },
  modules: {},
});

export default store;

require({
  url: "/user/userinfo",
  method: "get",
}).then((res) => {
  console.log(res);
});
