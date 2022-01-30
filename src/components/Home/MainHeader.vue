<template>
  <div class="mainHeaderContainer">
    <!-- 问候+用户名 -->
    <div class="titleBox" style="">
      {{hello}}&nbsp;
      <span>{{userName}}</span>
    </div>
    <!-- 图标+头像 -->
    <div class="operationContainer">
      <div class="imageContainer">
        <img src="../../assets/icon/settings.png" alt="">
      </div>
      <div class="imageContainer">
        <img src="../../assets/icon/message.png" alt="">
        <!-- 红点 -->
        <div v-show="newMessage"></div>
      </div>
      <!-- 头像 -->
      <div class="imageContainer headSculptureBox">
        <img :src="headSculpture" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "MainHeader",
  computed: {
    ...mapState('userStore', ['userName','newMessage','headSculpture','hello'])
  },
  mounted() {
    const time = new Date().getHours();
    if (time >= 0 && time < 11 ){
      this.$store.commit("userStore/SET_HELLO","早上好,");
    }else {
      if (time >= 11 && time < 13){
        this.$store.commit("userStore/SET_HELLO","中午好,");
      }else {
        if (time >= 13 && time < 18){
          this.$store.commit("userStore/SET_HELLO","下午好,");
        }else {
          this.$store.commit("userStore/SET_HELLO","晚上好,");
        }
      }
    }
  }
}
</script>

<style scoped>
.mainHeaderContainer{
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  /*background-color: cadetblue;*/
}
/*--- 问候+用户名 ---*/
.titleBox{
  font-size: 100%;
  color: #B5B5B5;
  margin-left: 5%;
  /*background-color: lightyellow;*/
}
/*-- 用户名 ---*/
.titleBox span{
  font-size: 160%;
  font-weight: bold;
  color: #737476;
}

/*图标与头像*/
.mainHeaderContainer .operationContainer{
  width: 18%;
  height: 80%;
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: row;
  align-items: center;
  /*background-color: lightblue;*/
}
/*"设置+消息"图标*/
.mainHeaderContainer .operationContainer .imageContainer{
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  position: relative;
  /*background-color: lightyellow;*/
}
/*消息*/
.mainHeaderContainer .operationContainer .imageContainer:nth-child(2){
  margin-left: 20%;
}
.mainHeaderContainer .operationContainer .imageContainer img{
  width: 100%;
  height: 100%;
  object-fit: fill;
  cursor: pointer;
}
/*圆点*/
.mainHeaderContainer .operationContainer .imageContainer div{
  width: 5px;
  height: 5px;
  position: absolute;
  right: 5%;
  top: 7%;
  background-color: red;
  border-radius: 5px;
}
/*头像*/
.mainHeaderContainer .operationContainer .headSculptureBox{
  width: 40px;
  height: 40px;
  position: absolute;
  right: 0;
  cursor: pointer;
}
.mainHeaderContainer .operationContainer .headSculptureBox img{
  object-fit: cover;
  border-radius: 50%;
}
</style>
