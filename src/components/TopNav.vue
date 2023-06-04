<script setup>
import { useUserStore } from '@/store/user'

const userStore=useUserStore()


</script>

<template>
  <div class="nav">
    <!-- <router-link to=""></router-link> -->
    <router-link to="" v-if="userStore.userInfo.token"> <el-icon><Avatar /></el-icon>{{userStore.userInfo.nickname}} |</router-link>
    <router-link to="" v-if="userStore.userInfo.token">退出登录 |</router-link>
    <router-link to="/login" v-if="!userStore.userInfo.token">请先登录 |</router-link>
    <router-link to="">我的订单 |</router-link>
    <router-link to="">会员中心</router-link>
  </div>
</template>

<style scoped>
.nav {
  width: 1200px;
  height: 50px;
  background-color: #444;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* position: fixed; */
}

a {
  text-decoration: none;
  width: 100px;
  color: aliceblue;
}
</style>