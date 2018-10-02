<template>
  <v-btn icon @click="updateNotifications">
    <v-badge color="red" overlap>
      <span slot="badge" v-if="notificationsCount">{{notificationsCount}}</span>
      <v-icon>notifications</v-icon>
    </v-badge>
  </v-btn>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data: function() {
    return {
      interval: null
    }
  },
  computed: mapState({
    notificationsCount: state => state.usernotifications.unread
  }),
  methods: {
    updateNotifications() {
      this.$store.dispatch('usernotifications/fetchUnreadNotificationsCount')
    }
  },
  created: function() {
    this.updateNotifications();
    this.interval = setInterval(() => {
      this.updateNotifications();
    }, 30000);
  },
  beforeDestroy: function() {
    clearInterval(this.interval);
  }
}
</script>
