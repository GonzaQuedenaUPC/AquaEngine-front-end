<script>
import EventBus from "../../shared/event-bus.js";

export default {
  name: "order-detail-view",
  data() {
    return {
      items: []
    };
  },
  methods: {
    handleItemRequested(item) {
      console.log('Event received: item-selected', item);
      this.addItem(item);
    },
    addItem(newItem) {
      if (newItem) {
        this.items.push(newItem);
        console.log('Items after adding:', this.items);
      }
    },
    deleteItem(index) {
      this.items.splice(index, 1);
      console.log('Items after deletion:', this.items);
    }
  },
  created() {
    console.log('Component Order Details created');
    try {
      EventBus.on('item-selected', this.handleItemRequested);
    } catch (error) {
      console.error('Error to listen the event:', error);
    }
  },
  beforeUnmount() {
    EventBus.off('item-selected', this.handleItemRequested);
  }
};
</script>

<template>
<div class="container">
 <div class="flex justify-content-start">
   <h2>Order Detail</h2>
 </div>
  <div class="fex flex-column justify-content-center">
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

</div>

</template>

<style scoped>

.container {
  display: flex;
  justify-content: center;
  padding: 20px;
  background: green;
}

.machine__image {
  width: 100px;
  height: auto;
}

</style>