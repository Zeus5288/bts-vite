<template>
    <div class="g-wrapper app_background">
        <van-nav-bar
            :safe-area-inset-top="true"
            fixed
            title="联系人"
            left-arrow
            @click-left="router.back()"
        ></van-nav-bar>

        <van-button
            class="m-passengers-button"
            icon="add-o"
            color="rgba(22, 119, 255, 0.08)"
            block
            text="新增乘机人"
            @click="handleToNewContact"
        />

        <div class="m-contact" v-if="state.list && state.list.length > 0">
            <contact-list v-model="state.list" />
        </div>
        <empty v-else tipText="暂无联系人" />
    </div>
</template>

<script setup lang="ts">
import contactList from "@/components/ContactList.vue"
import empty from "@/components/Empty.vue"

import { reactive } from "vue"
import { useRoute, useRouter } from "vue-router";
const route = useRoute()
const router = useRouter()

type DState = {
    list: any[]
}

let state: DState = reactive({
    list: [{ checked: true, name: '言冰云', idCard: '73903247920922' }, { checked: false, name: '费介', idCard: '34352542346235' }]
})

const handleToNewContact = () => {
    router.push({
        name: 'ContactEdit'
    })
}

</script>


<style lang="scss" scoped>
.m-passengers-button {
    margin: 30px;
    width: calc(100% - 60px);

    .van-button__content {
        color: #1677ff;
        font-weight: bolder;
    }
}

.m-contact {
    background-color: #ffffff;
    padding: 10px 30px;
}
</style>