<script>
import MaintenanceManagementComponent from "../components/maintenance-management.component.vue";
import { MonitoringService } from "../services/monitoring.service.js";

export default {
  name: "maintenance-view",
  components: {
    MaintenanceManagementComponent
  },
  data() {
    return {
      localMaintenance: [],
      monitoringService: new MonitoringService()
    };
  },
  async created() {
    const monitoringId = this.$route.params.id;
    try {
      const response = await this.monitoringService.getAll();
      const monitoring = response.data.find(m => m.id === monitoringId);
      this.localMaintenance = monitoring ? monitoring.maintenance : [];
      console.log('Fetched maintenance data:', this.localMaintenance);
    } catch (error) {
      console.log('Failed to load maintenance data:', error);
    }
  }
};
</script>

<template>
  <div class="container">
    <div class="content">
      <div class="inventory">
        <h1 class="maintenance_title">Maintenance Records</h1>
        <p class="maintenance__info">Track the records of the maintenance done to the equipments</p>
        <maintenance-management-component :maintenance="localMaintenance"></maintenance-management-component>
      </div>
    </div>
  </div>
</template>

<style scoped>
.maintenance__info {
  margin-top: 10px;
  margin-bottom: 25px;
}
</style>