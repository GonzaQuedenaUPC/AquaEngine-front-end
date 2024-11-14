<script>
import toolbarContent from './public/components/toolbar.component.vue';

export default {
  components: {
    toolbarContent
  },
  data() {
    return {
      profile: {},
      inventory: []
    }
  },

  methods: {
    onProfileLoaded(value) {
      this.profile = value;
      this.inventory = value.inventory || [];
      localStorage.setItem('profile', JSON.stringify(this.profile));
    },
  },

  mounted() {
    const savedUser = localStorage.getItem('profile');

    if (savedUser) {
      this.profile = JSON.parse(savedUser);
      this.inventory = this.profile.inventory || [];
    }
  }
}

</script>

<template>
  <div class="app__container h-screen flex flex-col lg:overflow-hidden">
    <header v-if="$route.meta.showToolbar" class="header">
      <toolbar-content :profile="profile"/>
    </header>

    <main class="main  h-full flex flex-col items-center justify-center">
      <router-view @profile-selected="onProfileLoaded" @profile-loaded="onProfileLoaded" :inventory="inventory"/>
    </main>
  </div>
</template>

<style scoped>

</style>
