<template>
    <template-view>
        <div>
        <!-- {{ schemes }} -->
        <div class="container-fluid py-5" style="background-color: #E9FAFF;">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 p-2" v-for="(scheme,index) in schemes" :key="index">
                       <a href="" @click.prevent= "$event=>$router.push({name:'savingscheme',params:{slug:scheme.slug}})" class="text-decoration-none text-secondary">
                        <el-card>
                            <h5 class="text-center">{{ scheme.name }}</h5>
                        </el-card>
                       </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </template-view>
</template>

<script>
import TemplateView from './TemplateView.vue';
import { mapGetters } from 'vuex';
    export default {
        name:"SchemeView",
        components:{TemplateView},
        computed:{
        ...mapGetters({
          schemes:'get_schemes'
        }),
        filterPosts(){
          return this.schemes.map((m) => m.posts.find((p) => p.slug == this.slug))
        },
        post(){
        return this.filterPosts.find((p) => p != null)
        }
      },
    }
</script>

<style lang="scss" scoped>

</style>