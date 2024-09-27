<script>
export default {
  name: "product-view",

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
    closeDialog() {
      this.$emit('update:visible', false);
    }
  }
}
</script>

<template>
  <pv-dialog :header="product.name" :visible="visible" modal @hide="closeDialog">
    <div>
      <p><strong>ID:</strong> {{ product.productId }}</p>
      <p><strong>Name:</strong> {{ product.name }}</p>
      <p><strong>Price:</strong> {{ product.price }}</p>
      <p><strong>Stock:</strong> {{ product.stock }}</p>
      <img :src="product.urlToImage" alt="Product Image" />
    </div>
    <template #footer>
      <pv-button label="Close" @click="closeDialog"/>
    </template>
  </pv-dialog>
</template>

<style scoped>
/* Add any necessary styles here */
</style>