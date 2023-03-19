<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions(['getProfile', 'getSlides', 'getAbout', 'getMessage','getSchemes','getMenus','getPosts','getOffers','getGallery','getDownload','getNotice','getEvent'])
  },
  created() {
    this.getProfile(),
      this.getSlides(),
      this.getAbout(),
      this.getMessage(),
      this.getSchemes(),
      this.getMenus(),
      this.getPosts(),
      this.getOffers(),
      this.getGallery(),
      this.getDownload(),
      this.getNotice(),
      this.getEvent()
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.header {
            height: 60vh;
            width: 100%;
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://dragonsaving.com.np/wp-content/uploads/2021/01/d_finance_banner-1.jpg') repeat no-repeat;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            position: relative;
        }
/* 
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
