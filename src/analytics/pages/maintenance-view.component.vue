<script>
import MaintenanceManagementComponent from "../components/maintenance-management.component.vue";
import { MaintenanceService } from "../services/maintenance.service.js";

export default {
  name: "MaintenanceView",
  components: {
    MaintenanceManagementComponent
  },
  data() {
    return {
      localMaintenance: [],
      maintenanceService: new MaintenanceService()
    };
  },
  async created() {
    try {
      const response = await this.maintenanceService.getAll();
      this.localMaintenance = response;
    } catch (error) {
      console.error('Failed to load maintenance data:', error);
    }
  }
};
</script>

<template>
  <section class="container">
    <div class="p-3">
      <div class="maintenance__title"><h1 class="maintenance__title__h1">Maintenance Logs</h1></div>
      <p class="mb-4">Track the logs of your machines</p>
      <maintenance-management-component/>
    </div>
  </section>
</template>

<style scoped>
.maintenance__title__h1 {
  font-size: 40px;
}

.container {
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: row-reverse;
}
</style>