import http from '@/utils/http.js'

export function getPayOrderAPI(id) {
    return http({
        url: `/member/order/${id}`,
        method: 'get'
    })
}