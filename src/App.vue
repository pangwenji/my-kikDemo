<template>
    <div id="app">
        <div class="header">
            <router-link :to="{ path: '/list' }" class="header-title"
                >深空探索</router-link
            >
            <div class="header-menu">
                <router-link to="/cart" class="header-menu-cart">
                    购物车
                    <span v-if="cartList.length">{{ cartList.length }}</span>
                </router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
    <script>
export default {
    data() {
        return {};
    },
    computed: {
        cartList() {
            return this.$store.state.cartList;
        }
    },
    created() {
        console.log("gfhjgf");
    }
};
</script>
<style>
* {
    margin: 0;
    padding: 0;
}
</style>
