<template>
  <v-snackbar v-model="snackbar.show" :color="snackbar.color" :timeout="snackbar.timeout">
    {{snackbar.message}}
    <v-btn dark flat @click="snackbar.show = false">Close</v-btn>
  </v-snackbar>

</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapState('ui', ['snackbar'])
  }
}
</script>

<style>

</style>
