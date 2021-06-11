<template>
    <div class="home g-wrapper">
        <div class="m-header">
            <div class="m-image">
                <img src="http://img.www.ejianlong.com/tech-api/assets/default-avatar.png" />
            </div>
            <p>{{ state.userName }}</p>
        </div>

        <div class="m-my-menu">
            <van-cell title="我的订单" is-link @click="handleToMenu('/orders')">
                <template #icon>
                    <van-icon :name="iconMenu1" size="24px" />
                </template>
            </van-cell>
            <van-cell title="我的行程" is-link @click="handleToMenu('/trips')">
                <template #icon>
                    <van-icon :name="iconMenu2" size="24px" />
                </template>
            </van-cell>
            <van-cell title="我的审批" is-link @click="handleToMenu('/orders')">
                <template #icon>
                    <van-icon :name="iconMenu3" size="24px" />
                </template>
            </van-cell>
            <van-cell title="常用联系人" is-link @click="handleToMenu('/orders')">
                <template #icon>
                    <van-icon :name="iconMenu4" size="24px" />
                </template>
            </van-cell>
        </div>

        <van-row type="flex" justify="center">
            <van-button type="danger" @click="handleLogOut" class="tc_bu">退出登录</van-button>
        </van-row>
    </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()

import iconMenu1 from "@/assets/img/icon-my-menu1.png";
import iconMenu2 from "@/assets/img/icon-my-menu2.png";
import iconMenu3 from "@/assets/img/icon-my-menu3.png";
import iconMenu4 from "@/assets/img/icon-my-menu4.png";

let state = reactive({
    avatar: "",
    empno: "",
    userName: "180087",
});

const initPage = () => {

}
const handleToMenu = (path) => {
    router.push({
        path: path
    })
}
const handleLogOut = () => {
    // removeToken();//删除token
    // this.$store.dispatch("user/logout");
}

</script>


<style lang="scss" scoped>
.logo {
    width: 200px;
    height: 200px;
}

.m-header {
    width: 100%;
    height: 400px;
    background: url("../../assets/img/icon-mybg.png") center center no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .m-image {
        width: 150px;
        height: 150px;
        margin-bottom: 40px;
        border-radius: 50%;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
        }
    }

    p {
        font-size: 38px;
        font-weight: 500;
        color: #ffffff;
        line-height: 40px;
    }
}

.m-my-menu {
    .van-cell {
        margin-top: 10px;
        padding: 20px 30px;
        height: 120px;
        display: flex;
        align-items: center;
        &__title {
            margin-left: 20px;
            font-size: 34px;
            color: #333333;
        }
    }
}

.tc_bu {
    position: absolute;
    width: 660px;
    height: 90px;
    background: #1677ff;
    border-radius: 8px;
    color: #ffffff;
    font-size: 34px;
    line-height: 48px;
    bottom: 120px;
    border: none;
}
</style>
