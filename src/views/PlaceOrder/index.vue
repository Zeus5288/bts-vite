<template>
    <div class="g-wrapper">
        <van-nav-bar
            :safe-area-inset-top="true"
            fixed
            :title="state.arriveAreaText + '-' + state.departAreaText"
            left-arrow
            @click-left="router.back()"
        ></van-nav-bar>

        <div class="g-background-blue"></div>

        <!--        机票基本信息-->
        <div class="m-ticket-info m-wrapper">
            <div class="m-info">
                <div class="m-info-content">
                    <span class="g-icon-single">单程</span>
                    {{ state.arriveAreaText }}
                    {{ state.departAreaText }}
                    {{ state.arriveDate }}
                </div>
                <div class="u-detail-icon" @click="state.showTicketDetail = true">
                    航班详情&nbsp;&nbsp;
                    <van-icon name="arrow-down" />
                </div>
            </div>
            <p class="m-tips">成人票¥1920 + 机建燃油¥50</p>
        </div>

        <!--        乘机人管理-->
        <div class="m-passengers-info m-wrapper">
            <h3>{{ passengersListSelect.length == 0 ? '选择乘机人' : `已选：${passengersListSelect.length}人` }}</h3>
            <div class="m-passengers-list">
                <contact-list v-model="state.passengersList" />
            </div>
            <van-button
                class="m-passengers-button"
                icon="add-o"
                color="rgba(22, 119, 255, 0.2)"
                block
                :text="state.passengersList.length > 0 ? '更多乘机人' : '新增乘机人'"
                @click="handleToContact"
            />
        </div>

        <!--        保险管理-->
        <div class="m-insurance-info m-wrapper">
            <h3>选择保险</h3>
            <van-row class="m-insurance-info-row" gutter="10">
                <van-col
                    class="m-insurance-item"
                    span="6"
                    v-for="(item, index) in insuranceTypes"
                    :key="index"
                    @click="handleInsurance(item, index)"
                >
                    <div
                        class="m-insurance-item-inner"
                        :class="state.insuranceSelected == item.value ? 'm-selected' : ''"
                    >
                        <div class="m-insurance-item-info">
                            <p>{{ item.name }}</p>
                            <p v-if="item.price">￥{{ item.price }}人</p>
                        </div>

                        <div class="m-radio-wrapper">
                            <div class="m-radio"></div>
                        </div>
                    </div>
                </van-col>
            </van-row>
        </div>

        <!--        联系人-->
        <van-cell-group class="m-order-cell">
            <van-cell title="联系人" value="张馨心 13299998888" />
            <van-cell title="购票说明" value="出差订票" />
        </van-cell-group>

        <div class="m-place-order" :style="state.showPriceDetail ? 'z-index:999' : ''">
            <div class="m-place-order-price">
                <p>订单合计：</p>
                <div class="m-price">
                    <span>￥</span>
                    {{ state.orderPrice ? state.orderPrice : '——' }}
                </div>
            </div>
            <div class="m-place-order-operation">
                <div class="u-detail-icon" @click="state.showPriceDetail = true">费用明细</div>
                <van-button type="primary" @click="handleOrder">确认订单</van-button>
            </div>
        </div>

        <!--        航班详情-->
        <van-overlay :show="state.showTicketDetail">
            <div class="m-overlay-ticket">
                <ticket-card />
                <ticket-card />
                <div class="u-detail-icon" @click="state.showTicketDetail = false">
                    收起&nbsp;&nbsp;
                    <van-icon name="arrow-up" />
                </div>
            </div>
        </van-overlay>

        <!--        费用详情-->
        <van-overlay :show="state.showPriceDetail">
            <div class="m-overlay-price">
                <div>
                    <span class="m-overlay-close" @click="showPriceDetail = false">关闭</span>
                </div>
                <p v-for="(item, index) in costDetailList" :key="index">
                    <span>{{ item.name }}</span>
                    <span>￥{{ item.cost }} * {{ item.num }}人</span>
                </p>
            </div>
        </van-overlay>

        <!--        提交成功-->
        <van-overlay :show="state.showSuccess" @click="state.showSuccess = false">
            <div class="m-overlay-success" @click.stop>
                <div class="m-icon-wrapper">
                    <van-icon name="checked" color="#1679FF" size="60" />
                </div>
                <h3>提交成功</h3>
                <p>订单号为：1193394004903</p>
                <p>您的订单已提交成功，请耐心等待！</p>
                <van-button type="primary" block @click="handleCheckOrder">查看订单</van-button>
            </div>
        </van-overlay>
    </div>
