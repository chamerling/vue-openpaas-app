import Vue from 'vue';

const types = {
  FETCH_UNREAD_NOTIFICATIONS_COUNT: 'FETCH_UNREAD_NOTIFICATIONS_COUNT'
};

const state = {
  unread: 0
};

const mutations = {
  [types.FETCH_UNREAD_NOTIFICATIONS_COUNT](state, value) {
    state.unread = value;
  }
};

const getters = {
};

const actions = {
  fetchUnreadNotificationsCount({ commit }) {
    Vue.axios.get('api/user/notifications/unread').then((response) => {
      commit(types.FETCH_UNREAD_NOTIFICATIONS_COUNT, response.data.unread_count);
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
