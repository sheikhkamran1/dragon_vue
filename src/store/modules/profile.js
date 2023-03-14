import { axiosApi } from "@/config/axios"

export const state = {
    profile: {}
}
export const getters = {
    get_profile: (state)=>state.profile
}
export const mutations = {
    set_profile: (state,data)=>state.profile = data
}
export const actions = {
    async getProfile({commit}){
        try{
            var response = await axiosApi.get("profile")
            console.warn(response.data.data)
            if(response.status==200){
                commit('set_profile',response.data.data)
            }
        }
        catch(e){
            console.warn(e)
        }
    }
}