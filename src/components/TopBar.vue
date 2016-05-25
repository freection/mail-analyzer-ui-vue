<template>
  <div class="top-bar">
    <div class="logo-div">
      <img class="logo" src="../assets/logo-transparent.png">
    </div>
    <div class="title-div">
      Freection
    </div>
  </div>
</template>

<script>
    export default {}
</script>

<style>
  .top-bar {
    height: 50px;
    line-height: 50px;
    width: 100%;
    background-color: #dec91b;
    border-bottom: 1px dotted #000;
    padding: 0 15px;
  }

  .logo-div {
    float: left;
    margin-right: 15px;
  }

  .logo {
    height: 40px;
    width: 40px;
    vertical-align: inherit;
  }

  .title-div {
    font-size: 22px;
  }
</style>
