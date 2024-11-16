<script>
import { cartApiService } from "../services/cart-api.service.js";
// Si EventBus es realmente parte de tu aplicación, asegúrate de importarlo correctamente
// import EventBus from "path/to/EventBus";

export default {
  name: "order-detail-view",
  data() {
    return {
      carts: [],
      cartApi: new cartApiService(),
      items: [],
    };
  },
  methods: {
    async deleteCart(cartId) {
      try {
        await this.cartApi.deleteCart(cartId);
        this.carts = this.carts.filter(cart => cart.id !== cartId);
      } catch (error) {
        console.error('Failed to delete cart item: ', error);
      }
    },
    handleItemRequested(item) {
      console.log("Item received in order-detail-view:", item);
      if (item && item.id && item.name && item.units) {
        console.log("Valid item received, adding to list.");
        this.addItem(item);
      } else {
        console.error("Invalid item received:", item);
      }
    },
    addItem(newItem) {
      if (newItem) {
        this.items.push(newItem);
        console.log("Updated item list:", this.items);
      }
    },
    deleteItem(index) {
      this.items.splice(index, 1);
      console.log("Item removed. List updated:", this.items);
    },
  },
  async created() {
    console.log('Component Order Details created');
    try {
      const response = await this.cartApi.getAll();
      this.carts = response.data;
      console.log('Items in the order detail:', this.carts);
    } catch (error) {
      console.error('Failed to load cart data: ', error);
    }
    // EventBus.on("item-selected", this.handleItemRequested); // Descomentar si EventBus está disponible
  },
  unmounted() {
    console.log("Order-detail-view component destroyed.");
    // EventBus.off("item-selected", this.handleItemRequested); // Descomentar si EventBus está disponible
  },
};
</script>

<template>
  <div class="container">
    <div class="flex justify-content-start">
      <h2>Order Detail</h2>
    </div>
    <div class="flex flex-column justify-content-center">
      <div v-if="carts.length === 0" class="empty-state">
        <p>There are no items in the order detail.</p>
      </div>
      <div v-else>
        <div v-for="cart in carts" :key="cart.id">
          <pv-card>
            <template #content>
              <div class="flex justify-content-start align-items-center">
                <img :src="cart.urlToImage" alt="Machine" class="machine__image">
                <h2>{{ cart.name }}</h2>
              </div>
              <div class="justify-content-end">
                <button @click="deleteCart(cart.id)" class="icon pi-trash"></button>
              </div>
            </template>
          </pv-card>
        </div>
      </div>

      <div v-if="items.length === 0" class="empty-state">
        <p>There are no items in the order detail.</p>
      </div>
      <div v-else>
        <div v-for="(item, index) in items" :key="item.id">
          <pv-card>
            <template #content>
              <div class="flex justify-content-start align-items-center">
                <img :src="item.urlToImage" alt="Machine" class="machine__image">
                <h2>{{ item.name }}</h2>
                <h3>{{ item.units }}</h3>
              </div>
              <div class="justify-content-end">
                <button @click="deleteItem(index)" class="icon pi-trash"></button>
              </div>
            </template>
          </pv-card>
        </div>
      </div>

      <div>
        <router-link to="/final-order">
          <pv-button label="Finish Order"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.machine__image {
  width: 100px;
  height: auto;
  margin-right: 10px;
}
.empty-state {
  text-align: center;
  color: #888;
  font-size: 1.2em;
  margin-top: 20px;
}
</style>