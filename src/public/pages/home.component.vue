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

  <section class="w-full lg:-mt-8">

    <div class="container home pb-8 pt-5">

      <h2 class="home__title title mb-5">Select your service</h2>

      <div class="home__features features">

        <router-link to="/inventory" class="feature__item">
          <pv-card class="feature__card">
            <template #content>
              <div class="feature__content">
                <img src="../../assets/images/inventory.svg" alt="inventory-icon" class="feature__icon"/>
                <span>Inventory</span>
              </div>
            </template>
          </pv-card>
        </router-link>

        <router-link to="#" class="feature__item">
          <pv-card class="feature__card">
            <template #content>
              <div class="feature__content">
                <img src="../../assets/images/invoicing.svg" alt="invoicing-icon" class="feature__icon"/>
                <span>Invoicing</span>
              </div>
            </template>
          </pv-card>
        </router-link>

        <router-link to="/monitoring" class="feature__item">
          <pv-card class="feature__card">
            <template #content>
              <div class="feature__content">
                <img src="../../assets/images/monitoring.svg" alt="monitoring-icon" class="feature__icon"/>
                <span>Equipment Monitoring</span>
              </div>
            </template>
          </pv-card>
        </router-link>

        <router-link to="#" class="feature__item">
          <pv-card class="feature__card">
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
  </section>


</template>

<style scoped>

.features {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16;
}

.feature__item {
  @apply w-full col-span-1;
}

.feature__card {
  @apply lg:h-[100px] justify-center;
  box-shadow: 0 0 10px 6px rgba(0, 0, 0, 0.1);
}

.feature__content {
  @apply flex flex-row items-center gap-10 w-full h-full;
}

.feature__icon {
  @apply w-10 h-10;
}

</style>
