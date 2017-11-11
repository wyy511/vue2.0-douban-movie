// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRoter from 'vue-router'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/index'

Vue.use(VueRoter)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    axios,
    template: '<App/>',
    components: { App }
})