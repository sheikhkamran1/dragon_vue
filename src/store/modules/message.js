import { axiosApi } from "@/config/axios"

export const state = {
    message: {}
}
export const getters = {
    get_message: (state)=>state.message
}
export const mutations = {
    set_message: (state,data)=>state.message = data
}
export const actions = {
    async getMessage({commit}){
        try{
            var response = await axiosApi.get("message")
            console.warn(response.data.data)
            if(response.status==200){
                commit('set_message',response.data.data)
            }
        }
        catch(e){
            console.warn(e)
        }
    }
}