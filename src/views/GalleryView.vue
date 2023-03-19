<template>
    <template-view>
        <section>
    <div class="header">
        <h3 class=" text-light text-center" style="padding-top: 180px;">Gallery</h3>
    </div>
            <div class="container py-4" v-if="schemeLoading">
                <img src="@/assets/loading.gif" class="d-block text-center" alt="" width="50 !important"
                    style=" display: block;margin-left: auto !important; margin-right: auto !important;">
            </div>
            <div class="container-fluid py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 py-3" v-for="(gallery, index) in gallery" :key="index">
                            <el-card>
                                <img :src="gallery.featured_image" alt="" class="img-fluid">
                                <p class="text-secondary text-center mt-5">{{ gallery.name }}</p>
                            </el-card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </template-view>
</template>

<script>
import { mapGetters } from 'vuex';
import TemplateView from './TemplateView.vue';
export default {
    name: "GalleryView",
    components: { TemplateView },
    computed: {
        ...mapGetters({
            gallery: 'get_gallery',
            schemeLoading: 'get_gallery_loading',
        })
    }
}
</script>

<style  scoped>

</style>