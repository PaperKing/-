<template>
  <div :style="{background: dataProp.backColor}" class="DataBoxContainer">
    <!--标题-->
    <div class="titleContainer">
      <div :style="{color: dataProp.titleColor}">{{dataProp.title}}</div>
      <div class="imageContainer">
        <img src="../../assets/icon/expand.png" alt="">
      </div>
      <div :style="{background:dataProp.titleColor}" class="decorate"></div>
    </div>
    <!--内容标题-->
    <div class="contentContainer">
      <div
          :style="dataIndex===3 ? {color: '#FFFFFF'} : {}"
          class="contentTitleContainer">
        {{dataProp.contentTitle}}
        <!--数字-->
        <span :style="{color:dataProp.titleColor}">{{dataProp.contentTitleNumber}}</span>
        {{dataProp.contentTitleTail}}
      </div>
      <!--内容配图-->
      <div class="contentImageContainer">
        <img v-show="dataIndex!==3" :src="dataProp.backImage" alt="">
      </div>
      <!--内容-->
      <div class="contentList">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataBox",
  props:['dataProp','dataIndex']
}
</script>

<style scoped>
.DataBoxContainer{
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  border-radius: 10px;
}
.titleContainer{
  width: 100%;
  height: 18%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;
  font-size: 90%;
}
/*标题*/
.titleContainer>div:nth-child(1){
  position: absolute;
  top: 25%;
  left: 5%;
  color: #0D86DD;
}
/*展开按钮*/
.titleContainer .imageContainer{
  width: 15px;
  height: 15px;
  top: 10%;
  position: absolute;
  right: 2%;
}
.titleContainer .imageContainer img{
  width: 100%;
  height: 100%;
}
.titleContainer .decorate{
  width: 30%;
  height: 10%;
  position: absolute;
  left: 5%;
  bottom: 2%;
  background-color: #61A5D9;
  border-radius: 10px;
}
.contentContainer{
  width: 100%;
  height: 82%;
  position: relative;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}
.contentContainer .contentTitleContainer{
  position: absolute;
  top: 6%;
  left: 5%;
  color: #737476;
  font-size: 70%;
}
.contentContainer .contentTitleContainer>span{
  font-weight: bold;
  font-size: 200%;
  color: #0542A8;
}
.contentImageContainer{
  width: 65%;
  height: 65%;
  position: absolute;
  bottom: 2%;
  left: 2%;
}
.contentImageContainer img{
  width: 100%;
  height: 100%;
}
</style>
