<template>
    <div class="m-week-select">
        <div class="m-week-scroll">
            <div
                class="m-scroll-item"
                :class="state.selectIndex == index ? 'm-active' : ''"
                v-for="(item,index) in state.dateList"
                :key="index"
                @click="selectDate(item, index)"
            >
                <p>{{ item.day }}</p>
                <p>{{ item.week }}</p>
            </div>
        </div>
        <div class="m-calendar-select">
            <van-icon :name="iconCalendar" size="30px" @click="handleCalendarShow" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmit, reactive, onMounted } from 'vue'

import iconCalendar from "@/assets/img/icon-calendar.png";

const emit = defineEmit(['arriveCalendarShow'])

type DState = {
    selectIndex: number,
    dateList: any[]
}

let state: DState = reactive({
    selectIndex: 1,
    dateList: [
        { day: '05-26', week: '周五' },
        { day: '05-26', week: '周五' },
        { day: '05-26', week: '周五' },
        { day: '05-26', week: '周五' },
        { day: '05-26', week: '周五' },
        { day: '05-26', week: '周五' },
        { day: '05-26', week: '周五' },
        { day: '05-26', week: '周五' }
    ]
})

const handleCalendarShow = () => {
    emit('arriveCalendarShow')
}
const selectDate = (item, index) => {
    state.selectIndex = index
}

</script>

<style scoped lang="scss">
.m-week-select {
    position: relative;
}

.m-week-scroll {
    margin: 0 90px 0 20px;
    display: flex;
    overflow-x: auto;
    .m-scroll-item {
        margin: 10px 20px;
        padding: 10px 20px;
        border-radius: 12px;
        font-size: 28px;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 40px;
        text-align: center;
        position: relative;
        p {
            white-space:nowrap;
        }
        &:after {
            content: '';
            display: block;
            width: 1px;
            height: 50px;
            background-color: #eeeeee;
            position: absolute;
            right: -20px;
            top: 20px;
        }
    }
    .m-active {
        background-color: #ffffff;
        color: #1677FF;
    }
}

.m-calendar-select {
    width: 100px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1677FF;
    box-shadow: -8px 0px 18px 0px rgba(0, 89, 214, 0.55);
    position: absolute;
    top: 0;
    right: 0;
}
</style>