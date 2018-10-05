import Vue from 'vue';

const state = {
  nightMode: JSON.parse(localStorage.getItem('night_mode')),
  snackbar: {
    color: 'red',
    message: null,
    timeout: 5000
  }
};

const types = {
  SWITCH_NIGHT_MODE: 'SWITCH_NIGHT_MODE',
  SHOW_SNACKBAR: 'SHOW_SNACKBAR'
};

const actions = {
  nightModeSwitch({ commit }) {
    commit(types.SWITCH_NIGHT_MODE);
  },

  displaySnackbar({ commit }, snackbar) {
    commit(types.SHOW_SNACKBAR, snackbar);
  }
};

const mutations = {
  [types.SWITCH_NIGHT_MODE](state) {
    state.nightMode = !state.nightMode;
    localStorage.setItem('night_mode', state.nightMode);
  },

  [types.SHOW_SNACKBAR](state, snackbar) {
    snackbar.show = true;
    Vue.set(state, 'snackbar', snackbar);
  }
};

const getters = {
  isNightMode(state) {
    return !!state.nightMode;
  },

  getMainColor(state, getters) {
    return getters.isNightMode ? 'black' : 'blue';
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
