<!--学生管理界面-->
<template>
  <div>
    <!--        搜索栏-->
    <div style="padding: 10px 0">
      <el-input style="width: 220px" suffix-icon="el-icon-search" placeholder="请输入姓名/学号" v-model="newQueryString"
                clearable @clear="clear"/>
      <el-button class="ml-5" type="primary" @click="findPage">搜索</el-button>
      <el-button class="ml-5" type="primary" @click="handleShow([],'新增')">新增</el-button>
    </div>

    <!--        表格-->
    <el-table :data="tableData" stripe border :header-cell-style="{background:'#E0FFFF'}">
      <el-table-column type="index" label="序号" align="center"/>
      <el-table-column prop="studentNumber" label="学号"/>
      <el-table-column prop="name" label="姓名"/>
      <el-table-column prop="password" label="登录密码"/>
      <el-table-column prop="phone" label="电话"/>
      <el-table-column prop="major" label="专业"/>
      <el-table-column prop="grade" label="年级"/>
      <el-table-column label="照片" width="70" align="center">
        <template scope="scope">
          <el-image
              style="width: 35px; height: 35px"
              :src="imgUrlHead + scope.row.img"
              fit="fill">
            <div slot="error" class="image-slot" style="font-size:200%">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </template>
      </el-table-column>
      <el-table-column prop="universityCode" label="学校代码"/>
      <el-table-column label="操作" width="170">
        <template slot-scope="scope">
          <el-button type="primary" @click="handleShow(scope.row, '编辑')">编辑<i class="el-icon-edit"/></el-button>
          <el-button type="danger" @click="handleDelete(scope.row)">删除<i class="el-icon-delete"/></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--        分页条-->
    <el-pagination
        @current-change="handleCurrentChange"
        background
        layout="total, jumper, prev, pager, next"
        :current-page="currentPage"
        :page-size="pageSize"
        :total="total">
    </el-pagination>

    <!--        表单-->
    <el-dialog :title="formName" :visible.sync="dialogFormVisible" :before-close="handleNoShow">
      <el-form ref="dataForm" :model="formData" :rules="rules" label-position="right"
               label-width="100px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="学号" prop="studentNumber">
              <el-input v-model="formData.studentNumber"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="formData.name"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="登录密码" prop="password">
              <el-input v-model="formData.password"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="电话">
              <el-input v-model="formData.phone"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="专业" prop="major">
              <el-input v-model="formData.major"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="年级" prop="grade">
              <el-input v-model="formData.grade"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="上传照片">
              <el-upload style="height: 70px; width: 70px"
                         class="avatar-uploader"
                         action="http://localhost:8081/upload"
                         :auto-upload=true
                         name="imgFile"
                         :show-file-list="false"
                         :on-success="handleAvatarSuccess"
                         :before-upload="beforeAvatarUpload">
                <el-image
                    v-if="formData.img"
                    style="width: 70px; height: 70px"
                    :src="imgUrlHead + formData.img"
                    fit="fill">
                </el-image>
                <i style="font-size:35px" v-else class="el-icon-plus"></i>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="学校代码" prop="universityCode">
              <el-input v-model="formData.universityCode"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleNoShow()">取消</el-button>
        <el-button type="primary" @click="handleSave()">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      tableData: [],//表格数据
      formData: [],//表单数据
      currentPage: 1,//当前页
      pageSize: 8,//每页条数
      total: 0,//总条数
      queryString: null,//查询条件
      newQueryString: null,//新查询条件
      imgUrlHead: "http://rc2tjc4h6.hd-bkt.clouddn.com/",//查询图片前缀
      formName: null,//表单名字
      dialogFormVisible: false,//新增表单是否可见
      dialogFormVisible4Edit: true,//编辑表单是否可见
      rules: {//校验规则
        universityCode: [{required: true, message: '学校代码为必填项', trigger: 'blur'}],
        studentNumber: [{required: true, message: '学号为必填项', trigger: 'blur'}],
        name: [{required: true, message: '名字为必填项', trigger: 'blur'}],
        password: [{required: true, message: '密码为必填项', trigger: 'blur'}],
        major: [{required: true, message: '专业为必填项', trigger: 'blur'}],
        grade: [{required: true, message: '年级为必填项', trigger: 'blur'}]
      }
    }
  },
  methods: {
    //删除
    handleDelete(res) {
      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.request.post("/student/delete?id=" + res.id
        ).then(res => {
          if (res) {
            this.$message.success("删除成功")
          } else {
            this.$message.error("删除失败")
          }
        }).finally(() => {
          this.findPage();
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },

    //保存
    handleSave() {
      this.request.post("/student/save", {
        id: this.formData.id,
        studentNumber: this.formData.studentNumber,
        name: this.formData.name,
        password: this.formData.password,
        phone: this.formData.phone,
        universityCode: this.formData.universityCode,
        major: this.formData.major,
        grade: this.formData.grade,
        img: this.formData.img,
      }).then(res => {
        if (res) {
          this.$message.success("保存成功")
        } else {
          this.$message.error("保存失败")
        }
      }).finally(() => {
        this.handleNoShow();
      })
    },

    //显示编辑添加表单
    handleShow(row, formName) {
      this.formName = formName;
      this.dialogFormVisible = true;
      if (row != null) {
        this.formData = row;
      }
    },

    //关闭编辑添加表单
    handleNoShow() {
      this.dialogFormVisible = false;
      this.$refs['dataForm'].resetFields();
      this.findPage();
    },

    //分页查询
    findPage() {
      //判断查询条件是否改变
      if (this.QueryString !== this.newQueryString) {
        this.QueryString = this.newQueryString;
        this.currentPage = 1;
      }
      this.request.post("/student/findPage", {
        currentPage: this.currentPage,//页码
        pageSize: this.pageSize,//每页记录数
        queryString: this.newQueryString//查询条件
      }).then(res => {
        this.tableData = res.rows;
        this.total = res.total;
      })
    },

    //切换页码
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      this.findPage();
    },

    //输入框清空事件
    clear() {
      this.QueryString = this.newQueryString;
      this.findPage();
    },

    //文件上传成功后的钩子，response为服务端返回的值，file为当前上传的文件封装成的js对象
    handleAvatarSuccess(res, file) {
      this.formData.img = res.data;
    },

    //上传图片之前执行
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  },
  //vue初始化完成调用分页查询
  created() {
    this.findPage();
  },
}
</script>

<style scoped>

</style>