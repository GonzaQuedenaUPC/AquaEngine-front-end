<script>

export default {
name: "ordering-machinery",
  props:{
    ordering: {
      type: Object,
      required: true
    }
  },
}
</script>

<template>
  <div class="ordering__cards">
    <div v-for="item in ordering" :key="item.id" class="ordering__card">
      <pv-card>
        <template #title>
          ID: {{ item.id }}
        </template>
        <template #content>
          <p>{{ item.machine }}</p>
          <p>{{ item.request }}</p>
          <p>{{ item.units }}</p>
        </template>
        <template #footer>
          <router-link :to>
            <pv-button label="Request" severity="success" class="request__button"/>
          </router-link>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<style scoped>

</style>