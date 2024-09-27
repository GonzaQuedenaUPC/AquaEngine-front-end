<script>
import InventoryManagementComponent from "../components/inventory-management.component.vue";


export default {
  name: "inventory-view",

  components: {
    InventoryManagementComponent
  },

  data() {
    return {
      inventory: [],
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="content">
      <div class="inventory">
        <h1 class="inventory__title">Inventory</h1>
        <p class="inventory__info">Track the fluctuation of your products</p>
        <inventory-management-component/>
      </div>
    </div>
  </div>
</template>

<style scoped>

.inventory__info {
  margin: 10px 0;
}

</style>