// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App';
import router from './router';
import store from './store';
import './main.styl';

Vue.use(Vuetify);
Vue.use(VueAxios, axios);
Vue.router = router;
axios.defaults.baseURL = store.state.baseUrl;

Vue.config.productionTip = false;

Vue.use(require('@websanova/vue-auth'), {
  auth: require('./services/auth-jwt'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x'),
  refreshData: {
    enabled: false
  },
  fetchData: {
    url: 'api/user',
    method: 'GET',
    enabled: true
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
