<script>
import MaintenanceManagementComponent from "../components/maintenance-management.component.vue";
import { MaintenanceService } from "../services/maintenance.service.js";
import MonitoringForm from "../components/monitoring-form-pop-up.vue";

export default {
  name: "MaintenanceView",
  components: {
    MonitoringForm,
    MaintenanceManagementComponent
  },
  data() {
    return {

      maintenanceService: new MaintenanceService()
    };
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

</style>