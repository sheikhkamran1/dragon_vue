<template>
    <div>

        <vue-flux :options="fluxOptions" :images="fluxImages" :transitions="fluxTransitions" ref="slider">
            <flux-pagination slot="pagination"></flux-pagination>
        </vue-flux>
    </div>
</template>

<script>
import { VueFlux, FluxPagination, Transitions } from 'vue-flux';
import { mapGetters } from 'vuex';

export default {
    name: "SlideComponent",
    components: {
        VueFlux,
        FluxPagination
    },
    data: () => ({
        fluxOptions: {
            autoplay: true,
            height:"500px"
        },

        fluxTransitions: {
            transitionBook: Transitions.transitionBook
        }
    }),
    computed: {
        ...mapGetters({
            slides: 'get_slides',
        }),
        fluxImages (){
            return this.slides.map((s) => s.image)
        },
    }
}
</script>

<style lang="scss" scoped></style>