<template>
  <div id="app">
    <top-bar></top-bar>
    <main-page></main-page>
  </div>
</template>

<script>
import TopBar from './components/TopBar'
import MainPage from './components/MainPage'

export default {
  components: {
    TopBar,
    MainPage
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  height: 100%;
  width: 100%;
  color: #2c3e50;
  font-family: Source Sans Pro, Helvetica, sans-serif;
}
</style>
