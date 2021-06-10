<template>
  <div class="app_background g-wrapper">
    <van-tabs v-model="active" swipeable>
      <van-tab title="未出行">
        <tripList status="51"/>
      </van-tab>
      <van-tab title="已出行">
        <tripList status="52"/>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import tripList from "./components/tripList.vue";
import { ref } from "vue";

const active = ref(1)

</script>

<style scoped lang="scss">
  .g-wrapper {
    &>div {
      padding-bottom: 96px;
    }
  }
  :deep(.van-tabs__wrap) {
    position: fixed !important;
    top: 92px !important;
    width: 100% !important;
    z-index: 999 !important;
  }

  :deep(.van-tabs__content) {
    padding-top: 100px;
  }
</style>