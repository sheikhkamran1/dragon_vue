import Vue from 'vue'
import Vuex from 'vuex'
import * as profile from "./modules/profile"
import * as slide from "./modules/slide"
import * as about from "./modules/about"
import * as message from "./modules/message"
import * as schemes from "./modules/schemes"

Vue.use(Vuex)

export default new Vuex.Store({
 
  modules: {
    profile,slide,about,message,schemes
  }
})
