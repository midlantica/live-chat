<template>
  <div class="welcome">
    <h2>Welcome</h2>
    <div v-if="showLogin">
      <h3>Login</h3>
      <LoginForm @login='enterChat' />
      <p>No account yet? <span @click="showLogin = false" class="pseudo-btn">Sign up</span>.</p>
    </div>
    <div v-else>
      <h3>Sign up</h3>
      <SignupForm @signup='enterChat' />
      <p>Already signed up? <span @click="showLogin = true" class="pseudo-btn">Log in</span>.</p>
    </div>
  </div>
</template>

<script>
  import SignupForm from '../components/SignupForm.vue';
  import LoginForm from '../components/LoginForm.vue';
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  export default {
    components: { SignupForm, LoginForm },
    setup() {
      const showLogin = ref(true)
      const router = useRouter(showLogin)

      const enterChat = () => {
        router.push({ name: 'Chatroom' })
      }

      return { showLogin, enterChat }
    }


  }
</script>

<style>
  .welcome {
    text-align: center;
    padding: 2rem 0;
  }
  .welcome h2 {
    color: var(--brand);
  }
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: .75rem;
    border-radius: var(--border-radius);
    border: var(--input-borders);
    outline: none;
    color: var(--base-text);
    margin: .5rem auto;
  }
</style>
