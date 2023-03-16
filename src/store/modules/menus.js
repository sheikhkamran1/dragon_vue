import { axiosApi } from "@/config/axios"

export const state = {
    menus: []
}
export const getters = {
    get_menus: (state)=>state.menus
}
export const mutations = {
    set_menus: (state,data)=>state.menus = data
}
export const actions = {
    async getMenus({commit}){
        try{
            var response = await axiosApi.get("menus")
            console.warn(response.data.data)
            if(response.status==200){
                commit('set_menus',response.data.data)
            }
        }
        catch(e){
            console.warn(e)
        }
    }
}