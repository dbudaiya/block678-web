/* eslint-disable vue/valid-v-for */
<template>
  <!--货币资讯  -->
  <div class="currency-info">
    <div class="bk-container">
      <div class="wrap-v1">
        <h1>货币资讯</h1>
        <div class="title">最新虚拟货币<span>实时资讯</span></div>
        <!-- <h1 class="headline load-hidden">Widget Inc.</h1> -->
      </div>
    </div>
    <!-- 内容区域 -->
    <div class="bk-content">
      <div class="wrap-v1">
        <ul>
          <li v-for="(item, index) in aa" v-bind:key="index" class="widget">
            <div class="imgs">
              <img :src="item.imageUrl" alt="" />
            </div>
            <div class="title">{{ item.title }}</div>
            <div class="des">{{ item.list }}</div>
            <div class="datas">{{ item.datas }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollReveal from "scrollreveal";
export default {
  data() {
    return {
      aa: this.$store.state.currency_infos,
    };
  },
  mounted() {
    ScrollReveal().reveal(".headline", {});
    ScrollReveal().reveal(".widget", { interval: 200, duration: 2000 });
  },
};
</script>

<style lang="less" scoped>
/* extension */
html.sr .load-hidden {
  visibility: hidden; /*浮现展示*/
  color: red;
}

html.sr .widget {
  visibility: hidden;
  cursor: pointer;
  transition: all 0.5s ease-in;
  &:hover {
    transform: translateY(-30px);
  }
}

.bk-container {
  height: 200px;
  background-image: url("../assets/img/topbgc@2x.png");
  background-size: cover;
  background-color: black;
  color: #fff;
  h1 {
    line-height: 126px;
    font-size: 51px;
  }
  .title {
    font-size: 36px;
    color: #707070;
  }
}

.bk-content {
  margin: 50px 0 0 50px;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      border-radius: 20px;
      width: 320px;
      height: 400px;
      margin: 25px 10px;
      padding: 10px 15px;
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: left;
      img {
        width: 100%;
        height: 186px;
        color: black;
      }

      .title {
        float: left;
        font-size: 20px;
        font-weight: bold;
      }
      .des {
        font-size: 14px;
        line-height: 2em;
        height: 4em;
        text-align: left;
        width: 100%;
        overflow: hidden; //超出的文本隐藏
        // text-overflow: ellipsis; //溢出用省略号显示
        // white-space: nowrap; //溢出不换行
      }
      .datas {
        color: #707070;
        font-size: 10px;
      }
    }
  }
}
</style>