<template>
  <div class="us">
    <h1
      data-aos="fade"
      data-aos-delay="200"
      data-aos-duration="1000"
      style="font-size: 58px; color: #cfd3dc"
    >
      部分人员
    </h1>

    <div class="cards">
      <div class="card">
        <div class="photo">
          <img src="http://q1.qlogo.cn/g?b=qq&nk=2318460070&s=640" alt="" />
        </div>
        <h1>酷晨</h1>
        <h2>逆天组长</h2>
        <p>在学习以至于放养制作组</p>
      </div>

      <div class="card">
        <div class="photo">
          <img src="http://q1.qlogo.cn/g?b=qq&nk=2628769112&s=640" alt="" />
        </div>
        <h1>猫酱</h1>
        <h2>灵感</h2>
        <p>是数一数二的__</p>
      </div>

      <div class="card">
        <div class="photo">
          <img src="http://q1.qlogo.cn/g?b=qq&nk=3274460058&s=640" alt="" />
        </div>
        <h1>Zn</h1>
        <h2>导演</h2>
        <p>我不好说</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>

<style scoped>
.card {
  position: relative;
  width: 300px;
  height: 450px;
  margin: 20px;
  background-color: #758a99;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  flex-shrink: 0;
}

.card .photo img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: block;
}

.card .photo {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 0%;
  overflow: hidden;
  transition: 0.5s;
}

.card:hover .photo {
  top: 30px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
}

.card .photo::before{
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom,Transparent 50%,
  #222 );
}

.card h1{
  position: absolute;
  top: 370px;
  transition: 0.5s;
}

.card:hover h1{
  top: 150px;
}

.card h2{
  margin-top: 220px;
  width: 80%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
}

.card p{
  width: 90%;
  text-indent: 32px;
  font-size: 16px;
  margin-bottom: 15px;
  line-height: 30px;
}

.us {
  background-color: #213d5b;
  height: 100vh;
  padding: 60px 0 60px 0;
}

.cards {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>