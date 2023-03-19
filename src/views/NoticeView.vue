<template>
    <template-view>
        <section>
            <div class="header">
                <h3 class=" text-light text-center" style="padding-top: 180px;">Notice</h3>
            </div>
           <div class="container-fluid py-5" style="background-color: #E9FAFF;padding-top: 180px;">
            <div class="container">
                <div class="row">
                    <div class="col-md-12" v-for="(notice,index) in notice" :key="index">
                        <h3 class="text-center py-3">{{ notice.subject }}</h3>
                        <img :src="notice.image" alt="" class="d-block mx-auto img-fluid"><hr>
                    </div>
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
    name: "NoticeView",
    components: { TemplateView },
    computed:{
        ...mapGetters({
            notice: 'get_notice',
        })
    }
}
</script>

<style lang="scss" scoped>
</style>