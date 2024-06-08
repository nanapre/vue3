import http from "@/utils/http.js";

export function getBannerAPI() {
    return http({
        url: '/home/banner',
        method: 'get'
    })
}
