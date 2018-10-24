<template lang="pug">
  #video
    #jitsi(v-show="loaded" ref="jitsivideo")
    .text-xs-center(v-show="!loaded")
      v-progress-circular( indeterminate color="amber" :size="50")
      .title.pa-3 Loading conference...
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'VideoConference',
    data() {
      return {
        videoConference: null,
        loaded: false
      }
    },
    computed: {
      ...mapGetters('session', ['getUserName', 'getUserAvatarUrl', 'getUserEmail'])
    },
    mounted() {
      this.videoConference = new JitsiMeetExternalAPI('janus.hubl.in', {
        // TODO: Get the room name from the router
        roomName: 'OpenPaaSRoom',
        parentNode: this.$refs.jitsivideo,
        interfaceConfigOverwrite: {
          SHOW_JITSI_WATERMARK: false,
          SHOW_BRAND_WATERMARK: false,
          SHOW_WATERMARK_FOR_GUESTS: false
        },
        onload: event => {
          this.loaded = true;
        }
      });

      this.videoConference.on('videoConferenceJoined', () => {
        this.videoConference.executeCommand('avatarUrl', this.getUserAvatarUrl);
        this.videoConference.executeCommand('displayName', this.getUserName);
        this.videoConference.executeCommand('email', this.getUserEmail);
      });
    }
  }
</script>

<style scoped lang="stylus">
  #video {
    width: 100%
  }

  #jitsi {
    width: 100%
    height: calc(100vh - 64px - 24px)
  }
</style>

