<template>
  <div id="app">
    <router-view></router-view>

    <!--也可以用注册组件的方式使用home组件-->
    <!--<home></home>-->
  </div>
</template>

<script>
//  也可以用注册组件的方式使用home组件
//  import home from './components/home';
//  export default {
//    name: 'App',
//    components: {
//      home
//    }
//  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
