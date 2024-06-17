import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import carList from '@/views/carList/index.vue'
import order from '@/views/order/index.vue'
import pay from '@/views/pay/index.vue'
import PayBack from '@/views/pay/paycallback.vue'
import member from '@/views/member/index.vue'
import memberUser from '@/views/member/component/memberUser.vue'
import memberOrder from '@/views/member/component/memberOrder.vue'
import memberAddress from '@/views/member/component/memberAddress.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'category/:id',
          component: Category,
        }, {
          path: 'category/sub/:id',
          component: SubCategory
        }, {
          path: 'detail/:id',
          component: Detail
        }, {
          path: 'carList',
          component: carList
        }, {
          path: 'order',
          component: order
        }, {
          path: 'pay',
          component: pay
        },
        {
          path: 'paycallback', // 注意路径，必须是paycallback
          component: PayBack
        },
        {
          path: 'member',
          redirect: '/member/user',
          component: member,
          children: [
            {
              path: 'user',
              component: memberUser
            }, {
              path: 'order',
              component: memberOrder
            },
            {
              path: 'address',
              component: memberAddress
            }]
        },
      ]
    },
    {
      path: '/login',
      component: Login
    },
  ],

  //路由滚动行为定制
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
