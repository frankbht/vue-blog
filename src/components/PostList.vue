<template>
  <div>
    <div v-if="posts.length===0">Loading...</div>
    <ul class="post-list" v-else>
      <li class="post-item" v-for="post in posts" :key="post.id">
        <span>{{ post.title }}</span>
        <span>
          <button @click="redirectToDetail(post.id)"><img src='https:icon.now.sh/compose' alt='compose icon' /></button>
          <button @click="onDeletePost(post.id)"><img src='https:icon.now.sh/delete' alt='delete icon' /></button>
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  props: ['posts'],
  methods: {
    ...mapActions([
      'deletePost'
    ]),
    ...mapGetters([
      'getPosts',
      'getPostsCount',
    ]),
    ...mapMutations([
      'setCurrentPost',
    ]),
    redirectToDetail(id) {
      this.$router.push({ path: 'posts/'+id });
    },
    onDeletePost: async function(id) {
      await this.deletePost(id);
      this.$emit('postDeleted', null);
    }
  }
}
</script>
