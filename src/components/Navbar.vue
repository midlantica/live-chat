<template>
  <nav v-if="user">
    <div>
      <h2>Hello {{ user.displayName }}</h2>
      <!-- <p class="email"><a href="mailto:{{user.email}}" target="_blank">{{ user.email }}</a></p> -->
      <p class="email"><a :href="'mailto:' + user.email" target="_BLANK">{{user.email}}</a></p>
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
  nav h2 {
    font-weight: 100;
    line-height: 0rem;
    text-transform: capitalize;
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
  nav p.email a {
    text-decoration: none;
    color: var(--base-text-color);
  }
  nav p.email a:hover {
    color: var(--brand);
    background: rgb(255, 255, 123);
  }
</style>
