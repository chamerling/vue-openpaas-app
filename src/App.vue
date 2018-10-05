<template>
  <v-app id="openpaas" :dark="isNightMode">
    <div v-if="$auth.ready()">
      <v-navigation-drawer
        v-if="$auth.check()"
        v-model="drawer"
        clipped
        fixed
        app
      >
        <sidebar/>
      </v-navigation-drawer>
      <v-toolbar
        v-if="$auth.check()"
        :color="getMainColor"
        dark
        clipped-left
        app
        fixed
      >
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
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
        <user-menu/>
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
import UserMenu from '@/components/header/UserMenu.vue';
import NotificationIcon from '@/components/header/NotificationIcon.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'App',
  data: () => ({
    drawer: true
  }),
  created () {
    this.$auth.ready(() => {
      this.$store.dispatch('session/fetchUser');
    });
  },
  methods: {
  },
  computed: {
    ...mapGetters('ui', ['isNightMode', 'getMainColor'])
  },
  components: {
    ApplicationsMenu,
    UserMenu,
    NotificationIcon,
    Sidebar
  }
}
</script>

<style lang="stylus" scoped>
  #header-logo
    height: 35px;
    width: 150px;
</style>
