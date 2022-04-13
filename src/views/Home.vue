<template>
  <div>
    <el-row :gutter="10" style="margin-bottom: 40px">
      <el-col :span="6">
        <el-card>
          <div style="color: #3f5efb">注册企业</div>
          <div style="padding: 10px 0;text-align: center;font-weight: bold">12</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div style="color: #3f5efb">注册学校</div>
          <div style="padding: 10px 0;text-align: center;font-weight: bold">24</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div style="color: #3f5efb">注册学生</div>
          <div style="padding: 10px 0;text-align: center;font-weight: bold">13</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div style="color: #3f5efb">校企活动</div>
          <div style="padding: 10px 0;text-align: center;font-weight: bold">8</div>
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

  }
}
</script>

<style scoped>

</style>