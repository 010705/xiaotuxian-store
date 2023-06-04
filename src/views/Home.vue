<template>
  <div class="header">
    <TopNav></TopNav>
    <Header></Header>
  </div>
  <RouterView></RouterView>
  <!-- <i class="iconfont icon-weibo"></i> -->
</template>

<script setup>
import TopNav from '@/components/TopNav.vue';
import Header from '../components/Home/Header.vue';

</script>

<style>
.body{
  width: 1200px;
}
</style>