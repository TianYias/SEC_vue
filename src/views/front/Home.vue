<template xmlns="">
  <div>

    <!--    轮播图-->
    <div>
      <template>
        <el-carousel indicator-position="outside" height="300px" trigger="click">
          <el-carousel-item v-for="item in imgs" :key="item" @click.native="goSolution(item)">
            <img :src="item" alt="" style="width: 100%; height: 100%"/>
          </el-carousel-item>
        </el-carousel>
      </template>
    </div>

    <!--    用户模块-->
    <FrontModular/>

    <!--    校企合作项目-->
    <el-table :show-header="false" :data="tableData" stripe border :header-cell-style="{background:'#E0FFFF'}">
      <el-table-column prop="name" label="标题"/>
      <el-table-column prop="schoolName" label="学校名称"/>
      <el-table-column prop="enterpriseName" label="企业名称"/>
      <el-table-column prop="time" label="日期"/>
      <el-table-column prop="check" label="审核状态"/>
    </el-table>
<!--    <div>
      <el-row :gutter="20">
        <el-col :span="16">
          <el-row :gutter="20">
            <el-col :span="12">
              <p v-html="url"></p>
            </el-col>
            <el-col :span="12">
              <p v-html="url"></p>
            </el-col>
            <el-col :span="12">
              <p v-html="url"></p>
            </el-col><el-col :span="12">
            <p v-html="url"></p>
          </el-col>
          </el-row>
        </el-col>
        <el-col :span="8">
          66
        </el-col>
      </el-row>
    </div>-->

  </div>
</template>

<script>

import FrontModular from "@/components/FrontModular";

export default {
  name: "FrontHome",
  data() {
    return {
      user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
      formData: [],//表单数据,
      imgs: [
        "http://rc2tjc4h6.hd-bkt.clouddn.com/ef7455888c27708e.jpg",
        "http://rc2tjc4h6.hd-bkt.clouddn.com/d8c4f1b817bcf0ec.jpg",
        "http://rc2tjc4h6.hd-bkt.clouddn.com/3ad780edd9d1f6fd.jpg"
      ],
      url: "<p>nihao</p>&nbsp<p>nihao</p>&nbsp<p>nihao</p>&nbsp<p>nihao</p>&nbsp"
    }
  },
  methods: {
    goSolution(item) {
      this.$router.replace('/front')
    },
  },

  findPage() {
    //判断查询条件是否改变
    if (this.QueryString !== this.newQueryString) {
      this.QueryString = this.newQueryString;
      this.currentPage = 1;
    }
    this.request.post("/cooperation/findPage1", {
      queryString: this.newQueryString//查询条件
    }).then(res => {
      this.tableData = res.rows;
      this.total = res.total;
    })

  },
  components: {
    FrontModular
  },
  //vue初始化完成调用分页查询
  created() {
    this.findPage();
  },
}
</script>

<style scoped>

</style>