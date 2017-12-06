import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './pages/Home.vue';
import PostList from './components/PostList.vue';
import PostDetail from './pages/PostDetail.vue';
import NewPost from './pages/NewPost.vue';
import { store } from './store/store';

const routes = [
  { path: '', component: Home },
  { path: '/posts/:id', component: PostDetail },
  { path: '/new', component: NewPost }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.use(VueRouter);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})