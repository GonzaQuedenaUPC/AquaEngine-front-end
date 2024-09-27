<script>
export default {
  name: "inventory-management",

  props: {
    inventory: {
      type: Array,
      required: true
    }
  },

  methods: {
    viewProduct(product) {
      this.$emit('view-product', product);
    }
  }
}
</script>

<template>
  <pv-data-table :value="inventory" paginator :rows="5" tableStyle="min-width: 50rem" class="inventory__table">
    <pv-column field="productId" header="ID" style="width: 25%"></pv-column>
    <pv-column field="name" header="Name" style="width: 25%"></pv-column>
    <pv-column field="stock" header="Stock" style="width: 25%"></pv-column>

    <pv-column field="representative.name" header="" style="width: 25%">
      <template #body="slotProps">
        <pv-button label="View" severity="success" @click="viewProduct(slotProps.data)"/>
      </template>
    </pv-column>
  </pv-data-table>
</template>

<style scoped>
.inventory__table {
  position: relative;
  z-index: 1;
}
</style>