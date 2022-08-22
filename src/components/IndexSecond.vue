<template>
  <div class="us">
    <h1
      data-aos="slide-up"
      data-aos-delay="200"
      data-aos-duration="1000"
      style="font-size: 58px; color: #cfd3dc"
    >
      我们有什么？
    </h1>

    <el-row
      data-aos="slide-up"
      data-aos-delay="200"
      data-aos-duration="1000"
      class="row-bg"
      justify="space-evenly"
    >
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }">
          <svg
            class="wehavesvg"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            data-v-78e17ca8=""
          >
            <path
              fill="currentColor"
              d="M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z"
            ></path>
          </svg>
          <div style="padding: 14px">
            <span>良好的游戏环境</span>
            <p>并不那么强大的后勤</p>
            <p>大佬云集，手把手教</p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }">
          <svg
            class="wehavesvg"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            data-v-78e17ca8=""
          >
            <path
              fill="currentColor"
              d="M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"
            ></path>
          </svg>
          <div style="padding: 14px">
            <span>定时备份，无惧崩服</span>
            <p> 进出末地随机崩服增加游戏挑战性 </p>
            <p> 群机器人时不时寄 </p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }">
          <svg
            class="wehavesvg"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            data-v-78e17ca8=""
          >
            <path
              fill="currentColor"
              d="M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64h261.44zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64h453.44zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64h133.44z"
            ></path>
          </svg>
          <div style="padding: 14px">
            <span>配置良好，保证玩家体验</span>
            <p>接入BE云黑，反作弊插件</p>
            <p>低延迟！稳定掉线不连接！</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
</script>

<style scoped>
.us {
  background-color: #58585b;
  height: 100%;
  padding: 60px 0 60px 0;
}

.wehavesvg {
  height: 64px;
  width: 64px;
}
</style>