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

        <div class="g-ticket-card-wrapper">
            <TicketCard />
        </div>

        <div class="m-class-type-wrapper">
            <van-tabs v-model="state.classType" :ellipsis="false">
                <van-tab name="1">
                    <template #title>
                        <div class="m-class-type-item">
                            <h5>经济舱</h5>
                            <p>
                                <span>￥1500</span>起
                            </p>
                        </div>
                    </template>
                </van-tab>
                <van-tab name="2">
                    <template #title>
                        <div class="m-class-type-item">
                            <h5>公务舱/头等舱</h5>
                            <p>
                                <span>￥1500</span>起
                            </p>
                        </div>
                    </template>
                </van-tab>
            </van-tabs>
        </div>

        <div class="m-list">
            <van-row class="m-list-item" v-for="(item, index) in state.list" :key="index">
                <flightCard :item="item" @handlePlaceOrder="handlePlaceOrder"/>
            </van-row>
        </div>
    </div>
</template>

<script setup lang="ts">
import TicketCard from "@/components/TicketCard.vue"
import flightCard from "./components/flightCard.vue"

import { reactive, onMounted } from 'vue'

import {useRoute, useRouter} from "vue-router";
const route = useRoute()
const router = useRouter()

type DState = {
    arriveArea: string,
    arriveAreaText: string,
    departArea: string,
    departAreaText: string,
    classType: string,
    classTypeText: string,
    arriveDate: string,
    arriveDateText: string,
    list: any[]
}

let state:DState = reactive({
    arriveArea: '',
    arriveAreaText: '',
    departArea: '',
    departAreaText: '',
    classType: '',
    classTypeText: '',
    arriveDate: '',
    arriveDateText: '',
    list: [{}, {}, {}, {}, {}, {}]
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
const handlePlaceOrder = () => {
    router.push({
        name: 'PlaceOrder',
        query: {
            arriveAndDepart: state.arriveAndDepart,
            arriveArea: state.arriveArea,
            arriveAreaText: state.arriveAreaText,
            departArea: state.departArea,
            departAreaText: state.departAreaText,
            classType: state.classType,
            classTypeText: state.classTypeText,
            arriveDate: state.arriveDate,
            departDate: state.departDate,
        }
    })
}
</script>

<style scoped lang="scss">
.g-background-blue {
    position: fixed;
    top: 92px;
    z-index: -99;
}

.g-ticket-card-wrapper {
    background-color: #ffffff;
    padding: 30px;
    margin: 16px 20px;
    border-radius: 12px;
}

.m-class-type-wrapper {
    margin: 0 20px;
    border-radius: 12px;
    overflow: hidden;
    :deep(.van-tabs__wrap) {
        height: 130px;
    }
    .m-class-type-item {
        text-align: center;
        h5 {
            margin: 14px 0 10px;
            font-size: 32px;
        }
        p {
            font-size: 22px;
            font-weight: 400;
            color: #666666;
            line-height: 32px;
            span {
                color: #fa7317;
            }
        }
    }
}

.m-list {
    padding-bottom: 40px;
    .m-list-item {
        padding: 30px;
        margin: 16px 20px;
        background: #ffffff;
        border-radius: 12px;
    }
}
</style>