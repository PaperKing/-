<template>
  <div class="container">
    <div class="imgContainer">
      <img src="../../assets/icon/doing.png" alt="">
    </div>
    <div class="textContainer">
      <div>
        <div>概率论考试</div>
        <div>28/12 2021</div>
      </div>
      <div>状态</div>
    </div>
    <div class="stateContainer">
      <div></div>
      <div>进行中，剩余时间 60:39</div>
    </div>
    <div class="detailButton">
      <img src="../../assets/icon/preview.png" alt="">
      <div>查看详情</div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "ExamNotify",
  computed:{
    ...mapState('examStore',['exams'])
  },

}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: #FF7999;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
}
.imgContainer{
  width: 40px;
  height: 40px;
  position: absolute;
  left: 2%;
}
.imgContainer img{
  width: 100%;
  height: 100%;
}
.textContainer{
  width: 25%;
  color: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 8%;
}
.stateContainer{
  width: 20%;
  height: 50%;
  border: 1px solid #FE8AA5;
  border-radius: 5%;
  background-color: #FE8AA5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  position: absolute;
  left: 35%;
}
.stateContainer div:nth-child(1){
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #2CCD89;
  margin-right: 2%;
}
.detailButton{
  width: 13%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 5%;
  background-color: #FF86A2;
  border-radius: 5%;
  color: #FFFFFF;
  cursor: pointer;
}
.detailButton img{
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
}
.detailButton div{
  margin-left: 5%;
  font-size: small;
}

</style>
