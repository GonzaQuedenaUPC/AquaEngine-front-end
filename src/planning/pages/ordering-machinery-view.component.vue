<script>
import OrderingMachineryComponent from "../components/ordering-machinery.component.vue";
import { OrderingMachineryService } from "../services/ordering-machinery.service.js";
import {cartApiService} from "../services/cart-api.service.js";

export default {
  name: "ordering-machinery-view",
  components: {
    OrderingMachineryComponent,
  },
  data() {
    return {
      localMonitoring: [],
      orderingService: new OrderingMachineryService(),
      cartService: new cartApiService(),
      selectedItem: null,
    };
  },
  async created() {
    try {
      const response = await this.orderingService.getAll();
      this.localMonitoring = response.data;
      console.log(this.localMonitoring);
    } catch (error) {
      console.error("Failed to load ordering data: ", error);
    }
  },
  methods: {
    async handleItemRequested(item) {
      this.selectedItem = item;
      console.log("Emitting event: item-selected", this.selectedItem);
      try{
        await this.cartService.createCart({
        name: this.selectedItem.name, urlToImage: this.selectedItem.urlToImage,
        });
      } catch (error) {
        console.error("Failed to create cart item: ", error);
      }
    },
  }
};
</script>

<template>
  <section class="container md:-mt-16">
    <div class="ordering-machinery p-2">
      <div class="header flex items-center justify-between">
        <!-- Título -->
        <h1 class="ordering-machinery__title title">Ordering Machinery</h1>

        <router-link to="/order-detail">
          <pv-button label="Order Detail"/>
        </router-link>
      </div>
      <p class="ordering-machinery__info -mt-4 mb-3">
        Access the ordering system to request and track machinery.
      </p>
      <ordering-machinery-component :ordering="localMonitoring" @item-requested="handleItemRequested" />
    </div>
  </section>
</template>

<style scoped>

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 16px;
}

</style>
