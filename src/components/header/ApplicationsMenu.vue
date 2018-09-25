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
              <v-icon large color="blue">home</v-icon>
            </v-flex>
            <v-flex xs4 d-flex>
              <v-icon large color="blue">mail</v-icon>
            </v-flex>
            <v-flex xs4 d-flex>
              <v-icon large color="blue">contacts</v-icon>
            </v-flex>
            <v-flex xs4 d-flex>
              <v-icon large color="blue">calendar_today</v-icon>
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
  })
}
</script>
