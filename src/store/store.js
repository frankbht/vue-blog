import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
const ROOT_URL = `http://reduxblog.herokuapp.com/api/posts`;

export const store = new Vuex.Store({
  state: {
    posts: [],
    currentPost: null
  },
  getters: {
    getPosts({ posts }) {
      return posts;
    },
    getPostsCount({ posts }) {
      return posts.length;
    },
    getCurrentPost({ currentPost }) {
      return currentPost
    }
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
    setCurrentPost(state, post) {
      state.currentPost = post;
    }
  },
  actions: {
    async fetchPosts({ commit }) {
      const posts = await axios.get(ROOT_URL)
      commit('updatePosts', posts.data);
    },
    async changeCurrentPost({ commit }, id) {
      const post = await axios.get(`${ROOT_URL}/${id}`);
      commit('setCurrentPost', post.data);
    },
    async createNewPost(context, data) {
      const post = await axios.post(`${ROOT_URL}`, data);
    },
    async deletePost(context, id) {
      const info = await axios.delete(`${ROOT_URL}/${id}`);
    }
  }
})