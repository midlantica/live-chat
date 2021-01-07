<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="display name" v-model="displayName">
    <input type="email" required placeholder="email" autocomplete="username" v-model="email">
    <input type="password" reauired placeholder="password" autocomplete="current-password" v-model="password">
    <button>Sign up</button>
  </form>
</template>

<script>
  import { ref } from 'vue'
  import useSignup from '../composables/useSignup.js'

  export default {
    setup() {
      const { error, signUp } = useSignup()

      // refs
      const displayName = ref('')
      const email = ref('')
      const password = ref('')

      const handleSubmit = async () => {
        await signUp(email.value, password.value, displayName.value)
        console.log("User signed up!!!!!!! Yeehaw!");
      }

      return { displayName, email, password, handleSubmit }
    }
  }
</script>

<style>

</style>
