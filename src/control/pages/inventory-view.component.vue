<script>
import InventoryManagementComponent from "../components/inventory-management.component.vue";
import ProductView from "../components/product-view.component.vue";

export default {
  name: "inventory-view",

  components: {
    InventoryManagementComponent,
    ProductView
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
      isDialogVisible: false
    }
  },

  methods: {
    _emitProfileLoaded(profileSaved) {
      this.$emit('profile-loaded', profileSaved);
    },
    showProductView(product) {
      this.selectedProduct = product;
      this.isDialogVisible = true;
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
  <div class="container">
    <div class="content">
      <div class="inventory">
        <h1 class="inventory__title">Inventory</h1>
        <p class="inventory__info">Track the fluctuation of your products</p>
        <inventory-management-component :inventory="localInventory" @view-product="showProductView"/>
      </div>
    </div>
    <product-view v-if="selectedProduct" :product="selectedProduct" :visible.sync="isDialogVisible"/>
  </div>
</template>

<style scoped>
.inventory__info {
  margin-top: 10px;
  margin-bottom: 25px;
}
</style>