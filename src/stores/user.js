import { defineStore } from "pinia";
import { ref } from "vue";
import { loginAPI } from "@/apis/user";

export const userInfoStore = defineStore('user', () => {
    //state
    const userInfo = ref({})
    const resData = ref({})
    //action
    const getUserInfo = async ({ account, password }) => {
        let res = await loginAPI({ account, password })
        resData.value = res
        userInfo.value = res.data.result
    }

    const clearUserInfo = () => {
        userInfo.value = {}
    }

    return {
        getUserInfo,
        clearUserInfo,
        userInfo,
        resData
    }
}, {
    persist: true,
}) 