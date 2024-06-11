import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { getCarListAPI, addCarAPI, deleteCarAPI } from '@/apis/car'
import { userInfoStore } from './user'
// import router from '@/router';
import { ElMessage } from 'element-plus';
import 'element-plus/theme-chalk/el-message.css'

export const useCarStore = defineStore('car', () => {
    const useUserInfoStore = userInfoStore()
    // 获取token
    const isLogin = computed(() => useUserInfoStore.userInfo.token)
    const cartList = ref([])
    //更新购物车数据
    const updateCarList = async () => {
        let res = await getCarListAPI()
        cartList.value = res.data.result
    }
    //添加购物车
    const addCar = async (goods) => {
        const { skuId, count } = goods
        if (isLogin.value) {
            //接口购物车
            let res = await addCarAPI({ skuId, count })
            if (res.status === 200) {
                ElMessage({ type: 'success', message: '已加入购物车' })
                updateCarList()
            }
        } else {
            // router.push('/login')
            // ElMessage.warning("请登录再购买")
            //本地购物车
            ElMessage({ type: 'success', message: '已加入购物车' })
            let item = cartList.value.find((item) => item.skuId === goods.skuId)
            if (item) {
                item.count = goods.count + item.count
            } else {
                cartList.value.push(goods)
            }
        }


    }
    //删除购物车
    const deleteCarItem = async (skuId) => {
        if (isLogin.value) {
            //删除接口购物车
            let res = await deleteCarAPI([skuId])
            if (res.status === 200) {
                ElMessage({ type: 'success', message: '已移除该商品' })
                updateCarList()
            }

        } else {
            //删除本地购物车
            ElMessage({ type: 'success', message: '已移除该商品' })
            const idx = cartList.value.findIndex((item) => item.sku = skuId)
            cartList.value.splice(idx, 1)
        }

    }
    //清楚购物车本地数据
    const clearCar = () => {
        cartList.value = []
    }
    //总数量和总价格
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
    // 已选择数量
    const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
    // 已选择商品价钱合计
    const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))

    //单选框
    const singleCheck = (skuId, selected) => {
        const item = cartList.value.find((item) => item.skuId === skuId)
        item.selected = selected
    }
    // 全选功能action
    const allCheck = (selected) => {
        // 把cartList中的每一项的selected都设置为当前的全选框状态
        cartList.value.forEach(item => item.selected = selected)
    }
    // 是否全选计算属性
    const isAll = computed(() => cartList.value.every((item) => item.selected))
    return {
        cartList,
        allCount,
        allPrice,
        isAll,
        selectedCount,
        selectedPrice,
        addCar,
        deleteCarItem,
        singleCheck,
        allCheck,
        clearCar,
        updateCarList
    }

}, {
    persist: true
})