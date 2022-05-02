<template>
  <div id="app">
    <header>
      <div class="bk-left">
        <img src="./assets/img/logo@2x.png" alt="" />
        <img src="./assets/img/logo-title@2x.png" alt="" />
      </div>
      <div class="bk-right">
        <router-link class="link" :to="data.currency_information"
          >货币资讯</router-link
        >
        <router-link class="link" :to="data.bizhong_info">币种信息</router-link>
        <router-link class="link" :to="data.privacy_policy"
          >隐私政策</router-link
        >
        <router-link class="link" :to="data.user_agreement"
          >用户协议</router-link
        >
        <router-link class="link" :to="data.about_us">关于我们</router-link>
      </div>
    </header>
    <router-view />
    <footer>
      <div class="content wrap-v1">
        <div class="bk-left">МТ4.com © 2009-2020. All rights reserved</div>
        <div class="bk-right">
          <a :href="data.privacy_policy">隐私政策</a>
          <a :href="data.user_agreement">用户协议</a>
          <a :href="data.about_us">关于我们</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { data } from "./mock/leter-data.js";
export default {
  name: "App",
  data() {
    return {
      data,
    };
  },
  mounted(){
    console.log(this.$router);
    console.log(this.$route.path);

  }
};
</script>

<style lang="less" scoped>
#app {
  // width: 100vw;
  overflow: hidden;
  header {
    height: 86px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    line-height: 86px;
    background-color: #0d1016;
    padding: 0 63px;
    box-sizing: border-box;
    .bk-left {
      img {
        width: 24px;
        height: 18px;
        margin-right: 33px;
        &:last-child {
          width: 88px;
          height: 41px;
        }
      }
    }

    .bk-right {
      .link {
        margin: 0 20px;
        padding: 30px 20px;
      }
    }

    .active {
      padding: 34px 17px !important;
      height: 86px;
      background-color: #b5994c;
      font-weight: bold;
    }
  }

  footer {
    height: 50px;
    color: #fff;
    background-color: #282e39;
    .content {
      height: 100%;
      display: flex;
      width: 80%;
      justify-content: space-around;
      align-items: center;
      .bk-right {
        a {
          padding-left: 100px;
        }
      }
    }
  }
}
</style>
