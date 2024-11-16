<script>
import { MonitoringService } from "../services/monitoring.service.js";

export default {
  name: "monitoring-form",
  props: {
    visible: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      userId: 0,
      name: "",
      urlToImage: "",
      status: "",
      monitoringService: new MonitoringService()
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
      this.userId = 0;
      this.name = "";
      this.urlToImage = "";
      this.status = "";
    },
    async handleSubmit() {
      const newMonitoring = {
        userId: this.userId,
        name: this.name,
        urlToImage: this.urlToImage,
        status: this.status
      };

      try {
        await this.monitoringService.create(newMonitoring);
        this.$emit('submit-monitoring', newMonitoring);
        console.log("New monitoring data submitted:", newMonitoring);
        this.resetFields();
        this.closeDialog();
      } catch (error) {
        console.error("Failed to submit monitoring data:", error);
      }
    }
  }
};
</script>

<template>
  <pv-dialog :visible="visible" modal @hide="closeDialog" class="min-w-[300px]">
    <template #header>
      <!-- Add header content if needed -->
    </template>
    <form @submit.prevent="handleSubmit" class="flex flex-col space-y-4">
      <div class="p-4">
        <div class="flex space-x-4">
          <div class="flex-1">
            <label for="userId" class="block text-sm font-medium text-gray-700">User ID</label>
            <input v-model="userId" type="number" name="userId" id="userId"
                   class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>

          <div class="flex-1">
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input v-model="name" type="text" name="name" id="name"
                   class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>

          <div class="flex-1">
            <label for="urlToImage" class="block text-sm font-medium text-gray-700">URL to Image</label>
            <input v-model="urlToImage" type="text" name="urlToImage" id="urlToImage"
                   class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>

          <div class="flex-1">
            <label for="status" class="block text-sm font-medium text-gray-700">Status</label>
            <input v-model="status" type="text" name="status" id="status"
                   class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>
        </div>
        <div class="flex justify-between mt-4">
          <pv-button label="Register monitored machine"
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