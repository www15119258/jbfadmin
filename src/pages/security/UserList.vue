<template>
  <div class="userList">
    <el-row>
      <el-col :span="24" class="breadcrumb-container">
        <strong class="title">用户列表</strong>
        <el-breadcrumb separator="/" class="breadcrumb-inner">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" class="content-wrapper">
        <section>
          <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label="审批人">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
              </el-form-item>
              <el-form-item label="活动区域">
                <el-select v-model="formInline.region" placeholder="活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item><el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="24" style="padding-bottom: 0px;">
            <template>
              <el-table ref="userTable"
                :data="tableData" border @row-click="rowClick"
                style="width: 100%">
                <el-table-column
                  type="selection"
                  width="48">
                </el-table-column>
                <el-table-column
                  prop="date"
                  label="日期"
                  header-align="center"
                  align="center"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  header-align="center"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="province"
                  label="省份"
                  header-align="center"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="city"
                  label="市区"
                  header-align="center"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="地址"
                  header-align="center"
                  >
                </el-table-column>
                <el-table-column
                  prop="zip"
                  label="邮编"
                  align="center"
                  header-align="center"
                  width="120">
                </el-table-column>
                <el-table-column
                  label="操作"
                  fixed="right"
                  header-align="center"
                  align="center"
                  width="140">
                  <template scope="scope">
                    <el-button @click="handleClick" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                    <el-button type="text" size="small">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-col>
          <el-col :span="24" class="toolbar">
            <el-pagination layout="total, sizes, prev, pager, next, jumper" :page-size="20" :page-sizes="[20, 40, 60, 80, 100]" :total="total" style="float:right;">
            </el-pagination>
          </el-col>
        </section>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'userList',
  data () {
    return {
      formInline: {
        user: '',
        region: ''
      },
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }],
      total: 100
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    handleClick () {
      console.log(1)
    },
    rowClick (row) {
      this.$refs.userTable.toggleRowSelection(row)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
