<script>
export default {
  name: "ordering-machinery",
  data() {
    return {
      machines: [
        { name: 'Machine 1', image: 'image1.jpg', units: 0 },
        { name: 'Machine 2', image: 'image2.jpg', units: 0 },
        { name: 'Machine 3', image: 'image3.jpg', units: 0 },
        { name: 'Machine 4', image: 'image4.jpg', units: 0 },
      ],
      cart: []
    };
  },
  methods: {
    requestMachine(machine) {
      machine.units++;
      const item = this.cart.find(item => item.name === machine.name);
      if (item) {
        item.units++;
      } else {
        this.cart.push({ ...machine, units: 1 });
      }
    },
    goToCart() {
      this.$router.push({ name: 'OrderDetail', params: { cart: this.cart } });
    }
  }
};
</script>

<template>
  <div>
    <h2>Ordering Machinery</h2>
    <div v-for="(machine, index) in machines" :key="index" class="machine-card">
      <img :src="machine.image" alt="machine" />
      <p>{{ machine.name }}</p>
      <button @click="requestMachine(machine)">Request</button>
      <span>{{ machine.units }} Unit(s)</span>
    </div>
    <button @click="goToCart">Cart</button>
  </div>
</template>

<style scoped>

</style>