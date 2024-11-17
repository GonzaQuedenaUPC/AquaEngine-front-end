<script>
import {cartApiService} from "../services/cart-api.service.js";

export default {
  name: "final-order-view",
  data() {
    return {
      finalLocal: [],
      cartApi: new cartApiService(),
    };
  },
  async created() {
    try {
      const response = await this.cartApi.getAll();
      this.finalLocal = response.data;
      console.log("Items in the final order:", this.finalLocal);
    } catch (error) {
      console.error("Failed to load the final order data: ", error);
    }
  }
}


</script>

<template>

  <section class="Container md:-mt-16">
    <div class="final-order p-2">
      <pv-card>
        <template #title>
          <h2 class="justify-content-end">Final Order</h2>
        </template>
        <template #content>
          <div class="final-order-list">
            <div v-for="item in finalLocal" :key="item.id" class="final-order-item">
              <p>{{ item.name }}</p>
              <img :src="item.urlToImage" alt="Item Image" class="item-image">
            </div>
          </div>
        </template>
      </pv-card>
      <router-link to="/home">
        <pv-button class="mt-3 justify-content-center" label="Close"/>
      </router-link>
    </div>


  </section>

</template>

<style scoped>
.final-order-list {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.final-order-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.item-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
}
</style>