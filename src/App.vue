<template>
  <div id="app">
    <el-container>
      <el-aside width="21%">
        <MainAside/>
      </el-aside>
      <el-container>
        <el-header height='9%'>
          <div class="headContainer">
            <MainHeader/>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>
import MainAside from "./components/Home/MainAside";
import MainHeader from "./components/Home/MainHeader";
export default {
  name: 'App',
  components: {MainAside,MainHeader},

}
</script>

<style>
html, body, #app, .el-container {
  height: 100%;
  margin: 0;
  padding: 0;
}

.el-aside {
  height: 100%;
  border-right: 1px solid #d7d7d7;
}

.el-header {
  padding: 0;
}

.headContainer{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.el-main {
  position: relative;
  padding: 0;
  background-color: #F3F5F9;
}
</style>
