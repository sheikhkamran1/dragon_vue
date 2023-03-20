<template>
     <template-view>
        <div class="container-fluid">
            <div class="container">
                <div class="row">
                    <!-- <div class="col-md-4" v-for="(service,index) in services" :key="index">
                        <el-card>
                            {{ service.title }}
                        </el-card>
                    </div> -->
                    {{ scheme }}

                </div>
            </div>
        </div>
     </template-view>
</template>

<script>
import TemplateView from './TemplateView.vue';
import { mapGetters } from 'vuex';
    export default {
        name:"SavingScheme",
        components:{TemplateView},
        props:['slug'],
      computed:{
        ...mapGetters({
          schemes:'get_schemes'
        }),
        scheme(){
          return this.schemes.filter((s) => s.slug == this.slug)
        },
       
      },
    }
</script>

<style lang="scss" scoped>

</style>