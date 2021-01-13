<template>
  <form>
    <textarea
      name=""
      placeholder="Type a message and hit enter to send..."
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <div v-if="error" class="error">{{ error }}</div>
  </form>
</template>

<script>
  import getUser from '../composables/getUser'
  import useCollection from '../composables/useCollection'
  import { timestamp } from '../firebase/config'
  import { ref } from 'vue'

  export default {
    setup() {
      const { user } = getUser()
      const { addDoc, error } = useCollection('messages')
      // refs
      const message = ref('')

      const handleSubmit = async () => {
        const chat = {
          name: user.value.displayName,
          message: message.value,
          createdAt: timestamp()
        }
        //console.log(chat)

        await addDoc(chat)
        if(!error.value) {
          message.value = ''
        }
      }
      return { message, handleSubmit, error }
    }
  }
</script>

<style scoped>
  textarea {
    border: var(--input-borders);
    border-radius: .15rem .15rem .15rem .5rem ;
    padding: .5rem;
    font-family: inherit;
    font-weight: light;
    color: var(--brand);
    width: 100%;
  }

  textarea::placeholder {
    color: rgb(184, 184, 184);
  }

  textarea:focus {
    border: 1px hsl(0, 0%, 85%) solid;
    outline: none;
    background: rgb(252, 255, 220);
  }


</style>
