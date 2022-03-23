import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Manage',
        component: () => import('../views/Manage'),
        meta: {
            title: "首页"
        },
        //redirect: '/home',
        children: [
            {
                path: 'admin',
                name: 'Admin',
                //component: () => import('../views/School'),
                meta: {
                    title: "账号管理"
                },
                children: [
                    {
                        path: 'school',
                        name: 'School',
                        component: () => import('../views/School'),
                        meta: {
                            title: "学校管理"
                        }
                    },
                    {
                        path: 'home',
                        name: 'Home',
                        component: () => import('../views/Home'),
                        meta: {
                            title: "首页"
                        }
                    }
                ]
            },
            {
                path: 'school',
                name: 'School',
                component: () => import('../views/School'),
                meta: {
                    title: "学校管理"
                }
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login'),
        meta: {
            title: "登录"
        },
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/Register'),
        meta: {
            title: "注册"
        },
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
