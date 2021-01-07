<template>
  <div class="welcome">
    <h3>Welcome</h3>
    <SignupForm />
  </div>
</template>

<script>
  import SignupForm from '../components/SignupForm.vue';

  export default {
    components: { SignupForm }

  }
</script>

<style>
  .welcome {
    text-align: center;
    padding: 2ren 0;
  }
</style>
