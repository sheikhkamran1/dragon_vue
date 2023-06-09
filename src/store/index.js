import Vue from 'vue'
import Vuex from 'vuex'
import * as profile from "./modules/profile"
import * as slide from "./modules/slide"
import * as about from "./modules/about"
import * as message from "./modules/message"
import * as schemes from "./modules/schemes"
import * as menus from "./modules/menus"
import * as posts from "./modules/posts"
import * as offers from "./modules/offers"
import * as gallery from "./modules/gallery"
import * as download from "./modules/download"
import * as notice from "./modules/notice"
import * as event from "./modules/event"
import * as contact from "./modules/contact"

Vue.use(Vuex)

export default new Vuex.Store({
 
  modules: {
    profile,slide,about,message,schemes,menus,posts,offers,gallery,download,notice,event,contact
  }
})
