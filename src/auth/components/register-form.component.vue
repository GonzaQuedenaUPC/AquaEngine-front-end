<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

defineOptions({
  name: 'register-form'
});

const router = useRouter();

const fullName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const city = ref('');
const country = ref('');
const userType = ref('');

const isEmailValid = computed(() => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email.value);
});

const passwordsMatch = computed(() => {
  return confirmPassword.value === password.value || confirmPassword.value.length === 0;
});

const onSubmit = () => {
  // TO-DO: Implement form submission
}
</script>

<template>
  <form @submit.prevent="onSubmit" class="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
    <h2 class="text-lg font-semibold text-center mb-4">Create an Account</h2>

    <div class="input__grid">
      <input v-model="fullName" type="text" placeholder="Full Name" class="form__input"/>
      <input v-model="email" type="email" placeholder="Email"
             :class="{'form__input': true, 'form__input--error': !isEmailValid && email.length > 0 }"/>

      <input v-model="password" type="password" placeholder="Password" class="form__input"/>
      <input v-model="confirmPassword" type="password" placeholder="Confirm Password"
             :class="{'form__input': true, 'form__input--error': !passwordsMatch}"/>

      <input v-model="city" type="text" placeholder="City" class="form__input"/>
      <input v-model="country" type="text" placeholder="Country" class="form__input"/>
    </div>

    <div class="mt-4 mb-4">
      <label class="flex items-center">
        <input type="radio" v-model="userType" value="machinery" class="mr-2"/>
        <span>Fishing machinery producer</span>
      </label>

      <label class="flex items-center mt-2">
        <input type="radio" v-model="userType" value="company" class="mr-2"/>
        <span>Fishing company</span>
      </label>
    </div>

    <button type="submit" class="w-full bg-black text-white py-2 rounded-lg hover:bg-[#8298E7] focus:outline-none
      focus:ring-2 focus:ring-black
        focus:ring-opacity-50 cursor-pointer" :disabled="!isEmailValid || !passwordsMatch">Sign Up</button>
  </form>
</template>

<style scoped>
.input__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.form__input {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 8px 12px;
  outline: none;
  transition: border-color 0.2s;
  width: 100%;
}

.form__input:focus {
  border-color: #4A90E2;
}

.form__input--error {
  border-color: red;
}
</style>