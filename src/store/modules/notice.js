import { axiosApi } from "@/config/axios"

export const state = {
    notice: []
}
export const getters = {
    get_notice: (state)=>state.notice
}
export const mutations = {
    set_notice: (state,data)=>state.notice = data
}
export const actions = {
    async getNotice({commit}){
        try{
            var response = await axiosApi.get("notice")
            console.warn(response.data.data)
            if(response.status==200){
                commit('set_notice',response.data.data)
            }
        }
        catch(e){
            console.warn(e)
        }
    }
}