<template>
  <div class="titleContainer">
    <div class="titleBox" style="">
      <div>{{hello}}</div>
      <div>{{userName}}</div>
    </div>
    <div class="operationContainer">
      <div class="imageContainer">
        <img src="../../assets/icon/settings.png" alt="">
      </div>
      <div class="imageContainer">
        <img src="../../assets/icon/message.png" alt="">
        <div v-show="newMessage"></div>
      </div>
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
.titleContainer{
  width: 100%;
  height: 50%;
  position: relative;
  /*background-color: cadetblue;*/
}
/*------*/
.titleBox{
  width: 25%;
  height: 80%;
  /*background-color: lightyellow;*/
  position: relative;
  top: 11%;
  left: 5%;
}
.titleContainer .titleBox div{
  position: absolute;
}
/*问候*/
.titleContainer .titleBox div:nth-child(1){
  width: 30%;
  height: auto;
  /*left: 6.3%;*/
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: end;
  text-align: center;
  color: #B5B5B5;
  font-weight: normal;
  font-size: 150%;
}
/*用户名*/
.titleContainer .titleBox div:nth-child(2){
  height: auto;
  left: 36%;
  top: -25%;
  display: flex;
  align-items: end;
  color: #737476;
  font-size: 250%;
  font-weight: bold;

}

.titleContainer .operationContainer{
  /*width: 50%;*/
  width: 18%;
  height: 80%;
  /*background-color: lightblue;*/
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: row;
  align-items: center;
}
/*"设置+消息"图标*/
.titleContainer .operationContainer .imageContainer{
  /*width: 11%;*/
  /*height: 46%;*/
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /*background-color: lightyellow;*/
}
/*消息*/
.titleContainer .operationContainer .imageContainer:nth-child(2){
  margin-left: 20%;
}
.titleContainer .operationContainer .imageContainer img{
  width: 100%;
  height: 100%;
  object-fit: fill;

}
/*圆点*/
.titleContainer .operationContainer .imageContainer div{
  width: 5px;
  height: 5px;
  position: absolute;
  right: 5%;
  top: 7%;
  background-color: red;
  border-radius: 5px;
}
/*头像*/
.titleContainer .operationContainer .headSculptureBox{
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  background: #6153C5;
}
.titleContainer .operationContainer .headSculptureBox img{
  object-fit: cover;
  border-radius: 50%;
}
</style>
