<script>
import InventoryManagementComponent from "../components/inventory-management.component.vue";
import InventoryItemPopUpComponent from "../components/inventory-item-pop-up.component.vue";
import InventoryFormPopUpComponent from "../components/inventory-form-pop-up.vue";
import { ProfileService } from '../services/profile.service.js';
import Product from '../models/product.entity.js';

export default {
  name: "inventory-view",

  components: {
    InventoryManagementComponent,
    InventoryItemPopUpComponent,
    InventoryFormPopUpComponent
  },

  data() {
    return {
      localInventory: [],
      selectedProduct: null,
      isPopUpVisible: false,
      isPopUpFormVisible: false,
      profileService: new ProfileService()
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
      this.isPopUpFormVisible = state; // Actualizar el estado para mostrar el form
    },

    addNewProduct(newProduct) {
      this.profileService.create(newProduct)
          .then(response => {
            console.log('Product created:', response.data);
            this.localInventory.push(new Product(response.data));
          })
          .catch(error => {
            console.error('Error creating product:', error);
          });
    }
  },

  created() {
    this.profileService.getAll()
        .then(response => {
          this.localInventory = response.data.map(item => new Product(item));
          const profileSaved = JSON.parse(localStorage.getItem("profile")) || {};
          this._emitProfileLoaded(profileSaved);
        })
        .catch(error => {
          console.error("Error fetching products:", error);
        });
  }
}
</script>

<template>
  <section class="container">
    <div class="p-3">
      <div class="inventory">
        <h1 class="inventory__title title">Inventory</h1>
        <p class="mb-4">Track the fluctuation of your products</p>
        <inventory-management-component :inventory="localInventory"
                                        @item-selected="_handleItemSelected"
                                        @pop-up-state="_handlePopUpState"
                                        @pop-up-form-state="_handlePopUpFormState"
                                        @new-product-submitted="addNewProduct"/>
      </div>

      <inventory-item-pop-up-component v-if="selectedProduct !== null"
                                       :product="selectedProduct"
                                       :visible="isPopUpVisible"
                                       @pop-up-state="_handlePopUpState"/>

      <inventory-form-pop-up-component v-if="isPopUpFormVisible"
                                       :visible="isPopUpFormVisible"
                                       @pop-up-form-state="_handlePopUpFormState"
                                       @submit-product="addNewProduct"/>
    </div>
  </section>
</template>

<style scoped>
/* Añade estilos aquí si son necesarios */
</style>