<!--登录界面-->
<template>
  <div class="Wrapper">
    <div style="margin: 200px auto; background-color: #fff;width: 350px;padding: 20px;border-radius: 10px">
      <div style="margin: 20px 0; text-align: center;font-size: 24px"><b>登 录</b></div>
      <el-form :model="user" :rules="rules" ref="userForm">
        <el-form-item prop="name">
          <el-input size="medium" style="margin: 10px 0" prefix-icon="el-icon-user" v-model="user.nameNumber"
                    placeholder="手机号"/>
        </el-form-item>
        <el-form-item prop="password">
          <el-input size="medium" style="margin: 10px 0" prefix-icon="el-icon-lock" v-model="user.password"
                    placeholder="密码"
                    show-password/>
        </el-form-item>
        <el-form-item prop="type">
          <el-select v-model="user.type" placeholder="请选择身份"
                     style="text-align: left; width: 150px; margin-right: 32px">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
          <el-button type="primary" size="small" aria-autocomplete="off" @click="login">登录</el-button>
          <el-button type="warning" size="small" aria-autocomplete="off" @click="$router.push('/register')">注册
          </el-button>
        </el-form-item>

      </el-form>
      <div style="margin: 10px 0;">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {},
      rules: {
        nameNumber: [
          {required: true, message: '请输入账户', trigger: 'blur'},
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ],
        type: [
          {required: true, message: '请选择身份', trigger: 'blur'}
        ]
      },
      options: [{
        value: '1',
        label: '学校',
        placeholder: "名字或学校代码"
      }, {
        value: '2',
        label: '企业'
      }, {
        value: '3',
        label: '学生'
      }, {
        value: '4',
        label: '管理员'
      }],
    }
  },
  methods: {
    login() {
      this.$refs["userForm"].validate((valid) => {
        if (valid) {
          this.request.post("/login", this.user).then(res => {
            if (res.code === '200') {
              localStorage.setItem("user", JSON.stringify(res.data)) //存储用户信息到浏览器
              this.$message.success("登录" + res.message)
              switch (this.user.type) {
                case '1':
                case '2':
                case '3':
                  this.$router.push("/front/home")
                  break;
                case '4':
                  this.$router.push("/home")
              }
            } else {
              //this.$message.error(res.message)
            }
          })
        } else {
          return false;
        }
      })
    }
  }
}
</script>

<style scoped>
.Wrapper {
  height: 100vh;
  background-image: linear-gradient(to bottom right, #00FFFF, #fc466b);
  overflow: hidden;
}
</style>