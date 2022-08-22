<template>

  <el-container>
    <el-main>
      <router-view />
    </el-main>
    
  </el-container>
</template>

<script setup>
import { ref } from "vue";

const activeIndex = ref("/");
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.menu-nav {
  display: flex;
  font-weight: 1000;
  justify-content: flex-end;
  gap: 50px;
}

.menu-nav .zombie{
  height: 64px;
  width: 64px;
  
}

</style>
