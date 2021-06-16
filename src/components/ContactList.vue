<template>
    <div class="m-contact-wrapper">
        <div class="m-contact-item" v-for="(item, index) in state.listProp" :key="index">
            <div class="m-main">
                <div class="m-check" @click="handleCheck(item)">
                    <van-icon v-if="item.checked" name="checked" color="#1677FF" size="18" />
                    <div v-else class="m-nocheck"></div>
                </div>
                <div class="m-info">
                    <h3>{{ item.name }}</h3>
                    <p>身份证 {{ item.idCard }}</p>
                </div>
            </div>
            <van-icon
                :name="iconEdit"
                color="#1677FF"
                size="20"
                @click="handleToEditContact(item)"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, reactive, onMounted } from "vue";

import { useRouter } from "vue-router";
const router = useRouter()

import iconEdit from "@/assets/img/icon-edit.png";

const props = defineProps({
    modelValue: {
        type: Array,
        default: () => {
            return []
        }
    },
})

type DState = {
    listProp: any[]
}

let state: DState = reactive({
    listProp: props.modelValue
})

const handleCheck = (item) => {
    item.checked = !item.checked
}

const handleToEditContact = (item) => {
    router.push({
        name: 'ContactEdit',
        query: {
            id: item.id
        }
    })
}

</script>


<style lang="scss" scoped>
.m-contact-item {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .m-main {
        display: flex;
        font-size: 30px;
        color: #666666;
        line-height: 50px;
        .m-check {
            flex-shrink: 0;
            margin-right: 20px;
            margin-top: 8px;
            .m-nocheck {
                width: 36px;
                height: 36px;
                border-radius: 50%;
                border: 2px solid #eeeeee;
            }
        }
        h3 {
            font-size: 30px;
            font-weight: bolder;
            color: #333333;
        }
        p {
            line-height: 60px;
        }
    }
}
</style>