<script>
import toolbarContent from './public/components/toolbar.component.vue';

export default {

  components: {
    toolbarContent
  }
}

</script>

<template>
  <div class="app__container">
    <header class="header">
      <toolbar-content :user="{ username: 'Gonzalo' }"/>
    </header>
    <main class="main">
      <router-view/>
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
