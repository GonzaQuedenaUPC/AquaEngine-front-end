<script>
export default {
  name: "inventory-form",

  props: {
    visible: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      productName: '',
      units: 0,
      price: 0,
      imagePath: ''
    }
  },

  methods: {

    _emitPopUpFormState() {
      this.$emit('pop-up-form-state', false);
    },

    closeDialog() {
      this._emitPopUpFormState();
    },

    resetFields() {
      this.productName = '';
      this.units = 0;
      this.price = 0;
      this.imagePath = '';
    },

    handleSubmit() {

      console.log({
        Name: this.productName,
        Units: this.units,
        Price: this.price,
        Path: this.imagePath
      });

      this.resetFields();

      this.closeDialog();
    },

    uploadImage() {
      console.log('Uploading image from path:', this.imagePath);
    }
  }
}
</script>

<template>
  <pv-dialog :visible="visible" modal @hide="closeDialog" class="min-w-[300px]">
    <template #header>
      <div class="-mb-5">
        <h1 class="title ml-4 mb-0">Register Product</h1>
      </div>
    </template>

    <div class="p-4">
      <form @submit.prevent="handleSubmit" class="flex flex-col space-y-4">
        <div>
          <label for="productName" class="block">Name Product</label>
          <input type="text" id="productName" v-model="productName" class="w-full border rounded p-2" />
        </div>

        <div class="flex space-x-4">
          <div class="flex-1">
            <label for="units" class="block">Units</label>
            <input type="number" id="units" v-model="units" class="w-full border rounded p-2" />
          </div>
          <div class="flex-1">
            <label for="price" class="block">Price</label>
            <input type="number" id="price" v-model="price" class="w-full border rounded p-2" />
          </div>
        </div>

        <div>
          <label for="imagePath" class="block">Path</label>
          <input type="text" id="imagePath" v-model="imagePath" class="w-full border rounded p-2" />
        </div>

        <div class="flex justify-between">
          <pv-button label="Upload Image" style="background-color: #d3d3d3; color: #000; border: none;" @click="uploadImage" class="mr-2" />
          <pv-button label="Register Now" style="background-color: #8298E7; color: #000; border: none;" type="submit" />
          <pv-button label="Close" severity="danger" @click="closeDialog"  />
        </div>
      </form>
    </div>
  </pv-dialog>
</template>


<style scoped>

</style>