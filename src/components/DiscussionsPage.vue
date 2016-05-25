<template>
  <div class="discussions-page">
    <discussion v-for="discussion in discussions" :discussion="discussion"></discussion>
  </div>
</template>

<script>
  import Discussion from './Discussion'

  export default {
    props: ['discussions'],
    components: {
      Discussion
    }
  }
</script>

<style>
  .discussions-page {
    height: 100%;
  }
</style>
