import { getCategoryListAPI } from '@/apis/category';
import { onMounted, ref, } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';

export function useCategory() {
    //获取路由里携带的参数
    const route = useRoute()
    const CategoryData = ref({})
    const getCategoryList = async (id) => {
        let res = await getCategoryListAPI(id)
        CategoryData.value = res.data.result

    }
    onMounted(() => {
        getCategoryList(route.params.id)
    })
    //路由参数变化时，重新调用接口
    onBeforeRouteUpdate((to) => {
        getCategoryList(to.params.id)
    })
    // watchEffect(() => {
    //     getCategoryList(route.params.id)
    // })

    return {
        CategoryData
    }
}
