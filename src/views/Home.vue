<template>
  <el-container style="height: 100vh;">
    <el-aside :width="sideWidth + 'px'"
              style="background-color: rgb(238, 241, 246); box-shadow: 2px 0 6px rgb(0 21 41 / 35%)">
      <el-menu :default-openeds="['1']" style="min-height: 100vh; overflow-x: hidden"
               background-color="rgb(48, 65, 86)"
               text-color="#fff"
               active-text-color="#EE7600"
               unique-opened="true"
               :collapse-transition="false"
               :collapse="isCollapse">
        <!--router="true" //点击利用index跳转-->
        <div style="height: 60px; line-height: 60px; text-align: center">
          <img src="../assets/logo.png"
               style="width: 20px; position: relative; top: 5px; margin-left: 5px;margin-right: 5px">
          <b style="color: white" v-show="!isCollapse">校企合作平台</b>
        </div>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="/about">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
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
    </el-aside>

    <el-container>

      <el-header style="font-size: 12px; border-bottom: 1px solid #ccc; line-height: 60px; display: flex">
        <div style="flex: 1; font-size: 22px">
          <span :class="collapseBthClass"  @click="collapse"/>
        </div>
        <el-breadcrumb separator-class="el-icon-arrow-right" style="flex: 30; margin-top: 22px">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <el-dropdown style="width: 70px">
          <span>王小虎</span>
          <i class="el-icon-arrow-down" style="margin-left: 8px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>

      <el-main>
        <div style="padding: 10px 0">
          <el-input style="width: 220px" suffix-icon="el-icon-search" placeholder="请输入名称"/>
          <el-button class="ml-5" type="primary">搜索</el-button>
          <el-button class="ml-5" type="primary">新增</el-button>
        </div>
        <el-table :data="tableData" stripe border :header-cell-style="{background:'#E0FFFF'}">
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="primary">编辑<i class="el-icon-edit"/></el-button>
              <el-button type="danger">删除<i class="el-icon-delete"/></el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
            @current-change="handleCurrentChange"
            background
            layout="total, jumper, prev, pager, next"
            :page-size="pageSize"
            :total="total">
        </el-pagination>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {
  name: 'Home',
  data() {
    const item = {
      date: '2022-2-22',
      name: '名字',
      address: '地址市地址区'
    };
    return {
      tableData: Array(10).fill(item),
      collapseBthClass: 'el-icon-s-fold',
      isCollapse: false,
      sideWidth: 200,
      pageSize: 10,
      total: 0
    }
  },
  methods: {
    //导航栏收缩展开
    collapse() {
      this.isCollapse = !this.isCollapse;
      if (this.isCollapse) {
        this.sideWidth = 64;
        this.collapseBthClass = 'el-icon-s-unfold'
      } else {
        this.sideWidth = 200;
        this.collapseBthClass = 'el-icon-s-fold'
      }
    },
    //切换页码
    handleCurrentChange(currentPage) {

    },
  }
}

</script>
