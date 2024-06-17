import http from '@/utils/http.js'

export function loginAPI({ account, password }) {
    return http({
        url: '/login',
        method: 'post',
        data: {
            account,
            password
        }
    })
}


export function getLikeListAPI({ limit = 4 }) {
    return http({
        url: '/goods/relevant',
        method: 'get',
        params: {
            limit
        }
    })
}

export function getUserOrderAPI(params) {
    return http({
        url: '/member/order',
        method: 'get',
        params
    })
}


export function getUserAddressAPI() {
    return http({
        url: '/member/address',
        method: 'get'
    })
}


export function updateUserAddressAPI(id, data) {
    return http({
        url: `/member/address/${id}`,
        method: 'put',
        data
    })
}

export function createUserAddressAPI(data) {
    return http({
        url: '/member/address',
        method: 'post',
        data
    })
}

export function deleteUserAddressAPI(id) {
    return http({
        url: `/member/address/${id}`,
        method: 'delete',
    })
}

