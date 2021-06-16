<template>
  <div class="app_background g-wrapper">
    <div class="m-inner">
      <div class="m-tab">
        <div
          class="m-tab-item"
          :class="state.arriveAndDepart == 1 ? 'm-tab-item_active m-arrive_active' : 'm-arrive'"
          @click="state.arriveAndDepart = 1"
        >单程</div>
        <div
          class="m-tab-item"
          :class="state.arriveAndDepart == 2 ? 'm-tab-item_active m-depart_active' : 'm-depart'"
          @click="state.arriveAndDepart = 2"
        >往返</div>
      </div>
      <div class="m-content">
        <div class="m-destination">
          <div class="m-destination-area">{{ state.arriveAreaText }}</div>
          <van-icon
            class="m-destination-toggle"
            :name="iconToggle"
            size="34px"
            @click="toggleArea"
          />
          <div class="m-destination-area">{{ state.departAreaText }}</div>
        </div>

        <div class="m-date">
          <div class="m-date-item" @click="state.arriveCalendar = true">
            <p>出发日</p>
            <div>
              <span class="m-date-time">{{ state.arriveDateText }}</span>
              <span class="m-date-week">周五</span>
            </div>
          </div>
          <div
            class="m-date-item"
            v-show="state.arriveAndDepart == 2"
            @click="state.departCalendar = true"
          >
            <p>返回日</p>
            <div>
              <span class="m-date-time">{{ state.departDateText }}</span>
              <span class="m-date-week">周五</span>
            </div>
          </div>
        </div>

        <div class="m-class-type">
          <div @click="state.classShow = true">
            <span>{{ state.classTypeText }}&nbsp;&nbsp;</span>
            <van-icon name="arrow-down" />
          </div>
        </div>

        <div class="m-button">
          <van-button block color="#1677FF" text="查询" @click="handleQuery" />
        </div>
      </div>
    </div>

    <van-overlay :show="state.classShow" z-index="9999">
      <div class="m-picker-wrapper" @click.stop>
        <van-picker
          title="请选择"
          show-toolbar
          :columns="classList"
          @confirm="areaPickConfirm"
          @cancel="areaTimePickCancel"
        />
      </div>
    </van-overlay>

    <van-calendar
      color="#1677FF"
      v-model="state.arriveCalendar"
      @confirm="arriveDatePickConfirm"
      @cancel="arriveDatePickCancel"
    />

    <van-calendar
      color="#1677FF"
      v-model="state.departCalendar"
      @confirm="departDatePickConfirm"
      @cancel="departDatePickCancel"
    />
  </div>
</template>
  
<script setup lang="ts">
import { reactive, onMounted } from 'vue'

import { useRouter } from "vue-router";
const router = useRouter()

import iconToggle from '@/assets/img/icon-toggle.png'

type DState = {
  arriveAndDepart: number,
  arriveArea: string,
  arriveAreaText: string,
  departArea: string,
  departAreaText: string,
  classType: string,
  classTypeText: string,
  classShow: boolean,
  arriveCalendar: boolean,
  departCalendar: boolean,
  arriveDate: string,
  arriveDateText: string,
  departDate: string,
  departDateText: string,
}

let state = reactive({
  arriveAndDepart: 1, // 1:单程,2:往返
  arriveArea: '',
  arriveAreaText: '北京',
  departArea: '',
  departAreaText: '天津',
  classType: '1',
  classTypeText: '经济舱',
  classShow: false,
  arriveCalendar: false,
  departCalendar: false,
  arriveDate: '',
  arriveDateText: '',
  departDate: '',
  departDateText: '',
})

const classList: any[] = [
  { text: '经济舱', value: '1' },
  { text: '商务舱', value: '2' },
]

onMounted(() => {
  initPage()
})

const initPage = () => {
  [state.arriveDate, state.arriveDateText] = setDateTime(new Date());
  [state.departDate, state.departDateText] = setDateTime(new Date());
}

const handleQuery = () => {
  router.push({
    name: 'TicketList',
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

// 切换城市
const toggleArea = () => {
  [state.arriveArea, state.arriveAreaText, state.departArea, state.departAreaText]
    =
    [state.departArea, state.departAreaText, state.arriveArea, state.arriveAreaText]
}

// 城市选择确定
const areaPickConfirm = (selected, index) => {
  state.classTypeText = selected.text
  state.classType = selected.value
  state.classShow = false
}
// 城市选择取消
const areaTimePickCancel = () => {
  state.classShow = false
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

// 返回日选择确定
const departDatePickConfirm = (day) => {
  state.departCalendar = false
}

// 返回日选择取消
const departDatePickCancel = () => {
  state.departCalendar = false
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

</script>
  
<style scoped lang="scss">
.m-inner {
  background-color: #ffffff;
  margin: 30px;
  border-radius: 30px;
  overflow: hidden;
}

.m-tab {
  height: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-around;
  background-color: #eaebec;

  .m-tab-item {
    height: 90px;
    flex: 1;
    text-align: center;
    line-height: 92px;
    font-size: 34px;
    font-weight: 500;
    color: #666666;
    background-color: #eaebec;
  }

  .m-tab-item_active {
    background-color: #ffffff;
    font-weight: 600;
    color: #333333;
  }

  .m-arrive {
    border-radius: 0 0 30px 0;
  }

  .m-arrive_active {
    border-radius: 0 30px 0 0;
  }

  .m-depart {
    border-radius: 0 0 0 30px;
  }

  .m-depart_active {
    border-radius: 30px 0 0 0;
  }
}

.m-content {
  padding: 50px 40px;
}

.m-destination {
  display: flex;
  padding: 40px 0;

  &-area {
    flex-grow: 1;
    text-align: center;
    font-size: 60px;
    font-weight: 600;
    color: #333333;
  }

  &-toggle {
    flex-basis: 50px;
    flex-grow: 0;
  }
}

.m-date {
  display: flex;
  margin: 20px 0;
  padding: 20px 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}

.m-date-item {
  flex: 1;

  p {
    margin: 0;
    padding: 0;
    font-size: 26px;
    font-weight: 400;
    color: #999999;
    line-height: 50px;
  }

  .m-date-time {
    font-size: 40px;
    font-weight: 600;
    color: #333333;
  }

  .m-date-week {
    margin: 0 0 0 10px;
    padding: 0;
    font-size: 26px;
    font-weight: 400;
    color: #999999;
  }
}

.m-class-type {
  display: flex;
  font-size: 32px;
  font-weight: 400;
  color: #333333;
  line-height: 50px;
}

.m-button {
  margin-top: 50px;

  .van-button__content {
    font-size: 36px;
    line-height: 36px;
  }
}

.m-picker-wrapper {
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 99999;
}
</style>
  