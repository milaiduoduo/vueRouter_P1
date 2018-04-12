<template>
  <div>
    <header-nav></header-nav>
    <div class="breadcrumb">
      <router-link to="/">首页</router-link>
      /
      <span>{{toPageName}}</span>
    </div>
    <router-view></router-view>
  </div>
</template>
<script type='text/ecmascript-6'>
  import headerNav from './headerNav';

  let flags = {
    project: '我的项目',
    workbench: '我的工作台',
    doc: '我的文档'
  }

  export default{
    name: 'layoutbackend',
    components: {
      headerNav
    },
    data(){
      return {
        toPageName: '我的文档'
      }
    },
    watch: {
      $route(){
        this.toPageName = flags[this.$route.path.slice(1)];
      }
    },
    beforeRouteEnter(to, from, next){
      next(function (vm) {
        vm.toPageName = flags[to.path.slice(1)];
      });
    }
  }
</script>
<style>

</style>
