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
      if (item && item.id && item.name && item.units) {
        console.log('Event received: item-selected', item);
        this.addItem(item);
      }
      else {
        console.error("Invalid item received: ", item);
      }
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
    EventBus.on('item-selected', this.handleItemRequested);
  },
  unmounted() {
    console.log('Component Order Details destroyed');
    EventBus.off('item-selected', this.handleItemRequested);
  }
};
</script>

<template>
  <div class="container">
    <div class="flex justify-content-start">
      <h2>Order Detail</h2>
    </div>
    <div class="flex flex-column justify-content-center">
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