<template>
  <form>
    <textarea
      name=""
      cols="30"
      rows="10"
      placeholder="Type a message and hit enter to send..."
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
  </form>
</template>

<script>
  import getUser from '../composables/getUser'
  import { timestamp } from '../firebase/config'
  import { ref } from 'vue'

  export default {
    setup() {
      const { user } = getUser()
      // refs
      const message = ref('')
      const handleSubmit = async () => {
        const chat = {
          name: user.value.displayName,
          message: message.value,
          createdAt: timestamp()
        }
        console.log(chat)
        message.value = ''
      }
      return { message, handleSubmit }
    }
  }
</script>

<style>

</style>
