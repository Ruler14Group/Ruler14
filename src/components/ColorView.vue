<template>

    <div class="mainBody"></div>

</template>

<style scoped>
.mainBody {
  z-index: -1;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-image: linear-gradient(90deg, rgba(15, 109, 109, 0.178), rgb(204, 161, 42));
  background-size: 400%;
  animation: myanimation 20s infinite;
}

@keyframes myanimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>