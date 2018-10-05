import Vue from 'vue';

const state = {
  jwtToken: localStorage.getItem('default_auth_token'),
  user: null
};

const types = {
  AUTHENTICATED: 'AUTHENTICATED',
  AUTHENTICATING: 'AUTHENTICATING',
  FETCH_USER: 'FETCH_USER',
  SET_JWT_TOKEN: 'SET_JWT_TOKEN'
};

const actions = {
  login({ commit }) {
    commit(types.AUTHENTICATING, true);
    commit(types.AUTHENTICATED, true);
  },

  logout({ dispatch }) {
    return new Promise((resolve) => {
      Vue.auth.logout();
      dispatch('resetSession');
      resolve();
    });
  },

  resetSession({ commit, dispatch }) {
    // TODO, should reset the whole store
    commit(types.FETCH_USER, {});
    dispatch('setJWTToken', null);
  },

  fetchUser({ commit }) {
    Vue.axios.get('api/user').then((response) => {
      commit(types.FETCH_USER, response.data);
    });
  },

  fetchJWToken() {
    Vue.axios.post('api/jwt/generate').then(response => response.data);
  },

  setJWTToken({ commit }, token) {
    commit(types.SET_JWT_TOKEN, token);
  }
};

const mutations = {
  [types.AUTHENTICATED](state, value) {
    state.authenticated = value;
  },

  [types.AUTHENTICATING](state, value) {
    state.authenticating = value;
  },

  [types.FETCH_USER](state, value) {
    state.user = value;
  },

  [types.SET_JWT_TOKEN](state, value) {
    state.jwtToken = value;
  }
};

const getters = {
  getUserAvatarUrl(state, getters, rootState) {
    return state.user && state.user._id && `${rootState.baseUrl}/api/users/${state.user._id}/profile/avatar`;
  },

  getUserName(state) {
    return state.user && `${state.user.firstname} ${state.user.lastname}`;
  },

  getUserEmail(state) {
    return state.user && state.user.preferredEmail;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
