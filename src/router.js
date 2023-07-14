import { createRouter, createWebHistory } from 'vue-router';
import Login from './views/Login.vue';
import NotFound from './views/404.vue';
import Register from "./views/Register.vue";
import Admin from "./views/Admin.vue";
import Customer from "./views/Customer.vue";

const routes = [
    {
        path: '/',
        redirect: '/Login'
    },
    {
        path: '/login',
        name: 'Login',
        component:Login
    },
    {
        path: '/admin',
        name: 'Admin',
        component:Admin
    },
    {
        path: '/register',
        name: 'Register',
        component:Register
    },
    {
        path: '/customer',
        name: 'Customer',
        component: Customer
},
    {
        path: '/:catchAll(.*)',  // 匹配所有路径
        name: '404',
        component: NotFound
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

// 添加路由守卫
router.beforeEach((to, from, next) => {
    const isLogin = localStorage.eleToken ? true : false;
    const kind = localStorage.kind;

    if (to.path === "/login" || to.path === "/register") {
        next();
    } else if (to.path === '/admin') {
        if (isLogin && kind === "管理员") {
            next();
        } else {
            next("/login");
        }
    } else if (to.path === '/customer') {
        if (isLogin && kind === "顾客") {
            next();
        } else {
            next("/login");
        }
    } else {
        if (isLogin) {
            next();
        } else {
            next("/login");
        }
    }
});

export default router;
