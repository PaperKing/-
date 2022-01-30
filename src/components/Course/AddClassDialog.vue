<template>
  <div class="addClassDialogContainer">
    <div class="className classItemContainer">
      <div class="titleContainer">课程名</div>
      <el-input v-model="courseName"></el-input>
    </div>
    <div class="courseDescription classItemContainer">
      <div class="titleContainer">课程描述</div>
      <el-input type="textarea" v-model="courseDescription"></el-input>
    </div>
    <div class="courseTime classItemContainer">
      <div class="titleContainer">开设时间</div>
      <el-input v-model="courseTime"></el-input>
    </div>
    <div class="courseSubject classItemContainer">
      <div class="titleContainer">开设专业</div>
      <el-input v-model="courseSubject"></el-input>
    </div>

    <div class="buttonContainer">
      <div class="buttonBox">
        <img :src="require('../../assets/icon/确认.png')" alt="">
        <div>确认新增</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "AddClassDialog",
  data(){
    return{
      courseName:'',   //课程名
      courseDescription:'',  //课程描述
      courseTime:'',  //开设时间
      courseSubject:'' //开设专业
    }
  }
}
</script>

<style scoped>
.addClassDialogContainer{
  width: 100%;
  height: 100%;
  /*background: lightyellow;*/
}
/* --- 每一项 --- */
.addClassDialogContainer .classItemContainer{
  width: 100%;
  display: flex;
  align-items: center;
  padding: 15px 0;
}
.addClassDialogContainer .titleContainer{
  width: 11%;
  font-size: 120%;
  font-weight: bold;
  color: #848484;
  margin-right: 4%;
}
/* --- 课程描述 --- */
.addClassDialogContainer .courseDescription{
  height: 100px;
  /*background: #2CCD89;*/
}
.addClassDialogContainer .courseDescription .titleContainer{
  align-items: flex-start;
}

/* --- 底部按钮 --- */
.addClassDialogContainer .buttonContainer{
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.addClassDialogContainer .buttonContainer .buttonBox{
  width: 20%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #977DFF;
  font-size: 100%;
  font-weight: bold;
  color: #FFFFFF;
  cursor: pointer;
  transition: all .5s;
}
.addClassDialogContainer .buttonContainer .buttonBox:hover{
  box-shadow: 2px 5px 5px #D7D7D7;   /*鼠标悬停时出现阴影*/
  transition: all .5s;
}
.addClassDialogContainer .buttonContainer .buttonBox img{
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
</style>



<style>
.el-dialog{
  border-radius: 10px;   /*对话框圆角*/
}
/* --- 输入框 --- */
.el-input{
  width: 25%;
}
/*输入框的颜色*/
.el-input__inner{
  background: #E3DCFE;
  border: none;
}
/*输入框选中时边框消失*/
.el-input__inner:focus{
  border: none;
}
/* --- 输入区域 --- */
.el-textarea{
  width: 40%;
  height: 100%;
}
.el-textarea__inner{
  height: 100%;
  background: #E3DCFE;
  border: none;
}
.el-textarea__inner:focus{
  border: none;
}
</style>
