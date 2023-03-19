import { axiosApi } from "@/config/axios"

export const state = {
    event: []
}
export const getters = {
    get_event: (state)=>state.event
}
export const mutations = {
    set_event: (state,data)=>state.event = data
}
export const actions = {
    async getEvent({commit}){
        try{
            var response = await axiosApi.get("event")
            console.warn(response.data.data)
            if(response.status==200){
                commit('set_event',response.data.data)
            }
        }
        catch(e){
            console.warn(e)
        }
    }
}