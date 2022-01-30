<template>
  <div class="todoListContainer">
    <div class="imageContainer">
      <img src="../../assets/draw/clumsy.png" alt="">
    </div>
    <div class="titleContainer">
      <h1>TODOList</h1>
    </div>
    <div class="listContainer">
      <div
          class="listBox"
          v-for="(item, index) in todoShow"
          :key="index"
      >
        <TodoItem :todoData="item"/>
      </div>

    </div>
    <div class="operatePageContainer">
      <!--上一页-->
      <div
          :class="['lastButton',lastPageAllowed ? 'allowedButton' : '']"
          @click="checkLastPage"
      >
        <img
            :src="lastPageAllowed ? buttonIcon.lastPageAllowed : buttonIcon.lastPage"
            alt="">
      </div>
      <!--下一页-->
      <div
          :class="['nextButton',nextPageAllowed ? 'allowedButton' : '']"
          @click="checkNextPage"
      >
        <img :src="nextPageAllowed ? buttonIcon.nextPageAllowed : buttonIcon.nextPage"
             alt="">
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "TodoList",
  components: {TodoItem},
  data() {
    return {
      buttonIcon: {
        nextPage: require('../../assets/icon/next_page.png'),
        nextPageAllowed: require('../../assets/icon/next_page_allowed.png'),
        lastPage: require('../../assets/icon/last_page.png'),
        lastPageAllowed: require('../../assets/icon/last_page_allowed.png')
      },
      showList: [],
      page:0,
      todoShow:[
        {
          todoImage:require('../../assets/testImage.jpeg'),
          todoTitle:'概率论小测阅卷',
          todoContent:'2022 1/2测试，剩余24份未阅'
        },
        {
          todoImage:require('../../assets/testImage.jpeg'),
          todoTitle:'概率论小测阅卷',
          todoContent:'2022 1/2测试，剩余24份未阅'
        },
        {
          todoImage:require('../../assets/testImage.jpeg'),
          todoTitle:'概率论小测阅卷',
          todoContent:'2022 1/2测试，剩余24份未阅'
        },
        {
          todoImage:require('../../assets/testImage.jpeg'),
          todoTitle:'概率论小测阅卷',
          todoContent:'2022 1/2测试，剩余24份未阅'
        }
      ]
    }
  },
  computed:{
    nextPageAllowed(){
      return this.showList.length >= 4;
    },
    lastPageAllowed(){
      return this.page>=1;
    }
  },
  methods:{
    checkLastPage(){
      console.log(this.lastPageAllowed);
    },
    checkNextPage(){
      console.log(this.nextPageAllowed);
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.todoListContainer {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: #FFFFFF;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.todoListContainer .imageContainer {
  width: 90%;
  height: 25%;
  margin-top: 3%;
  background-color: #FFDBDB;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.todoListContainer .imageContainer img {
  width: 40%;
  height: 100%;
}

.titleContainer {
  width: 90%;
  height: 6%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.listContainer {
  width: 90%;
  height: 60%;
  display: grid;
  align-content: space-evenly;
  grid-template-rows: repeat(4,20%);
  grid-template-columns: 100%;
  grid-row-gap: 3%;
}
.listBox{
  border-radius: 10px;
  cursor: pointer;
  transition: all .5s;
}
.listBox:hover{
  transform: translate(-1%, -1%);
  box-shadow: 3px 3px #D7D7D7;
  transition: all 0.5s;
}


.operatePageContainer {
  width: 90%;
  height: 7%;
  position: relative;
}
.operatePageContainer div {
  width: 25px;
  height: 25px;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -2px 2px 12px #d7d7d7;
}
.operatePageContainer div img{
  width: 70%;
  height: 70%;
}
.allowedButton {
  cursor: pointer;
}
.operatePageContainer .nextButton {
  right: 0;
}
.operatePageContainer .lastButton {
  right: 45px;
}
</style>
