<script>

import MonitoringManagementComponent from "../components/monitoring-management.component.vue";
import {MonitoringService} from "../services/monitoring.service.js";
import MaintenanceChartComponent from "../components/maintenance-chart.component.vue";

export default {
  name: "MonitoringView",
  components:{
    MonitoringManagementComponent,
    MaintenanceChartComponent
  },
  props:{
    monitoring:{
      type: Array,
      required: true
    }
  },
  data(){
    return{
      localMonitoring: [],
      monitoringService: new MonitoringService()
    }
  },
  async created() {
    try {

      const response = await this.monitoringService.getAll();
      this.localMonitoring = response.data;
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
        <div class="inventory">
          <h1 class="monitoring__title">Equipment Monitoring</h1>
          <p class="monitoring__info">Monitor and track equipment performance.</p>
          <monitoring-management-component :monitoring="this.localMonitoring"></monitoring-management-component>
        </div>
      </div>
      <div class="content">
        <div class="maintenance__table">
          <div class="chart__content">
            <h1>Chart</h1>
            <maintenance-chart-component/>
          </div>
        </div>
      </div>

    </div>

  </template>

  <style scoped>

    .monitoring__info {
      margin-top: 10px;
      margin-bottom: 25px;
    }
    .chart__content{
      margin-left: 20px;
    }
  </style>