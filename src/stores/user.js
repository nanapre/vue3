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

    return {
        getUserInfo,
        userInfo,
        resData
    }
}, {
    persist: true,
}) 