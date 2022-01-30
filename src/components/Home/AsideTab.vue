<template>
  <div :class="['container',tab.selected ? 'selectedBox' : '']">
    <img  :src="tab.selected ? tab.selectedIcon : tab.icon" alt="">
    <div>{{tab.tabName}}</div>
  </div>
</template>

<script>
export default {
  name: "AsideTab",
  props:['tab']
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  background-position: 50% 50%;
  transition: all .5s;
}
.container img{
  width: 18px;
  height: 18px;
  margin-left: 5%;
  margin-right: 3%;
}
.selectedBox{
  background-color: #E9E6FF;
  color: #6153C5;
  box-shadow: -2px 2px 12px #d7d7d7;
  background-position: 50% 100px;
  transition: all .5s;
}
</style>
