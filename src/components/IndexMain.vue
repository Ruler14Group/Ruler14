<template>

  <div class="title">
    <h1
      style="font-size: 58px;"
      data-aos="fade"
      data-aos-delay="2000"
      data-aos-duration="1000"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      我们是 Ruler14
    </h1>
    <h3>一个 为实现梦想而奋斗的 Minecraft 制作组</h3>
    <h2 data-aos="slide-up" data-aos-delay="200" data-aos-duration="1000">
      “君若知遥，此道方长。意投则迎，执见亦欢。为卿执杯，逐梦同行。”
    </h2>

    <wave/>
  </div>
</template>

<style scoped>

.TAB {
  font-size: 68px;
}

.title{
  position: relative;
  width: 100%;
  height: 100%;
}

WaveView{
  position: absolute;
  bottom: 0;
}

</style>

<script setup>
import wave from './WaveView.vue';


</script>