<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" style="background-color: #00aeef !important;">
    <div class="container">
      <!-- <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item dropdown" v-for="(menu, index) in menus" :key="index">
            <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"
              v-if="menu.posts.length > 0">
              {{ menu.name }}
            </a>
            <a class="nav-link text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" v-else @click.prevent="$router.push({name:menu.url})">
              {{ menu.name }}
            </a>
            <ul class="dropdown-menu text-light" v-if="menu.posts.length > 0">
              <li><a class="dropdown-item" href="#" v-for="(submenu,i) in menu.posts" :key="i">{{ submenu.title }}</a></li>
            </ul>
          </li>
        </ul>
      </div> -->
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown" v-for="(menu,index) in menus" :key="index">
                <a class="nav-link text-light"  href="#" @click.prevent="$router.push({name: `${menu.url}`})" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" v-if="menu.posts.length == 0">
                    {{ menu.name }}
                </a>
                <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" v-else>
                    {{ menu.name }}
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style="background-color: #00aeef !important;" v-if="menu.posts.length>0">
                  <li v-for="(post,i) in menu.posts" :key="i"><a class="dropdown-item text-light" href="#" @click.prevent="$router.push({name:'posts',params:{slug:post.slug}})">{{ post.title }}</a></li>
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
    
  }
}
</script>

<style lang="scss" scoped></style>