import { axiosApi } from "@/config/axios"

export const state = {
    download: {}
}
export const getters = {
    get_download: (state)=>state.download
}
export const mutations = {
    set_download: (state,data)=>state.download = data
}
export const actions = {
    async getDownload({commit}){
        try{
            var response = await axiosApi.get("download")
            console.warn(response.data.data)
            if(response.status==200){
                commit('set_download',response.data.data)
            }
        }
        catch(e){
            console.warn(e)
        }
    }
}