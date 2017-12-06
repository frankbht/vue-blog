<template>
  <form action="">
    <label for="title">Title:</label>
    <input type="text" name="title" v-model="data.title">
    <label for="categories">Categories:</label>
    <input type="text" name="categories" v-model="data.categories">
    <label for="content">Content:</label>
    <input type="text" name="content" v-model="data.content">
    <div>
      <button @click="onFormSubmit">Create</button>
      <button @click="directToHome">Cancle</button>
    </div>
  </form>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      data: {
        title: '',
        categories: '',
        content: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'createNewPost'
    ]),
    directToHome(event) {
      event.preventDefault();
      this.$router.push({ path: '/' });
    },
    async onFormSubmit(event) {
      event.preventDefault();
      await this.createNewPost(this.data);
      this.$router.push({ path: '/' });
    }
  }
}
</script>
