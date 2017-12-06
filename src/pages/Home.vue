<template>
  <div>
    <nav-bar></nav-bar>
    <post-list :posts="getPosts()" @postDeleted="reloadTemplate"></post-list>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import PostList from '../components/PostList.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
  methods: {
    ...mapGetters([
      'getPosts'
    ]),
    ...mapActions([
      'fetchPosts'
    ]),
    reloadTemplate() {
      this.$forceUpdate();
    }
  },
  mounted() {
    this.fetchPosts();
  },
  beforeUpdate() {
    this.fetchPosts();
  },
  components: {
    NavBar,
    PostList
  }
}
</script>

