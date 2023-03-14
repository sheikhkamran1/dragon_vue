import { axiosApi } from "@/config/axios"

export const state = {
    slides: []
};
export const getters = {
    get_slides: (state)=>state.slides
};
export const mutations = {
    set_slides: (state,data)=>(state.slides = data)
};
export const actions = {
    async getSlides({commit}){
        try{
            var response = await axiosApi.get("carousel")
            console.warn(response.data.data)
            if(response.status==200){
                commit('set_slides',response.data.data)
            }
        }
        catch(e){
            console.warn(e)
        }
    }
};