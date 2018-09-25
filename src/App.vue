<template>
  <v-app id="openpaas">
    <div v-if="$auth.ready()">
      <v-toolbar
        v-if="$auth.check()"
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        color="blue"
        dark
        app
        fixed
      >
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
          <img class="hidden-sm-and-down" id="header-logo" src="@/assets/openpaas-logo.svg"/>
        </v-toolbar-title>
        <v-text-field
          flat
          solo-inverted
          prepend-icon="search"
          label="Search"
          class="hidden-sm-and-down"
        ></v-text-field>
        <v-spacer></v-spacer>
        <notification-icon/>
        <applications-menu/>
        <v-menu bottom left offset-y>
          <v-avatar size="32px" slot="activator">
            <img v-if="getUserAvatarUrl" :src="getUserAvatarUrl">
            <v-icon v-else>account_circle</v-icon>
          </v-avatar>
          <v-list>
            <v-list-tile @click.prevent="logout">
              <v-list-tile-title>Logout</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
            <router-view/>
          </v-layout>
        </v-container>
      </v-content>
    </div>
    <div v-if="!$auth.ready()">
      <v-progress-circular indeterminate :size="50" color="primary"></v-progress-circular>
    </div>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import ApplicationsMenu from '@/components/header/ApplicationsMenu.vue';
import NotificationIcon from '@/components/header/NotificationIcon.vue';

export default {
  name: 'App',
  created () {
    this.$auth.ready(() => {
      this.$store.dispatch('fetchUser');
    });
  },
  methods: {
    logout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push({name: 'Login'});
      });
    }
  },
  computed: {
    ...mapGetters(['getUserAvatarUrl'])
  },
  components: {
    'applications-menu': ApplicationsMenu,
    'notification-icon': NotificationIcon
  }
}
</script>

<style lang="stylus" scoped>
  #header-logo
    height: 35px;
    width: 150px;
</style>
