import http from "@/utils/http.js";

export function getBannerAPI(params = {}) {
    const { distributionSite = '1' } = params//ES6 中的对象解构赋值
    return http({
        url: '/home/banner',
        method: 'get',
        params: {
            distributionSite
        }
    })
}

export function getNewAPI() {
    return http({
        url: '/home/new',
        method: 'get'
    })
}

export function getNewHotAPI() {
    return http({
        url: '/home/hot',
        method: 'get'
    })
}

export function getGoodsAPI() {
    return http({
        url: '/home/goods',
        method: 'get'
    })
}


