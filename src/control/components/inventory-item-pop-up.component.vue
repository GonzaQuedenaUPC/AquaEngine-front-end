<script>

export default {
  name: "inventory-item-pop-up",

  props: {
    product: {
      type: Object,
      required: true
    },

    visible: {
      type: Boolean,
      required: true
    }
  },

  methods: {

    _emitPopUpState() {
      this.$emit('pop-up-state', false);
    },

    closeDialog() {
      this._emitPopUpState();
    }
  }
}
</script>

<template>
  <pv-dialog :header="product.name" :visible="visible" modal @hide="closeDialog" class="w-[300px]">
    <template #header>
      <div class="-mb-5">
        <h1 class="title mb-0">Product Detail</h1>
        <p><strong>ID:</strong> {{ product.id }}</p>
      </div>
    </template>

    <div class="flex flex-col gap-3 my-4">
      <div class="flex flex-column items-center justify-center gap-2">
        <img :src="product.urlToImage" alt="product-image" class="w-[60%]"/>
        <p><strong>Name:</strong> {{ product.name }}</p>
      </div>

      <div class="flex-column justify-content-center align-content-center">
        <p><strong>Stock:</strong> {{ product.quantity }}</p>
        <p><strong>Unit Price:</strong> {{ product.unitPrice }}</p>
      </div>
    </div>

    <template #footer>
      <pv-button label="Close" severity="danger" @click="closeDialog" class="-mt-5"/>
    </template>
  </pv-dialog>
</template>

<style scoped>
/* Add any necessary styles here */
</style>