<script>
export default {
  name: "toolbar-content",

  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <pv-toolbar class="toolbar">
    <template #start>
      <div class="toolbar__logo">
        <a href="#">
          <img src="../../assets/images/aqua-engine-logo.svg" alt="aqua-engine-logo">
        </a>
      </div>
    </template>

    <template #end>
      <div class="toolbar__user">
        <a href="" class="user__info">
          <img src="../../assets/images/user.svg" alt="user-icon" class="user__logo"/>
          <span class="user__username">{{ user.username }}</span>
        </a>
      </div>
    </template>

  </pv-toolbar>
</template>

<style scoped>

.toolbar {
  width: 100%;
  padding: 15px;
  background-color: var(--primary-color);
}

.toolbar__logo {
  margin-left: 2rem;
}

.user__info {
  display: flex;
  margin-right: 2rem;
}

.user__logo {
  width: 24px;
  height: 24px;
  margin-right: 1.2rem;
}

.user__username {
  color: var(--black); /* Color del texto */
  font-weight: 700;
  font-size: 1.2rem; /* Tamaño de la fuente del usuario */
}

</style>