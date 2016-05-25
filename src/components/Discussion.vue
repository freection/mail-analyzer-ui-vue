<template>
  <div class="discussion">
    <div class="subject">
      {{discussion.subject}}
    </div>
    <div class="recipients">
      Between <b>{{recipients}}</b>
    </div>
  </div>
</template>

<script>
  var _ = require('lodash')
  var EmailAddressParser = require('email-addresses')

  export default {
    props: ['discussion'],
    computed: {
      recipients: function () {
        return _.trim(_.reduce(this.discussion.recipients, function (final, recipient) {
          return final + EmailAddressParser.parseOneAddress(recipient).local + ', '
        }, ''), ', ')
      }
    }
  }
</script>

<style>
  .discussion {
    height: 66px;
    padding-bottom: 10px;
    border-bottom: 1px dotted #000;
  }

  .discussion:not(:last-of-type) {
    margin-bottom: 15px;
  }

  .subject {
    margin-bottom: 10px;
  }

  .recipients {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow-x: hidden;
  }
</style>
