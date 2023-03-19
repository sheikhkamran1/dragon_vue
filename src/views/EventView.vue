<template>
   <template-view>
        <section>
            <div class="header">
                <h3 class=" text-light text-center" style="padding-top: 180px;">Archive</h3>
            </div>
           <div class="container-fluid py-5" style="background-color: #E9FAFF;padding-top: 180px;">
            <div class="container">
                <div class="row">
                    <div class="col-md-12" v-for="(event,index) in event" :key="index">
                        <h3 class="text-center py-3">{{ event.title }}</h3>
                        <img :src="event.image" alt="" class="d-block mx-auto img-fluid">
                        <p v-html="event.description" class="text-align-right text-secondary"></p><hr>
                    </div>
                    <!-- {{ event }} -->
                </div>
            </div>
           </div>
        </section>
    </template-view>
</template>

<script>
import TemplateView from './TemplateView.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'EventView',
    components:{TemplateView},
    computed:{
        ...mapGetters({
            event:'get_event',
        })
    }
}
</script>

<style lang="scss" scoped></style>