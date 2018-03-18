/**
 * 整个app的路由设置
 */
/**
 * 关于VUE路由懒加载还可以使用AMD规范写法，如下：
 * const archives = resolve => require(['./../view/archives.vue'], resolve)  
 * 但是为了规范化代码，我们采用CommonJS的规范来书写这个异步组件的工厂函数
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import index from './../view/index.vue'
const interests = r => require.ensure([], () => r(require('./../view/interests.vue')), 'interests')
// const archives = r => require.ensure([], require => require('./../view/archives.vue'), 'archives')
const archives = r => require.ensure([], () => r(require('./../view/archives.vue')), 'archives')
const login = r => require.ensure([], () => r(require('./../view/login.vue')), 'login')
const articleEdit = r => require.ensure([], () => r(require('./../view/articleEdit.vue')), 'articleEdit')
const article = r => require.ensure([], () => r(require('./../view/article.vue')), 'article')
// const message = r => require.ensure([], () => r(require('./../view/message.vue')), 'message')
Vue.use(VueRouter)
const router = new VueRouter({
  	routes: [{
    path: '/',
    component: index
    },{
		name:'articles',
		path: '/articles/:id',
		component: article
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