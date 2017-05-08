<template>
  <div id="app">
    <router-view name="top" class="top"></router-view>
    <router-view name="left" class="left"></router-view>
    <router-view name="right" class="right"></router-view>
  </div>
</template>

<script>



export default {
  name: 'app',
}
</script>

<style>
*{
  padding:0;
  margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.top{
  height: 15%;
  width: 100%;
}
.left{
  height: 85%;
  width: 200px;
  float: left;
}
.right{
  
  height: 85%;
  width: 500px;
  float: left;
}
body {
  margin: 0;
  padding: 0;
  border: 0;
  height: 100%;
  max-height: 100%;
  position: relative;
}
</style>
