<template>
  <div>
    <nav-bar></nav-bar>
    <post-info :currentPost="getCurrentPost()"></post-info>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import PostInfo from '../components/PostInfo.vue';

import { mapGetters, mapActions } from 'vuex';

export default {
  methods: {
    ...mapGetters([
      'getCurrentPost'
    ]),
    ...mapActions([
      'changeCurrentPost'
    ])
  },
  mounted() {
      this.changeCurrentPost(this.$route.params.id);
  },
  components: {
    NavBar,
    PostInfo
  }
}
</script>
