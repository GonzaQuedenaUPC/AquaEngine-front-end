<script>
import MaintenanceManagementComponent from "../components/maintenance-management.component.vue";
export default {
  name: "MaintenanceView",
  components:{
    MaintenanceManagementComponent
  },
  props:{

  },
  data(){
    return{
      localMaintenance:[]
    }
  },
  created() {

  }
};
</script>

<template>
<section class="container">
  <div class="p-3">
    <div class="maintenance__tittle"><h1 class="maintenance__title__h1">Maintenance Logs</h1></div>
    <p class="mb-4">Track the logs of your machines</p>
    <maintenance-management-component :maintenance="localMaintenance" selected-id="1">

    </maintenance-management-component>
  </div>
</section>

</template>

<style scoped>
.maintenance__title__h1{
  font-size: 40px;
}

.container{
  margin-bottom: 20px;
  margin-left:20px;
  margin-right: 20px;
  display: flex;
  flex-direction: row-reverse;

}
</style>