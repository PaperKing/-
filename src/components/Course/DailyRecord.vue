<template>
  <div class="dailyRecordContainer">
    <div class="itemContainer">
      <div
          class="itemBox"
          v-for="(item,index) in recordData"
          :key="index">
        <RecordItem :recordItem="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import RecordItem from "./RecordItem";
export default {
  name: "DailyRecord",
  components: {RecordItem},
  props:['recordData']
}
</script>

<style scoped>
.dailyRecordContainer{
  width: 100%;
  height: 100%;
  /*background: #61A5D9;*/
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
/* --- 记录项 --- */
.dailyRecordContainer .itemContainer {
  width: 97%;
  height: 380px;
  /*background: #977DFF;*/
  overflow-y: auto;
}

.dailyRecordContainer .itemContainer .itemBox {
  width: 100%;
  height: 15%;
  margin-top: 2%;
  cursor: pointer;
  transition: all .5s;
  /*background: lightyellow;*/
}

.dailyRecordContainer .itemContainer .itemBox:hover{
  transform: translate(-2px,-2px);
  box-shadow: 5px 5px 5px #D7D7D7;
  transition: all .5s;
}
</style>
