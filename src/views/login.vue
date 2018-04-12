<template>
  <div class="loginWrap">
    <h1>登录</h1>
    <form @submit.prevent='sendLogin'>
      <div class="itemWrap">
        <input class="item" type="text" name="user" placeholder="请输入用户名" ref="userName">
      </div>
      <div class="itemWrap">
        <input class="item" type="text" name="user" placeholder="请输入密码">
      </div>
      <div class="itemWrap">
        <input class="item btn" type="submit" value="登录">
      </div>
      <div class="itemWrap">
        <router-link class="linkTo" tag="span" to="/">>>首页</router-link>
      </div>
    </form>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
    name: 'login',
    methods: {
      sendLogin(){
        let useName = this.$refs.userName.value;
        this.$local_sf.save('vueRouter_p1', {
          islogin: true,
          useName: useName
        });

//      1.最简单的回退，向后退一步
        this.$router.go(-1);
      }
    }
  }
</script>
<style>

</style>
