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
        redirect: '/login',
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
            {
                path: 'Maintain',
                name: 'Maintain',
                component: () => import('../views/Maintain'),
                meta: {
                    title: "平台维护"
                },
                children: [
                    {
                        path: 'cooperation',
                        name: 'Cooperation',
                        component: () => import('../views/Cooperation'),
                        meta: {
                            title: "校企合作管理"
                        }
                    },
                ]
            },
            {
                path: 'check',
                name: 'Check',
                component: () => import('../views/Check'),
                meta: {
                    title: "系统审核"
                },
                children: [
                    {
                        path: 'cooperation',
                        name: 'Cooperation',
                        component: () => import('../views/Cooperation'),
                        meta: {
                            title: "校企合作审核"
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
                path: 'cooperationEn',
                name: 'CooperationEn',
                component: () => import('../views/front/CooperationEn'),
                meta: {
                    title: "校企合作管理(企业)"
                }
            },
            {
                path: 'cooperationSc',
                name: 'CooperationSc',
                component: () => import('../views/front/CooperationSc'),
                meta: {
                    title: "校企合作管理(企业)"
                }
            },
            {
                path: 'student',
                name: 'Student',
                component: () => import('../views/front/Student'),
                meta: {
                    title: "学生管理"
                }
            },
            {
                path: 'home',
                name: 'Home',
                component: () => import('../views/front/Home'),
                meta: {
                    title: "主页"
                },
            },
            {
                path: 'resume',
                name: 'Resume',
                component: () => import('../views/front/Resume'),
                meta: {
                    title: "简历"
                },
            },
            {
                path: 'resumeDetail',
                name: 'ResumeDetail',
                component: () => import('../views/front/ResumeDetail'),
                meta: {
                    title: "简历详情"
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
