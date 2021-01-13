<template>
  <h3>Chat room</h3>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages" ref="messages">
      <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import getCollection from '../composables/getCollection'
  import { formatDistanceToNow } from 'date-fns'
  import { computed, onUpdated, ref } from 'vue'

  export default {
    setup() {
      const { error, documents } = getCollection('messages')

      const formattedDocuments = computed(() => {
        if(documents.value) {
          return documents.value.map(doc => {
            let time = formatDistanceToNow(doc.createdAt.toDate())
            return { ...doc, createdAt: time }
          })
        }
      })

      // auto height for messages
      const messages = ref(null)

      onUpdated(() => {
        messages.value.scrollTop = messages.value.scrollHeight
      })

      return { error, documents, formattedDocuments, messages }
    }
  }
</script>

<style>
  h3 {
    margin: 1rem 0 0;
    line-height: 1rem;
  }
  .chat-window {
    /* background: #fafafa; */
    padding: 1rem 0;
  }
  .single {
    margin: 18px 0;
  }
  .created-at {
    display: block;
    color: #999;
    font-size: .85rem;
    margin-bottom: 4px;
  }
  .name {
    font-weight: bold;
    margin-right: 6px;
    font-size: 1rem;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
    font-size: 1rem;
  }
</style>
