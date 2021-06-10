<template>
  <div class="mainview">
    <van-nav-bar :safe-area-inset-top="true" fixed title="商旅平台" left-arrow />

    <router-view class="routerview"></router-view>

    <!-- 底部导航 -->
    <FooterBar />
  </div>
</template>
  
<script setup lang="ts">
import FooterBar from "@/components/FooterBar.vue";

</script>

<style lang="scss" >
.menu-container {
  width: 100%;
  height: 100%;
}

.mainview {
  height: 100%;
  .routerview {
    height: calc(100% - 92px);
  }
}

.footerbar {
  
}
</style>
  