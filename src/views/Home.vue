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
            <span slot="title">企业模块</span>
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
    </el-aside>

    <el-container>

      <el-header style="font-size: 12px; border-bottom: 1px solid #ccc; line-height: 60px; display: flex">
        <div style="flex: 1; font-size: 22px">
          <span :class="collapseBthClass" @click="collapse"/>
        </div>
        <el-breadcrumb separator-class="el-icon-arrow-right" style="flex: 30; margin-top: 22px">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <el-dropdown style="width: 70px">
          <span>用户</span>
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
          <el-input style="width: 220px" suffix-icon="el-icon-search" placeholder="请输入名称" v-model="newQueryString"
                    clearable @clear="clear"/>
          <el-button class="ml-5" type="primary" @click="findPage">搜索</el-button>
          <el-button class="ml-5" type="primary">新增</el-button>
        </div>
        <el-table :data="tableData" stripe border :header-cell-style="{background:'#E0FFFF'}">
          <el-table-column prop="id" label="id" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="sex" label="性别">
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
            :current-page="currentPage"
            :page-size="pageSize"
            :total="total">
        </el-pagination>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

import axios from "axios";

export default {
  name: 'Home',
  data() {
    // const item = {
    //   date: '2022-2-22',
    //   name: '名字',
    //   address: '地址市地址区'
    // };
    return {
      tableData: [],
      collapseBthClass: 'el-icon-s-fold',
      isCollapse: false,
      sideWidth: 200,
      currentPage: 1,//当前页
      pageSize: 10,//每页条数
      total: 0,//总条数
      queryString: null,//查询条件
      newQueryString: null//查询框数据
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
    //分页查询
    findPage() {
      if (this.QueryString != this.newQueryString) {
        this.QueryString = this.newQueryString;
        this.currentPage = 1;
      }
      var param = {
        currentPage: this.currentPage,//页码
        pageSize: this.pageSize,//每页记录数
        queryString: this.newQueryString//查询条件
      }
      axios.post("http://localhost:8081/school/findPage", param).then((res) => {
        this.tableData = res.data.rows;
        this.total = res.data.total;
      })
    },
    //切换页码
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      this.findPage();
    },
    clear() {
      this.QueryString = null;
    }
  },
  created() {
    this.findPage();//vue初始化完成调用分页查询
  },
}

</script>
