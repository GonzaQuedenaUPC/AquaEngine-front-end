<script>
export default {
  name: "order-detail",
  props: ['cart'],
  methods: {
    goBack() {
      this.$router.push({ name: 'OrderingMachinery' });
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    closeOrder() {
      this.$router.push({ name: 'FinalDetail' });
    }
  }
};
</script>

<template>
  <div>
    <header>
      <img src="logo.png" alt="AquaEngine" @click="goBack" />
    </header>
    <h2>Order Detail</h2>
    <div v-for="(item, index) in cart" :key="index" class="order-item">
      <p>{{ item.name }} - Unit: {{ item.units}}</p>
      <button @click="removeFromCart(index)">🗑️</button>
    </div>
    <button @click="closeOrder">Close Order</button>
  </div>
</template>

<style scoped>

</style>