<template>
  <div class="underLineGradeImportContainer">
    <div class="topButtonContainer">
      <div>手动导入</div>
      <div>导入excel表</div>
    </div>
    <div class="tableContainer">
      <el-table
          :data="studentGradeData"
          height="300"
      >
        <el-table-column
            prop="studentId"
            width="150"
            label="学号">
        </el-table-column>
        <el-table-column
            prop="studentName"
            width="150"
            label="姓名">
        </el-table-column>
        <el-table-column
            prop="studentGrade"
            width="150"
            label="成绩">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "underLineGradeImportDialog",
  data() {
    return {
      studentGradeData: [
        {
          studentId: '031902211',
          studentName: '张三',
          studentGrade: '96'
        },
        {
          studentId: '031902211',
          studentName: '张三',
          studentGrade: '96'
        },
        {
          studentId: '031902211',
          studentName: '张三',
          studentGrade: '96'
        },
        {
          studentId: '031902211',
          studentName: '张三',
          studentGrade: '96'
        },{
          studentId: '031902211',
          studentName: '张三',
          studentGrade: '96'
        },
        {
          studentId: '031902211',
          studentName: '张三',
          studentGrade: '96'
        },
        {
          studentId: '031902211',
          studentName: '张三',
          studentGrade: '96'
        },
        {
          studentId: '031902211',
          studentName: '张三',
          studentGrade: '96'
        },
        {
          studentId: '031902211',
          studentName: '张三',
          studentGrade: '96'
        },
        {
          studentId: '031902211',
          studentName: '张三',
          studentGrade: '96'
        },
        {
          studentId: '031902211',
          studentName: '张三',
          studentGrade: '96'
        },


      ]
    }
  }
}
</script>

<style scoped>
.underLineGradeImportContainer {
  width: 100%;
  height: 100%;
}

/*顶部按钮*/
.underLineGradeImportContainer .topButtonContainer {
  width: 100%;
  height: 50px;
  display: flex;
}

.underLineGradeImportContainer .topButtonContainer div {
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 110%;
  font-weight: bold;
  box-shadow: 2px 2px 2px #D7D7D7;
  cursor: pointer;
  transition: all .5s;
}

.underLineGradeImportContainer .topButtonContainer div:hover{
  box-shadow: 2px 2px 5px #D7D7D7;
  transition: all .5s;
}

.topButtonContainer > div:nth-child(1) {
  background: #977DFF;
  color: #FFFFFF;
}

.topButtonContainer > div:nth-child(2) {
  margin-left: 5%;
  background: #FFFFFF;
  color: #977DFF;
}

.underLineGradeImportContainer .tableContainer{
  margin-top: 3%;
}
</style>

<style>
/*表格内容每一行文字变色加粗*/
.el-table tr {
  color: #3F3F3F;
  font-weight: bold;
}

/*去除每一行下的边框*/
.el-table td.el-table__cell {
  border: none;
}

/*清除表头下方的横线*/
.el-table th.el-table__cell.is-leaf {
  border: none;
}
</style>
