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
  var _ = require('lodash')

  import AppHeader from './AppHeader'
  import QuestionsPage from './QuestionsPage'
  import DiscussionsPage from './DiscussionsPage'
  import TasksPage from './TasksPage'

  function readQuestions (component, fromIndex, numOfItems) {
    console.log('Reading %s questions from index %s', numOfItems, fromIndex)

    return component.$http.get('/api/accounts/5708ecd4ca2712cc3f8b4569/questions', {
      fromIndex: fromIndex,
      toIndex: fromIndex + numOfItems
    }).then(
      function (response) {
        console.log('Got %s results', response.data.length)

        _.forEach(response.data, function (question) {
          component.model.questions.push(question)
        })
        return response
      }
    )
  }

  function readAllQuestions (component) {
    console.log('readAllQuestions')

    batchFetch(component, readQuestions, component.model.questions, 0, 100).then(
      function () {
        recurringQuestionsFetch(component)
      }
    )
  }

  function recurringQuestionsFetch (component) {
    setInterval(function () {
      readQuestions(component, component.model.questions.length, 100)
    }, 15000)
  }

  function readDiscussions (component, fromIndex, numOfItems) {
    console.log('Reading %s discussions from index %s', numOfItems, fromIndex)

    return component.$http.get('/api/accounts/5708ecd4ca2712cc3f8b4569/discussions', {
      fromIndex: fromIndex,
      toIndex: fromIndex + numOfItems
    }).then(
      function (response) {
        console.log('Got %s results', response.data.length)

        _.forEach(response.data, function (question) {
          component.model.discussions.push(question)
        })
        return response
      }
    )
  }

  function readAllDiscussions (component) {
    console.log('readAllDiscussions')

    batchFetch(component, readDiscussions, component.model.discussions, 0, 100).then(
      function () {
        recurringDiscussionsFetch(component)
      }
    )
  }

  function recurringDiscussionsFetch (component) {
    setInterval(function () {
      readDiscussions(component, component.model.discussions.length, 100)
    }, 15000)
  }

  function batchFetch (component, fetchFunc, fetchStore, fromIndex, toIndex) {
    return fetchFunc(component, fromIndex, toIndex).then(
      function (response) {
        if (response.length) {
          return batchFetch(component, fetchStore.length, 100)
        }
      }
    )
  }

  export default {
    data: function () {
      return {
        currentView: 'QuestionsPage',
        model: {
          questions: [],
          discussions: []
        }
      }
    },
    ready: function () {
      readAllQuestions(this)
      readAllDiscussions(this)
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
