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
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-message"></i>
        <span slot="title">账号管理</span>
      </template>
      <el-menu-item index="/">企业管理</el-menu-item>
      <el-menu-item index="/school">学校管理</el-menu-item>
      <el-menu-item index="/admin/student">学生管理</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">学校模块</span>
      </template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项4-1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title"><i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="3-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="3-4">
        <template slot="title">选项4</template>
        <el-menu-item index="3-4-1">选项4-1</el-menu-item>
      </el-submenu>
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