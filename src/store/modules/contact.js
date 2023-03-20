import { axiosApi } from "@/config/axios"

export const state = {
    contact: {}
}
export const getters = {
    get_contact: (state)=>state.contact
}
export const mutations = {
    set_contact: (state,data)=>state.contact = data
}
export const actions = {
    async getContact({commit}){
        try{
            var response = await axiosApi.get("contact")
            console.warn(response.data.data)
            if(response.status==200){
                commit('set_contact',response.data.data)
            }
        }
        catch(e){
            console.warn(e)
        }
    }
}