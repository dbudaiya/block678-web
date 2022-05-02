<template>
  <!-- 币种信息 -->
  <div class="bizhong-info">
    <div class="bk-container">
      <div class="wrap-v1">
        <div class="wrap-v1">
          <el-breadcrumb separator-class="el-icon-arrow-right" class="lh">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>币种信息</el-breadcrumb-item>
          </el-breadcrumb>  
        </div>
      </div>
    </div>

    <div class="bk-content">
      <div class="wrap-v1">
        <div class="content-title">
          <span>热门币种信息</span>
        </div>
        <el-table :data="tableData" highlight-current-row style="width: 100%">
          highlight-current-row
          <el-table-column type="index" width="50"></el-table-column>
          <el-table-column label="名称" width="180">
            <template slot-scope="scope" class="include">
              <img :src="scope.row.imageUrl" alt="" class="img" />
              <span style="margin-left: 10px">{{ scope.row.bname }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="bcode" label="代码" width="180">
          </el-table-column>
          <el-table-column prop="price" label="价格(美元)" width="180">
          </el-table-column>
          <el-table-column prop="marketValue" label="市值"> </el-table-column>
          <el-table-column prop="cjiaoliang" label="成交量(24H)">
          </el-table-column>
          <el-table-column prop="trueover" label="交易份额"> </el-table-column>
          <el-table-column prop="hourzhangdie" label="涨跌(24H)">
          </el-table-column>
          <el-table-column prop="dayzhangdie" label="涨跌(7日)">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="footer">
      <button>加载更多</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: this.$store.state.bizhong_infos,
    };
  },
};
</script>

<style lang="less" scoped>
.bizhong-info {
  .bk-container {
    height: 60px;
    .lh {
      line-height: 60px;
    }
  }

  .bk-content {
    .content-title {
      font-size: 32px;
      font-weight: bold;
      height: 66px;
      padding-top: 20px;

      span {
        padding: 14px 0;
        border-bottom: 2px solid #707070;
      }
    }

    .img {
      width: 28px;
      height: 28px;
    }
  }
  .footer {
    width: 100%;
    margin: 90px auto;
    color: #fff;
    font-size: 18px;
    button {
      position: relative;
      left: 50%;
      top: 50%;
      transform: translate(-50%);
      width: 329px;
      height: 60px;
      background-color: #b5994c;
    }
  }
}
</style>