</template>

<script setup lang="ts">
import contactList from "@/components/ContactList.vue"
import ticketCard from "@/components/TicketCard.vue"

import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from "vue-router";
const route = useRoute()
const router = useRouter()

const passengersListSelect = computed(() => {
    return state.passengersList.filter(item => { return item.checked })
})

type DState = {
    showTicketDetail: boolean,
    showPriceDetail: boolean,
    showSuccess: boolean,
    orderPrice: number,
    arriveArea: string,
    arriveAreaText: string,
    departArea: string,
    departAreaText: string,
    classType: string,
    classTypeText: string,
    arriveDate: string,
    arriveDateText: string,
    passengersList: any[],
    passengersSelected: any[],
    insuranceSelected: string,
}

let state: DState = reactive({
    showTicketDetail: false,
    showPriceDetail: false,
    showSuccess: false,
    orderPrice: 1900,
    arriveArea: '',
    arriveAreaText: '',
    departArea: '',
    departAreaText: '',
    classType: '',
    classTypeText: '',
    arriveDate: '',
    arriveDateText: '',
    passengersList: [{ checked: true, name: '言冰云', idCard: '73903247920922' }, { checked: false, name: '费介', idCard: '34352542346235' }],
    passengersSelected: [],
    insuranceSelected: '0',
})

const insuranceTypes = [
    { name: '无保障', price: '', value: '0' },
    { name: '延误险', price: '40', value: '1' },
    { name: '延误险', price: '80', value: '2' },
    { name: '延误险', price: '120', value: '3' },
]

const costDetailList = [
    { name: '机票价', cost: '345', num: 2 },
    { name: '机票价', cost: '345', num: 2 },
    { name: '机票价', cost: '345', num: 2 },
    { name: '机票价', cost: '345', num: 2 },
]

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
// 选择保险类型
const handleInsurance = (item, index) => {
    state.insuranceSelected = item.value
}
// 下单
const handleOrder = () => {
    state.showSuccess = true
}
// 查看订单
const handleCheckOrder = () => {
    router.push({
        path: '/orders'
    })
}
// 跳转联系人维护
const handleToContact = () => {
    router.push({
        path: '/contact'
    })
}

</script>


<style scoped lang="scss">
.g-wrapper {
    padding-bottom: 140px;
}
.m-wrapper {
    margin: 20px;
    padding: 30px;
    background-color: #ffffff;
    border-radius: 12px;
}

.g-background-blue {
    position: fixed;
    top: 92px;
    z-index: -99;
}

.u-detail-icon {
    font-size: 22px;
    font-weight: 400;
    color: #1677ff;
    line-height: 32px;
}

.m-ticket-info {
    .m-info {
        margin-bottom: 30px;
        display: flex;
        justify-content: space-between;
        &-content {
            font-size: 32px;
            font-weight: 600;
            color: #333333;
            line-height: 44px;
        }
    }
    .m-tips {
        font-size: 26px;
        font-weight: 400;
        color: #666666;
        line-height: 36px;
    }
}

.m-passengers-info {
    h3 {
        font-size: 32px;
        font-weight: 600;
        color: #333333;
        line-height: 44px;
    }
    .m-passengers-list {
        margin: 40px 0;
    }
    .m-passengers-button {
        .van-button__content {
            color: #1677ff;
            font-weight: bolder;
        }
    }
}

