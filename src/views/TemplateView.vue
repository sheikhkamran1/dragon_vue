<template>
    <div>
        <Header>
          <!-- Topbar -->
         <topbar-component/>
          <!-- Navbar -->
          <nav-bar/>
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
import  NavBar from '@/components/NavBar.vue'
    export default {
        name:"TemplateView",
        components:{TopbarComponent,FooterComponent,NavBar}
    }
</script>