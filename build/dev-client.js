/* eslint-disable */
require('eventsource-polyfill')
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotClient.subscribe(function (event) {
  console.log('hotClient event:', event);
  if (event.action === 'reload') {
    window.location.reload()
  }
})
