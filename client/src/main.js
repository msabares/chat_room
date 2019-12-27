import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueAxios from 'vue-axios'
import VueSocketIO from 'vue-socket.io'


Vue.use(
    new VueSocketIO ({
      connection: 'http://localhost:3000',
    }),
    VueAxios);

Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
}).$mount('#app');
