<script>
export default {
  name: "inventory-management",

  props: {
    inventory: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      filterTerm: ''
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
      this._emitPopUpState(item);
    },

    emitPopUpFormState() {
      this.$emit('pop-up-form-state', true); // Emitiendo el verdadero para mostrar el form
    },

    handleProductSubmit(newProduct) {
      this.$emit('new-product-submitted', newProduct);
    }
  },

  computed: {
    filteredInventory() {
      if (!this.filterTerm) {
        return this.inventory;
      }
      return this.inventory.filter(item =>
          item.name.toLowerCase().includes(this.filterTerm.toLowerCase())
      );
    }
  }
}
</script>

<template>
  <div class="inventory container w-full">
    <div class="inventory__content w-full flex justify-center flex-column gap-3">

      <div class="filter__container w-full flex justify-end">
        <input type="text" v-model="filterTerm" placeholder="Filter by name"
               class="filter__input border px-2 py-1 rounded-full"
               style="width: 200px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
      </div>

      <div class="table-container overflow-auto" style="max-height: 400px; width: 100%; padding: 16px;">
        <pv-data-table :value="filteredInventory" paginator :rows="8" tableStyle="min-width: 50rem">

          <pv-column class="w-[10%] md:w-[25%]" field="id" header="ID"></pv-column>
          <pv-column class="w-[10%] md:w-[25%]" field="name" header="Name"></pv-column>
          <pv-column class="w-[10%] md:w-[25%]" field="quantity" header="Stock"></pv-column>

          <pv-column field="representative.name" header="" style="width: 25%">
            <template #body="slotProps">
              <pv-button label="View" severity="success" @click="emitData(slotProps.data)"/>
            </template>
          </pv-column>

        </pv-data-table>
      </div>

      <div class="inventory__footer w-full flex justify-end">
        <pv-button label="Insert"
                   style="background-color: #8298E7; color: #000; border: none; min-width: 120px; height: 40px"
                   class="inventory__btn" @click="emitPopUpFormState"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.table-container {
  overflow-y: auto;
  padding: 16px;
}

/*estilos para el scroll */
.table-container::-webkit-scrollbar {
  width: 8px;
}

.table-container::-webkit-scrollbar-thumb {
  background-color: #8298E7;
  border-radius: 10px;
}

.table-container::-webkit-scrollbar-track {
  background: #f1f1f1;
}
</style>