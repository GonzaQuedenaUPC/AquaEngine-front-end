<script>
import {SignInRequest} from "../model/sign-in.request.js";
import {useAuthenticationStore} from "../services/authentication.store.js";

export default {
  name: 'sign-in',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    onSignIn() {
      let authenticationStore = useAuthenticationStore();
      let signInRequest = new SignInRequest(this.username, this.password);
      authenticationStore.signIn(signInRequest, this.$router);
    }
  }
}

</script>

<template>
  <div class="sign-in__container">
    <div class="sign-in__form">
      <div>
        <h1 class="title">Sign In</h1>
      </div>
      <p class="p-fluid mb-5">Please enter the required information to sign in.</p>
      <div>
        <form @submit.prevent="onSignIn">
          <div class="p-fluid">
            <div class="field mt-5">
              <pv-float-label>
                <label for="username">Username</label>
                <pv-input-text id="username" v-model="username" :class="{'p-invalid': !username }"/>
                <small v-if="!username" class="p-invalid">Username is required.</small>
              </pv-float-label>
            </div>
            <div class="field mt-5">
              <pv-float-label>
                <label for="password">Password</label>
                <pv-input-text id="password" v-model="password" :class="{'p-invalid': !password }" type="password"/>
                <small v-if="!password" class="p-invalid">Password is required.</small>
              </pv-float-label>
            </div>

            <div class="mb-4">
              <button type="submit" class="w-full bg-black text-white py-2 rounded-lg
            hover:bg-[#8298E7] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50">Sign In
              </button>
            </div>

            <div class="text-center text-gray-600 text-sm">
              <p>Already have an account?
                <router-link to="/sign-up" class="hover:underline">
                  <span class="font-semibold ">Sign Up</span>
                </router-link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="image-container">
      <img src="https://shorturl.at/4SeZH" alt="aqua-engine-login-screen" class="cover-image"/>
    </div>
  </div>
</template>

<style scoped>
.sign-in__container {
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.sign-in__form{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
}

.title {
  font-size: 60px;
}

.image-container {
  flex: 1;
  display: flex;
}

.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>