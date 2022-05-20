<template>
  <el-menu :default-openeds="['1']" style="min-height: 100vh; overflow-x: hidden"
           background-color="rgb(48, 65, 86)"
           text-color="#fff"
           active-text-color="#EE7600"
           unique-opened="true"
           :collapse-transition="false"
           :collapse="isCollapse"
           router
  >
    <!--router="true" //点击利用index跳转-->
    <div style="height: 60px; line-height: 60px; text-align: center">
      <img src="../assets/logo.png"
           style="width: 20px; position: relative; top: 5px; margin-left: 5px;margin-right: 5px">
      <b style="color: white" v-show="!isCollapse">校企合作平台</b>
    </div>
    <el-menu-item index="/home">
      <i class="el-icon-menu"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-message"></i>
        <span slot="title">账号管理</span>
      </template>
      <el-menu-item index="/admin/enterprise">企业管理</el-menu-item>
      <el-menu-item index="/admin/school">学校管理</el-menu-item>
      <el-menu-item index="/admin/student">学生管理</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">平台维护</span>
      </template>
      <el-menu-item index="/Maintain/cooperation">校企合作管理</el-menu-item>
      <el-menu-item index="/Maintain/activity">校企活动管理</el-menu-item>
      <el-menu-item index="/Maintain/internship">岗位管理</el-menu-item>

    </el-submenu>
    <el-submenu index="3">
      <template slot="title"><i class="el-icon-setting"></i>
        <span slot="title">系统审核</span>
      </template>
      <el-menu-item index="/admin/enterprise">校企合作管理</el-menu-item>
      <el-menu-item index="/admin/school">校企活动管理</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "Aside",
  props: {
    isCollapse: Boolean
  }
}
</script>

<style scoped>

</style>