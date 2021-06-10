<template>
    <van-tabbar route :safe-area-inset-bottom="true" class="footerbar">
      <van-tabbar-item replace to="/home">
        <span>首页</span>
        <template #icon="props">
          <van-icon slot="icon" :name="props.active ? iconTabbar1a : iconTabbar1" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/trips">
        <span>行程</span>
        <template #icon="props">
          <van-icon slot="icon" :name="props.active ? iconTabbar2a : iconTabbar2" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/orders">
        <span>订单</span>
        <template #icon="props">
          <van-icon slot="icon" :name="props.active ? iconTabbar3a : iconTabbar3" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/personCenter">
        <span>我的</span>
        <template #icon="props">
          <van-icon slot="icon" :name="props.active ? iconTabbar4a : iconTabbar4" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
</template>
  
<script setup lang="ts">
import iconTabbar1 from '@/assets/img/icon-tabbar1.png'
import iconTabbar1a from '@/assets/img/icon-tabbar1-a.png'
import iconTabbar2 from '@/assets/img/icon-tabbar2.png'
import iconTabbar2a from '@/assets/img/icon-tabbar2-a.png'
import iconTabbar3 from '@/assets/img/icon-tabbar3.png'
import iconTabbar3a from '@/assets/img/icon-tabbar3-a.png'
import iconTabbar4 from '@/assets/img/icon-tabbar4.png'
import iconTabbar4a from '@/assets/img/icon-tabbar4-a.png'


</script>
  
<style lang="scss" >
.van-tabbar-item--active {
color: #1677ff;
}
</style>
  