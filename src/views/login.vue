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
    data(){
      return {
        fromPageName: ''
      }
    },
    methods: {
      sendLogin(){
        let useName = this.$refs.userName.value;
        this.$local_sf.save('vueRouter_p1', {
          islogin: true,
          useName: useName
        });

//      1.最简单的回退，向后退一步
//        this.$router.go(-1);

//        2.配合路由拦截器中记录的redirect=XXX，来重定向组件
        let redirect = this.$route.query.redirect;
        if (!redirect) {
          console.log('this.fromPageName:', this.fromPageName);
          if (this.fromPageName === '/') {
            redirect = 'project'
          } else {
            redirect = this.fromPageName;
          }
        }
        this.$router.push({path: '/' + redirect})
      }
    },
    beforeRouteEnter(to, from, next){
      //  触发login.vue中的before路由,获取from页面！组件内的before事件会先触发，全局的后触发。
      console.log('触发login.vue中的before路由,获取from页面！组件内的before事件会先触发，全局的后触发。', from.path);
      next(function (vm) {
        vm.fromPageName = from.path.slice(1);
      });
    }
  }
</script>
<style>

</style>
