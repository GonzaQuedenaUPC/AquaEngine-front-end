<script setup>

import LoginForm from '../components/sign-in-form.component.vue'

defineOptions({
  name: 'sign-in-view'
});

</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div class="flex flex-col md:flex-row w-full h-full px-4 md:px-0">

      <div class="w-full md:w-1/2 h-full flex items-center justify-center p-1">
        <login-form/>
      </div>

      <div class="hidden md:flex w-full md:w-1/2 h-full">
        <img src="https://shorturl.at/4SeZH" alt="aqua-engine-login-screen" class="w-full h-full object-cover"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>