<template>
    <div class="m-trip-wrapper">
        <h4>
            5月26日  北京-天津
        </h4>

        <div class="m-trip-content">
            <div class="m-content">
                <div class="m-nav">
                    <span class="m-nav-time">05:09</span>
                    北京 大兴机场
                </div>
                <div :class="showMore ? 'm-content-text' : 'm-content-text m-content-text-hidden'">
                    <span class="m-text-time">2小时</span>
                    东航MU8471 波音737（中）经济舱 早餐
                </div>
            </div>
            <div class="m-content">
                <div class="m-nav">
                    <span class="m-nav-time">05:09</span>
                    天津滨海机场T2
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showMore = ref(true)

</script>

<style lang="scss" scoped>

.m-trip-wrapper {
    background-color: #ffffff;
    padding: 30px;
    margin-top: 20px;
    h4 {
        font-size: 32px;
        font-weight: bolder;
        color: #333333;
        line-height: 60px;
    }
}

.m-content {
    margin-left: 140px;
    position: relative;
    .m-nav {
        font-size: 34px;
        font-weight: 500;
        color: #333333;
        line-height: 90px;
        position: relative;
        &-time {
            position: absolute;
            left: -140px;
        }
    }
    .m-content-text {
        padding: 10px;
        font-size: 30px;
        font-weight: 400;
        color: #666666;
        line-height: 42px;
        background: #eeeeee;
        position: relative;
        .m-text-time {
            position: absolute;
            left: -140px;
            top: 50%;
            margin-top: -20px;
        }
    }
    .m-content-text-hidden {
        max-height: 140px;
        overflow: hidden;
    }

    &::before {
        content: '';
        display: block;
        width: 1px;
        height: 100%;
        background-color: #1677FF;
        position: absolute;
        top: 0;
        left: -32px;
    }
    &::after {
        content: '';
        display: block;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: #1677FF;
        position: absolute;
        top: 34px;
        left: -40px;
    }
}
.m-content:first-child {
    &::before {
        content: '';
        display: block;
        width: 1px;
        height: calc(100% - 40px);
        background-color: #1677FF;
        position: absolute;
        top: 40px;
        left: -32px;
    }
}
.m-content:last-child {
    &::before {
        content: '';
        display: block;
        width: 1px;
        height: 40px;
        background-color: #1677FF;
        position: absolute;
        top: 0;
        left: -32px;
    }
}
</style>