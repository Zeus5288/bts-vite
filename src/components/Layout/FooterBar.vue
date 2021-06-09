<template>
    <van-tabbar route :safe-area-inset-bottom="true">
        <van-tabbar-item replace to="/">
            <span>首页</span>
            <van-icon
                slot="icon"
                slot-scope="props"
                :name="props.active ? require('@/assets/img/icon-tabbar1-a.png') : require('@/assets/img/icon-tabbar1.png')"
            />
        </van-tabbar-item>
        <van-tabbar-item replace to="/trips">
            <span>行程</span>
            <van-icon
                slot="icon"
                slot-scope="props"
                :name="props.active ? require('@/assets/img/icon-tabbar2-a.png') : require('@/assets/img/icon-tabbar2.png')"
            />
        </van-tabbar-item>
        <van-tabbar-item replace to="/orders">
            <span>订单</span>
            <van-icon
                slot="icon"
                slot-scope="props"
                :name="props.active ? require('@/assets/img/icon-tabbar3-a.png') : require('@/assets/img/icon-tabbar3.png')"
            />
        </van-tabbar-item>
        <van-tabbar-item replace to="/personCenter">
            <span>我的</span>
            <van-icon
                slot="icon"
                slot-scope="props"
                :name="props.active ? require('@/assets/img/icon-tabbar4-a.png') : require('@/assets/img/icon-tabbar4.png')"
            />
        </van-tabbar-item>
    </van-tabbar>
</template>
  
<script setup lang="ts">

</script>
  
<style lang="scss" >

</style>
  