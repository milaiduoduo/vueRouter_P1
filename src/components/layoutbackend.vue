<template>
  <div>
    <header-nav></header-nav>
    <div class="breadcrumb">
      <router-link to="/">首页</router-link>
      /
      <span>{{toPage}}</span>
    </div>
    <router-view></router-view>
  </div>
</template>
<script type='text/ecmascript-6'>
  import headerNav from './headerNav';
  export default{
    components: {
      headerNav
    },
    data(){
      return {
        toPage: '我的文档'
      }
    }
  }
</script>
<style>

</style>
