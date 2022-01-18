<template>
  <div class="container">
    <div class="logoContainer"></div>
    <div class="tabContainer">
      <div
          v-for="(item,index) in tabs"
          :key="index"
          class="tabBox"
          @click="selectTab(index)"
      >
        <AsideTab :tab="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import AsideTab from "./AsideTab";
export default {
  name: "MainAside",
  components: {AsideTab},
  data(){
    return{
      tabs:[
        {icon:require('../../assets/icon/home.png'),selectedIcon:require('../../assets/icon/home_selected.png'),tabName:'首页',selected:true,target:'Main'},
        {icon:require('../../assets/icon/course.png'),selectedIcon:require('../../assets/icon/course_selected.png'),tabName:'课程',selected: false,target: 'Course'},
        {icon:require('../../assets/icon/doWork.png'),selectedIcon:require('../../assets/icon/doWork_selected.png'),tabName:'考试',selected: false,target: 'Exam'},
        {icon:require('../../assets/icon/questions.png'),selectedIcon:require('../../assets/icon/questions_selected.png'),tabName:'题库',selected: false,target: 'Questions'},
      ]
    }
  },
  methods:{
    selectTab(index){
      for (let i = 0; i <this.tabs.length ; i++) {
        this.tabs[i].selected = i === index;
      }
      this.$router.push({name:this.tabs[index].target});
    }
  }
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  /*background-color: lightskyblue;*/
}
.logoContainer{
  width: 100%;
  height: 16%;
  background-color: lightyellow;
}
.tabContainer{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tabBox{
  width: 80%;
  height: 8%;
  margin-top: 5%;
  cursor: pointer;
}
</style>
