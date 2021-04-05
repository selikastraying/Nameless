<template>
  <!-- <div id="nav"></div> -->
  <router-view />
</template>

<script>
let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`)
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
}

.bg {
  background: linear-gradient(
    35deg,
    rgba(135, 200, 255, 1) 30%,
    rgba(135, 255, 255, 0.8) 60%
  );
}

.panel {
  background-color: rgba(240, 255, 255, 0.5);
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
}
</style>
