<script>
import MonitoringManagementComponent from "../components/monitoring-management.component.vue";
import { MonitoringService } from "../services/monitoring.service.js";
import MaintenanceChartComponent from "../components/maintenance-chart.component.vue";
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
      showChartPopup: false,
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

      <div class="button__container">
          <div class="button-container">
            <button @click="openChartPopup" class="open-chart-button">Show Chart</button>
          </div>

          <div class="insert__button__container">
            <button @click="openFormPopup" class="open-form-button">Insert</button>
          </div>

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
.button__container{
  display: flex;
  justify-content: space-between;
}

.open-chart-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
.open-form-button {
  background-color:#8298E7;
  color: #000;
  border: none;
  min-width: 140px;
  height: 40px;
  margin-top: 20px;
  border-radius: 4px;

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
