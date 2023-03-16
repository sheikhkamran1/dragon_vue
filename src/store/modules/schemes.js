import { axiosApi } from "@/config/axios"

export const state = {
    schemes: [],
    loading : false
}
export const getters = {
    get_schemes: (state)=>state.schemes,
    get_schemes_loading: (state)=>state.loading
}
export const mutations = {
    set_schemes: (state,data)=>state.schemes = data,
    set_schemes_loading: (state,data)=>state.loading = data
}
export const actions = {
    async getSchemes({commit}){
        try{
            commit('set_schemes_loading',true)
            var response = await axiosApi.get("schemes")
            console.warn(response.data.data)
            if(response.status==200){
                commit('set_schemes',response.data.data)
            }
        }
        catch(e){
            console.warn(e)
        }finally{
            commit('set_schemes_loading',false)
        }
    }
}