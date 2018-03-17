import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex'
Vue.use(Vuex)

import axios from 'axios'
Vue.prototype.$ajax = axios;

import _Global from './global/global'
Vue.prototype._Global = _Global;

import router from './router/router'

Vue.filter('dateToCn', function (value) {
    if (!value) return '';
    return _Global.toCn(value);
})

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
