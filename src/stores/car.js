import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCarStore = defineStore('car', () => {

    const cartList = ref([])
    //添加购物车
    const addCar = (goods) => {
        let item = cartList.value.find((item) => item.skuId === goods.skuId)
        if (item) {
            item.count = goods.count + item.count
        } else {
            cartList.value.push(goods)
        }
    }
    //删除购物车
    const deleteCarItem = (skuId) => {
        const item = cartList.value.findIndex((item) => item.sku = skuId)
        cartList.value.splice(item, 1)
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
        addCar,
        deleteCarItem,
        allCount,
        allPrice,
        singleCheck,
        allCheck,
        isAll,
        selectedCount,
        selectedPrice
    }

}, {
    persist: true
})