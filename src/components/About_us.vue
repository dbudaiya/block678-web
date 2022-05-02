<template>
  <!-- 币种信息 -->
  <div class="about-me">
    <div class="bk-container">
      <div class="wrap-v1">
        <div class="wrap-v1">
          <el-breadcrumb separator-class="el-icon-arrow-right" class="lh">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>关于我们</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
    </div>

    <div class="bk-content">
      <div class="wrap-v1 pd">
        <div class="bk-desciript">
          <div class="title">关于我们</div>
          <div class="start">了解区块链从这里开始!</div>
          <div class="desc">
            <p>
              区块链导航 Block678.com，创建于 2019 年 9
              月，是全球的区块链上网导航站点，
              亦是不断增长的区块链技术爱好者、区块链资产拥趸、用户上网的好帮手、中英文上网导航的领先品牌。
            </p>
            <p>
              Block678 专注于区块链资产、技术、金融科技 FinTech
              等领域，始终致力于为用户提供简单、实用、贴心的导航服务。 通过
              Block678 更容易深入了解区块链行业，以及颇有潜力的区块链项目，
              使数字理财上网更轻松、行业资讯内容更精彩，是我们每一个
              Block678.com 同仁努力的目标。
            </p>
          </div>
          <div class="footer">
            <button>分 享</button>
            <span
              >如果你与我们一样喜欢 Block678，请把它也分享给你的朋友吧！:)</span
            >
          </div>
          <div class="bk-bg">
            <img src="../assets/img/us-header@2x.png" alt="" />
          </div>
        </div>

        <div class="bk-download">
          <div class="bk-left">
            <div class="title">支持Block678捐赠地址</div>
            <div class="down">
              <ul>
                <li>
                  <div class="left">
                    <div class="title">比特币 BTC</div>
                    <div class="desc">12DCNYMkKjjBH6eRcdP4rAQyK8eKbn66TY</div>
                  </div>
                  <div class="right">
                    <button>复制</button>
                  </div>
                </li>
                <li>
                  <div class="left">
                    <div class="title">比特币 BTC</div>
                    <div class="desc">12DCNYMkKjjBH6eRcdP4rAQyK8eKbn66TY</div>
                  </div>
                  <div class="right">
                    <button>复制</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="bk-right">
            <div class="title">商务合作</div>
            <ul class="info">
              <li>联系我们 <span>Whatsapp +(1) 737-787-8888</span></li>
              <li>联系我们 <span>Whatsapp +(1) 737-787-8888</span></li>
              <li>联系我们 <span>Whatsapp +(1) 737-787-8888</span></li>
            </ul>
          </div>
        </div>
        <div class="bk-disclaimers">
          <div class="title">免责声明</div>
          <div class="des">
            本网站的超链接、相关交易平台、网站、博客等媒体账户以及其他平台提供的所有内容均来源于第三方平台。
            我们对于网站及其内容不作任何类型的保证，网站所有区块链相关数据与资料仅供用户学习及研究之用，
            不构成任何投资、法律等其他领域的建议和依据。您需谨慎使用相关数据及内容，并自行承担所带来的一切风险。
            强烈建议您独自对内容进行研究、审查、分析和验证。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // console.log(this.$router);
    // console.log(this.$route.path);
  },
};
</script>

<style lang="less" scoped>
@color1: #b5994c;
.about-me {
  .bk-container {
    height: 60px;
    .lh {
      line-height: 60px;
    }
  }

  .bk-content {
    .pd {
      padding: 70px 0;
    }

    .bk-desciript {
      position: relative;
      width: 68%;
      padding: 35px 60px;
      text-align: left;
      font-weight: bold;

      .title {
        font-size: 48px;
        margin-bottom: 38px;
      }
      .start {
        width: 28%;
        color: @color1;
        font-size: 20px;
        padding-bottom: 10px;
        margin: 27px 0;
        border-bottom: 2px solid #707070;
      }

      .desc {
        font-size: 18px;
        font-weight: 400;
        p {
          margin: 1.5em 0;
        }
      }
      .bk-bg {
        position: absolute;
        right: -360px;
        top: 0;

        img {
          display: inline-block;
          width: 359px;
          height: 480px;
        }
      }
      .footer {
        height: 60px;
        margin: 50px 0;
        button {
          height: 100%;
          width: 204px;
          background-color: @color1;
          line-height: 60px;
          font-size: 16px;
          color: #fff;
        }
        span {
          height: 100%;
          line-height: 20px;
          box-sizing: border-box;
          display: inline-block;
          margin: 0 20px;
          width: 19%;
          font-size: 15;
          font-weight: 400;
          color: @color1;
        }
      }
    }

    .bk-download {
      padding: 35px 60px;
      display: flex;
      justify-content: space-between;
      .bk-left {
        width: 50%;
        .title {
          font-size: 24px;
          font-weight: bold;
        }

        .down {
          ul {
            margin-top: 50px;
            li {
              margin: 20px 0;
              padding: 15px;
              display: flex;
              width: 70%;
              justify-content: space-between;
              background-color: rgba(227, 186, 102, 0.15);
              line-height: 22px;
              color: @color1;

              .left {
                .title {
                  font-size: 16px;
                  font-weight: bold;
                }
              }
              .right {
                button {
                  width: 90px;
                  height: 40px;
                  background-color: @color1;
                  color: #fff;
                }
              }
            }
          }
        }
      }

      .bk-right {
        width: 47%;
        .title {
          font-size: 24px;
          font-weight: bold;
        }
        .info {
          display: flex;
          flex-direction: column;
          margin-top: 40px;
          li {
            margin: 20px 0;
            font-size: 14px;

            font-weight: bold;

            span {
              font-weight: 300;
              padding-left: 20px;
            }
          }
        }
      }
    }

    .bk-disclaimers {
      padding: 35px 60px;
      .title {
        font-size: 26px;
        font-weight: bold;
        margin-bottom: 30px;
      }

      .des {
        line-height: 30px;
        font-size: 17px;
        color: #58667e;
      }
    }
  }
}
</style>