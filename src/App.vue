<template>
  <div id="app">
    <mainHeader></mainHeader>
    <router-view></router-view>
    <mainFooter></mainFooter>
  </div>
</template>

<script>
import mainHeader from './components/header'
import mainFooter from './components/footer'
export default {
  name: 'App',
  components: {
    mainHeader,
    mainFooter,
  }
}
</script>

<style>
  body{
    margin: 0 auto;
}
header, main, footer, section{
    margin: 0 auto;
}
header{
    height: 90px;
    margin-bottom: 1px;
}
ul{
    list-style: none;
}
</style>
