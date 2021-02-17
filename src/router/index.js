import Vue from 'vue'
import VueRouter from 'vue-router'
import Product from '../views/product.vue';
import Cart from '../views/cart.vue';
import List from '../views/list.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/list',
        name: 'list',
        meta: {
            title: '商品列表'
        },
        component: List
    },
    {
        path: '/product/:id',
        meta: {
            title: '商品详情'
        },
        component: Product
    },
    {
        path: '/cart',
        meta: {
            title: '购物车'
        },
        component: Cart
    },
    {
        path: '*',
        redirect: '/list'
    }
]

const router = new VueRouter({
    routes // routes: routes 的简写
})

export default router
