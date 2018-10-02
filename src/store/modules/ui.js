
const state = {
  nightMode: JSON.parse(localStorage.getItem('night_mode'))
};

const mutations = {
  switchNightMode(state) {
    state.nightMode = !state.nightMode;
    localStorage.setItem('night_mode', state.nightMode);
  }
};

const getters = {
  getNightMode(state) {
    return !!state.nightMode;
  }
};

const actions = {
  nightModeSwitch({ commit }) {
    commit('switchNightMode');
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
