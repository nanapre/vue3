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
