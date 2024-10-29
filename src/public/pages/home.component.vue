<template>
  <div class="home-container">
    <h1>AquaEngine - Gestión de Inventario de Máquinas de Pesca</h1>
    <div class="feature-grid">
      <router-link to="/inventory" class="feature-item">
        <pv-card class="feature-card">
          <template #content>
            <div class="feature-content">
              <img src="../../assets/images/inventory.svg" alt="inventory-icon" class="feature-icon" />
              <span>Inventory</span>
            </div>
          </template>
        </pv-card>
      </router-link>

      <router-link to="/invoicing" class="feature-item">
        <pv-card class="feature-card">
          <template #content>
            <div class="feature-content">
              <img src="../../assets/images/invoicing.svg" alt="invoicing-icon" class="feature-icon" />
              <span>Invoicing</span>
            </div>
          </template>
        </pv-card>
      </router-link>

      <router-link to="/monitoring" class="feature-item">
        <pv-card class="feature-card">
          <template #content>
            <div class="feature-content">
              <img src="../../assets/images/monitoring.svg" alt="monitoring-icon" class="feature-icon" />
              <span>Equipment Monitoring</span>
            </div>
          </template>
        </pv-card>
      </router-link>

      <router-link to="#" class="feature-item">
        <pv-card class="feature-card">
          <template #content>
            <div class="feature-content">
              <img src="../../assets/images/machinery.svg" alt="machinery-icon" class="feature-icon" />
              <span>Ordering Machine</span>
            </div>
          </template>
        </pv-card>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
}
</script>

<style scoped>
.home-container {
  padding: 2rem;
}

h1 {
  color: #6495ED;
  margin-bottom: 2rem;
  text-align: center;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.feature-item {
  text-decoration: none;
}

.feature-card {
  background-color: #2a2a2a;
  transition: transform 0.3s ease;
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 100%;
}

.feature-icon {
  width: 64px;
  height: 64px;
  margin-bottom: 1rem;
}

span {
  color: #ffffff;
  font-size: 1.2rem;
  text-align: center;
}
</style>