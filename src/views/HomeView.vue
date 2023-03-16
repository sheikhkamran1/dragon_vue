
<template>
  <template-view>
    <section>
      <!-- Slides -->
      <slide-component />
      <!-- About us -->
      <section class="container-fluid py-5" style="background-color:#d9e8ed">
        <div class="container">
          <div class="row">
            <div class="col-md-6 mb-2">
              <!-- <h3 class="text-secondary text-center">{{ $about->title }}</h3> -->
              <h3 class="text-secondary">{{ about.title }}</h3>
              <p class="" v-html="about.description"></p>
              <a href="" class="text-secondary">Learn More <i class="fa fa-long-arrow-right ms-1"
                  aria-hidden="true"></i></a>
            </div>
            <div class="col-md-6">
              <img :src="about.image" alt="" class="img-fluid center" style="border: 2px solid #00aeef ">
            </div>
          </div>
        </div>
      </section>
      <!-- Message From Principle -->
      <section class="container-fluid">
        <div class="container py-5">
          <div class="row py-3" v-for="(message, index) in message" :key="index">
            <div class="col-md-3 img-div order-md-first" v-if="index % 2 == 0">

              <img :src="message.image" alt="" class="img-fluid image-con mx-auto d-block" width="200">
              <h4 class="py-3 text-center">{{ message.name }} <br> <span class="text-secondary"
                  style="font-size:large;">Message from {{
                    message.title }}</span></h4>
            </div>

            <div class="col-md-3 img-div order-md-last" v-else>

              <img :src="message.image" alt="" class="img-fluid image-con mx-auto d-block" width="200">
              <h4 class="py-3 text-center">{{ message.name }} <br> <span class="text-secondary"
                  style="font-size:large;">Message from {{ message.title }}</span></h4>
            </div>
            <div class="col-md-9 message-div">
              <div>
                <!-- <i class="fa-solid fa-quote-left fa-secondary" style="font-size: 25px; color: grey;"></i> -->
                <p v-html="message.content" class="text-align-right text-secondary"></p>
                <!-- <i class="fa fa-quote-right float-end" aria-hidden="true" style="font-size: 25px; color: grey;"></i> -->
              </div>
              <hr>
            </div>
          </div>
        </div>
      </section>
      <!-- Schemes -->
      <div class="container" v-if="schemeLoading">
        loading...
      </div>
      <section v-else>
        <div class="container-fluid bg-light">
          <div class="container">
            <h3 class="text-secondary text-center  py-3">Our Schemes</h3>
            <!-- {{ schemes }} -->
            <carousel :autoplay="true" :items="4" :nav="false"
              :responsive="{ 0: { items: 1, nav: false }, 600: { items: 4, nav: false } }">
              <div v-for="(scheme, index) in schemes" :key="index" class="py-5">
                <el-button @click="visible = true" class="py-2 mx-auto d-block">{{ scheme.name }}</el-button><br>
              </div>
            </carousel>
          </div>
        </div>
      </section>
      
      <!-- Offers Image -->
      <div class="section">
        <div class="container-fluid">
          <div class="container">
            <div class="row">
              <div class="col-md-4" v-for="(offer,index) in offers" :key="index">
                {{ offers }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template-view>
</template>
 
<script>
import TemplateView from '@/views/TemplateView.vue'
import SlideComponent from '@/components/SlideComponent.vue'
import { mapGetters } from 'vuex';
import carousel from 'vue-owl-carousel2'

export default {
  components: { TemplateView, SlideComponent, carousel},
  computed: {
    ...mapGetters({
      about: 'get_about',
      message: 'get_message',
      schemes: 'get_schemes',
      schemeLoading: 'get_schemes_loading',
      offers: 'get_offers',
      offerLoading: 'get_offers_loading',
    })
  }
}
</script>
 
<style scoped>
.image-con {
  height: 150px;
  width: 150px;
  /* background-color: red; */
  box-shadow: 20px 20px 10px #e9faff;
  overflow: hidden;
  border-radius: 100%;
  border: 2px solid #00aeef;
}

@media only screen and (max-width: 767px) {
  .message-div {
    padding-top: 10px;
  }
}
</style>
 