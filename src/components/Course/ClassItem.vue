<template>
  <div class="classItemContainer">
    <div class="imageContainer">
      <img :src="classData.classImage" alt="">
    </div>
    <div>{{classData.className}}</div>
    <div>{{classData.classTerm}}</div>
    <div>{{classData.classSubject}}</div>
  </div>
</template>

<script>
export default {
  name: "ClassItem",
  props:['classData']
}
</script>

<style scoped>
.classItemContainer{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 70%;
  font-weight: lighter;
  color: #7E7E7E;
}

.classItemContainer div:nth-child(2){
  font-size: 110%;
  font-weight: bold;
  color: #000000;
  margin-bottom: 3px;
}
.classItemContainer .imageContainer{
  width: 55px;
  height: 55px;
  border-radius: 100%;
  margin-bottom: 8px;
}
img{
  width: 100%;
  height: 100%;
  border-radius: 100%;
}
</style>
