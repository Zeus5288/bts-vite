<template>
    <div class="g-wrapper">
        <van-nav-bar
            :safe-area-inset-top="true"
            fixed
            :title="state.arriveAreaText + '-' + state.departAreaText"
            left-arrow
            @click-left="$router.back()"
        ></van-nav-bar>

        <div class="g-background-blue"></div>

        <div class="m-week-select-wrapper">
            <weekSelect @arriveCalendarShow="arriveCalendarShow" />
        </div>

        <flightList @handleTicketDetail="handleTicketDetail"/>

        <div class="m-ticket-filter-wrapper">
            <van-row class="m-ticket-filter">
                <van-col span="8">筛选</van-col>
                <van-col span="8" :class="state.sortTime != 0 ? 'm-sort-active' : ''">
                    出发&nbsp;&nbsp;
                    <span>{{ state.sortTime == 2 ? '早' : '晚' }}</span>-
                    <span>{{ state.sortTime == 2 ? '晚' : '早' }}</span>
                </van-col>
                <van-col span="8" :class="state.sortPrice != 0 ? 'm-sort-active' : ''">
                    价格&nbsp;&nbsp;
                    <span>{{ state.sortPrice == 2 ? '低' : '高' }}</span>-
                    <span>{{ state.sortTime == 2 ? '高' : '低' }}</span>
                </van-col>
            </van-row>
        </div>

        <van-calendar
            color="#1677FF"
            v-model="state.arriveCalendar"
            @confirm="arriveDatePickConfirm"
            @cancel="arriveDatePickCancel"
        />
    </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'

import weekSelect from "./components/weekSelect.vue";
import flightList from "./components/flightList.vue";

import {useRoute} from "vue-router";
const route = useRoute()

let state = reactive({
    arriveArea: '',
    arriveAreaText: '',
    departArea: '',
    departAreaText: '',
    classType: '',
    classTypeText: '',
    arriveDate: '',
    arriveDateText: '',
    sortTime: 0,
    sortPrice: 0,
    arriveCalendar: false
})

onMounted(() => {
    initPage()
})

const initPage = () => {
    state.arriveArea = route.query.arriveArea
    state.arriveAreaText = route.query.arriveAreaText
    state.departArea = route.query.departArea
    state.departAreaText = route.query.departAreaText
    state.classType = route.query.classType
    state.classTypeText = route.query.classTypeText
    state.arriveDate = route.query.arriveDate
    state.arriveDateText = route.query.arriveDateText
}
const arriveCalendarShow = () => {
    state.arriveCalendar = true
}
// 出发日选择确定
const arriveDatePickConfirm = (day) => {
    [state.arriveDate, state.arriveDateText] = setDateTime(day)
    state.arriveCalendar = false
}
// 出发日选择取消
const arriveDatePickCancel = () => {
    state.arriveCalendar = false
}
const setDateTime = (dataTime) => {
    let year = dataTime.getFullYear();
    let month = dataTime.getMonth() + 1;
    let day = dataTime.getDate();
    if (month >= 1 && month <= 9) {
        month = `0${month}`;
    }
    if (day >= 1 && day <= 9) {
        day = `0${day}`;
    }
    return [`${year}-${month}-${day}`, `${month}月${day}日`]
}
const getWeekDays = () => {

}
const handleTicketDetail = () => {
    state.$router.push({
        path: `/ticket-detail?arriveAndDepart=${state.arriveAndDepart}`
            + `&arriveArea=${state.arriveArea}&arriveAreaText=${state.arriveAreaText}`
            + `&departArea=${state.departArea}&departAreaText=${state.departAreaText}`
            + `&classType=${state.classType}&arriveDate=${state.arriveDate}&departDate=${state.departDate}`
    });
}


</script>

<style scoped lang="scss">
.g-wrapper {
    padding-top: 200px;
}

.m-week-select-wrapper {
    width: 100%;
    background: linear-gradient(180deg, #1677ff 0%, rgb(49, 119, 255) 100%);
    position: fixed;
    top: 92px;
    z-index: 99;
}

.g-background-blue {
    position: fixed;
    top: 200px;
    z-index: -99;
}

.m-ticket-filter-wrapper {
    width: 100%;
    position: fixed;
    bottom: 60px;
    z-index: 900;
}
.m-ticket-filter {
    margin: 0 20px;
    padding: 20px;
    border-radius: 999px;
    background: #ffffff;
    font-size: 26px;
    font-weight: 400;
    color: #666666;
    box-shadow: 0px 0px 20px 2px rgba(153, 153, 153, 0.5);
    .van-col {
        text-align: center;
        line-height: 50px;
        border-right: 1px solid #eeeeee;
    }
    .van-col:last-child {
        border-right: 0;
    }
}
</style>