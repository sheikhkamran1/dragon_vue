import { axiosApi } from "@/config/axios"

export const state = {
    menu: {}
}
export const getters = {
    get_menu: (state)=>state.menu
}
export const mutations = {
    set_menu: (state,data)=>state.menu = data
}
export const actions = {
    async getMenu({commit}){
        try{
            var response = await axiosApi.get("menu")
            console.warn(response.data.data)
            if(response.status==200){
                commit('set_menu',response.data.data)
            }
        }
        catch(e){
            console.warn(e)
        }
    }
}