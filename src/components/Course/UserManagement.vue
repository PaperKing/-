<template>
  <div class="userManageContainer">

    <el-table
        v-if="studentData.length!==0"
        height="250"
        :data="studentData"
        :row-class-name="rowHover"
        :header-cell-style="tableHeader"
        style="width: 97%">
      <el-table-column
          prop="studentId"
          label="学号"
          width="150">
      </el-table-column>
      <el-table-column
          prop="studentName"
          label="姓名"
          width="150">
      </el-table-column>
      <el-table-column
          prop="studentSubject"
          label="专业"
          width="360">
      </el-table-column>
      <el-table-column
          label="操作"
          width="130">
        <div style="color: #977DFF;font-weight: bold">删除</div>
      </el-table-column>
    </el-table>
    <div
        v-else
        class="noDataContainer">
      <img :src="require('../../assets/images/A040Lxr.png')" alt="">
      <div>你的班级空无一人~</div>
      <div class="buttonContainer">
        <div>
          <img :src="require('../../assets/icon/导入.png')" alt="">
        </div>

        <div>点击导入</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "UserManagement",
  props: ['studentData'],
  methods: {
    //设置单行样式
    rowHover() {
      return 'tableRowContainer';
    },
    //设置表头样式
    tableHeader() {
      return {
        color: '#000000',
        fontWeight: 'bold'
      };
    }
  },
  data() {
    return {
      hoverRow: -1
    }
  }
}
</script>

<style scoped>
.userManageContainer {
  width: 100%;
  height: 100%;
  /*background: lightcoral;*/
  display: flex;
  flex-direction: column;
  align-items: center;
}

/*--- 班级没有成员 ---*/
.userManageContainer .noDataContainer{
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
/*图片*/
.userManageContainer .noDataContainer img{
  width: 200px;
  height: 200px;
  margin-top: 10%;
}
/* "你的班级空无一人～" */
.noDataContainer>div:nth-child(2){
  color: #717171;
  margin-top: 5%;
  font-weight: bold;
}
/* --- 导入按钮 --- */
.noDataContainer .buttonContainer{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
  padding: 15px 20px;
  border-radius: 10px;
  background: #977DFF;
  cursor: pointer;
}
/*导入按钮的图片*/
.userManageContainer .buttonContainer>div:nth-child(1){
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.userManageContainer .buttonContainer>div:nth-child(1) img{
  width: 100%;
  height: 100%;
}
/* "导入" */
.buttonContainer div{
  color: #FFFFFF;
  font-weight: bold;
  font-size: 90%;
}

/*.rowHoverStyle{*/
/*  background: #61A5D9;*/
/*}*/
</style>
<style>
/*表格内容每一行文字变色加粗*/
.el-table tr {
  color: #848484;
  font-weight: bold;
}

/*悬停时修改颜色和鼠标样式（只对单个单元格进行了修改）*/
.el-table--enable-row-hover .el-table__body tr:hover > td {
  background: #FFFFFF !important;
}


/*去除每一行下的边框*/
.el-table td.el-table__cell {
  border: none;
}

/*控制整行样式*/
.tableRowContainer {
  transition: all .5s;
  cursor: pointer;
}

.tableRowContainer:hover {
  transform: translate(-1%, -1%);
  box-shadow: -2px 2px 5px #977DFF;
  transition: all .5s;
}

/*清除表头下方的横线*/
.el-table th.el-table__cell.is-leaf {
  border: none;
}

.tableHeadContainer {
  color: #000000;
  font-weight: bold;
}

</style>
