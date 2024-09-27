<script>

import MonitoringManagementComponent from "../components/monitoring-management.component.vue";
import {MonitoringService} from "../services/monitoring.service.js";

export default {
  name: "MonitoringView",
  components:{
    MonitoringManagementComponent
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
          <h1 class="inventory__title">Inventory</h1>
          <p class="inventory__info">Track the fluctuation of your products</p>
          <monitoring-management-component :monitoring="this.localMonitoring"></monitoring-management-component>
        </div>
      </div>
    </div>

  </template>

  <style scoped>

    .inventory__info {
      margin-top: 10px;
      margin-bottom: 25px;
    }

  </style>