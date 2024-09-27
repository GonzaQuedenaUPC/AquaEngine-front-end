<script>
import toolbarContent from './public/components/toolbar.component.vue';

export default {

  components: {
    toolbarContent
  }
}

</script>

<template>
  <toolbar-content :user="{ username: 'Gonzalo' }"/>
  <main class="main">
    <router-view/>
  </main>
</template>

<style scoped>

</style>
