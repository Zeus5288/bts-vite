<template>
    <div class="m-ticket">
        <div class="m-ticket-header">
            <span class="g-icon-single">去程</span>东航MU8731 波音737（中）
        </div>
        <div class="m-ticket-info">
            <div class="m-time-place">
                <div class="m-time-place-item">
                    <h3>20:00</h3>
                    <h4>首都机场</h4>
                </div>
                <div class="m-arrow">-</div>
                <div class="m-time-place-item">
                    <h3>20:00</h3>
                    <h4>首都机场</h4>
                </div>
            </div>
            <p class="m-tips">到达准点率97%  有餐食  中机型</p>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.m-ticket {
    width: 100%;
    &-header {
        font-size: 26px;
        font-weight: 400;
        color: #333333;
        line-height: 36px;
    }
    &-info {

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
            color: #FA7317;
            line-height: 40px;
        }
    }
}

.m-time-place {
    padding: 20px 0 10px;
    display: flex;
    justify-content: center;
    &-item {
        color: #333333;
        h3 {
            font-size: 54px;
            font-weight: 600;
            line-height: 76px;
        }
        h4 {
            font-size: 26px;
            font-weight: 400;
            line-height: 36px;
            margin: 12px 0;
        }
    }
    .m-arrow {
        width: 140px;
        text-align: center;
    }
}

.m-tips {
    text-align: center;
    font-size: 26px;
    font-weight: 400;
    color: #999999;
    line-height: 40px;
}


</style>