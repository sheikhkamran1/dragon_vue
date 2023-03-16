<template>
    <template-view>
        <section class="py-5">
            <div class="container">
              
            </div>
        </section>
    </template-view>
</template>
<script>
import TemplateView from '@/views/TemplateView'
import { mapGetters } from 'vuex';
export default {
    name: "PostsView",
    components: { TemplateView },
    props: ['slug'],
    computed: {
        ...mapGetters({
            menus: 'get_menus'
        }),
        posts() {
            return this.menus.map((m) => m.posts.find((p) => p.slug == this.slug))
        },
        posts() {
            return this.posts.find((p) => p != null)
        }
    },
}
</script>
<style lang="scss" scoped></style>