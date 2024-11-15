<script>

export default {
  name: "maintenance-management",

    props: {
    maintenance: {
      type: Array,
      required: true
    },
    selectedId: {
      type: Number,
      required: true
    }
  },
  data(){
    return{
      filteredMaintenance:''
    }
  },
  methods:{
    _emitSelectetIdtem(selectedId){
      this.$emit('selected-item', selectedId);
    }
  }
};

</script>

<template>
  <pv-data-table :value=" maintenance" paginator :rows="5" table-style="min-width:50rem"
                 class="maintenance__table">
    <pv-column field="id" header="ID" style="width: 10%"></pv-column>
    <pv-column field="monitoredMachineId" header="MachineId" style="width: 10%"></pv-column>
    <pv-column field="updatedDate" header="Date" style="width: 15%"></pv-column>
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