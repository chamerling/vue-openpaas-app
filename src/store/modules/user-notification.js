import Vue from 'vue';

const state = {
  unread: 0
};

const types = {
  FETCH_UNREAD_NOTIFICATIONS_COUNT: 'FETCH_UNREAD_NOTIFICATIONS_COUNT'
};

const actions = {
  fetchUnreadNotificationsCount({ commit }) {
    Vue.axios.get('api/user/notifications/unread').then((response) => {
      commit(types.FETCH_UNREAD_NOTIFICATIONS_COUNT, response.data.unread_count);
    });
  }
};

const mutations = {
  [types.FETCH_UNREAD_NOTIFICATIONS_COUNT](state, value) {
    state.unread = value;
  }
};

const getters = {
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
