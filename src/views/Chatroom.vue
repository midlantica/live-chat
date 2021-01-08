<template>
  <Navbar />
  <div class="chat-wrapper">
    <h3>Chat room</h3>
  </div>

</template>

<script>
  import Navbar from "../components/Navbar.vue"

  export default {
    components: { Navbar }
  }
</script>

<style>
  .chat-wrapper {
    padding: 1rem 2rem;
  }
</style>
