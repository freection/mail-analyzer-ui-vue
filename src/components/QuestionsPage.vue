<template>
  <div class="questions-page">
    <question v-for="question in questions" :question="question"></question>
  </div>
</template>

<script>
  import Question from './Question'

  export default {
    props: ['questions'],
    components: {
      Question
    }
  }
</script>

<style>
  .questions-page {
    height: 100%;
  }
</style>
