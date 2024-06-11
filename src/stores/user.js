import { defineStore } from "pinia";
import { ref } from "vue";
import { loginAPI } from "@/apis/user";
import { useCarStore } from './car'
import { mergeCarAPI } from "@/apis/car";

export const userInfoStore = defineStore('user', () => {
    //state
    const userInfo = ref({})
    const resData = ref({})
    const carStore = useCarStore()
    //action
    const getUserInfo = async ({ account, password }) => {
        let res = await loginAPI({ account, password })
        resData.value = res
        userInfo.value = res.data.result
        await mergeCarAPI(carStore.cartList.map(item => {
            return {
                skuId: item.skuId,
                selected: item.selected,
                count: item.count
            }
        }))
        carStore.updateCarList()
    }

    const clearUserInfo = () => {
        userInfo.value = {}
        carStore.clearCar()
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