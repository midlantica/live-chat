<template>
  <form @click="handleSubmit">
    <textarea
      name=""
      cols="30"
      rows="10"
      placeholder="Type a message and hit enter to send..."
      v-model="message"
    ></textarea>
  </form>
</template>

<script>
  import { ref } from 'vue'
  import getUser from '../composables/getUser'

  export default {
    import { user } = getUser()
    const message = ref('')

    const handleSubmit = async () => {
      const chat = {
        message: message.value
      }
    }
  }
</script>

<style>

</style>
