import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/Layout.js'

export const useCategoryStore = defineStore('category', () => {
    const categoryList = ref([])
    const getCategory = async () => {
        let res = await getCategoryAPI()
        categoryList.value = res.data.result
        console.log(categoryList.value)
    }

    return {
        categoryList,
        getCategory
    }
})
