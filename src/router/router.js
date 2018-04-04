/**
 * 整个app的路由设置
 */
/**
 * 关于VUE路由懒加载还可以使用AMD规范写法，如下：
 * const archives = resolve => require(['./../view/archives.vue'], resolve)  
 * 采用CommonJS规范如下
 * const interests = r => require.ensure([], () => r(require('./../view/interests.vue')), 'interests')
 * const archives = r => require.ensure([], require => require('./../view/archives.vue'), 'archives')
 * 
 * 但是为了规范化代码，我们采用ES6的规范来书写这个异步组件的工厂函数
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import index from './../view/index.vue'

const interests = r => System.import(/* webpackChunkName: "interests" */'./../view/interests.vue');
const archives = r => System.import(/* webpackChunkName: "archives" */'./../view/archives.vue');
const login = r => System.import(/* webpackChunkName: "login" */'./../view/login.vue');
const articleEdit = r => System.import(/* webpackChunkName: "articleEdit" */'./../view/articleEdit.vue');
const artic = r => System.import(/* webpackChunkName: "article" */'./../view/artic.vue');
Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',  
	routes: [{
    path: '/',
    component: index
    },{
		name:'articles',
		path: '/articles/:id',
		component: artic
    },{
		path: '/interests',
		component: interests
    },{
		path: '/archives',
		component: archives
		}
    // },{
		// path: '/messages',
		// component: message
    // },{
		,{
		path: '/admin/login',
		component: login
    },{
		path: '/admin/articleEdit',
		component: articleEdit
    }]
})

export default router