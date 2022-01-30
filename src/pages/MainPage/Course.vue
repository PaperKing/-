<template>
  <div class="courseContainer">
    <div class="contentContainer">
      <div class="contentBox">
        <!--班级顶栏-->
        <div class="classesContainer">
          <Classes
              :classData="classData"
              v-on:changeAddClassVisible="changeDialogVisible($event)"
          />
        </div>
        <!--班级详情-->
        <div class="detailContainer">
          <CourseDetail
              :studentData="studentData"
              :gradeData="gradeData"
              :recordData="recordData"
          />
        </div>
      </div>
      <!--右侧班级边栏-->
      <div class="contentAside">
        <el-card
            class="contentAsideBox"
            :body-style="{padding:'0px',width:'100%',height:'100%',background:'#FFFFFF',border:'none'}"
            shadow="hover"
        >
          <CourseAside :classData="classData[0]"/>
        </el-card>
      </div>
    </div>

    <!--新增班级的弹窗-->
    <el-dialog
        title="新增班级"
        center
        :visible.sync="addClassDialogVisible">
      <AddClassDialog/>
    </el-dialog>



  </div>
</template>

<script>
import Classes from "../../components/Course/Classes";
import CourseDetail from "../../components/Course/CourseDetail";
import CourseAside from "../../components/Course/CourseAside";
import AddClassDialog from "../../components/Course/AddClassDialog";

