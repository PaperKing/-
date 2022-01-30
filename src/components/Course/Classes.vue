<template>
  <div class="classContainer">
    <div class="classTitle">
      <div>班级 (3)</div>
      <div class="classTitleIcon">
        <img :src="require('../../assets/icon/All.png')" alt="">
        查看全部
      </div>
    </div>
    <div class="classContentContainer">
      <!--添加班级按钮-->
      <el-card
          class="classContentBox"
          :body-style="{padding:'0px',width:'100%',height:'100%'}"
          shadow="hover"
          >
        <div
            class="addClassBox"
            @click="changeAddClassVisible(true)">
          <div>
            <img :src="require('../../assets/icon/add_purple.png')" alt="">
          </div>
          <div>创建班级</div>
        </div>
      </el-card>
      <el-card
          class="classContentBox"
          :body-style="{padding:'0px',width:'100%',height:'100%'}"
          v-for="(item,index) in classData.slice(0,classData.length-1)"
          :key="index"
          shadow="hover"
      >
        <ClassItem :classData="item"/>
      </el-card>

    </div>
  </div>
</template>

<script>
import ClassItem from "./ClassItem";
export default {
  name: "Classes",
  components: {ClassItem},
  props:['classData','addClassDialogVisible'],
  methods:{
    //修改新增班级弹窗是否可见
    changeAddClassVisible(visible){
      this.$emit("changeAddClassVisible",visible);
    }
  }
}
</script>

<style scoped>
.classContainer {
  width: 100%;
  height: 100%;
  /*background: lightcoral;*/
  display: flex;
  flex-direction: column;
}

/*标题*/
.classContainer .classTitle {
  width: 100%;
  height: 20%;
  padding: 2px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.classContainer .classTitle:nth-child(1) {
  font-size: 105%;
  font-weight: bold;
  color: #737476;
}

.classContainer .classTitle .classTitleIcon {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7em;
  margin-right: 1%;
}

.classContainer .classTitle .classTitleIcon img {
  width: 12px;
  height: 12px;
  margin-right: 10px;
}

/*班级内容*/
.classContainer .classContentContainer {
  flex: 1;
  display: grid;
  justify-content: space-between;
  grid-template-rows: 100%;
  grid-template-columns: repeat(5, 18%);
}

.classContainer .classContentContainer .classContentBox {
  height: 100%;
  /*background: #6153C5;*/
  border: none;
  cursor: pointer;
}

.addClassBox {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 90%;
  font-weight: bold;
  color: #977DFF;
}

.addClassBox div:nth-child(1) {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 2px dashed #977DFF;
  background: #F2F1FF;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10%;
}

.addClassBox img {
  width: 60%;
  height: 60%;
}
</style>
