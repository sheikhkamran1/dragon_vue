import { axiosApi } from "@/config/axios"

export const state = {
    posts: []
}
export const getters = {
    get_posts: (state)=>state.posts
}
export const mutations = {
    set_posts: (state,data)=>state.posts = data
}
export const actions = {
    async getPosts({commit}){
        try{
            var response = await axiosApi.get("posts")
            console.warn(response.data.data)
            if(response.status==200){
                commit('set_posts',response.data.data)
            }
        }
        catch(e){
            console.warn(e)
        }
    }
}