.m-insurance-info {
    h3 {
        font-size: 32px;
        font-weight: 600;
        color: #333333;
        line-height: 44px;
    }

    .m-insurance-info-row {
        margin: 30px 0 0;
    }

    .m-insurance-item {
        display: flex;
        &-inner {
            width: 100%;
            padding: 30px 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-radius: 8px;
            background-color: #f5f5f5;
            border: 1px solid #f5f5f5;
        }
        p {
            margin: 10px 0;
            font-size: 26px;
            font-weight: 400;
            color: #333333;
            line-height: 36px;
            text-align: center;
        }
        .m-radio-wrapper {
            margin-top: 10px;
            display: flex;
            justify-content: center;
            .m-radio {
                width: 32px;
                height: 32px;
                border: 1px solid #1677ff;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }

    .m-selected {
        border: 1px solid #1677ff;
        background-color: rgba(22, 119, 255, 0.08);
        .m-radio:after {
            content: "";
            display: block;
            width: 16px;
            height: 16px;
            background-color: #1677ff;
            border-radius: 50%;
        }
    }
}

.m-order-cell {
    margin: 20px;
    border-radius: 12px;
    overflow: hidden;
    .van-cell {
        padding: 32px 32px;
    }
    .van-cell__title {
        font-size: 32px;
        font-weight: bolder;
        color: #333333;
        line-height: 44px;
    }
}

.m-place-order {
    width: 100%;
    height: 130px;
    padding: 20px 40px;
    background-color: #ffffff;
    box-shadow: 0px 0px 20px 2px rgba(153, 153, 153, 0.5);
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    &-price {
        p {
            font-size: 22px;
            font-weight: 400;
            color: #999999;
            line-height: 32px;
        }
        .m-price {
            font-size: 54px;
            font-weight: 600;
            color: #fa7317;
            line-height: 76px;
            span {
                font-size: 28px;
            }
        }
    }
    &-operation {
        display: flex;
        align-items: center;
        .van-button {
            margin-left: 20px;
            padding: 0 40px;
            border-radius: 12px;
            height: 80px;
            .van-button__text {
                font-size: 36px;
                line-height: 80px;
            }
        }
    }
}

.m-overlay-price {
    width: 100%;
    padding: 20px 40px;
    background-color: #ffffff;
    position: fixed;
    bottom: 130px;
    & > div {
        margin: 20px;
        font-size: 32px;
        font-weight: bolder;
        color: #1679ff;
        text-align: right;
    }
    & > p {
        display: flex;
        justify-content: space-between;
        font-size: 32px;
        font-weight: 400;
        color: #222222;
        line-height: 100px;
    }
}

.m-overlay-ticket {
    border-radius: 12px;
    width: calc(100% - 40px);
    margin: 0 20px;
    padding: 20px 30px 40px;
    background-color: #ffffff;
    position: fixed;
    top: 100px;
    & > div {
        padding: 20px 0;
    }

    .u-detail-icon {
        position: absolute;
        bottom: 20px;
        right: 40px;
    }
}

.m-overlay-success {
    border-radius: 12px;
    width: calc(100% - 100px);
    margin: 0 50px;
    padding: 40px 40px 60px;
    background-color: #ffffff;
    position: fixed;
    top: 360px;

    .m-icon-wrapper {
        text-align: center;
    }

    h3 {
        margin: 10px 0 30px;
        text-align: center;
        font-size: 36px;
        font-weight: bolder;
        color: #1679ff;
    }

    p {
        font-size: 28px;
        font-weight: 400;
        color: #666666;
        line-height: 60px;
    }

    .van-button {
        margin-top: 40px;
        padding: 0 40px;
        border-radius: 12px;
        height: 80px;
        .van-button__text {
            font-size: 36px;
            line-height: 80px;
        }
    }
}
</style>
