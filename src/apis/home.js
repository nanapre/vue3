import http from "@/utils/http.js";

export function getBannerAPI() {
    return http({
        url: '/home/banner',
        method: 'get'
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


