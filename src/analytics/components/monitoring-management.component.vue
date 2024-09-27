<script>
export default {
  name: "monitoring-management",

  props:{
    monitoring: {
      type: Array,
      required: true
    }
  }
};
</script>

<template>

<pv-data-table :value="this.monitoring" paginator :rows="5" table-style="min-width:50 rem" class="monitoring__table" >
  <pv-column field="id" header="ID" style="width: 25%"></pv-column>
  <pv-column field="name" header="Name" style="width: 25%"></pv-column>
  <pv-column field="lastMaintenance" header="LastMaintenanceDate" style="width: 25%"></pv-column>
  <pv-column field="status" header="Status" style="width: 25%"></pv-column>

  <pv-column field="representative.name" header="" style="width: 25%">
    <template #body="slotProps">
      <pv-button label="MaintenanceLogs" severity="success"/>
    </template>
  </pv-column>
</pv-data-table>

</template>

<style scoped>
.monitoring__table{
  position: relative;
  z-index: 1;
}
</style>