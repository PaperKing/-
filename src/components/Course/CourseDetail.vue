<template>
  <div class="courseDetailContainer">
    <div class="titleContainer">
      <div>详情</div>
    </div>
    <div class="contentContainer">
      <el-tabs value="first">
        <el-tab-pane label="用户管理" name="first">
          <div style="width: 100%;height: 100%">
            <UserManagement :studentData="studentData"/>
          </div>
        </el-tab-pane>
        <el-tab-pane label="班级事项" name="second">班级事项</el-tab-pane>
        <el-tab-pane label="成绩统计" name="third">
          <div style="width: 100%;height: 100%">
            <GradeStatistic
                :gradeData="gradeData"
            />
          </div>
        </el-tab-pane>
        <el-tab-pane label="日志信息" name="fourth">
          <div style="width: 100%;height: 100%">
            <DailyRecord :recordData="recordData"/>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import UserManagement from "./UserManagement";
import GradeStatistic from "./GradeStatistic";
import DailyRecord from "./DailyRecord";
export default {
  name: "CourseDetail",
  components: {UserManagement,GradeStatistic,DailyRecord},
  props:['studentData','gradeData','recordData']
}
</script>

<style scoped>
.courseDetailContainer{
  width: 100%;
  height: 97%;
}
.courseDetailContainer .titleContainer{
  width: 100%;
  height: 8%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1.17em;
  font-weight: bold;
  color: #737476;
}
.courseDetailContainer .contentContainer{
  width: 100%;
  height: 92%;
  background: #FFFFFF;
  border-radius: 10px;
}
</style>
<style>
.el-tabs{
  height: 100%;
}
.el-tabs__item{
  color: #A3A3A3;
  font-weight: bold;
}
.el-tabs__item:hover{
  color: #977DFF;
}
.el-tabs__item.is-active {
  color:#977DFF;
}
.el-tabs__active-bar{
  background: #977DFF;
}
.el-tabs__header{
  height: 8.5%;
  margin: 0 0 0 2%;
}
.el-tabs__content{
  margin: 0;
  padding: 0;
  height: 91.5%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.el-tab-pane{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.el-tabs__active-bar{
  background: transparent !important;
}

#tab-first{
  margin-left: 2%;
}
</style>
