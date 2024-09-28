<script>
export default {
  name: "monitoring-management",
  props: {
    monitoring: {
      type: Array,
      required: true
    }
  }
};
</script>

<template>
  <div class="monitoring__cards">
    <div v-for="item in monitoring" :key="item.id" class="monitoring__card">
      <pv-card>
        <template #title>
          ID: {{ item.id }}
        </template>
        <template #content>
          <p><strong>Name:</strong> {{ item.name }}</p>
          <p><strong>Last Maintenance Date:</strong> {{ item.lastMaintenance }}</p>
          <p><strong>Status:</strong> {{ item.status }}</p>
        </template>
        <template #footer>
          <router-link :to="`/monitoring/${item.id}/maintenance/`">
            <pv-button label="Maintenance Logs" severity="success" class="logs__button"/>
          </router-link>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<style scoped>
.monitoring__cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.monitoring__card {
  width: calc(33.333% - 20px);
}
.logs__button{
  background-color: #8298E7;
}

</style>