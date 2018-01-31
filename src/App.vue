<template>
  <div id="app">
    <!--<img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import { htmladapt } from './assets/scripts/htmladapt.js'
export default {
  name: 'App',
  created() {
 
  }
}
</script>

<style>
html{
  font-size: 34.7222px;
}
@import '../assets/css/common.css'
</style>
