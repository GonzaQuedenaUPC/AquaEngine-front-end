<script>
export default {
  name: "toolbar-content",

  props: {
    profile: {
      type: {},
      required: true
    }
  }
}
</script>

<template>
  <nav class="nav">
    <pv-toolbar class="toolbar">
      <template #start>
        <div class="toolbar__logo">
          <router-link to="/">
            <img src="../../assets/images/aqua-engine-logo.svg" alt="aqua-engine-logo">
          </router-link>
        </div>
      </template>

      <template #end>

        <ul class="dropdown__main">
          <li class="dropdown__list dropdown__user--main">
            <a href="#" class="dropdown__link">
              <img src="../../assets/images/user.svg" class="nav__icon" alt="user-icon"/>
              <span class="dropdown__span dropdown__span--user">{{ profile.name || profile._name }}</span>
            </a>
          </li>
        </ul>

        <a href="#menu" class="nav__menu">
          <img src="../../assets/images/menu.svg" class="nav__icon" alt="menu-icon"/>
        </a>
        <a href="#" class="nav__menu nav__menu--second">
          <img src="../../assets/images/close.svg" class="nav__icon" alt="menu-icon"/>
        </a>

        <ul class="dropdown__menu" id="menu">
          <li class="dropdown__list dropdown__user--menu">
            <a href="#" class="dropdown__link">
              <img src="../../assets/images/user.svg" class="nav__icon nav__icon--user" alt="user-icon"/>
              <span class="dropdown__span dropdown__span--user">{{ profile.name || profile._name }}</span>
            </a>
          </li>

          <li class="dropdown__list dropdown__list--close">
            <a href="#" class="dropdown__link">
              <img src="../../assets/images/user-close.svg" class="nav__icon" alt="user-icon"/>
              <span class="dropdown__span dropdown__span--menu">Close Profile</span>
            </a>
          </li>
        </ul>

      </template>

    </pv-toolbar>
  </nav>
</template>

<style scoped>

.nav {
  margin: -3px;
}

.toolbar {
  width: 100%;
  padding: 15px;
  background-color: var(--primary-color);

  --img1: scale(1);
  --img2: scale(0);

  overflow: hidden;
}

.toolbar:has(.dropdown__menu:target) {
  --img1: scale(0);
  --img2: scale(1);

  --clip: inset(14%  0 0 0);
}

.nav__menu {
  position: relative;
  display: inline-block;
  margin-right: 2rem;

  z-index: 10;
  transform: var(--img1);
}

.nav__menu--second {
  position: absolute;
  right: 5px;
  transform: var(--img2);
}

.nav__icon {
  width: 30px;
  display: inline-block;
}


.dropdown__main {
  display: none;
}

.dropdown__menu {
  position: absolute;

  background-color: var(--primary-color);
  width: 50%;
  max-width: 300px;

  right: 0;
  top: 0;
  bottom: 0;

  display: grid;
  align-content: start;
  gap: 1rem;

  padding: 155px 0 0 30px;

  clip-path: var(--clip, inset(14% 0 0 100%));
  transition: clip-path .5s;
}

.dropdown__list {
  list-style: none;
}

.dropdown__link,
.toolbar {

  display: flex;
  gap: .6rem;
  align-items: center;

  color: var(--white);
  padding: 1em .7em;
  text-decoration: none;
}

.dropdown__span--user,
.dropdown__span--menu {
  margin-left: .5rem;
  letter-spacing: 2px;
}

.dropdown__span--user {
  color: var(--black);
  font-weight: 600;
  font-size: 20px;
}

.toolbar__logo {
  margin-left: 2rem;
}

@media (min-width: 769px) {
  .dropdown__main {
    display: inline-block;
    margin-right: 3rem;
  }

  .dropdown__user--menu {
    display: none;
  }

}

</style>