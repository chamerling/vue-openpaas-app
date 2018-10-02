<template lang="pug">
  span Hello {{getUserName}}
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'Home',
    computed: {
      ...mapGetters('session', ['getUserName'])
    }
  }
</script>
