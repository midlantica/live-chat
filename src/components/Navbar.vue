<template>
  <nav v-if="user">
    <div>
      <p>Hello {{ user.displayName }}</p>
      <p class="email">Email: {{ user.email }}</p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
  import useLogout from '../composables/useLogout'
  import getUser from '../composables/getUser'

  export default {
    setup() {
      const { logout, error } = useLogout()
      const { user } = getUser()

      const handleClick = async () => {
        await logout()
        if(!error.value) {
          console.log('user logged out')
        }
      }

      return { handleClick, user }

    }
  }
</script>

<style>
  nav {
    padding: 1rem 1rem 1rem 2rem;
    border-bottom: var(--input-borders);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: var(--base-font-size);
    color: var(--base-text-color);
  }
  nav p.email {
    font-size: var(--base-font-size);
    color: var(--base-text-color);
  }
</style>
