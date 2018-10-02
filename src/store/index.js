import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import * as getters from './getters';
import state from './state';
import plugins from './plugins';
import mutations from './mutations';
import session from './modules/session';
import ui from './modules/ui';
import usernotifications from './modules/user-notification';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    session,
    ui,
    usernotifications
  },
  state: state(),
  actions,
  getters,
  mutations,
  plugins,
  strict: process.env.NODE_ENV !== 'production'
});
