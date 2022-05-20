<template>
  <div style="margin: 10px 0">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <svg class="icon" aria-hidden="true" style="width: 20px; height: 20px;">
              <use xlink:href="#icon-qiye"></use>
            </svg>
            <span>企业</span>
            <h5 style="float: right;">企业功能</h5>
          </div>
          <div>
            <el-row :gutter="8">
              <a href="/front/cooperationEn">
                <el-col :span="8" align="center">
                  <el-button :disabled="!(user.type === 2)" class="box-card" shadow="hover" text-align="center"
                             :body-style="{padding:'10px'}">
                    <div>
                      <svg class="icon" aria-hidden="true" style="width: 30px; height: 30px;">
                        <use xlink:href="#icon-chanxueyanhezuo"></use>
                      </svg>
                    </div>
                    校企合作
                  </el-button>
                </el-col>
              </a>

              <a href="/front/internship">
                <el-col :span="8" align="center">
                  <el-button :disabled="!(user.type === 2)" class="box-card" shadow="hover" text-align="center" :body-style="{padding:'10px'}">
                    <div>
                      <svg class="icon" aria-hidden="true" style="width: 30px; height: 30px;">
                        <use xlink:href="#icon-xinwendongtai"></use>
                      </svg>
                    </div>
                    实习发布
                  </el-button>
                </el-col>
              </a>

              <a href="Front.vue">
                <el-col :span="8" align="center">
                  <el-button :disabled="!(user.type === 2)" class="box-card" shadow="hover" text-align="center" :body-style="{padding:'10px'}">
                    <div>
                      <svg class="icon" aria-hidden="true" style="width: 30px; height: 30px;">
                        <use xlink:href="#icon-xueshengziliao"></use>
                      </svg>
                    </div>
                    简历筛选
                  </el-button>
                </el-col>
              </a>
            </el-row>
          </div>
        </el-card>

      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <!--              <i class="iconfont icon-xuexiao" style="margin-right: 10px"/>-->
            <svg class="icon" aria-hidden="true" style="width: 20px; height: 20px;">
              <use xlink:href="#icon-xuexiao"></use>
            </svg>
            <span>学校</span>
            <h5 style="float: right;">学校功能</h5>
          </div>
          <div>
            <el-row :gutter="8">
              <a href="/front/cooperationSc">
                <el-col :span="8" align="center">
                  <el-button :disabled="!(user.type === 1)" class="box-card" shadow="hover" text-align="center" :body-style="{padding:'10px'}">
                    <div>
                      <svg class="icon" aria-hidden="true" style="width: 30px; height: 30px;">
                        <use xlink:href="#icon-chanxueyanhezuo"></use>
                      </svg>
                    </div>
                    校企合作
                  </el-button>
                </el-col>
              </a>

              <a href="/front/activitySc">
                <el-col :span="8" align="center">
                  <el-button :disabled="!(user.type === 1)" class="box-card" shadow="hover" text-align="center" :body-style="{padding:'10px'}">
                    <div>
                      <svg class="icon" aria-hidden="true" style="width: 30px; height: 30px;">
                        <use xlink:href="#icon-xinwendongtai"></use>
                      </svg>
                    </div>
                    活动发布
                  </el-button>
                </el-col>
              </a>

              <a href="/front/student">
                <el-col :span="8" align="center">
                  <el-button :disabled="!(user.type === 1)" class="box-card" shadow="hover" text-align="center" :body-style="{padding:'10px'}">
                    <div>
                      <svg class="icon" aria-hidden="true" style="width: 30px; height: 30px;">
                        <use xlink:href="#icon-xueshengziliao"></use>
                      </svg>
                    </div>
                    学生信息
                  </el-button>
                </el-col>
              </a>
            </el-row>
          </div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <svg class="icon" aria-hidden="true" style="width: 20px; height: 20px;">
              <use xlink:href="#icon-xuesheng"></use>
            </svg>
            <span>学生模块</span>
            <h5 style="float: right;">学生功能</h5>
          </div>
          <div>
            <el-row :gutter="8">
              <a href="/front/activitySt">
                <el-col :span="8" align="center">
                  <el-button :disabled="!(user.type === 3)" class="box-card" shadow="hover" text-align="center" :body-style="{padding:'10px'}">
                    <div>
                      <svg class="icon" aria-hidden="true" style="width: 30px; height: 30px;">
                        <use xlink:href="#icon-tongzhigonggao"></use>
                      </svg>
                    </div>
                    校企活动
                  </el-button>
                </el-col>
              </a>

              <a href="/front/internshipStu">
                <el-col :span="8" align="center">
                  <el-button :disabled="!(user.type === 3)" class="box-card" shadow="hover" text-align="center" :body-style="{padding:'10px'}">
                    <div>
                      <svg class="icon" aria-hidden="true" style="width: 30px; height: 30px;">
                        <use xlink:href="#icon-yewuliucheng"></use>
                      </svg>
                    </div>
                    寻找实习
                  </el-button>
                </el-col>
              </a>

              <a href="/front/resume/">
                <el-col :span="8" align="center">
                  <el-button :disabled="!(user.type === 3)" class="box-card" shadow="hover" text-align="center" :body-style="{padding:'10px'}">
                    <div>
                      <svg class="icon" aria-hidden="true" style="width: 30px; height: 30px;">
                        <use xlink:href="#icon-zhengshu"></use>
                      </svg>
                    </div>
                    个人简历
                  </el-button>
                </el-col>
              </a>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "FrontModular",
  data() {
    return {
      user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    }
  }
}
</script>

<style scoped>

</style>