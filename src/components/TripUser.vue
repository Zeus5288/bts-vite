<template>
    <div class="m-trip-info">
        <h3>出行信息</h3>
        <div class="m-trip-info-item">
            <div class="m-label">出行人</div>
            <div class="m-value">
                <p>荣冰心</p>
                <p>身份证 1893803988499384922</p>
                <p>荣冰心</p>
                <p>身份证 1893803988499384922</p>
            </div>
        </div>
        <div class="m-trip-info-item">
            <div class="m-label">联系人</div>
            <div class="m-value">
                <p>荣冰心</p>
                <p>18392382340</p>
            </div>
        </div>
        <div class="m-trip-info-item">
            <div class="m-label">购票说明</div>
            <div class="m-value">
                <p>出差</p>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>

</script>

<style lang="scss" scoped>
.m-trip-info {
    padding: 30px;
    margin-top: 20px;
    background: #ffffff;

    h3 {
        margin-bottom: 30px;
        font-size: 32px;
        font-weight: bolder;
        color: #333333;
        line-height: 44px;
    }

    &-item {
        margin: 20px 0;
        display: flex;
        font-size: 32px;
        color: #333333;
        line-height: 60px;

        .m-label {
            width: 6em;
            flex-grow: 0;
            flex-shrink: 0;
        }

        .m-value {
            flex-grow: 1;
            color: #666666;
        }
    }
}
</style>

