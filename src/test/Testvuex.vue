<template>
  <div id="app">
    <h1>{{ $store.state.name }}</h1>
    <button @click="changevuex">阿牛</button>
    <button @click="changevuexNum({ name: '周杰伦', age: 21 })">
      传参阿牛
    </button>
    <h2>{{ $store.getters.splieName }}</h2>
    <h1>{{ $store.state.info.name }}</h1>
    <h1>{{ $store.state.info }}</h1>
    <button @click="updateObj">动态修改数据</button>

    <!-- 触发控制台打印异步数据 -->
    <button @click="promisedata">控制台打印vuex异步数据</button>
    <div><img :src="$store.state.analogData.img" alt="" /></div>
  </div>
</template>

<script>
export default {
  name: "testvuex",
  data() {
    return {
    };
  },
  methods: {
    changevuex() {
      this.$store.commit("changeName");
    },
    changevuexNum(payload) {
      //   this.$store.commit("changevuexNum",payload);
      this.$store.commit({
        type: "changevuexNum",
        value: payload,
      });
    },
    updateObj: function () {
      this.$store.commit("updateObj");
    },
    promisedata: function () {
      this.$store.dispatch("promisedate",{
          message:'我是传递的参数',
          success:()=>{
              console.log("我成功进行了axios操作请求");
          }
      });
    },
  },
};
</script>
    
<style>
</style>