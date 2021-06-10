<template>
    <div class="g-wrapper">
        <van-nav-bar
            :safe-area-inset-top="true"
            fixed
            title="未出行"
            left-arrow
            @click-left="$router.back()"
        >
        </van-nav-bar>

        <h3 class="m-header">
            订单号 1832930834
            <span>未出行</span>
        </h3>

        <TripInfo />

        <TripUser />

    </div>
</template>

<script setup lang="ts">

import TripInfo from "@/components/TripInfo.vue";
import TripUser from "@/components/TripUser.vue";

</script>

<style lang="scss" scoped>
.m-header {
    padding: 0 30px;
    font-size: 34px;
    font-weight: bolder;
    color: #333333;
    line-height: 108px;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    span {
        font-weight: normal;
        color: #1677FF;
    }
}
</style>