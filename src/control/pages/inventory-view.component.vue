<script>
import InventoryManagementComponent from "../components/inventory-management.component.vue";
import { ProfileService } from "../services/profile.service.js";
import Profile from "../models/profile.entity.js";

export default {
  name: "inventory-view",

  components: {
    InventoryManagementComponent
  },

  data() {
    return {
      profiles: [],
      profileService: null,
      profile: new Profile({}),
    }
  },

  //#region Lifecycle Hooks

  created() {
    this.profileService = new ProfileService();

    this.profileService.getAll()
        .then(response => {
          this.profiles = response.data.map(profile => new Profile(profile));
          console.log(this.profiles);
        })
        .catch(error => {
          console.error(error);
        });
  }

  //#endregion
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