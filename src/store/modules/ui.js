
const state = {
  nightMode: JSON.parse(localStorage.getItem('night_mode'))
};

const actions = {
  nightModeSwitch({ commit }) {
    commit('switchNightMode');
  }
};

const mutations = {
  switchNightMode(state) {
    state.nightMode = !state.nightMode;
    localStorage.setItem('night_mode', state.nightMode);
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
