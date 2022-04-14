<template xmlns="">
  <div>

    <!--    轮播图-->
    <div>
      <template>
        <el-carousel indicator-position="outside" height="150px" trigger="click">
          <el-carousel-item v-for="item in imgs" :key="item" @click.native="goSolution(item)">
            <img :src="item" alt="" style="width: 100%; height: 100%"/>
          </el-carousel-item>
        </el-carousel>
      </template>
    </div>

    <!--    用户模块-->
    <FrontModular/>

    <!--    校企合作项目-->
    <div>
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
    </div>

  </div>
</template>

<script>

import FrontModular from "@/components/FrontModular";

export default {
  name: "FrontHome",
  data() {
    return {
      imgs: [
        "http://r9lhttmxk.hd-bkt.clouddn.com/0ca03b79-6454-4853-8736-79fb2aa3f097.jpg",
        "http://r9lhttmxk.hd-bkt.clouddn.com/15ac0a2e-e237-4ade-8de8-125b6a25ba7a.jpg",
        "http://r9lhttmxk.hd-bkt.clouddn.com/2362aa20-263f-42c4-8060-360e5d685296.jpg"
      ],
      url: "<p>nihao</p>&nbsp<p>nihao</p>&nbsp<p>nihao</p>&nbsp<p>nihao</p>&nbsp"
    }
  },
  methods: {
    goSolution(item) {
      this.$router.replace('/front')
    },
  },
  components: {
    FrontModular
  }
}
</script>

<style scoped>

</style>