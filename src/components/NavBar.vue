<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <!-- <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> -->
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item dropdown" v-for="(menu, index) in menus" :key="index">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"
              v-if="menu.posts.length > 0">
              {{ menu.name }}
            </a>
            <a class="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" v-else>
              {{ menu.name }}
            </a>
            <ul class="dropdown-menu" v-if="menu.posts.length > 0">
              <li><a class="dropdown-item" href="#" v-for="(submenu,i) in menu.posts" :key="i">{{ submenu.title }}</a></li>
              
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "NavBar",
  computed: {
    ...mapGetters({
      menus: 'get_menus'
    }),
    posts() {
      return this.menus.map((m) => m.posts.find((p) => p.slug == this.slug))
    },
    post() {
      return this.posts.find((p) => p != null)
    }
  }
}
</script>

<style lang="scss" scoped></style>