import http from "@/utils/http";

export function getCategoryListAPI(id) {
    return http({
        url: '/category',
        method: 'get',
        params: { id }
    })
}