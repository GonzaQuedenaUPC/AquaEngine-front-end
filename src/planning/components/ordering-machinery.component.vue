<script>
import EventBus from "../../shared/event-bus.js";

export default {
  name: "ordering-machinery",
  props: {
    ordering: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      desiredUnits: {},
    };
  },
  methods: {
    requestItem(item) {
      const units = this.desiredUnits[item.id] || 0;
      const requestData = {
        ...item,
        unitsRequested: units,
      };
      EventBus.emit("item-selected", requestData);
      this.$emit("item-requested", requestData);
    },
  },
};
</script>

<template>
  <div class="ordering container w-full">
    <div class="ordering__content w-full flex justify-center flex-column gap-3">

      <div class="ordering__scroll-container">

        <div class="ordering__cards">
          <div v-for="item in ordering" :key="item.id" class="ordering__card">

            <pv-card class="ordering__card-content">

              <template #content>
                <img :src="item.urlToImage" alt="Machine" class="machine__image">
                <p class="ordering__card-title">{{ item.name }}</p>
                <p class="ordering__card-info">Request: {{ item.request }}</p>
                <p class="ordering__card-info">Units available: {{ item.units }}</p>
              </template>

              <template #footer>
                <div class="footer__controls">
                  <input type="number" min="0" class="unit__input" v-model.number="desiredUnits[item.id]" placeholder="Units" />
                  <pv-button label="Request" severity="success" class="request__button" @click="requestItem(item)" />
                </div>
              </template>
            </pv-card>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>

.ordering__scroll-container {
  max-height: 400px;
  overflow-y: auto;
  padding: 16px;
}

.ordering__scroll-container::-webkit-scrollbar {
  width: 8px;
}

.ordering__scroll-container::-webkit-scrollbar-thumb {
  background-color: #8298E7;
  border-radius: 10px;
}

.ordering__scroll-container::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.ordering__cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.ordering__card {
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.ordering__card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.ordering__card-content {
  padding: 16px;
}

.machine__image {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
}

.ordering__card-title {
  font-size: 1.1em;
  font-weight: bold;
  color: #333;
  margin: 8px 0;
}

.ordering__card-info {
  font-size: 0.9em;
  color: #666;
  margin: 4px 0;
}

.footer__controls {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 12px;
}

.unit__input {
  padding: 8px;
  width: 100%;
  max-width: 80px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.request__button {
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.request__button:hover {
  background-color: #4caf50;
  transform: scale(1.02);
}

@media (max-width: 768px) {
  .ordering__cards {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .ordering__card {
    width: 100%;
    padding: 10px;
  }

  .machine__image {
    height: 120px;
  }

  .ordering__card-title {
    font-size: 1em;
  }

  .ordering__card-info {
    font-size: 0.85em;
  }

  .unit__input, .request__button {
    font-size: 0.9em;
  }
}
</style>
