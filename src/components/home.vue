<template>
  <div class="main">
    <div class="home-header clear">
      <div class="logoWrap left">
        <img src="../assets/logo.png" alt="">
        <span>vue-router</span>
      </div>
      <div class="loginWrap right">
        <router-link v-if="!isLogin" to="/login" tag="span">登录</router-link>
        <img v-if="isLogin" src="../assets/portrait.png" alt="">
      </div>
    </div>
    <div class="content">
      <h1>这是一个Vue-Router学习案例！！</h1>
      <h1>一起来学习吧！！</h1>
    </div>
    <div class="btnWrap">
      <router-link class="mainbtn" tag="span" to="/project">我的项目</router-link>
      <router-link class="mainbtn" tag="span" to="/doc">我的文档</router-link>
    </div>

  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
    name: 'home',
    data(){
      return {
        isLogin: false
      }
    }
  }
</script>
<style>

</style>
