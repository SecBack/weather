import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from '../views/App.vue'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: {
    App
  }
});
