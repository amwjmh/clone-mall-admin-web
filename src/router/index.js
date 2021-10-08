import Router from 'vue-router'

const constantRouterMap = [
        { path: '/login', component: () => import('../views/login/index.vue'), hidden: true },
        { path: '/', redirect: '/login' }

]

export default new Router({
    routes: constantRouterMap
})