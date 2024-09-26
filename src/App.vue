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
</template>

<style scoped>

</style>
