<!-- src/analytics/components/monitored-machine-pop-up-form.vue -->
<script>
import { MaintenanceService } from "../services/maintenance.service.js";

export default {
  name: "maintenance-pop-up-form",
  props: {
    visible: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      monitoredMachineId: 0,
      technician: "",
      issueType: "",
      description: "",
      additionalInfo: "",
      maintenanceService: new MaintenanceService()
    };
  },
  methods: {
    emitPopUpFormState() {
      this.$emit('update:visible', false);
    },
    closeDialog() {
      this.emitPopUpFormState();
    },
    resetFields() {
      this.monitoredMachineId = 0;
      this.technician = "";
      this.issueType = "";
      this.description = "";
      this.additionalInfo = "";
    },
    async handleSubmit() {
      const newMonitoredMachine = {
        monitoredMachineId: this.monitoredMachineId,
        technician: this.technician,
        issueType: this.issueType,
        description: this.description,
        additionalInfo: this.additionalInfo
      };

      try {
        await this.maintenanceService.createMonitoredMachine(newMonitoredMachine);
        this.$emit('submit-monitored-machine', newMonitoredMachine);
        console.log("New monitored machine data submitted:", newMonitoredMachine);
        this.resetFields();
        this.closeDialog();
      } catch (error) {
        console.error("Failed to submit monitored machine data:", error);
      }
    }
  }
};
</script>

<template>
  <pv-dialog :visible="visible" modal @hide="closeDialog" class="min-w-[300px]">
    <form @submit.prevent="handleSubmit" class="flex flex-col space-y-4">
      <div class="p-4">
        <div class="flex space-x-4">
          <div class="flex-1">
            <label for="monitoredMachineId" class="block text-sm font-medium text-gray-700">Monitored Machine ID</label>
            <input v-model="monitoredMachineId" type="number" name="monitoredMachineId" id="monitoredMachineId"
                   class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>

          <div class="flex-1">
            <label for="technician" class="block text-sm font-medium text-gray-700">Technician</label>
            <input v-model="technician" type="text" name="technician" id="technician"
                   class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>

          <div class="flex-1">
            <label for="issueType" class="block text-sm font-medium text-gray-700">Issue Type</label>
            <input v-model="issueType" type="text" name="issueType" id="issueType"
                   class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>

          <div class="flex-1">
            <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
            <input v-model="description" type="text" name="description" id="description"
                   class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>

          <div class="flex-1">
            <label for="additionalInfo" class="block text-sm font-medium text-gray-700">Additional Info</label>
            <input v-model="additionalInfo" type="text" name="additionalInfo" id="additionalInfo"
                   class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>
        </div>
        <div class="flex justify-between mt-4">
          <pv-button label="Register Monitored Machine"
                     style="background-color: #8298E7; color: #000; border: none; min-width: 120px; height: 40px"
                     type="submit"/>
          <pv-button label="Close" severity="danger" @click="closeDialog"/>
        </div>
      </div>
    </form>
  </pv-dialog>
</template>

<style scoped>
.flex-1 {
  display: flex;
  flex-direction: column;
}
</style>