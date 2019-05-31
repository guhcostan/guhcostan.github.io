import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-theme-chalk'
import Vuetify from 'vuetify'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
