<template>
    <van-pull-refresh v-model="state.pullLoading" @refresh="onRefresh">
        <!-- 列表 -->
        <van-list
            v-show="!state.pullLoading"
            v-model="state.listLoading"
            :finished="state.listFinished"
            finished-text="没有更多了"
            @load="query"
        >
            <div class="m-list">
                <van-row
                    class="m-list-item"
                    v-for="(item, index) in state.list"
                    :key="index"
                    @click="handleToDetails(item)"
                >
                    <flightCard />
                </van-row>
            </div>
        </van-list>
    </van-pull-refresh>
</template>

<script setup lang="ts">
import flightCard from "./flightCard.vue";
import { defineProps, defineEmit, reactive } from "vue";

const emit = defineEmit(['handleTicketDetail'])

let state = reactive({
    pullLoading: false,
    listLoading: false,
    listFinished: false,
    list: [],
    pageParams: {
        pageNum: 1,
        pageSize: 10
    }
})

const onRefresh = () => {
    state.list = []
    state.listFinished = false
    state.pageParams.pageNum = 1
    state.listLoading = true

    const data = { isAchievement: 0 }

    setTimeout(() => {
        state.list = [{ name: '携程' }, { name: '携程' }, { name: '携程' }, { name: '携程' }, { name: '携程' }, { name: '携程' }]

        if (state.list.length >= 30) {
            state.listFinished = true
        }

        state.pullLoading = false
        state.listLoading = false

    }, 500)
    // projectList(data, state.pageParams).then(res => {
    //     if (res.code == '200') {
    //         state.pageParams.pageNum += 1
    //         state.list = res.data.rows
    //         if (state.list.length >= res.data.total) {
    //             state.listFinished = true
    //         }
    //     }
    //     state.pullLoading = false
    //     state.listLoading = false
    // })
}
const handleToDetails = (item) => {
    emit('handleTicketDetail', item)
}
const query = () => {
    const data = { isAchievement: 0 }

    setTimeout(() => {
        state.list = [...state.list, ...[{ name: '携程' }, { name: '携程' }, { name: '携程' }, { name: '携程' }, { name: '携程' }, { name: '携程' }]]

        if (state.list.length >= 20) {
            state.listFinished = true
        }

        state.pullLoading = false
        state.listLoading = false
    }, 1000)

    // projectList(data, state.pageParams).then(res => {
    //     if (res.code == '200') {
    //         state.pageParams.pageNum += 1
    //         state.list = [...state.list, ...res.data.rows]
    //         if (state.list.length >= res.data.total) {
    //             state.listFinished = true
    //         }
    //     }
    //     state.pullLoading = false
    //     state.listLoading = false
    // })
}

</script>


<style scoped lang="scss">
.m-list-item {
    padding: 30px;
    margin: 16px 20px;
    background: #ffffff;
    border-radius: 12px;
}

:deep(.van-pull-refresh__head) {
    color: #ffffff !important;
    .van-loading {
        color: #ffffff !important;
    }
    .van-loading__text {
        color: #ffffff !important;
    }
}

.m-ticket {
    width: 100%;
    display: flex;
    &-info {
        width: calc(100% - 200px);
        flex-grow: 1;
    }
    &-price {
        width: 200px;
        flex-shrink: 0;
        flex-grow: 0;
        text-align: right;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
            font-size: 46px;
            font-weight: 600;
            color: #fa7317;
            line-height: 40px;
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