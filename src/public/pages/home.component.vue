<script>
import { ProfileService } from "../../control/services/profile.service.js";
import Profile from "../../control/models/profile.entity.js";

export default {
  name: "home-view",

  data() {
    return {
      profileService: null,
      profile: new Profile({}),
    }
  },

  //#region Methods
  methods: {
    emitProfileSelected(profile) {
      this.$emit('profile-selected', profile);
    },

    _buildProfileFromResponse(response) {
      return new Profile({
        id: response.id,
        name: response.name,
        email: response.email,
        ruc: response.ruc,
        inventory: response.inventory
      });
    },

    _getProfileById(id) {
      this.profileService.getById(id)
          .then(response => {
            this.profile = this._buildProfileFromResponse(response.data);
            this.emitProfileSelected(this.profile);

            localStorage.setItem('profile', JSON.stringify(this.profile));
          })
          .catch(error => {
            console.error(error);
          });
    },


  },
  //#endregion

  //#region Lifecycle Hooks
  created() {
    this.profileService = new ProfileService();
    this._getProfileById(2);
  }
  //#endregion
}
</script>

<template>
  <main class="home__container container">
    <div class="home__content content">

      <h2 class="home__title">Select your service</h2>

      <div class="features">
        <router-link to="/inventory">
          <pv-card class="feature__item">
            <template #content>
              <div class="feature__content">
                <img src="../../assets/images/inventory.svg" alt="inventory-icon" class="feature__icon"/>
                <span>Inventory</span>
              </div>
            </template>
          </pv-card>
        </router-link>

        <router-link to="#">
          <pv-card class="feature__item">
            <template #content>
              <div class="feature__content">
                <img src="../../assets/images/invoicing.svg" alt="invoicing-icon" class="feature__icon"/>
                <span>Invoicing</span>
              </div>
            </template>
          </pv-card>
        </router-link>

        <router-link to="/monitoring">
          <pv-card class="feature__item">
            <template #content>
              <div class="feature__content">
                <img src="../../assets/images/monitoring.svg" alt="monitoring-icon" class="feature__icon"/>
                <span>Equipment Monitoring</span>
              </div>
            </template>
          </pv-card>
        </router-link>

        <router-link to="#">
          <pv-card class="feature__item">
            <template #content>
              <div class="feature__content">
                <img src="../../assets/images/machinery.svg" alt="machinery-icon" class="feature__icon"/>
                <span>Ordering Machine</span>
              </div>
            </template>
          </pv-card>
        </router-link>
      </div>
    </div>
  </main>
</template>

<style scoped>

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
