import { createRouter, createWebHashHistory } from 'vue-router';

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
            {
                path: 'trips',
                name: 'Trips',
                meta: {
                    title: '我的行程',
                    isOpen: true
                },
                component: () => import('@/views/Trips/index.vue')
            },
            {
                path: 'orders',
                name: 'Orders',
                meta: {
                    title: '我的订单',
                    isOpen: true
                },
                component: () => import('@/views/Orders/index.vue')
            },
            {
                path: 'personCenter',
                name: 'PersonCenter',
                meta: {
                    title: '个人中心',
                    isOpen: true
                },
                component: () => import('@/views/PersonCenter/index.vue')
            },
        ]
    },
    {
        path: '/ticket-list',
        name: 'TicketList',
        meta: {
            title: '机票查询',
            isOpen: true
        },
        component: () => import('@/views/TicketList/index.vue')
    },
    {
        path: '/ticket-detail',
        name: 'TicketDetail',
        meta: {
            title: '机票查询',
            isOpen: true
        },
        component: () => import('@/views/TicketDetail/index.vue')
    },
    {
        path: '/trip-detail',
        name: 'TripDetail',
        meta: {
            title: '行程详情',
            isOpen: true
        },
        component: () => import('@/views/TripDetail/index.vue')
    },
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})