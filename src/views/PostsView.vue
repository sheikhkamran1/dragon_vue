<template>
    <template-view>
     <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-12" v-for="(post, index) in post" :key="index">
            <!-- <p v-html="post.content"></p> -->
            <!-- {{ post }} -->
            <h1>{{ post.title }}</h1>
          </div>
        </div>
        <div>
        </div>
      </div>
     </section>
    </template-view>
  </template>
  <script>
  import TemplateView from '@/views/TemplateView'
  import { mapGetters } from 'vuex';
    export default {
      components:{TemplateView},
      props:['slug'],
      computed:{
        ...mapGetters({
          menus:'get_menus'
        }),
        filterPosts(){
          return this.menus.map((m) => m.posts.find((p) => p.slug == this.slug))
        },
        post(){
          return this.filterPosts.find((p) => p != null)
        }
      },
    }
  </script>
  <style lang="scss" scoped>
  </style>
  white_check_mark
  eyes
  raised_hands
  
  
  
  
  
  
  
  
  
  
  
  