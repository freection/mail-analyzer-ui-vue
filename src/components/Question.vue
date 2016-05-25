<template>
  <div class="question">
    <div class="subject">
      {{question.subject}}
    </div>
    <div class="recipients">
      Between <b>{{asker}}</b> and <b>{{answerer}}</b>
    </div>
    <div class="stats">
      <b>Average:</b> {{average}} minutes
      <b>Max:</b> {{max}} minutes
      <b>Min:</b> {{min}} minutes
    </div>
  </div>
</template>

<script>
  var EmailAddressParser = require('email-addresses')

  export default {
    props: ['question'],
    computed: {
      asker: function () {
        return EmailAddressParser.parseOneAddress(this.question.asker).local
      },
      answerer: function () {
        return EmailAddressParser.parseOneAddress(this.question.answerer).local
      },
      average: function () {
        return this.question.stats ? (this.question.stats.average / 60).toFixed(2) : 0
      },
      max: function () {
        return this.question.stats ? (this.question.stats.max / 60).toFixed(2) : 0
      },
      min: function () {
        return this.question.stats ? (this.question.stats.min / 60).toFixed(2) : 0
      }
    }
  }
</script>

<style>
  .question {
    height: 98px;
    padding-bottom: 10px;
    border-bottom: 1px dotted #000;
  }

  .question:not(:last-of-type) {
    margin-bottom: 15px;
  }

  .subject {
    margin-bottom: 10px;
  }

  .recipients {
    margin-bottom: 10px;
  }
</style>
