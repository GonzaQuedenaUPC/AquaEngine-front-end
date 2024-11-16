<script>
import MonitoringManagementComponent from "../components/monitoring-management.component.vue";
import { MonitoringService } from "../services/monitoring.service.js";
import MaintenanceChartComponent from "../components/maintenance-chart.component.vue";
import {MaintenanceService} from "../services/maintenance.service.js";
import MonitoringForm from "../components/monitoring-form-pop-up.vue";

export default {
  name: "MonitoringView",
  components: {
    MonitoringForm,
    MonitoringManagementComponent,
    MaintenanceChartComponent
  },
  props: {
    monitoring: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      localMonitoring: [],
      monitoringService: new MonitoringService(),
      showChartPopup: false, // Controla la visibilidad del popup
      showFormPopup: false
    };
  },
  async created() {
    try {
      const response = await this.monitoringService.getAll();
      console.log(response);
      this.localMonitoring = response.data;
      console.log(this.localMonitoring);
    } catch (error) {
      console.error("Failed to load monitoring data:", error);
    }
  },
  methods:{
    openChartPopup() {
      this.showChartPopup = true;
    },
    openFormPopup() {
      this.showFormPopup = true;
    },
    emitPopUpFormState() {
      this.$emit('update:visible', true);
    },
    emitData(item) {
      this._emitPopUpState(item);
    },
    closeChartPopup() {
      this.showChartPopup = false;
    },
    closeFormPopup() {
      this.showFormPopup = false;
    },
    handleMonitoringSubmit(newMonitoring) {
      console.log("New monitoring data submitted:", newMonitoring);
    }
  }
};
</script>

<template>
  <div class="container">
    <div class="content p-3">
      <div class="inventory">
        <h1 class="monitoring__title title">Equipment Monitoring</h1>
        <p class="monitoring__info">Monitor and track equipment performance.</p>
        <monitoring-management-component :monitoring="localMonitoring"></monitoring-management-component>
      </div>

      <div class="button-container">
        <button @click="openChartPopup" class="open-chart-button">Show Chart</button>
      </div>
    </div>

    <div v-if="showChartPopup" class="modal-overlay" @click.self="closeChartPopup">
      <div class="modal-content">
        <maintenance-chart-component/>
      </div>
    </div>


    <div v-if="showFormPopup" class="modal-overlay" @click="closeFormPopup">
      <div class="model-content">
        <monitoring-form :visible="showFormPopup" @update:visible="showFormPopup = $event" @submit-monitoring="handleMonitoringSubmit"></monitoring-form>
      </div>
    </div>

    <div class="form__button-container">
      <button @click="openFormPopup" class="open-chart-button">Add</button>
    </div>

  </div>
</template>

<style scoped>
.container {
  padding: 20px;
}

.monitoring__info {
  margin-top: 10px;
  margin-bottom: 25px;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
form__button-container{
  display: flex;
  justify-content: flex-start;

}

.open-chart-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

</style>


<style scoped>
.container {
  padding: 20px;
}

.monitoring__info {
  margin-top: 10px;
  margin-bottom: 25px;
}

.open-chart-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

</style>
