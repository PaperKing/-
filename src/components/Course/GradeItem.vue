<template>
  <div class="gradeItemContainer">
    <div class="dateContainer">
      {{gradeItem.gradeDate}}
    </div>
    <div class="titleContainer">
      <img :src="gradeItem.gradeImage" alt="">
      <div class="title">
        <div class="overflowBox">{{gradeItem.gradeTitle}}</div>
        <div class="overflowBox">{{gradeItem.gradeDescription}}</div>
      </div>
    </div>
    <div
        class="totalSwitchContainer">
      <div>是否计入期末总评</div>
      <el-switch
          v-model="ifFinalTotal"
          active-color="#977DFF"
      >
      </el-switch>
    </div>
    <div
        v-if="gradeItem.gradeIfWeightShow"
        class="weightContainer">
      <div>权重</div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GradeItem",
  props:['gradeItem'],
  data(){
    return{
      ifFinalTotal:true
    }
  },
  watch:{
    ifFinalTotal(value){
      this.gradeItem.gradeIfFinalTotal = value;
    }
  }
}
</script>

<style scoped>
.gradeItemContainer{
  width: 100%;
  height: 100%;
  /*background: lightcoral;*/
  display: flex;
}
.overflowBox{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
}

/*日期*/
.gradeItemContainer .dateContainer{
  width: 17%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #704CFF;
  font-size: 130%;
  font-weight: bolder;
  /*background: lightgreen;*/
}

/*图片+标题+描述*/
.gradeItemContainer .titleContainer{
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  /*background: lightskyblue;*/
}
.gradeItemContainer .titleContainer img{
  width: 15%;
  height: 100%;
}
.gradeItemContainer .titleContainer .title{
  width: 75%;
  margin-left: 2%;
  /*border: 1px solid red;*/
}
/*标题*/
.gradeItemContainer .titleContainer .title>div:nth-child(1){
  width: 100%;
  /*background: lightpink;*/
  font-weight: bold;
  color: #656565;
}
/*描述*/
.gradeItemContainer .titleContainer .title>div:nth-child(2){
  width: 100%;
  font-size: 85%;
  color: #656565;
  margin-top: 4px;
}

/* --- 计入总计开关 --- */
.gradeItemContainer .totalSwitchContainer{
  width: 22%;
  height: 100%;
  /*background: lightsalmon;*/
  display: flex;
  align-items: center;
  font-size: 80%;
  color: #828282;
}
.gradeItemContainer .totalSwitchContainer>div:nth-child(1){
  margin-left: 5%;
  margin-right: 3%;
}

/* --- 权重 --- */
.gradeItemContainer .weightContainer{
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
}
.gradeItemContainer .weightContainer>div:nth-child(1){
  height: 25%;
  margin-left: 25%;
  margin-right: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80%;
  color: #828282;
}
.gradeItemContainer .weightContainer>div:nth-child(2){
  width: 25%;
  height: 25%;
  border-radius: 10%;
  background: #D2D2D2;
}
</style>
