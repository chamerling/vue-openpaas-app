<template>
  <v-menu bottom left offset-y>
    <v-avatar size="32px" slot="activator">
      <img v-if="getUserAvatarUrl" :src="getUserAvatarUrl">
      <v-icon v-else>account_circle</v-icon>
    </v-avatar>
    <v-list>
      <v-list-tile>
        <v-list-tile-content>
        <v-list-tile-title class="title">{{getUserName}}</v-list-tile-title>
        <v-list-tile-sub-title>{{getUserEmail}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider/>
      <v-list-tile @click.prevent="">
        <v-list-tile-title>Profile</v-list-tile-title>
      </v-list-tile>
      <v-divider/>
      <v-list-tile @click.prevent="">
        <v-list-tile-title>Settings</v-list-tile-title>
      </v-list-tile>
      <v-list-tile @click.prevent="logout">
        <v-list-tile-title>Log out</v-list-tile-title>
      </v-list-tile>
      <v-divider/>
      <v-list-tile avatar @click.prevent="nightMode">
        <v-list-tile-content>
          <v-list-tile-title>Night mode</v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-icon id="moon" color="grey lighten-1">brightness_2</v-icon>
      </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'user-menu',
  methods: {
    logout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push({name: 'Login'});
      });
    },

    nightMode() {
      this.$store.dispatch('nightModeSwitch')
    }
  },
  computed: {
    ...mapGetters(['getUserAvatarUrl', 'getUserName', 'getUserEmail', 'getNightMode']),
  }
}
</script>

<style lang="stylus" scoped>
  #moon
    transform: rotate(150deg)
</style>
