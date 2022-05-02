<template>
  <div class="user-agreement">
    <div class="bk-container">
      <div class="wrap-v1">
        <div class="wrap-v1">
          <el-breadcrumb separator-class="el-icon-arrow-right" class="lh">
            <el-breadcrumb-item :to="{ path: '/user_agreement' }"
              >首页</el-breadcrumb-item
            >
            <el-breadcrumb-item>用户协议</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
    </div>
    <el-backtop :bottom="100">
      <div
        style="
           {
            height: 250px;
            width: 250px;
            background-color: #f2f5f6;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
            text-align: center;
            line-height: 40px;
            color: #1989fa;
          }
        "
      >
        UP
      </div>
    </el-backtop>
    <div class="bk-content">
      <div class="wrap-v1 localtion">
        <div class="bk-container">
          <header>
            <div class="title">用户协议</div>
            <img src="../assets/img/MT4@2x.png" alt="" />
          </header>
          <el-divider></el-divider>
          <main v-for="(item, index) in user_data" :key="index" :id="index">
            <div class="title">{{ item.title }}</div>
            <ul v-for="(item, index) in item.list" :key="index">
              <li>{{ item }}</li>
            </ul>
          </main>
        </div>

        <div class="naviga">
          <div class="title">目录</div>
          <ul v-for="(item, index) in user_naviga" :key="index">
            <li>
              <a :href="'#' + index">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user_naviga: this.$store.state.user_agree.naviga,
      user_data: this.$store.state.user_agree.data,
    };
  },
  methods: {
    btn(index) {
      console.log(index);
    },
  },
};
</script>

<style lang="less" scoped>
.user-agreement {
  .bk-container {
    .lh {
      line-height: 60px;
    }
  }

  .bk-content {
    .localtion {
      position: relative;
      .bk-container {
        width: 80%;
        header {
          display: flex;
          justify-content: space-between;
          height: 120px;
          align-items: center;
          background-image: url("../assets/img/heade-bg@2x.png");
          background-size: cover;
          .title {
            font-weight: bold;
            font-size: 48px;
          }
          img {
            width: 94px;
            height: 45px;
          }
        }

        main {
          padding: 20px;
          .title {
            color: #b5994c;
            font-size: 20px;
            font-weight: bold;
            margin: 20px 0;
          }
          ul {
            li {
              font-size: 16px;
              line-height: 1.5em;
              margin-bottom: 20px;
            }
          }
        }
      }

      .naviga {
        position: absolute;
        right: 100px;
        top: 0;
        .title {
          font-size: 18px;
          line-height: 100px;
        }

        ul {
          font-size: 18px;
          font-weight: bold;
          li {
            height: 50px;
            text-align: left;

            a {
              color: black;
            }
          }
        }
      }
    }
  }
}
</style>