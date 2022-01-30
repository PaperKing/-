<template>
  <div class="courseAsideContainer">
    <div class="titleContainer">
      <img :src="require('../../assets/icon/edit_square.png')" alt="">
    </div>
    <div class="contentContainer">
      <img :src="classData.classImage" alt="">
      <div>{{classData.className}}</div>
      <div>{{classData.classTerm}}</div>
      <div>{{classData.classSubject}}</div>
      <div class="assistantContainer">
        <div>助教</div>
        <div class="assistantContent">
          <img :src="classData.classAssistantImage" alt="">
          <div>
            <div>{{classData.classAssistant}}</div>
            <div>{{classData.classAssistantId}}</div>
          </div>
        </div>
      </div>
      <div>共{{classData.classStudentsCount}}名成员</div>
    </div>
    <div class="bottomContainer">
      <div class="bottomButton">
        <img :src="require('../../assets/icon/结束.png')" alt="">
        <div>结束课程</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseAside",
  props:['classData']
}
</script>

<style scoped>
.courseAsideContainer{
  width: 100%;
  height: 100%;
  background: #FFFFFF;
}
/*----------顶部操作按钮----------*/
.courseAsideContainer .titleContainer{
  width: 100%;
  height: 10%;
  /*background: #977DFF;*/
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.courseAsideContainer .titleContainer img{
  width: 15px;
  height: 15px;
  margin-right: 3%;
}

/*----------内容----------*/
.courseAsideContainer .contentContainer{
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /*background: lightgreen;*/
}
/*班级图片*/
.courseAsideContainer .contentContainer>img{
  width: 70px;
  height: 70px;
  border-radius: 100%;
  margin-top: 5%;
  margin-bottom: 5%;
}
/*班级名称*/
.courseAsideContainer .contentContainer>div:nth-child(2){
  font-size: 100%;
  font-weight: bold;
  color: #000000;
  margin-bottom: 3%;
}
/*班级学期+班级专业*/
.courseAsideContainer .contentContainer>div:nth-child(3),
.courseAsideContainer .contentContainer>div:nth-child(4){
  font-size: 80%;
  font-weight: lighter;
  color: #7E7E7E;
  margin-bottom: 1%;
}
/*----------助教----------*/
.courseAsideContainer .contentContainer .assistantContainer{
  width: 90%;
  height: 20%;
  border-radius: 10px;
  background: #F3F4F8;
  display: flex;
  align-items: center;
  margin-top: 3%;
}
/*助教标题*/
.courseAsideContainer .contentContainer .assistantContainer>div:nth-child(1){
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 90%;
  font-weight: bold;
  color: #977DFF;
  margin-left: 5%;
}
.assistantContainer .assistantContent{
  flex: 5;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 5%;
}
/*助教图片*/
.assistantContainer .assistantContent img{
  width: 30px;
  height: 30px;
  border-radius: 100%;
}
/*助教姓名*/
.assistantContainer .assistantContent>div div:nth-child(1){
  font-size: 70%;
  font-weight: bold;
  color: #7E7E7E;
  margin-left: 15%;
}
/*助教ID*/
.assistantContainer .assistantContent>div div:nth-child(2){
  font-size: 65%;
  font-weight: lighter;
  color: #7E7E7E;
  margin-left: 15%;
}
/*班级人数*/
.courseAsideContainer .contentContainer>div:nth-child(6){
  font-size: 80%;
  font-weight: bold;
  color: #707070;
  margin-top: 5%;
}

/*----------底部按钮----------*/
.courseAsideContainer .bottomContainer{
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  /*background: lightyellow;*/
}
.courseAsideContainer .bottomContainer .bottomButton{
  width: 40%;
  height:60%;
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FF86A2;
}
.courseAsideContainer .bottomContainer .bottomButton img{
  width: 15px;
  height: 15px;
}
.courseAsideContainer .bottomContainer .bottomButton div{
  font-size: 85%;
  font-weight: bold;
  color: #FFFFFF;
  margin-left: 2%;
}
</style>
