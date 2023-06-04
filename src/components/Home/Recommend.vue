<template>
  <home-panel title="人气推荐" subTitle="人气推荐  好多商品">
    <div class="list" v-for="item in goodsData">
      <router-link to="">
        <img  v-lazys="item.picture"/>
        <div class="title">
          {{ item.title }}
          <span class="alt">{{ item.alt }}</span>
        </div>
      </router-link>
    </div>
  </home-panel>
</template>

<script setup>
import HomePanel from './HomePanel.vue';
import { getRecom } from '@/api/api';

const goodsData = ref([])
const getRecommen = async () => {
  const res = await getRecom()
  goodsData.value = res.result
  // console.log("+++++++++", res);
}
onMounted(() => {
  getRecommen()
})
</script>

<style lang="less" scoped>
.list {
  width: 23%;

  a {
    text-decoration: none;
    color: black;

    img {
      width: 100%;
    }

    .title {
      font-size: 20px;
      margin-top: 10px;
      color: red;
    }

    .alt {
      color: #888;
      font-size: 14px;
      margin-left: 20px;
    }
  }

}
</style>