import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/style.css'
import 'ant-design-vue/dist/antd.css';
import { Card } from 'ant-design-vue';
Vue.use(Card)
Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//     window.document.title = to.meta.title;
// });

// router.afterEach((to, from, next) => {
//     window.scrollTo(0, 0);
// })

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
