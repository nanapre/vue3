import http from '@/utils/http'

export function getOrderAPI() {
    return http({
        url: '/member/order/pre',
        method: 'get'
    })
}

export function createOrderAPI(data) {
    return http({
        url: '/member/order',
        method: 'POST',
        data
    })
}
