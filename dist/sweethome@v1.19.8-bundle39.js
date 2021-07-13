(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{132:function(e,a,t){var p=t(133);"string"==typeof p&&(p=[[e.i,p,""]]),p.locals&&(e.exports=p.locals);(0,t(2).default)("data-quickpaper-2bebec7d",p,!0)},133:function(e,a,t){(e.exports=t(1)(!1)).push([e.i,"",""])},206:function(e,a,t){"use strict";t.r(a);var p={};t(132);p.render=function(e){return e("div",{class:"doc-view",quickpaper:"","data-quickpaper-2bebec7d":""},[e("h2",{"data-quickpaper-2bebec7d":""},["Vuex3快速使用和查询"]),e("h3",{"data-quickpaper-2bebec7d":""},["引入和使用"]),e("p",{"data-quickpaper-2bebec7d":""},["首先，你需要创建Store对象并暴露出来："]),e("pre",{"q-code":"","data-quickpaper-2bebec7d":""},["// store.js↵import Vue from 'vue';↵import Vuex from 'vuex';↵↵Vue.use(Vuex);↵↵const store = new Vuex.Store({↵    state:{↵        isLogin:false // 登录状态↵    },↵    getters:{},↵    mutations:{},↵    actions:{}↵});↵↵export default store;"]),e("p",{"data-quickpaper-2bebec7d":""},["然后，在创建Vue对象的时候进行注册："]),e("pre",{"q-code":"","data-quickpaper-2bebec7d":""},["import store from './store.js';↵↵new Vue({↵    el: '#app',↵    store: store,↵    ......↵});"]),e("p",{"data-quickpaper-2bebec7d":""},["到这里，就可以直接在项目中进行使用了。"]),e("p",{"data-quickpaper-2bebec7d":""},["比如上面的登录状态，可以直接在页面中进行获取或修改："]),e("pre",{"q-code":"","data-quickpaper-2bebec7d":""},["......↵    methods: {↵        doit(){↵            // 调用这个方法，每次把登录状态取反↵            this.$store.state.isLogin=!this.$store.state.isLogin;↵        }↵    }↵......"]),e("h3",{"data-quickpaper-2bebec7d":""},["获取和修改"]),e("p",{"data-quickpaper-2bebec7d":""},["虽然上面的内容已经足够使用了，不过，对于数据的修改和获取，有更良好的实践方案。"]),e("h4",{"data-quickpaper-2bebec7d":""},["Getters"]),e("p",{"data-quickpaper-2bebec7d":""},["拿上面的登录举例子，可能我们在使用的时候进行一点点修改："]),e("pre",{"q-code":"","data-quickpaper-2bebec7d":""},['......↵    getters: {↵        isLogin: state => {↵            // 登录的是返回 YES，否则返回 NO↵            return state.isLogin ? "YES" : "NO"↵        }↵    }↵......']),e("p",{"data-quickpaper-2bebec7d":""},["比如在页面中使用，只需要："]),e("pre",{"q-code":"html","data-quickpaper-2bebec7d":""},["<div v-bind:isLogin='$store.getters.isLogin'></div>"]),e("p",{"data-quickpaper-2bebec7d":""},["可以发现，只是把",e("span",{class:"warn","data-quickpaper-2bebec7d":""},["state"]),"改成了",e("span",{class:"warn","data-quickpaper-2bebec7d":""},["getters"]),"。"]),e("h4",{"data-quickpaper-2bebec7d":""},["Mutations"]),e("p",{"data-quickpaper-2bebec7d":""},["同样的，如果我们现在需要修改登录状态："]),e("pre",{"q-code":"","data-quickpaper-2bebec7d":""},["......↵    mutations: {↵        changeLoginState: (state, isLogin) => {↵            // 设置前需要先转成boolean值↵            state.isLogin = isLogin == 'YES' ? true : false;↵        }↵    }↵......"]),e("p",{"data-quickpaper-2bebec7d":""},["然后使用的时候："]),e("pre",{"q-code":"","data-quickpaper-2bebec7d":""},["this.$store.commit('changeLoginState', \"YES\");"]),e("h4",{"data-quickpaper-2bebec7d":""},["Actions"]),e("p",{"data-quickpaper-2bebec7d":""},["因为",e("span",{class:"warn","data-quickpaper-2bebec7d":""},["Mutations"]),"中必须是同步函数，如果需要异步操作："]),e("p",{class:"warn","data-quickpaper-2bebec7d":""},["特别说明：Mutations不可以异步的原因是为了保证devtool工具可以正确的追踪数据。"]),e("pre",{"q-code":"","data-quickpaper-2bebec7d":""},['......↵    actions: {↵        changeLoginState: (context, isLogin) => {↵            setTimeout(()=>{↵                context.commit("changeLoginState", isLogin);↵            }, 1000);↵        }↵    }↵......']),e("p",{"data-quickpaper-2bebec7d":""},["使用的时候也很简单："]),e("pre",{"q-code":"","data-quickpaper-2bebec7d":""},["this.$store.dispatch('changeLoginState', 'YES');"])])};a.default=p}}]);