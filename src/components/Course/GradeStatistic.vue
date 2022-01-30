<!--成绩统计模块-->
<template>
  <div class="gradeStatisticContainer">
    <div class="itemContainer">
      <div
          class="itemBox"
          v-for="(item,index) in gradeData"
          :key="index">
        <GradeItem :gradeItem="item"/>
      </div>
    </div>

    <!--底部按钮-->
    <div class="buttonContainer">
      <div
          class="buttonBox"
          @click="underlineGradeImportDialogVisible = true">
        <img :src="require('../../assets/icon/导入.png')" alt="">
        <div>线下录入成绩录入</div>
      </div>
    </div>

    <el-dialog
        title="线下成绩导入"
        center
        :visible.sync="underlineGradeImportDialogVisible">
      <UnderLineGradeImportDialog/>
    </el-dialog>

  </div>


</template>

<script>
import GradeItem from "./GradeItem";
import UnderLineGradeImportDialog from "./UnderLineGradeImportDialog";

export default {
  name: "GradeStatistic",
  components: {UnderLineGradeImportDialog, GradeItem},
  props: ['gradeData'],
  data(){
    return{
      underlineGradeImportDialogVisible:false
    }
  },

}
</script>

<style scoped>
.gradeStatisticContainer {
  width: 100%;
  height: 100%;
  /*background: #61A5D9;*/
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* --- 成绩项 --- */
.gradeStatisticContainer .itemContainer {
  width: 97%;
  height: 380px;
  /*background: #977DFF;*/
  overflow-y: auto;
}

.gradeStatisticContainer .itemContainer .itemBox {
  width: 100%;
  height: 15%;
  margin-top: 2%;
  cursor: pointer;
  transition: all .5s;
  /*background: lightyellow;*/
}

.gradeStatisticContainer .itemContainer .itemBox:hover{
  transform: translate(-2px,-2px);
  box-shadow: 5px 5px 5px #D7D7D7;
  transition: all .5s;
}

/* --- 线下导入按钮 --- */
.gradeStatisticContainer .buttonContainer {
  width: 95%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  /*background: #2CCD89;*/
}

.gradeStatisticContainer .buttonContainer .buttonBox {
  width: 20%;
  height: 80%;
  margin-bottom: 2%;
  background: #977DFF;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all .5s;
}

.gradeStatisticContainer .buttonContainer .buttonBox:hover{
  transform: translate(-2px,-2px);
  box-shadow: 5px 5px 5px #D9D9D9;
  transition: all .5s;
}

/*导入的图片*/
.gradeStatisticContainer .buttonContainer img {
  width: 20px;
  height: 20px;
}

/* "线下导入成绩导入" */
.gradeStatisticContainer .buttonContainer .buttonBox > div {
  margin-left: 5px;
  font-size: 85%;
  font-weight: bold;
  color: #FFFFFF;
}
</style>
