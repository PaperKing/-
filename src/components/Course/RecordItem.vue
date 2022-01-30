<template>
  <div class="recordItemContainer">
    <div class="dateContainer">
      {{recordItem.recordDate}}
    </div>
    <div class="titleContainer">
      <img :src="recordItem.recordImage" alt="">
      <div class="title">
        <div class="overflowBox">{{recordItem.recordTitle}}</div>
        <div class="overflowBox">{{recordItem.recordDescription}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecordItem",
  props:['recordItem']
}
</script>

<style scoped>
.recordItemContainer{
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
.recordItemContainer .dateContainer{
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
.recordItemContainer .titleContainer{
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  /*background: lightskyblue;*/
}
.recordItemContainer .titleContainer img{
  width: 15%;
  height: 100%;
}
.recordItemContainer .titleContainer .title{
  width: 75%;
  margin-left: 2%;
  /*border: 1px solid red;*/
}
/*标题*/
.recordItemContainer .titleContainer .title>div:nth-child(1){
  width: 100%;
  /*background: lightpink;*/
  font-weight: bold;
  color: #656565;
}
/*描述*/
.recordItemContainer .titleContainer .title>div:nth-child(2){
  width: 100%;
  font-size: 85%;
  color: #656565;
  margin-top: 4px;
}

/* --- 计入总计开关 --- */
.recordItemContainer .totalSwitchContainer{
  width: 22%;
  height: 100%;
  /*background: lightsalmon;*/
  display: flex;
  align-items: center;
  font-size: 80%;
  color: #828282;
}
.recordItemContainer .totalSwitchContainer>div:nth-child(1){
  margin-left: 5%;
  margin-right: 3%;
}

/* --- 权重 --- */
.recordItemContainer .weightContainer{
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
}
.recordItemContainer .weightContainer>div:nth-child(1){
  height: 25%;
  margin-left: 25%;
  margin-right: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80%;
  color: #828282;
}
.recordItemContainer .weightContainer>div:nth-child(2){
  width: 25%;
  height: 25%;
  border-radius: 10%;
  background: #D2D2D2;
}
</style>
