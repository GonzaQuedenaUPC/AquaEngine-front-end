<script>

export default {
name: "ordering-machinery",
  props:{
    ordering: {
      type: Object,
      required: true
    }
  },
  methods: {
    requestItem(item) {
      this.$emit('item-requested', item);
    }
  }
}
</script>

<template>
  <div class="ordering__cards">
    <div v-for="item in ordering" :key="item.id" class="ordering__card">
      <pv-card>
        <template #content>
          <img :src="item.urlToImage" alt="Machine" class="machine__image">
          <p>{{ item.name }}</p>
          <p>{{ item.request }}</p>
          <p>{{ item.units }}</p>
        </template>
        <template #footer>
            <pv-button label="Request" severity="success" class="request__button" @click="requestItem(item)"/>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<style scoped>
.ordering__cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  justify-content: center;
}

.ordering__card {
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.ordering__card p {
  margin: 8px 0;
  color: #333;
}

.request__button {
  margin-top: 12px;
  width: 100%;
  font-weight: bold;
}
</style>