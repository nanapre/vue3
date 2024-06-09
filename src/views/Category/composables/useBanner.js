import { getBannerAPI } from '@/apis/home';
import { ref, onMounted } from 'vue';

export function useBanner() {
    const BannerData = ref([])
    const getBanner = async () => {
        let res = getBannerAPI({ distributionSite: '2' })
        BannerData.value = (await res).data.result
    }

    onMounted(() => {
        getBanner()
    })

    return {
        BannerData
    }
}

