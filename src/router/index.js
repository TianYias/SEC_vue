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
        redirect: '/home',
        children: [
            {
                path: 'home',
                name: 'Home',
                component: () => import('../views/Home'),
                meta: {
                    title: "数据展示"
                }
            },
            {
                path: 'admin',
                name: 'Admin',
                component: () => import('../views/Admin'),
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
                        path: 'enterprise',
                        name: 'Enterprise',
                        component: () => import('../views/Enterprise'),
                        meta: {
                            title: "企业管理"
                        }
                    },
                    {
                        path: 'school',
                        name: 'School',
                        component: () => import('../views/School'),
                        meta: {
                            title: "学校管理"
                        }
                    },
                    {
                        path: 'student',
                        name: 'Student',
                        component: () => import('../views/Student'),
                        meta: {
                            title: "学生管理"
                        }
                    },
                ]
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
        path: '/front',
        name: 'Front',
        component: () => import('../views/front/Front'),
        meta: {
            title: "主界面"
        },
        children: [
            {
                path: 'home',
                name: 'Home',
                component: () => import('../views/front/Home'),
                meta: {
                    title: "主页"
                },
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
