import { axiosApi } from "@/config/axios";
export const state = {
  posts: [],
  postsLoading: false,
};
export const getters = {
  get_posts: (state) => state.posts,
  get_posts_loading: (state) => state.postsLoading,
};
export const mutations = {
  set_posts: (state, data) => state.posts = data,
  set_posts_loading: (state, data) => (state.postsLoading = data),
};
export const actions = {
  async getPosts({ commit }, slug) {
    try {
      console.warn("demo");
      console.warn(slug);
      commit("set_posts_loading", true);
      var response = await axiosApi.get(`posts`);
      console.warn(response.data.data)
      console.warn(response.data.data);
      if (response.status == 200) {
        commit("set_posts", response.data.data);
      }
    } catch (e) {
      console.warn(e);
    } finally {
      commit("set_posts_loading", false);
    }
  },
};









