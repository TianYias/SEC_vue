<template>
  <div>
    <el-container>

      <el-header padding-left:0px>
        <div style="box-shadow: 1px 0 6px rgb(0 21 41 / 35%)">
          <FrontHeader/>
        </div>
      </el-header>

      <el-main>
        <div style="width: 1100px; margin:0 auto">
          <!--        表示当前页面的子路由会在<router-view/>里面展示-->
          <router-view/>
        </div>
      </el-main>

    </el-container>
  </div>
</template>

<script>

import FrontHeader from "@/components/FrontHeader";

export default {
  name: "Front",
  components: {
    FrontHeader
  }
}
</script>

<style scoped>

</style>