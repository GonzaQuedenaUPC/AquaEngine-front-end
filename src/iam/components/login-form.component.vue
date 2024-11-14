<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'login-form'
});

const email = ref('');
const password = ref('');
const showPassword = ref(false);

const onSubmit = () => {
  console.log(email);
  console.log(password);
}

const togglePassword = () => {
  showPassword.value = !showPassword.value;
}

</script>

<template>
  <form class="bg-white p-8 rounded-lg shadow-lg " v-on:submit.prevent="onSubmit">
    <h1 class="text-xl font-bold text-center mb-6">
      Welcome to <span class="text-[#8298E7]">AquaEngine</span>
    </h1>

    <div class="mb-4">
      <input v-model="email" type="email" class="w-full px-3 py-2 border
        rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Email"/>
    </div>

    <div class="mb-6 relative">
      <input :type="showPassword ? 'text' : 'password'" v-model="password" class="w-full px-3
        py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Password"/>

      <button
          type="button" @click="togglePassword" :disabled="password.length === 0" class="absolute right-3 top-2
            text-gray-600 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed">

        <span v-if="showPassword" class="w-5 h-5">
          <img src="../../assets/images/unlocked-password.svg" class="w-[25px]" alt="unlocked-password"/>
        </span>

        <span v-else class="w-5 h-5">
          <img src="../../assets/images/locked-password.svg" class="w-[25px]" alt="locked-password"/>
        </span>
      </button>
    </div>

    <div class="mb-4">
      <button type="submit" class="w-full bg-black text-white py-2 rounded-lg
        hover:bg-[#8298E7] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50">Sign In</button>
    </div>

    <div class="text-center text-gray-600 text-sm">
      <p>You already have an account?
        <router-link to="/register" class="hover:underline">
          <span class="font-semibold text-black">Sign Up</span></router-link>
      </p>

    </div>
  </form>
</template>

<style scoped>

</style>