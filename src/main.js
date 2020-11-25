// --- IMPORTS ---
// Third party
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'nes.css/css/nes.min.css';

// Essentials
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// --- USES ---
Vue.use(BootstrapVue);

// --- CONFIGS ---
// Prevent the production tip on Vue startup
Vue.config.productionTip = false;

// --- INITIALIZATION ---
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
