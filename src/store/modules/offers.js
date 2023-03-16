
import { axiosApi } from "@/config/axios"

export const state = {
    offers: [],
    loading : false
}
export const getters = {
    get_offers: (state)=>state.offers,
    get_offers_loading: (state)=>state.loading
}
export const mutations = {
    set_offers: (state,data)=>state.offers = data,
    set_offers_loading: (state,data)=>state.loading = data
}
export const actions = {
    async getOffers({commit}){
        try{
            commit('set_offers_loading',true)
            var response = await axiosApi.get("offers")
            console.warn(response.data.data)
            if(response.status==200){
                commit('set_offers',response.data.data)
            }
        }
        catch(e){
            console.warn(e)
        }finally{
            commit('set_offers_loading',false)
        }
    }
}
