<template>
  <div>
    <el-container style="height: 100vh;">
      <el-aside :width="sideWidth + 'px'"
                style="background-color: rgb(238, 241, 246); box-shadow: 2px 0 6px rgb(0 21 41 / 35%)">
        <Aside :isCollapse="isCollapse"/>
      </el-aside>

      <el-container>

        <el-header>
          <Header :collapse="collapse" :collapse-bth-class="collapseBthClass"/>
        </el-header>

        <el-main>
          <!--        表示当前页面的子路由会在<router-view/>里面展示-->
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import Aside from "@/components/Aside";
import Header from "@/components/Header";

export default {
  name: 'Home',
  data() {
    return {
      collapseBthClass: 'el-icon-s-fold',//收缩侧边栏图标
      isCollapse: false,//是否收缩侧边栏
      sideWidth: 200,//侧边栏宽度
    }
  },
  methods: {
    //导航栏收缩展开
    collapse() {
      if (this.isCollapse) {
        this.isCollapse = false;
        this.sideWidth = 200;
        this.collapseBthClass = 'el-icon-s-fold'
      } else {
        this.isCollapse = true;
        this.sideWidth = 64;
        this.collapseBthClass = 'el-icon-s-unfold'
      }
    },
  },

  components: {
    Header,
    Aside
  }
}

</script>
