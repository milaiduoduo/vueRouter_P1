<template>
  <div class="navWrap">
    <ul class="headerNav clear">
      <router-link class="headerItem" tag="li" to="/">
        <img class="nav_logo" src="../assets/logo.png" alt="">
      </router-link>
      <router-link class="headerItem" tag="li" to="/project">我的项目</router-link>
      <router-link class="headerItem" tag="li" to="/workbench">我的工作台</router-link>
      <router-link class="headerItem" tag="li" to="/doc">我的文档</router-link>
    </ul>
    <login-out class="loginOutP"></login-out>
  </div>
</template>
<script type='text/ecmascript-6'>
  import loginOut from './loginOut';
  export default
  {
    components: {loginOut}
  }
</script>
<style scoped>
  .navWrap{
    position: relative;
  }
  .navWrap .loginOutP{
    position:absolute;
    top:50%;
    margin-top:-17px;
    right:40px;
    border:1px solid transparent;
  }
</style>
