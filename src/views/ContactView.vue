<template>
    <template-view>
        <section>
            <div class="header">
                <h3 class=" text-light text-center" style="padding-top: 180px;">Contact us</h3>
            </div>
            <div class="container-fluid py-5" style="background-color: #E9FAFF;">

                <div class="container">
                    <div class="card-body">
                        <form>
                            <div class="row">
                                <div class="col-md-6 py-3">
                                    <div class="form-group">
                                        <label for="name" class="py-2">Name <span class="text-danger">*</span></label>
                                        <input id="name" class="form-control" type="text" name="name"
                                            placeholder="eg.Sheikh Kamran" v-model="message.name">
                                    </div>
                                </div>
                                <div class="col-md-6 py-3">
                                    <div class="form-group">
                                        <label for="email" class="py-2">Email <span class="text-danger">*</span></label>
                                        <input id="email" class="form-control" type="text" name="email"
                                            placeholder="Email123@gmai.com" v-model="message.email">
                                    </div>
                                </div>
                                <div class="col-md-12 py-3">
                                    <div class="form-group">
                                        <label for="my-textarea" class="py-2">Comment or Message <span
                                                class="text-danger">*</span></label>
                                        <textarea id="my-textarea" class="form-control" name="message" rows="10" v-model="message.message"
                                            placeholder="Please Enter Your Message !"></textarea>
                                    </div>
                                </div>


                            </div>
                            <button  class="btn btn-primary" @click.prevent="sendMessage()">Save Record</button>

                        </form>
                    </div>
                    <div class="row">
                    <div class="col-md12">
                        <div class="col-md-12 py-5">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.596350883042!2d85.28326531506188!3d27.698867982795477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQxJzU1LjkiTiA4NcKwMTcnMDcuNiJF!5e0!3m2!1sen!2snp!4v1611119764321!5m2!1sen!2snp"
                                width="100%" height="450" frameborder="0" style="border:1px solid #00aeef;"
                                allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </template-view>
</template>

<script>
import { axiosApi } from '@/config/axios';
import TemplateView from './TemplateView.vue';
export default {
    name: "ContactView",
    components: { TemplateView },
    data(){
        return {
            message: {
                "name" : "",
                "email" : "",
                "message" : ""
            }
        }
    },

    methods:{
        async sendMessage(){
            var response = await axiosApi.post("contact",this.message);
            alert(response.data);
        }
    }
}
</script>

<style lang="scss" scoped></style> 