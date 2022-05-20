<template>
  <!--    头部-->
  <div style="width: 1100px;margin:0 auto">
  <div style="display: flex; height: 60px; line-height: 60px;padding: 0px">
    <div style="width: 200px; margin-left: 30px">
      <a href="/front/home">
      <img src="../assets/logo.png"
           style="width: 20px; position: relative; top: 5px; margin-left: 5px;margin-right: 5px">
      <b>校企合作平台</b>
      </a>
    </div>
    <div style="flex: 1">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
        <el-menu-item index="/front/home">首页</el-menu-item>
<!--        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">校企合作</a></el-menu-item>
        <el-menu-item index="/front/resume">简历管理</el-menu-item>-->
      </el-menu>
    </div>
    <div style="width: 200px; margin-right: 30px">
      <el-dropdown style="width: 200px; text-align: right" cursor: pointer>

        <div v-if="user === null">
          <a href="/login">登录</a>
        </div>

        <div style="display: inline-block" v-else>
          <el-avatar :size="30"
                     style="width: 30px; height: 30px;border-radius: 50%; position: relative; top: 10px; right: 10px;"
                     @error="errorHandler">
            <img :src="imgUrlHead +user.avatar" alt=""/>
          </el-avatar>
          <!--        <img :src="imgUrlHead +user.avatar" alt=""-->
          <!--             style="width: 30px; height: 30px;border-radius: 50%; position: relative; top: 10px; right: 10px;"/>-->
          <span style="margin-right: 5px">{{ user.nickname }}</span><i class="el-icon-arrow-down"
                                                                       style="margin-right: 5px"></i>
          <el-dropdown-menu slot="dropdown">
<!--            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>-->
            <el-dropdown-item>
              <span style="text-decoration: none" @click="logout">退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </div>

      </el-dropdown>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "FrontHeader",
  data() {
    return {
      user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
      imgUrlHead: "http://rc2tjc4h6.hd-bkt.clouddn.com/",//查询图片前缀
    }
  },
  methods: {
    //console.log(this.$route);
    logout() {
      this.$router.push("/login");
      localStorage.removeItem("user");
      this.$message.success("退出成功")
    },
    errorHandler() {
      return true
    }
  },

}
</script>

<style scoped>

</style>