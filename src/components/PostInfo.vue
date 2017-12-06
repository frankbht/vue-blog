<template>
  <div>
    <p v-for="(item, index) in currentPost" :key="index">{{ index }}:  {{ item }}</p>
  </div>
</template>
<script>
export default {
  props: ['currentPost']
}
</script>

