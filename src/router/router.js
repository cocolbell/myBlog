/**
 * 整个app的路由设置
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import index from './../view/index.vue'
import interests from './../view/interests.vue'
import archives from './../view/archives.vue'
import login from './../view/login.vue'
import articleEdit from './../view/articleEdit.vue'
import article from './../view/article.vue'
import message from './../view/message.vue'
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
    },{
      path: '/messages',
      component: message
    },{
      path: '/admin/login',
      component: login
    },{
      path: '/admin/articleEdit',
      component: articleEdit
    }]
})

export default router