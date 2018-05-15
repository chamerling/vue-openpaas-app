import Vue from 'vue';
import * as types from './mutation-types';

export const login = ({ commit }) => {
  commit(types.AUTHENTICATING, true);
  commit(types.AUTHENTICATED, true);
};

export const logout = ({ dispatch }) => new Promise((resolve) => {
  Vue.auth.logout();
  dispatch('resetSession');
  resolve();
});

export const resetSession = ({ commit, dispatch }) => {
  // TODO, should reset the whole store
  commit(types.FETCH_USER, {});
  dispatch('setJWTToken', null);
};

export const fetchUser = ({ commit }) => {
  Vue.axios.get('api/user').then((response) => {
    commit(types.FETCH_USER, response.data);
  });
};

export const fetchJWToken = () => Vue.axios.post('api/jwt/generate').then(response => response.data);

export const setJWTToken = ({ commit }, token) => {
  commit(types.SET_JWT_TOKEN, token);
};
