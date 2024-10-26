<script>
import OrderingMachineryComponent from "../components/ordering-machinery.component.vue";
import {OrderingMachineryService} from "../services/ordering-machinery.service.js";

export default {
  name: "ordering-machinery-view",
  components: {
    OrderingMachineryComponent
  },
  props: {
    ordering: {
      type: Object,
      required: true
    }
  },
  data(){
    return{
      localMonitoring: [],
      orderingService: new OrderingMachineryService()
    }
  },
  async created() {
    try {
      const response = await this.orderingService.getAll();
      this.localMonitoring = response.data;
      console.log(this.localMonitoring);
    } catch (error) {
      console.error('Failed to load ordering data: ', error);
    }
  }

};
</script>

<template>
  <div class="container">
    <div class="content">
      <div class="ordering-machinery">
        <h1 class="ordering-machinery__title">Ordering Machinery</h1>
        <p class="ordering-machinery__info">Access the ordering system to request and track machinery.</p>
        <ordering-machinery-component :ordering="this.localMonitoring"></ordering-machinery-component>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>