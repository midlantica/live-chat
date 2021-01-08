<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="display name" v-model="displayName">
    <input type="email" required placeholder="email" autocomplete="username" v-model="email">
    <input type="password" reauired placeholder="password" autocomplete="current-password" v-model="password">
    <div class="error">{{ error }}</div>
    <button>Sign up</button>
  </form>
</template>

<script>
  import { ref } from 'vue'
  import useSignup from '../composables/useSignup.js'

  export default {
    setup(props, context) {
      const { error, signUp } = useSignup()

      // refs
      const displayName = ref('')
      const email = ref('')
      const password = ref('')

      const handleSubmit = async () => {
        await signUp(email.value, password.value, displayName.value)
        //console.log("User signed up! Yeehaw!");
        if (!error.value) {
          context.emit('signup')
          //console.log('User logged in! Woohoo!');
        }
      }

      return { displayName, email, password, handleSubmit, error }
    }
  }
</script>

<style>

</style>
