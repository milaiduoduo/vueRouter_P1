<template>
    <div class="loginWrap right">
      <router-link v-if="!isLogin" to="/login" tag="span">登录</router-link>
      <img v-if="isLogin" src="../assets/portrait.png" alt="">
      <div v-if="isLogin" class="loginOut">
        <ul>
          <li>登出</li>
        </ul>
      </div>
    </div>

</template>
<script type='text/ecmascript-6'>
  export default{
    data(){
      return {isLogin: true}
    }
  }
</script>
<style>

</style>
