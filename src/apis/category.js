import http from "@/utils/http";

export function getCategoryListAPI(id) {
    return http({
        url: '/category',
        method: 'get',
        params: {
            id
        }
    })
}

export function getSubCategoryListAPI(id) {
    return http({
        url: '/category/sub/filter',
        method: 'get',
        params: {
            id
        }
    })
}