import Vue from 'vue';
// 导入 vue-router 包
import VueRouter from 'vue-router';
// 导入 app 组件
import app from './App.vue';
// 导入 account 组件
import account from './main/Account.vue';
// 导入 goodslist 组件
import goodslist from './main/GoodsList.vue';

// 手动安装 VueRouter
Vue.use(VueRouter);

// 创建路由对象
var router = new VueRouter({
    routes: [
        // account goodslist
        { path: '/account', component: account },
        { path: '/goodslist', component: goodslist }
    ]
});

var vm = new Vue({
    el: '#app',
    // render 会把 el 指定的容器中所有的内容都清空覆盖,所以不要吧路由的 router-view router-link 直接写道 el 所控制的元素中
    render: c => c(app),
    // 将路由对象挂载到 vm 上
    router,
});

// 注意: App 这个组件是通过 vm 实例的 render 函数渲染出来的, render 函数如果要渲染组件,渲染出来的组件只能放到 el:'#app' 所指定的元素中
// Account 和 GoodsList 组件是通过路由匹配规则监听到的,所以这两个组件只能展示到属于路由的 <router-view></router-view> 中去