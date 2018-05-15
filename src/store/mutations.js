import * as types from './mutation-types';

export default {
  [types.AUTHENTICATED](state, value) {
    state.session.authenticated = value;
  },

  [types.AUTHENTICATING](state, value) {
    state.session.authenticating = value;
  },

  [types.FETCH_USER](state, value) {
    state.session.user = value;
  },

  [types.SET_JWT_TOKEN](state, value) {
    state.session.jwtToken = value;
  }
};
