<script>
export default {
  name: "monitoring-form",
  props: {
    visible: {
      type: Boolean,
      required: true
    }
  },
  data(){
    return {
      userId: 0,
      name: "",
      urlToImage: "",
      status: ""
    }
  },
  methods:{
    _emitPopUpFormState(){
      this.$emit('pop-up-form-state', false);
    },
    closeDialog(){
      this._emitPopUpFormState();
    },
    resetFields(){
      this.userId = 0;
      this.name = "";
      this.urlToImage = "";
      this.status = "";
    },
    handleSubmit(){
      console.log({
        userId: this.userId,
        name: this.name,
        urlToImage: this.urlToImage,
        status: this.status
      });
      this.resetFields();
      this.closeDialog();
    },
    uploadImage(){
      console.log('Uploading image from path:', this.urlToImage);
    }
  }
}
</script>

<template>
  <pv-dialog :visible="visible" modal @hide="closeDialog" class="min-w-[300px]">
    <template #header>

    </template>

    <form @submit.prevent="handleSubmit" class="flex flex-col space-y-4">
      <div class="p-4">
        <div class="flex space-x-4">
          <div class="flex-1">
            <label for="userId" class="block text-sm font-medium text-gray-700">User ID</label>
            <input v-model="userId" type="number" name="userId" id="userId" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>

          <div class="flex-1">
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input v-model="name" type="text" name="name" id="name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>

          <div class="flex-1">
            <label for="urlToImage" class="block text sm font-medium text-gray-700">URL to Image</label>
            <input v-model="urlToImage" type="text" name="urlToImage" id="urlToImage" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>

          <div class="flex-1">
            <label for="status" class="block text-sm font-medium text-gray-700">Status</label>
            <input v-model="status" type="text" name="status" id="status" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>

        </div>
      </div>
    </form>
  </pv-dialog>

</template>

<style scoped>

</style>