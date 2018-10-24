<template>
    <v-menu
      :close-on-content-click="true"
      :nudge-width="200"
      bottom
      offset-y
    >
      <v-btn icon slot="activator" >
        <v-icon>apps</v-icon>
      </v-btn>

      <v-card>
        <v-container grid-list-xl fluid>
          <v-layout row wrap>
            <v-flex xs4 d-flex>
              <v-icon large color="blue" @click="goTo('Home')">home</v-icon>
            </v-flex>
            <v-flex xs4 d-flex>
              <v-icon large color="blue" @click="goTo('VideoConference')">video_call</v-icon>
            </v-flex>
            <v-flex xs4 d-flex>
              <v-icon large color="blue">settings</v-icon>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-menu>
</template>


<script>
export default {
  // TODO: Menu items should come from the server
  data: () => ({
  }),
  methods: {
    goTo(name) {
      this.$router.push({ name });
    }
  }
}
</script>
