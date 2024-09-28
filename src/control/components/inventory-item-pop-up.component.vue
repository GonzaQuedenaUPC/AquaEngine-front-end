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
  <pv-dialog :header="product.name"  :visible="visible" modal @hide="closeDialog">
    <template #header>
      <div class="flex justify-content-start">
        <h1>Product Detail</h1>
      </div>
    </template>

    <div class="flex justify-content-center gap-3">
      <div class="flex">
        <img :src="product.urlToImage" alt="product-image" class="max-w-10rem max-h-10" />
      </div>

      <div class="flex-column justify-content-center align-content-center">
        <p><strong>ID:</strong> {{ product.productId }}</p>
        <p><strong>Name:</strong> {{ product.name }}</p>
        <p><strong>Price:</strong> {{ product.price }}</p>
        <p><strong>Stock:</strong> {{ product.stock }}</p>
      </div>
    </div>

    <template #footer>
      <pv-button label="Close" severity="danger" @click="closeDialog"/>
    </template>
  </pv-dialog>
</template>

<style scoped>
/* Add any necessary styles here */
</style>