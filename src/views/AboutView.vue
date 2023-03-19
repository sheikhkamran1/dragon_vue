<template>
  <template-view>
    <div class="container-fluid" style="background-color: #E9FAFF;">
      <!-- About Slide -->
      <div class="container py-4" v-if="offerLoading">
        <img src="@/assets/loading.gif" class="d-block text-center" alt="" width="50 !important" style=" display: block;margin-left: auto !important; margin-right: auto !important;">
      </div>
      <slide-component />
      <div class="container py-5">
        <div class="row">
          <div class="col-md-12">
            <p text-secondary>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta autem, aut officia hic porro laudantium voluptatum amet. Inventore pariatur amet ex dolorum cum explicabo quibusdam. Consequatur, earum dolore quas ea inventore impedit accusantium cum, maiores illo maxime ab mollitia architecto eius quibusdam dignissimos. Saepe commodi porro sequi, eaque at libero, excepturi nemo ea doloribus molestiae dicta dolorum fugiat dolores. Commodi quasi natus laboriosam fuga vitae unde blanditiis, facilis, error voluptatibus labore perferendis sapiente iure dolorem voluptate nostrum ipsam porro similique in iste animi possimus. Cum, tempora corrupti? Dignissimos, minus rem. Molestiae totam minus facilis voluptas dolorum aut voluptatem corporis mollitia adipisci cupiditate? Velit odio dignissimos quaerat molestiae! Eos laudantium numquam nisi aut voluptatem repellat ipsum commodi laboriosam cum eum quaerat, iure enim, magnam quae expedita quas hic incidunt aliquid a fuga neque. Magnam et, laborum voluptates aspernatur ullam expedita excepturi voluptatem sint? Deleniti eius necessitatibus omnis hic error illum libero incidunt totam. Quidem ratione magnam dolores id tempora ipsum. Consequatur esse laboriosam possimus minus enim incidunt distinctio aut. Consequatur earum corrupti consectetur harum sunt quis eveniet reiciendis, eos rerum impedit voluptates tenetur nihil neque velit quam voluptatum ducimus autem. Aliquid alias deserunt rem laudantium nam iste ut numquam. Eligendi, ducimus tempora, temporibus harum qui natus, quis enim perspiciatis voluptas architecto non obcaecati! Voluptate pariatur repudiandae at quidem ullam nisi voluptates voluptas laboriosam magni, dignissimos ea molestiae libero perspiciatis omnis harum eius molestias est, accusamus nemo! Tenetur sunt nam cumque reiciendis, repellendus debitis, mollitia esse, quia dolore fugit repellat? Soluta praesentium rerum nostrum debitis fugiat mollitia libero illum ipsum adipisci porro placeat iure ipsam aperiam, odio eveniet iste assumenda perferendis repudiandae eaque in. Blanditiis illum maiores ullam reiciendis debitis nisi eos voluptatibus, veritatis corporis rerum? Cum nostrum commodi hic quod dolore earum alias assumenda perferendis vero repudiandae adipisci tempore reprehenderit aliquid consectetur fuga, aspernatur sequi minus quas odit. Aperiam explicabo quam molestiae alias deserunt. Veniam voluptate placeat illum. Nulla molestias ducimus velit atque dicta itaque sed eveniet cum maiores aperiam sunt quis vitae voluptas quo laborum pariatur, fuga autem nisi officiis libero. Iusto, dignissimos fugiat adipisci temporibus nulla facere aut facilis. Officia odio voluptatum vitae obcaecati unde architecto harum nisi, tempora numquam ipsa nihil dignissimos. Nihil quam alias non corporis tempore dolor error velit molestias, numquam quas ab, iure culpa rem distinctio quibusdam recusandae quos a inventore. Nesciunt totam exercitationem tempore. Nobis animi, nihil illo libero laborum voluptas? Esse pariatur sint facere iure, iusto dolore. Eveniet dolor labore facilis error quibusdam? Corrupti, fugiat officia molestiae voluptatibus blanditiis fuga neque sed minima quod, repudiandae nesciunt. Necessitatibus, iste labore. Totam doloremque expedita quod quas facere, labore et aspernatur ea cupiditate. Dolor doloribus nulla distinctio corporis nemo ducimus, voluptas voluptate in aliquid, voluptatem reiciendis magnam molestias asperiores perferendis tempora earum alias deleniti qui inventore aut expedita! Eveniet iure quidem animi illo doloremque molestias accusantium minus, blanditiis perferendis asperiores possimus accusamus vero? Alias nobis quasi non quia id velit fuga ullam, porro nesciunt hic itaque reiciendis debitis beatae qui harum eius, excepturi sunt facilis laborum?</p>
          </div>
        </div>
      </div>
    </div>
  </template-view>
</template>

<script>
import TemplateView from '@/views/TemplateView.vue';
import SlideComponent from '@/components/SlideComponent.vue'
  export default {
    name:"AboutView",
    components:{TemplateView,SlideComponent}
  }
</script>