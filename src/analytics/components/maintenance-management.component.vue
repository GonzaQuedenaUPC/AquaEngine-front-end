<script>
export default {
  name: "maintenance-management",

  props:{
    maintenance: {
      type: Array,
      required: true
    }
  },
}
</script>

<template>
  <pv-data-table :value="this.maintenance" paginator :rows="5" table-style="min-width:50 rem" class="maintenance__table">
    <pv-column field="id" header="ID" style="width: 25%"></pv-column>
    <pv-column field="date" header="Date" style="width: 25%"></pv-column>
    <pv-column field="technician" header="Technician Name" style="width: 25%"></pv-column>
    <pv-column field="issueType" header="Issue Type" style="width: 25%"></pv-column>
    <pv-column field="description" header="Description" style="width: 25%"></pv-column>
    <pv-column field="additionalInfo" header="Observations" style="width: 25%"></pv-column>

    <pv-column field="representative.name" header="" style="width: 25%">
      <template #body="slotProps">
        <pv-button label="View" severity="success"/>
      </template>
    </pv-column>
  </pv-data-table>
</template>

<style scoped>
.maintenance__table{
  position: relative;
  z-index: 1;
}
</style>