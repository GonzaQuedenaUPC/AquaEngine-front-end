<script>
import InventoryManagementComponent from "../components/inventory-management.component.vue";
import InventoryItemPopUpComponent from "../components/inventory-item-pop-up.component.vue";
import InventoryFormPopUpComponent from "../components/inventory-form-pop-up.vue";

export default {
  name: "inventory-view",

  components: {
    InventoryManagementComponent,
    InventoryItemPopUpComponent,
    InventoryFormPopUpComponent
  },

  props: {
    inventory: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      localInventory: [],

      selectedProduct: null,
      isPopUpVisible: false,
      isPopUpFormVisible: false
    }
  },

  methods: {
    _emitProfileLoaded(profileSaved) {
      this.$emit('profile-loaded', profileSaved);
    },
    
    _handleItemSelected(item) {
      this.selectedProduct = item;
    },

    _handlePopUpState(state) {
      this.isPopUpVisible = state;
    },

    _handlePopUpFormState(state) {
      console.log(state);
      this.isPopUpFormVisible = state;
    }
  },

  created() {
    this.localInventory = [...this.inventory];
    const profileSaved = JSON.parse(localStorage.getItem("profile"));

    this.localInventory = profileSaved._inventory || [];
    this._emitProfileLoaded(profileSaved);
  }
}
</script>

<template>
  <section class="container">

    <div class="pt-3">

      <div class="inventory">
        <h1 class="inventory__title title">Inventory</h1>
        <p class="mb-4">Track the fluctuation of your products</p>
        <inventory-management-component :inventory="localInventory"
                                        @item-selected="_handleItemSelected"
                                        @pop-up-state="_handlePopUpState" @pop-up-form-state="_handlePopUpFormState"/>
      </div>

      <inventory-item-pop-up-component v-if="selectedProduct !== null"
                                       :product="selectedProduct"
                                       :visible="isPopUpVisible" @pop-up-state="_handlePopUpState"/>

      <inventory-form-pop-up-component v-if="isPopUpFormVisible"
                                       :visible="isPopUpFormVisible" @pop-up-form-state="_handlePopUpFormState"/>

    </div>

  </section>
</template>

<style scoped>

</style>