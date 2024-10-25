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
    },

    emitPopUpFormState() {
      this.$emit('pop-up-form-state', true);
    },

  }
}
</script>

<template>
  <div class="inventory container w-full">
    <div class="inventory__content w-full flex justify-center flex-column gap-3">
      <pv-data-table :value="inventory" paginator :rows="5" tableStyle="min-width: 50rem" class="inventory__table
        w-full md:w-auto md:max-w-[90%] px-4 lg:p-0 mx-auto">

        <pv-column class="w-[10%] md:w-[25%]" field="productId" header="ID"></pv-column>
        <pv-column class="w-[10%] md:w-[25%]" field="name" header="Name"></pv-column>
        <pv-column class="w-[10%] md:w-[25%]" field="stock" header="Stock"></pv-column>

        <pv-column field="representative.name" header="" style="width: 25%">
          <template #body="slotProps">
            <pv-button label="View" severity="success" @click="emitData(slotProps.data)" />
          </template>
        </pv-column>
      </pv-data-table>

      <div class="inventory__footer w-full flex justify-end">
        <pv-button label="Insert" style="background-color: #8298E7; color: #000; border: none;
          min-width: 120px; height: 45px" class="inventory__btn" @click="emitPopUpFormState"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>