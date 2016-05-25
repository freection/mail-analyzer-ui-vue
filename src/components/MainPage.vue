<template>
  <div class="main-page">
    <app-header :current-view.sync="currentView"></app-header>
    <div class="app-body">
      <questions-page v-if="currentView === 'QuestionsPage'" :questions="model.questions"></questions-page>
      <discussions-page v-if="currentView === 'DiscussionsPage'" :discussions="model.discussions"></discussions-page>
    </div>
  </div>
</template>

<script>
  import AppHeader from './AppHeader'
  import QuestionsPage from './QuestionsPage'
  import DiscussionsPage from './DiscussionsPage'
  import TasksPage from './TasksPage'

  export default {
    data: function () {
      return {
        currentView: 'QuestionsPage',
        model: {}
      }
    },
    ready: function () {
      this.$http.get('/api/threads').then(
        function (response) {
          this.$set('model', response.data)
        }
      )
    },
    components: {
      AppHeader,
      QuestionsPage,
      DiscussionsPage,
      TasksPage
    }
  }
</script>

<style>
  .main-page {
    padding: 15px;
  }

  .app-body {
    margin-top: 15px;
    padding-top: 11px;
    border-top: 1px dotted #000;
  }
</style>
