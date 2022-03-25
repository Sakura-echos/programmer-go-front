import { createRouter, createWebHashHistory } from 'vue-router'
// 这个type可以加可以不加, 加上是为了声明这是个类型
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: () => import('@/views/index/Index.vue'),
    children: [
      {
        path: '',
        redirect: '/index/home'
      },
      {
        path: 'home',
        component: () => import('@/views/index/home/Home.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/NotFound.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
