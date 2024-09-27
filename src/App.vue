<script>
import toolbarContent from './public/components/toolbar.component.vue';

export default {

  components: {
    toolbarContent
  },

  data() {
    return {
      user: {},
    }
  },

  methods: {
    onProfileLoaded(value) {
      this.user = value;
      console.log(this.user);
    }
  }
}

</script>

<template>
  <div class="app__container">
    <header class="header">
      <toolbar-content :user="this.user"/>
    </header>

    <main class="main">
      <router-view @profile-selected="onProfileLoaded"/>
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
