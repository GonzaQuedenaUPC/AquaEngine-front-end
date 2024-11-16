<script>
import { MaintenanceService } from "../services/maintenance.service.js";
import MaintenancePopUpForm from "./maintenance-pop-up-form.vue";

export default {
  name: "maintenance-management",
  components: {MaintenancePopUpForm},
  data() {
    return {
      maintenance: [],
      showFormPopup: false,
      maintenanceService: new MaintenanceService()
    };
  },
  methods:{
    openFormPopup() {
      this.showFormPopup = true;
    },
    closeFormPopup() {
      this.showFormPopup = false;
    },
    handleMonitoringSubmit(newMonitoring) {
      console.log("New monitoring data submitted:", newMonitoring);
    }
  },
  async created() {
    try {
      const response = await this.maintenanceService.getAll();
      this.maintenance = response;
      console.log(response);
    } catch (error) {
      console.error('Failed to load maintenance data:', error);
    }
  }
};
</script>

<template>
  <pv-data-table :value="maintenance" paginator :rows="5" table-style="min-width:50rem" class="maintenance__table">
    <pv-column field="id" header="ID" style="width: 10%"></pv-column>
    <pv-column field="monitoredMachineId" header="MachineId" style="width: 10%"></pv-column>
    <pv-column field="technicianName" header="Technician" style="width: 15%"></pv-column>
    <pv-column field="issueType" header="Issue Type" style="width: 20%"></pv-column>
    <pv-column field="description" header="Description" style="width: 20%"></pv-column>
    <pv-column field="additionalInfo" header="Additional Info" style="width: 20%"></pv-column>
  </pv-data-table>

  <div v-if="showFormPopup" class="modal-overlay" @click="closeFormPopup">
    <div class="model-content">
      <maintenance-pop-up-form :visible="showFormPopup" @update:visible="showFormPopup = $event" @submit-monitoring="handleMonitoringSubmit"></maintenance-pop-up-form>
    </div>
  </div>

  <div class="form__button-container">
    <button @click="openFormPopup" class="open-form-button">Add Maintenance</button>
  </div>
</template>



<style scoped>
.maintenance__table {
  position: relative;
  z-index: 1;
}
.open-form-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
</style>