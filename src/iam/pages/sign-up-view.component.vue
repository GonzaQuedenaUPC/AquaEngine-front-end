<script setup>
import RegisterForm from '../components/sign-up-form.component.vue'

defineOptions({
  name: 'sign-up-view'
})

</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen px-4 md:px-0">
    <h1 class="text-4xl font-bold text-center mb-4">
      Aqua<span class="text-[#8298E7]">Engine</span>
    </h1>

    <div >
      <register-form/>
    </div>
  </div>
</template>

<style scoped>

</style>