import Vue from 'vue'
import Vuex from 'vuex'
import { timer } from 'rxjs'
import product from '../data/product';
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        productList: [],
        cartList: []
    },
    getter: {

    },
    mutations: {
        setProduct(state, data) {
            console.log(data)
            state.productList = data
        },
        addCart(state, id) {
            console.log(state, "ATE")
            const isAdd = state.cartList.find(item => item.id === id)
            if (isAdd) {
                isAdd.count++;
            } else {
                state.cartList.push({
                    id: id,
                    count: 1
                })
            }
        },
        editCartCount(state, payload) {
            const product = state.cartList.filter(item => item.id === payload.id);
            product.count += payload.count;
        },
        deleteCart(state, id) {
            const index = state.cartList.filter(item => item.id === id);
            state.cartList.splice(idnex, 1)
        }
    },
    actions: {
        getProduct(context) {
            console.log("fgh")
            timer(500).subscribe(data => {
                context.commit('setProduct', product)
            })
        },
    },
    modules: {
    }
})
