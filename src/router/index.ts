import { createRouter, createWebHistory } from 'vue-router';

import AppLayout from '@/views/Main/index.vue'

const routes = [
    {
        path: '/',
        redirect: '/home',
        meta: {
            title: '商旅平台'
        },
        component: AppLayout,
        children: [
            {
                path: 'home',
                name: 'Home',
                meta: {
                    title: '首页'
                },
                component: () => import('@/views/Home/index.vue'),
            },
            {
                path: 'ticket-query',
                name: 'TicketQuery',
                meta: {
                    title: '机票查询',
                    isOpen: true
                },
                component: () => import('@/views/TicketQuery/index.vue')
            },
        ]
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})