export default {
  name: "Course",
  components: {AddClassDialog, CourseAside, CourseDetail, Classes},
  data() {
    return {
      addClassDialogVisible: false,
      underlineGradeImportDialogVisible:false,
      classData: [
        {
          classImage: require('../../assets/testImage.jpeg'),
          className: '计算机组成原理1班',
          classTerm: '2021年第一学期',
          classSubject: '19级计算机+信安',
          classAssistant: '夕林',
          classAssistantId: '123456789',
          classAssistantImage: require('../../assets/testImage.jpeg'),
          classStudentsCount: 56,
        },
        {
          classImage: require('../../assets/testImage.jpeg'),
          className: '计算机组成原理2班',
          classTerm: '2021年第一学期',
          classSubject: '19级计算机+信安',
          classAssistantName: '夕林',
          classAssistantId: '123456789',
          classAssistantImage: require('../../assets/testImage.jpeg'),
          classStudentsCount: 56,
        },
        {
          classImage: require('../../assets/testImage.jpeg'),
          className: '计算机组成原理3班',
          classTerm: '2021年第一学期',
          classSubject: '19级计算机+信安',
          classAssistantName: '夕林',
          classAssistantId: '123456789',
          classAssistantImage: require('../../assets/testImage.jpeg'),
          classStudentsCount: 56,
        },
        {
          classImage: require('../../assets/testImage.jpeg'),
          className: '计算机组成原理4班',
          classTerm: '2021年第一学期',
          classSubject: '19级计算机+信安',
          classAssistantName: '夕林',
          classAssistantId: '123456789',
          classAssistantImage: require('../../assets/testImage.jpeg'),
          classStudentsCount: 56,
        },
        {
          classImage: require('../../assets/testImage.jpeg'),
          className: '计算机组成原理5班',
          classTerm: '2021年第一学期',
          classSubject: '19级计算机+信安',
          classAssistantName: '夕林',
          classAssistantId: '123456789',
          classAssistantImage: require('../../assets/testImage.jpeg'),
          classStudentsCount: 56,
        },
      ],
      studentData: [
        {
          studentId: '031903220',
          studentName: '小张',
          studentSubject: '计算机科学与技术'
        },
        {
          studentId: '031903221',
          studentName: '小张',
          studentSubject: '计算机科学与技术'
        },
        {
          studentId: '031903222',
          studentName: '小张',
          studentSubject: '计算机科学与技术'
        },
        {
          studentId: '031903223',
          studentName: '小张',
          studentSubject: '计算机科学与技术'
        },
        {
          studentId: '031903223',
          studentName: '小张',
          studentSubject: '计算机科学与技术'
        },
        {
          studentId: '031903223',
          studentName: '小张',
          studentSubject: '计算机科学与技术'
        },
        {
          studentId: '031903223',
          studentName: '小张',
          studentSubject: '计算机科学与技术'
        },
        {
          studentId: '031903223',
          studentName: '小张',
          studentSubject: '计算机科学与技术'
        },
        {
          studentId: '031903223',
          studentName: '小张',
          studentSubject: '计算机科学与技术'
        },
        {
          studentId: '031903223',
          studentName: '小张',
          studentSubject: '计算机科学与技术'
        },
        {
          studentId: '031903223',
          studentName: '小张',
          studentSubject: '计算机科学与技术'
        },
      ],
      gradeData: [
        {
          gradeDate: '2022/12/5',
          gradeImage: require('../../assets/testImage.jpeg'),
          gradeTitle: '12月4日课堂作业',
          gradeDescription: '日常成绩也不要小看 ！',
          gradeIfTotalShow: true, //是否显示"是否计入期末总评",
          gradeIfFinalTotal: true,
          gradeIfWeightShow: true, //是否显示 "权重"
          gradeIfWeight: true,
        },
        {
          gradeDate: '2022/12/5',
          gradeImage: require('../../assets/testImage.jpeg'),
          gradeTitle: '12月4日课堂作业',
          gradeDescription: '日常成绩也不要小看 ！',
          gradeIfTotalShow: false, //是否显示"是否计入期末总评"
          gradeIfFinalTotal: true,
          gradeIfWeightShow: true, //是否显示 "权重"
          gradeIfWeight: true,
        },
      ],
      recordData: [
        {
          recordDate: '2022/12/5',
          recordImage: require('../../assets/testImage.jpeg'),
          recordTitle: '新增班级成员',
          recordDescription: '新增了张乐，李林影，宋诚等五位同学'
        },
        {
          recordDate: '2022/12/5',
          recordImage: require('../../assets/testImage.jpeg'),
          recordTitle: '新增班级成员',
          recordDescription: '新增了张乐，李林影，宋诚等五位同学'
        },
        {
          recordDate: '2022/12/5',
          recordImage: require('../../assets/testImage.jpeg'),
          recordTitle: '新增班级成员',
          recordDescription: '新增了张乐，李林影，宋诚等五位同学'
        },
      ],
    }
  },
  methods: {
    //更改弹窗是否可见
    changeDialogVisible(visible) {
      console.log(visible);
      this.addClassDialogVisible = visible;
    },
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.courseContainer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* ------内容区------ */
.courseContainer .contentContainer {
  width: 95%;
  height: 97%;
  display: flex;
  flex-direction: row;
}

/* 班级+详情 */
.courseContainer .contentContainer .contentBox {
  display: flex;
  flex-direction: column;
  flex: 3;
  /*background: #6153C5;*/
}

.contentBox .classesContainer {
  width: 100%;
  flex: 1.2;
  /*background: lightsalmon;*/
}

.contentBox .detailContainer {
  width: 100%;
  flex: 3;
}

/* 边栏 */
.courseContainer .contentContainer .contentAside {
  display: flex;
  flex: 1;
  justify-content: flex-end;
}

.contentAsideBox {
  width: 90%;
  height: 60%;
  margin-top: 3%;
  border: none;
  cursor: pointer;

}
</style>
<style>
.el-dialog__title {
  font-weight: bolder;
  color: #977DFF;
}

.el-dialog__headerbtn {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 2px;
  background: 0 0;
  outline: 0;
  cursor: pointer;
  font-size: 16px;
  border: 1px solid #FFFFFF;
  border-radius: 100%;
  box-shadow: 1px 2px 3px #D7D7D7;
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-dialog__headerbtn:hover .el-dialog__close {
  color: #000000;
}
</style>
