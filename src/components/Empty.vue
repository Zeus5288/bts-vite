<template>
  <!-- 未查到数据 -->
  <div class="m-empty-icon">
    <div class="m-img-wrapper">
      <img :src="iconEmpty" alt />
    </div>
    <p class="m-tip-text">{{tipText}}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

import iconEmpty from "@/assets/img/empty.png"

defineProps({
    tipText: {
        type: String,
        default: '暂无数据'
    }
})
</script>

<style scoped lang="scss">
.m-empty-icon {
  padding-top: 100px;
  .m-img-wrapper {
    display: flex;
    justify-content: center;
    img {
      width: 480px;
      height: 356px;
    }
  }
  .m-tip-text {
    text-align: center;
    margin-top: -50px;
    font-size: 28px;
    color: #999;
  }
}
</style>
