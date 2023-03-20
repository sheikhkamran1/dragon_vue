<template>
    <template-view>
     <section>
      <div class="container-fluid py-5"  style="background-color: #E9FAFF;">
        <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="text-center">{{ post.title }}</h1>
               <img :src="post.image" class="img-fluid" alt="">
               <div v-html="post.content"></div>
            </div>
        </div>
        <div>
        </div>
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

  
  
  
  
  
  
  
  
  
  
  
  