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
    _emitItemSelected(item) {
      this.$emit('item-selected', item);
    },

    _emitPopUpState(item) {
      this._emitItemSelected(item);
      this.$emit('pop-up-state', true);
    },

    emitData(item) {
      this._emitPopUpState();
      this._emitItemSelected(item);
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
        <pv-button label="View" severity="success" @click="emitData(slotProps.data)"/>
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