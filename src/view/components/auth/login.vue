<template>
  <div>
    <input v-model="username" name="username" type="text" placeholder="username" />
    <input v-model="password" name="password" type="password" placeholder="password" />
    <button id="login-btn" @click="login">Login</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { authLogin } from '@app/modules/auth/use-case'

export default Vue.extend({
  name: 'AuthLoginComponent',

  data() {
    return {
      username: 'username',
      password: 'password',
    }
  },

  methods: {
    async login() {
      try {
        await authLogin.execute(this.username, this.password)
        // User is logged in
      } catch (err) {
      // TODO: Handle error
      }
    },
  },
})
</script>

