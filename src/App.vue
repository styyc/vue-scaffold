<template>
  <div id="app">
    <Basiclayouts />
  </div>
</template>

<script>
import Basiclayouts from './layouts/Basiclayout'
export default {
  name: 'app',
  components: {
    Basiclayouts
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
