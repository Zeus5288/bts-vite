<template>
  <van-pull-refresh v-model="state.pullLoading" @refresh="onRefresh">
    <!-- 列表 -->
    <van-list
      v-if="state.list && state.list.length > 0"
      v-show="!state.pullLoading"
      v-model="state.listLoading"
      :finished="state.listFinished"
      finished-text="没有更多了"
      @load="query"
    >
      <div class="m-list">
        <van-row class="m-list-item" v-for="(item, index) in state.list" :key="index" @click="handleToDetail">
          <div class="m-list-item__header">
            <div>订单号<span>1112939404</span></div>
          </div>
          <div class="m-list-item__body">
            <h3><span>北京-天津</span></h3>
            <p>05-06 08:09 至 05-05 05：09</p>
            <p>东航MU897/大兴一号航站楼出发</p>
          </div>
        </van-row>
      </div>
    </van-list>
    <Empty v-if="!state.pullLoading && (!state.list || state.list.length == 0)" tipText="暂无" />
  </van-pull-refresh>
</template>

<script setup lang="ts">
import Empty from "@/components/Empty.vue";
import { defineProps, reactive, onMounted } from "vue";
import {useRouter} from "vue-router";
const router = useRouter()

let state = reactive({
  pullLoading: false,
  listLoading: false,
  listFinished: false,
  list: [],
  pageParams: {
    pageNum: 1,
    pageSize: 10
  }
});

onMounted(() => {
  query();
});

const onRefresh = () => {
  state.list = [];
  state.listFinished = false;
  state.pageParams.pageNum = 1;
  state.listLoading = true;

  const data = { isAchievement: 0 };

  setTimeout(() => {
    state.list = [{ status: 1 }, { status: 1 }, { status: 2 }, { status: 1 }, { status: 2 }, { status: 1 }];

    if (state.list.length >= 30) {
      state.listFinished = true;
    }

    state.pullLoading = false;
    state.listLoading = false;
  }, 500);
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
};
const handleToDetail = item => {
  router.push({
      name: 'TripDetail'
  })
};
const query = () => {
  const data = { isAchievement: 0 };

  setTimeout(() => {
    state.list = [...state.list, ...[{ status: 1 }, { status: 2 }, { status: 2 }, { status: 1 }, { status: 1 }, { status: 1 }]];

    if (state.list.length >= 20) {
      state.listFinished = true;
    }

    state.pullLoading = false;
    state.listLoading = false;
  }, 1000);

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
};
</script>

<style scoped lang="scss">
.m-list-item {
  margin: 20px;
  padding: 0 30px;
  background-color: #ffffff;
  border-radius: 12px;

  &__header {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 32px;
    font-weight: bolder;
    color: #333333;
    line-height: 44px;
    span {
      color: #666666;
      font-weight: 400;
    }
    & > div:first-child > span {
      margin-left: 20px;
    }
  }
  &__body {
    width: 100%;
    border-top: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
    padding: 20px 0 20px 50px;
    h3 {
      font-size: 32px;
      font-weight: bolder;
      color: #333333;
      line-height: 44px;
      display: flex;
      justify-content: space-between;
      .u-status {
        color: #666666;
        font-weight: 400;
      }
    }
    p {
      margin: 16px 0;
      font-size: 30px;
      font-weight: 400;
      color: #666666;
      line-height: 42px;
    }
  }
}
</style>
