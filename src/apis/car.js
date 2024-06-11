import http from '@/utils/http'

export const addCarAPI = ({ skuId, count }) => {
    return http({
        url: '/member/cart',
        method: 'post',
        data: {
            skuId,
            count
        }
    })
}

export const getCarListAPI = () => {
    return http({
        url: '/member/cart',
        method: 'get'
    })
}

export const deleteCarAPI = (ids) => {
    return http({
        url: '/member/cart',
        method: 'DELETE',
        data: {
            ids
        }
    })
}

export const mergeCarAPI = (data) => {
    return http({
        url: '/member/cart/merge',
        method: 'post',
        data
    })
}