<template>
  <div style="border-bottom: 1px solid #ccc; line-height: 70px; display: flex">
    <div style="flex: 1; margin-left: 30px">
      <span :class="collapseBthClass" @click="collapse" style="cursor: pointer; font-size: 18px"/>
      <el-breadcrumb separator='/' style="display: inline-block;margin-left: 10px">
        <el-breadcrumb-item v-for="inPath in pathList" :key="inPath.path">
          {{ inPath.meta.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-dropdown style="width: 300px; text-align: right; margin-right: 30px" cursor: pointer>

      <div v-if="user === null">
        <a href="/login">登录</a>
      </div>

      <div style="display: inline-block" v-else>
        <el-avatar :size="30" style="width: 30px; height: 30px;border-radius: 50%; position: relative; top: 10px; right: 10px;" @error="errorHandler">
          <img :src="imgUrlHead +user.avatar" alt="" />
        </el-avatar>
<!--        <img :src="imgUrlHead +user.avatar" alt=""-->
<!--             style="width: 30px; height: 30px;border-radius: 50%; position: relative; top: 10px; right: 10px;"/>-->
        <span style="margin-right: 5px">{{ user.nickname }}</span><i class="el-icon-arrow-down" style="margin-right: 5px"></i>
        <el-dropdown-menu slot="dropdown">
<!--          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>-->
          <el-dropdown-item>
            <span style="text-decoration: none" @click="logout">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </div>

    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
      imgUrlHead: "http://rc2tjc4h6.hd-bkt.clouddn.com/",//查询图片前缀
    }
  },
  methods: {
    //console.log(this.$route);
    logout(){
      this.$router.push("/login");
      localStorage.removeItem("user");
      this.$message.success("退出成功")
    },
    errorHandler() {
      return true
    }
  },
  props: {
    collapseBthClass: String,
    collapse: ''
  },
  computed: {
    pathList() {
      return this.$route.matched;
    }
  }
}
</script>

<style scoped>

</style>