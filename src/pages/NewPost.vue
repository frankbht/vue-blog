<template>
  <div>
    <nav-bar></nav-bar>
    <post-form></post-form>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import PostForm from '../components/PostForm.vue';

export default {
  components: {
    NavBar,
    PostForm
  }
}
</script>