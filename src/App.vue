<template>
  <div id="app">
    <div class="g-phoneX-terminator"></div>
    <div class="g-phoneX-fixed-terminator"></div>

    <router-view></router-view>
  </div>
  
</template>

<script setup lang="ts">

</script>

<style lang="scss" >
html {
  body {
    height: 99%;
    background: #f5f5f5;
    #app {
      height: 100%;
      .g-phoneX-terminator {
        width: 100vw;
        height: 3rem;
        position: absolute;
        top: -3rem;
        background: #1677FF;
        z-index: 9999;
      }
      .g-phoneX-fixed-terminator {
        width: 100vw;
        height: 3rem;
        position: fixed;
        top: -3rem;
        background: #1677FF;
        z-index: 9999;
      }
    }
  }
}
.van-field__label {
  flex: 1 0 30px ;
}
.loading {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  padding-top: 8.333333rem;
  z-index: 999999999;
}
</style>
