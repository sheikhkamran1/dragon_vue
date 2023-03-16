<template>
    <div class="container-fluid py-3">
      <div class="container d-flex justify-content-between align-items-center">
          <div class="row">
              <div class="col-md-4">
                  <img class="img-fluid mx-auto d-block" :src="company.logo" alt="">
              </div>
              <div class="col-md-4">
                  <img  class="img-fluid mx-auto d-block" :src="company.aniversary_image" alt="" width="80">
              </div>
              <div class="col-md-4">
              <ul class="links">
                  <li><span class="text-secondary"><i class="fa fa-map-marker" aria-hidden="true"></i> {{ company.city }} {{ company.street }}</span></li>
                  <li><a href="tel:+9851278098" class="text-secondary"><i class="fa fa-phone" aria-hidden="true"></i> {{ company.contact_1 }}</a></li>
                  <li><a href="mailto:dragon.scco@gmail.com" class="text-secondary"><i class="fa fa-envelope" aria-hidden="true"></i> {{ company.email }}</a></li>
              </ul>
              </div>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  export default {
      name: "TopbarComponent",
      computed: {
          ...mapGetters({
              company: 'get_profile',
          })
      }
  }
  </script>
  
  <style scoped>
  .container-fluid{
      background-color:#e9faff;
  }
  .links a{
  text-decoration: none;
  }
  .links li{
      list-style: none;
  }
  </style>
  