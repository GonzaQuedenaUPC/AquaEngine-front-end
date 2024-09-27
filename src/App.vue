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
  <div class="app__container">
    <header class="header">
      <toolbar-content :profile="this.profile"/>
    </header>

    <main class="main">
      <router-view @profile-selected="onProfileLoaded" @profile-loaded="onProfileLoaded" :inventory="this.inventory"/>
    </main>
  </div>
</template>

<style scoped>

.app__container {
  display: flex;
  height: 100vh;
  flex-direction: column;
}

.header {
  width: 100%;
}

.main {
  /*main ocupa el espacio restante */
  flex-grow: 1;
  overflow-y: auto;
}

</style>
