<template>
  <div class="loginOutWrap right">
    <router-link v-if="!isLogin" to="/login" tag="span">登录</router-link>
    <img v-if="isLogin" src="../assets/portrait.png" alt="">
    <div v-if="isLogin" class="loginOut">
      <ul>
        <router-link tag="li" to="/login">登出</router-link>
      </ul>
    </div>
  </div>

</template>
<script type='text/ecmascript-6'>
  export default{
    data(){
      return {isLogin: false}
    },
    created(){
      this.getLoginFlag();
    },
    methods: {
      getLoginFlag(){
        this.isLogin = this.$local_sf.fetch('vueRouter_p1').islogin;
//        console.log('isLogin:', this.$local_sf.fetch('vueRouter_p1'));
      }
    }
  }
</script>
<style>

</style>
