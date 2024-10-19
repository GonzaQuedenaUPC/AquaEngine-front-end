<script>
export default {
  name: "maintenance-management",
  props: {
    monitoring: {
      type: Array,
      required: true
    },
    selectedId: {
      type: Number,
      required: true
    }
  },
  computed: {
    filteredMonitoring() {
      return this.monitoring.filter(item => item.id === this.selectedId);
      console.log(this.filteredMonitoring[0]?.maintenance || [])
    }
  }
};
</script>

<template>
  <pv-data-table :value="filteredMonitoring[0]?.maintenance || []" paginator :rows="5" table-style="min-width:50rem"
                 class="maintenance__table">
    <pv-column field="id" header="ID" style="width: 10%"></pv-column>
    <pv-column field="date" header="Date" style="width: 15%"></pv-column>
    <pv-column field="technician" header="Technician" style="width: 15%"></pv-column>
    <pv-column field="issueType" header="Issue Type" style="width: 20%"></pv-column>
    <pv-column field="description" header="Description" style="width: 20%"></pv-column>
    <pv-column field="additionalInfo" header="Additional Info" style="width: 20%"></pv-column>

  </pv-data-table>
</template>

<style scoped>
.maintenance__table {
  position: relative;
  z-index: 1;
}
</style>