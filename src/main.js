import Vue from 'vue';
import Vuetify from 'vuetify';
import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue';
import auth from './services/auth/index';
import router from './router';
import store from './store';
import './main.styl';

Vue.use(Vuetify);
Vue.use(VueAxios, axios);
Vue.router = router;
axios.defaults.baseURL = store.state.baseUrl;

Vue.use(require('@websanova/vue-auth'), auth);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
