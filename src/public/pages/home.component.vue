<script>
export default {
  name: "home-view"
}
</script>

<template>
  <main class="home">
    <div class="home__container">

      <h2 class="home__title">Select your service</h2>

      <div class="features">
        <a href="#">
          <pv-card class="feature__item">
            <template #content>
              <div class="feature__content">
                <img src="../../assets/images/inventory.svg" alt="inventory-icon" class="feature__icon"/>
                <span>Inventory</span>
              </div>
            </template>
          </pv-card>
        </a>

        <a href="#">
          <pv-card class="feature__item">
            <template #content>
              <div class="feature__content">
                <img src="../../assets/images/invoicing.svg" alt="invoicing-icon" class="feature__icon"/>
                <span>Invoicing</span>
              </div>
            </template>
          </pv-card>
        </a>

        <a href="#">
          <pv-card class="feature__item">
            <template #content>
              <div class="feature__content">
                <img src="../../assets/images/monitoring.svg" alt="monitoring-icon" class="feature__icon"/>
                <span>Equipment Monitoring</span>
              </div>
            </template>
          </pv-card>
        </a>

        <a href="#">
          <pv-card class="feature__item">
            <template #content>
              <div class="feature__content">
                <img src="../../assets/images/machinery.svg" alt="machinery-icon" class="feature__icon"/>
                <span>Ordering Machine</span>
              </div>
            </template>
          </pv-card>
        </a>
      </div>
    </div>
  </main>
</template>

<style scoped>

.home {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home__container {
  width: 65%;
  padding: 40px;
  border-radius: .5rem;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);
}

.home__title {
  margin: 1rem 0;
}

.features {
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 4rem;
}

.feature__content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}

.feature__icon {
  width: 45px;
  height: 45px;
}

.feature__item {
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.4);
  padding: 20px;
}

</style>
