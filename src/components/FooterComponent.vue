<template>
    <section class="container-fluid py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="img-div">
                        <img src="https://dragonsaving.com.np/wp-content/uploads/2021/01/dragon-logo-small.png" alt=""
                        width="80"  height="80" class="logo img-fluid">
                    </div>
                </div>
                <div class="col-md-3">
                    <h3>Useful Links</h3>

                    <li><a href="https://www.nrb.org.np/" target="_blank" rel="noopener noreferrer">www.nrb.org.np</a></li>
                    <li><a href="https://www.ncdb.org.np/" target="_blank" rel="noopener noreferrer">www.ncdb.org.np</a>
                    </li>
                    <li><a href="https://www.ncdb.org.np/" target="_blank" rel="noopener noreferrer">www.ncdb.org.np</a>
                    </li>
                    <li><a href="https://www.deoc.gov.np/" target="_blank" rel="noopener noreferrer">www.deoc.gov.np</a>
                    </li>
                    <li><a href="https://mof.gov.np/en/" target="_blank" rel="noopener noreferrer">www.mof.gov.np/en</a>
                    </li>

                </div>
                <div class="col-md-3">
                    <h3>Quick Links</h3>

                    <li><a href="">Home</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Reports</a></li>
                    <li><a href="">Gallery</a></li>
                    <li><a href="">News & Events</a></li>
                    <li><a href="">Contact us</a></li>

                </div>
                <div class="col-md-3">
                    <h3>Address</h3>
                    <li class="text-light"><span><i class="fa fa-map-marker" aria-hidden="true"></i> {{ company.city }} {{
                        company.street }}</span></li>
                    <li class="text-light"><a href="tel:+9851278098"><i class="fa fa-phone" aria-hidden="true"></i> {{
                        company.contact_1 }}</a></li>
                    <li class="text-light"><a href="mailto:dragon.scco@gmail.com"><i class="fa fa-envelope"
                                aria-hidden="true"></i> {{ company.email }}</a></li>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "FooterComponent",
    computed: {
        ...mapGetters({
            company: "get_profile"
        })
    }
}
</script>

<style scoped>
.container-fluid {
    background-color:#00aeef;
}

h3 {
    justify-content: center;
}

li {
    list-style: none;
    margin: 0px;
    padding: 0px;
    color: whitesmoke;
}

li a {
    text-decoration: none;
    display: block;
    justify-content: center;
    padding-top: 10px;

}

h3,
a {
    color: whitesmoke;
    padding-top: 10px;
}
.img-div{
    width: 100%;
    margin-top:30%;
}
.logo{
    display: block;
    margin: 0px auto;
}
@media only screen and (max-width: 767px) {
    .img-div{
    /* width: 100%; */
    margin-top:0%;
}
}
</style>