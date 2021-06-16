<template>
    <div class="g-wrapper app_background">
        <van-nav-bar
            :safe-area-inset-top="true"
            fixed
            :title="state.id ? '编辑联系人' : '新增联系人'"
            left-text="取消"
            right-text="完成"
            @click-left="router.back()"
            @click-right="send"
        ></van-nav-bar>

        <van-form ref="formData" @submit="onSubmit">
            <van-field
                v-model="contact.passengername"
                name="姓名"
                label="姓名"
                placeholder="与乘机证件一致"
                :rules="[{ required: true, message: '请填写姓名' }]"
            />
            <van-field
                :value="state.licensetypeShow"
                readonly
                clickable
                name="证件类型"
                label="证件类型"
                placeholder="请选择"
                @click="state.showPicker = true"
                :rules="[{ required: true, message: '请选择证件类型' }]"
            />
            <van-field
                v-model="contact.licenseno"
                name="证件号码"
                label="证件号码"
                placeholder="请输入证件号"
                :rules="[{ required: true, message: '请填写证件号码' }]"
            />
            <van-field v-model="contact.phone" name="手机号码" label="手机号码" placeholder="请输入手机号" />
            <van-field
                v-model="contact.empno"
                name="工号"
                label="工号"
                placeholder="请输入工号"
                :rules="[{ required: true, message: '请填写工号' }]"
            />
        </van-form>

        <!--        证件类型选择-->
        <van-popup v-model="state.showPicker" position="bottom">
            <van-picker
                show-toolbar
                :columns="columns"
                @confirm="onConfirm"
                @cancel="state.showPicker = false"
            />
        </van-popup>
    </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { useRoute, useRouter } from "vue-router";
const route = useRoute()
const router = useRouter()

type DState = {
    id: string,
    showPicker: boolean,
    licensetypeShow: string
}

let state: DState = reactive({
    id: '',
    showPicker: false,
    licensetypeShow: ''
})

type DContact = {
    passengername: '',
    licensetype: '',
    licenseno: '',
    phone: '',
    empno: ''
}

let contact: DContact = reactive({
    passengername: '',
    licensetype: '',
    licenseno: '',
    phone: '',
    empno: ''
})

const columns = [
    { text: '身份证', key: '1' },
    { text: '港澳台居民证', key: '2' }
]

const initPage = () => {
    route.query.id && (state.id = route.query.id)
}
// 选择证件类型
const onConfirm = (value) => {
    state.licensetypeShow = value.text
    state.contact.licensetype = value.key
    state.showPicker = false
}
const send = () => {
    // this.$refs.formData.submit();
}
const onSubmit = (values) => {
    console.log(values);
}

</script>


<style lang="scss" scoped>
::v-deep .van-form {
    margin-top: 20px;
}
</style>