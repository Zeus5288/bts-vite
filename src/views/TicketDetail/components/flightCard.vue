<template>
  <div class="m-ticket">
    <div class="m-ticket-info">
      <div class="m-ticket-info-price">
        <div class="u-company">携程</div>
        <div class="u-price"><span>￥</span>1900</div>
      </div>
      <p class="m-air-info">经济舱4折 退改¥150起 托运行李额20KG</p>
    </div>
    <div class="m-ticket-operation">
      <div class="u-order" @click="handlePlaceOrder">订</div>
      <span class="u-remaining">剩余1张</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmit } from "vue";

const emit = defineEmit(["handlePlaceOrder"]);

const handlePlaceOrder = () => {
  emit("handlePlaceOrder");
};
</script>

<style scoped lang="scss">
.m-ticket {
  width: 100%;
  display: flex;
  &-info {
    width: calc(100% - 160px);
    flex-grow: 1;
    &-price {
      padding: 10px 0 40px;
      display: flex;
    }
    .u-price {
      margin-left: 20px;
      font-size: 54px;
      font-weight: 500;
      color: #fa7317;
      line-height: 40px;
      span {
        font-size: 28px;
      }
    }
  }
  &-operation {
    width: 160px;
    flex-shrink: 0;
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    .u-order {
      width: 92px;
      height: 72px;
      text-align: center;
      line-height: 72px;
      background-color: #1677ff;
      color: #ffffff;
      border-radius: 8px;
      font-size: 32px;
      font-weight: 500;
    }
    .u-remaining {
      padding: 8px;
      background: rgba(250, 117, 24, 0.09);
      border-radius: 4px;
      font-size: 20px;
      font-weight: 400;
      color: #fa7619;
      line-height: 28px;
    }
  }
}

.m-time-place {
  display: flex;
  &-item {
    color: #333333;
    h3 {
      font-size: 46px;
      font-weight: 600;
      line-height: 64px;
    }
    h4 {
      font-size: 26px;
      font-weight: 400;
      line-height: 36px;
      margin: 12px 0;
    }
  }
  .m-arrow {
    width: 100px;
    text-align: center;
  }
}

.m-air-info {
  font-size: 26px;
  font-weight: 400;
  color: #999999;
  line-height: 40px;
}
</style>
