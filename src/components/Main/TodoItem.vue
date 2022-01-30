<template>
  <div class="todoItemContainer">
    <div class="imageContainer">
          <img :src="todoData.todoImage" alt="">
    </div>
    <div class="contentContainer">
      <div class="todoItemTitleContainer">
        <div>{{todoData.todoTitle}}</div>
        <div>{{todoData.todoContent}}</div>
      </div>
      <div class="imageContainer">
        <img :src="require('../../assets/icon/expand.png')" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props:['todoData']
}
</script>

<style scoped>
.todoItemContainer{
  width: 100%;
  height: 100%;
  /*background: #6153C5;*/
  display: flex;
  align-items: center;
}
/*图片*/
.todoItemContainer .imageContainer{
  width: 20%;
  height: 85%;
  /*background: #2CCD89;*/
}
.todoItemContainer .imageContainer img{
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: fill;
}

/*文字*/
.todoItemContainer .contentContainer{
  width: 80%;
  height: 100%;
  margin-left: 10px;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /*background: #61A5D9;*/
}
.todoItemTitleContainer{
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.todoItemTitleContainer div:nth-child(1){
  font-size: 90%;
  font-weight: bold;
  color: #000000;
}
.todoItemTitleContainer div:nth-child(2){
  font-size: 70%;
}

.todoItemContainer .contentContainer .imageContainer{
  width: 15px;
  height: 15px;
  /*background: #0542A8;*/
  display: flex;
  justify-content: center;
  align-items: center;
}
.todoItemContainer .contentContainer .imageContainer img{
  width: 100%;
  height: 100%;
}
</style>
