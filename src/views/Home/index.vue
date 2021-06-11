<template>
  <div class="app_background g-wrapper">
    <div class="m-home-banner">
      <img src="http://img.www.ejianlong.com/bts-api/assets/home-banner.png" alt />
    </div>

    <h3 class="g-mtitle">日常业务</h3>

    <van-row class="m-home-menu">
      <van-col
        class="m-menu-item"
        span="6"
        v-for="(item, index) in menuList"
        :key="index"
        @click="toMenu(item)"
      >
        <van-icon :name="item.icon" size="50px" />
        <p>{{ item.title }}</p>
      </van-col>
    </van-row>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { getTestList } from "@/http/api.ts";
import { useRouter } from "vue-router";
const router = useRouter()

import img0 from "@/assets/img/home-menu_0.png";
import img1 from "@/assets/img/home-menu_1.png";
import img2 from "@/assets/img/home-menu_2.png";
import img3 from "@/assets/img/home-menu_3.png";
import img4 from "@/assets/img/home-menu_4.png";

const menuList = [
  { title: '机票', icon: img0, path: '/ticket-query' },
  { title: '酒店', icon: img1, path: '' },
  { title: '订单', icon: img2, path: '' },
  { title: '行程', icon: img3, path: '' },
  { title: '审批', icon: img4, path: '' },
]

onMounted(() => {
  initPage()
});

const initPage = () => {
  const data = {
    type: 41
  }
  const params = {
    pageNum: 1,
    pageSize: 10
  }
  getTestList(data, params).then(res => {

  })
}

let toMenu = (item) => {
  router.push({
    path: item.path
  })
}
</script>

<style scoped lang="scss">
.m-home-banner {
  padding: 30px 0 0;
  display: flex;
  justify-content: center;
  img {
    width: 690px;
    height: 360px;
  }
}

.m-home-menu {
  margin: 0 30px;
  border-radius: 30px;
  background-color: #ffffff;
  .m-menu-item {
    text-align: center;
    padding: 30px 0;
    p {
      font-size: 32px;
      font-weight: 500;
      color: #333333;
      line-height: 44px;
      margin-top: 14px;
    }
  }
}
</style>
  