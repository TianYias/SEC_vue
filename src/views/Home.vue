<!--前台主界面-->
<template>
  <div>
    <div>
      <h1>欢迎使用校企合作平台</h1>
    </div>
    <div>
      <h1>作者：软件工程3班 田艺</h1>
    </div>
        <el-row :gutter="10" style="margin-bottom: 40px">
          <el-col :span="6">
            <el-card>
              <div style="color: #3f5efb">注册企业</div>
              <div style="padding: 10px 0;text-align: center;font-weight: bold">6</div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card>
              <div style="color: #3f5efb">注册学校</div>
              <div style="padding: 10px 0;text-align: center;font-weight: bold">14</div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card>
              <div style="color: #3f5efb">注册学生</div>
              <div style="padding: 10px 0;text-align: center;font-weight: bold">5</div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card>
              <div style="color: #3f5efb">校企活动</div>
              <div style="padding: 10px 0;text-align: center;font-weight: bold">4</div>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div id="main" style="width: 500px; height: 400px"></div>
          </el-col>
        </el-row>
  </div>
</template>

<script>

import * as echarts from 'echarts';

export default {
  name: "Home",
  data() {
    return {}
  },
  methods: {
    findPage(){
      this.request.post("/school/findPage", {
        currentPage: this.currentPage,//页码
        pageSize: this.pageSize,//每页记录数
        queryString: this.newQueryString//查询条件
      }).then(res => {
        this.tableData = res.rows;
        this.total = res.total;
      })
    }
  },
  mounted() { //页面元素渲染之后触发
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    };
    myChart.setOption(option);

  },
  created() {
    this.findPage();
  },
}
</script>

<style scoped>

</style>