<template>
    <button id="logout-btn" @click="logout">Logout</button>
</template>

<script lang="ts">
import Vue from 'vue'
import { authLogout } from '@app/modules/auth/use-case'

export default Vue.extend({
  name: 'AuthLogoutComponent',

  methods: {
    async logout() {
      try {
        await authLogout.execute()
      } catch (err) {
        // TODO: Handle error
      }
    },
  },
})
</script>

