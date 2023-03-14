<template>
    <div>
        <Header>
          <!-- Topbar -->
         <topbar-component/>
          <!-- Navbar -->
        </Header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <footer-component/>
        </footer>
    </div>
</template>

<script>
import  TopbarComponent from '@/components/TopbarComponent.vue'
import  FooterComponent from '@/components/FooterComponent.vue'
    export default {
        name:"TemplateView",
        components:{TopbarComponent,FooterComponent}
    }
</script>