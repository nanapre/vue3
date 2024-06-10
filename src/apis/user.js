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

