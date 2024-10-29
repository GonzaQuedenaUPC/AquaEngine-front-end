<script>
import MaintenanceManagementComponent from "../components/maintenance-management.component.vue";
import MaintenanceChartComponent from "../components/maintenance-chart.component.vue";
import { MonitoringService } from "../services/monitoring.service.js";

export default {
  name: "MaintenanceView",
  components: {
    MaintenanceManagementComponent,
    MaintenanceChartComponent
  },
  data() {
    return {
      localMonitoring: [],
      selectedId: null,
      monitoringService: new MonitoringService()
    };
  },
  async created() {
    try {
      const response = await this.monitoringService.getAll();
      this.localMonitoring = response.data;
      this.selectedId = parseInt(this.$route.params.id, 10);
      console.log(this.selectedId);
      console.log(this.localMonitoring);
    } catch (error) {
      console.error('Failed to load monitoring data:', error);
    }
  }
};
</script>

<template>
  <div class="container">

    <div class="content">
      <div class="maintenance">
        <h1 class="monitoring__title">Equipment Monitoring</h1>
        <p class="monitoring__info">Monitor and track equipment performance.</p>
        <maintenance-management-component :monitoring="localMonitoring"
                                        :selectedId="selectedId">

        </maintenance-management-component>
      </div>
  </div>
  </div>


</template>

<style scoped>

.monitoring__info {
  margin-top: 10px;
  margin-bottom: 25px;
}
.container{
  margin-bottom: 20px;
  margin-left:20px;
  margin-right: 20px;
  display: flex;
  flex-direction: row-reverse;

}
</style>