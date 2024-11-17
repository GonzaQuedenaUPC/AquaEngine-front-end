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
  <div class="monitoring__scroll-container">
    <div class="monitoring__cards">
      <div v-for="item in monitoring" :key="item.id" class="monitoring__card">
        <pv-card>
          <template #title>
            ID: {{ item.id }}
          </template>
          <template #content>
            <img :src="item.urlToImage" alt="Machine Image" class="machine__image"/>
            <p><strong>Name:</strong> {{ item.name }}</p>
            <p><strong>Status:</strong> {{ item.status }}</p>
          </template>
          <template #footer>
            <router-link :to="`/maintenance`">
              <pv-button label="Maintenance Logs" severity="success" class="logs__button"/>
            </router-link>
          </template>
        </pv-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.monitoring__scroll-container {
  max-height: 400px;
  overflow-y: auto;
  padding: 10px;
}
.machine__image{
  width: 200px;
  height: 100px;
  object-fit: cover;
}

/*estilos para el scrollbar */
.monitoring__scroll-container::-webkit-scrollbar {
  width: 10px;
}

.monitoring__scroll-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.monitoring__scroll-container::-webkit-scrollbar-thumb {
  background: #8298E7;
  border-radius: 10px;
}

.monitoring__scroll-container::-webkit-scrollbar-thumb:hover {
  background: #6b7cf3;
}

.monitoring__cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
}

.monitoring__card {
  flex: 1 1 calc(33.333% - 20px);
  min-width: 250px;
  box-sizing: border-box;
}

.logs__button {
  background-color: #8298E7;
}
</style>
