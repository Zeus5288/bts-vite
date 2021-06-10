<template>
    <div class="m-ticket">
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
            <p class="m-air-info">东航MU8731 波音737（中）</p>
        </div>
        <div class="m-ticket-price">
            <p>￥1900</p>
            <div>
                携程
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
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
            color: #FA7317;
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