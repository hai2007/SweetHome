(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{136:function(e,a,t){var d=t(137);"string"==typeof d&&(d=[[e.i,d,""]]),d.locals&&(e.exports=d.locals);(0,t(2).default)("data-quickpaper-1e222dfd",d,!0)},137:function(e,a,t){(e.exports=t(1)(!1)).push([e.i,"",""])},208:function(e,a,t){"use strict";t.r(a);var d={};t(136);d.render=function(e){return e("div",{class:"doc-view",quickpaper:"","data-quickpaper-1e222dfd":""},[e("h2",{"data-quickpaper-1e222dfd":""},["Vuex3快速使用和查询"]),e("h3",{"data-quickpaper-1e222dfd":""},["引入和使用"]),e("p",{"data-quickpaper-1e222dfd":""},["首先，你需要创建Store对象并暴露出来："]),e("pre",{"q-code":"","data-quickpaper-1e222dfd":""},["// store.js↵import Vue from 'vue';↵import Vuex from 'vuex';↵↵Vue.use(Vuex);↵↵const store = new Vuex.Store({↵    state:{↵        isLogin:false // 登录状态↵    },↵    getters:{},↵    mutations:{},↵    actions:{}↵});↵↵export default store;"]),e("p",{"data-quickpaper-1e222dfd":""},["然后，在创建Vue对象的时候进行注册："]),e("pre",{"q-code":"","data-quickpaper-1e222dfd":""},["import store from './store.js';↵↵new Vue({↵    el: '#app',↵    store: store,↵    ......↵});"]),e("p",{"data-quickpaper-1e222dfd":""},["到这里，就可以直接在项目中进行使用了。"]),e("p",{"data-quickpaper-1e222dfd":""},["比如上面的登录状态，可以直接在页面中进行获取或修改："]),e("pre",{"q-code":"","data-quickpaper-1e222dfd":""},["......↵    methods: {↵        doit(){↵            // 调用这个方法，每次把登录状态取反↵            this.$store.state.isLogin=!this.$store.state.isLogin;↵        }↵    }↵......"]),e("h3",{"data-quickpaper-1e222dfd":""},["获取和修改"]),e("p",{"data-quickpaper-1e222dfd":""},["虽然上面的内容已经足够使用了，不过，对于数据的修改和获取，有更良好的实践方案。"]),e("h4",{"data-quickpaper-1e222dfd":""},["Getters"]),e("p",{"data-quickpaper-1e222dfd":""},["拿上面的登录举例子，可能我们在使用的时候进行一点点修改："]),e("pre",{"q-code":"","data-quickpaper-1e222dfd":""},['......↵    getters: {↵        isLogin: state => {↵            // 登录的是返回 YES，否则返回 NO↵            return state.isLogin ? "YES" : "NO"↵        }↵    }↵......']),e("p",{"data-quickpaper-1e222dfd":""},["比如在页面中使用，只需要："]),e("pre",{"q-code":"html","data-quickpaper-1e222dfd":""},["<div v-bind:isLogin='$store.getters.isLogin'></div>"]),e("p",{"data-quickpaper-1e222dfd":""},["可以发现，只是把",e("span",{class:"warn","data-quickpaper-1e222dfd":""},["state"]),"改成了",e("span",{class:"warn","data-quickpaper-1e222dfd":""},["getters"]),"。"]),e("h4",{"data-quickpaper-1e222dfd":""},["Mutations"]),e("p",{"data-quickpaper-1e222dfd":""},["同样的，如果我们现在需要修改登录状态："]),e("pre",{"q-code":"","data-quickpaper-1e222dfd":""},["......↵    mutations: {↵        changeLoginState: (state, isLogin) => {↵            // 设置前需要先转成boolean值↵            state.isLogin = isLogin == 'YES' ? true : false;↵        }↵    }↵......"]),e("p",{"data-quickpaper-1e222dfd":""},["然后使用的时候："]),e("pre",{"q-code":"","data-quickpaper-1e222dfd":""},["this.$store.commit('changeLoginState', \"YES\");"]),e("h4",{"data-quickpaper-1e222dfd":""},["Actions"]),e("p",{"data-quickpaper-1e222dfd":""},["因为",e("span",{class:"warn","data-quickpaper-1e222dfd":""},["Mutations"]),"中必须是同步函数，如果需要异步操作："]),e("p",{class:"warn","data-quickpaper-1e222dfd":""},["特别说明：Mutations不可以异步的原因是为了保证devtool工具可以正确的追踪数据。"]),e("pre",{"q-code":"","data-quickpaper-1e222dfd":""},['......↵    actions: {↵        changeLoginState: (context, isLogin) => {↵            setTimeout(()=>{↵                context.commit("changeLoginState", isLogin);↵            }, 1000);↵        }↵    }↵......']),e("p",{"data-quickpaper-1e222dfd":""},["使用的时候也很简单："]),e("pre",{"q-code":"","data-quickpaper-1e222dfd":""},["this.$store.dispatch('changeLoginState', 'YES');"])])};a.default=d}}]);