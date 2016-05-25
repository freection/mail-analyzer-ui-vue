<template>
  <div class="app-header">
    <radio-group type="primary" :value.sync="currentView">
      <radio value="QuestionsPage">Questions</radio>
      <radio value="DiscussionsPage">Discussions</radio>
      <radio value="TasksPage">Tasks</radio>
    </radio-group>
  </div>
</template>

<script>
  import radio from 'vue-strap/src/radioBtn'
  import radioGroup from 'vue-strap/src/radioGroup'

  export default {
    props: ['currentView'],
    components: {
      radio,
      radioGroup
    }
  }
</script>

<style>
  .btn {
    background-color: lightgrey;
    border-color: lightgrey;
  }

  .btn:hover {
    background-color: grey;
    border-color: lightgrey;
  }

  .btn.active {
    background-color: #dec91b;
    border-color: #dec91b;
  }

  .btn.active:hover {
    background-color: #deb11b;
    border-color: #deb11b;
  }
</style>
