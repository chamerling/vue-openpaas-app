<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar :dark="isNightMode" :color="getMainColor">
              <v-toolbar-title>OpenPaaS Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field prepend-icon="person" name="login" label="Login" type="text" v-model="email"></v-text-field>
                <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="password" required></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                :disabled="logMeIn"
                :loading="logMeIn"
                @click="login">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      logMeIn: false,
      email: null,
      password: null,
    };
  },
  computed: {
    ...mapGetters('ui', ['isNightMode', 'getMainColor'])
  },
  methods: {
    login() {
      this.logMeIn = true;
      this.$auth.login({
        url: 'api/jwt/generate',
        auth: {
          username: this.email,
          password: this.password
        },
        rememberMe: false,
        redirect: { name: 'Home' },
        //fetchUser: false
      })
      .then(response => {
        this.$store.dispatch('session/setJWTToken', response.data);
        // TODO Fetch user CAN BE DONE BY vue-auth
        this.$store.dispatch('session/fetchUser');
        return response.data;
      })
      .catch(err => {
        this.$store.dispatch('ui/displaySnackbar', { message: 'Login error, please retry' });
      })
      .finally(() => {
        setTimeout(() => (this.logMeIn = false), 300);
      });
    }
  }
};
</script>
