<template>
  <div class="container">
    <div class="contentContainer">
      <div class="examContainer">
        <div>考试</div>
        <div>
          <ExamNotify/>
        </div>
      </div>
      <div class="dataContainer">
        <div>数据</div>
        <div class="dataContent">
          <div class="dataBoxContainer">
            <div
                class="dataBox"
                v-for="(item,index) in dataProps"
                :key=index
            >
              <DataBox :dataProp="item" :dataIndex="index"/>
            </div>
          </div>

          <div class="todoContainer">
            <div class="todoContent">
              <TodoList/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ExamNotify from "../../components/Main/ExamNotify";
import TodoList from "../../components/Main/TodoList";
import DataBox from "../../components/Main/DataBox";

export default {
  name: "Main",
  components: {DataBox, TodoList, ExamNotify},
  data() {
    return {
      dataProps: [
        {
          title: '课程',
          titleColor: '#61A5D9',
          contentTitle: '已开设',
          contentTitleNumber: 3,
          contentTitleTail: '门',
          backImage: require('../../assets/draw/TravelInternational.png'),
          backColor: '#FFFFFF'
        },
        {
          title: '人数',
          titleColor: '#FD7C3F',
          contentTitle: '总人数:',
          contentTitleNumber: 37,
          contentTitleTail: '人',
          backImage: require('../../assets/draw/HighFive.png'),
          backColor: '#FFF4F1'
        },
        {
          title: '试题',
          titleColor: '#0C4468',
          contentTitle: '',
          contentTitleNumber: 302,
          contentTitleTail: '道',
          backImage: require('../../assets/draw/MessageNotification.png'),
          backColor: '#ECF4FA'
        },
        {
          title: '考试',
          titleColor: '#FFFFFF',
          contentTitle: '已安排',
          contentTitleNumber: 3,
          contentTitleTail: '门考试',
          backImage: '',
          backColor: '#5B50BC'
        },
      ]
    }
  },
  computed: {
    count() {
      return 3;
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contentContainer {
  width: 95%;
  height: 97%;
}

.examContainer {
  width: 100%;
  height: 16%;
  display: flex;
  flex-direction: column;
}

.examContainer > div:nth-child(1) {
  margin-left: 2px;
  color: #737476;
  font-weight: bold;
  font-size: 1.17em;
  flex: 1;
}

.examContainer div:nth-child(2) {
  width: 100%;
  flex: 2;
}

.dataContainer {
  width: 100%;
  height: 84%;
  display: flex;
  flex-direction: column;
  /*background-color: #6153C5;*/
}

.dataContainer > div:nth-child(1) {
  height: auto;
  margin-left: 2px;
  margin-top: 5px;
  margin-bottom: 5px;
  color: #737476;
  font-weight: bold;
  font-size: 1.17em;
}

.dataContent {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex: 8;
  /*background-color: lightpink;*/
}

.dataBoxContainer {
  flex: 1;
  height: 100%;
  /*background-color: lightcoral;*/
  display: grid;
  justify-content: space-between;
  align-content: space-between;
  grid-template-rows: repeat(2, 48%);
  grid-template-columns: repeat(2, 45%);
}

.dataBox {
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s;
}
.dataBox:hover{
  transform: translate(-1%, -1%);
  box-shadow: 3px 8px #D9D9D9;
  transition: all 0.5s;
}

.todoContainer {
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /*background-color: lightsalmon;*/
}

.todoContent {
  width: 95%;
  height: 100%;
  border-radius: 10px;
  /*background-color: lightseagreen;*/
}
</style>
