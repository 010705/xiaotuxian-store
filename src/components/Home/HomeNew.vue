<template>
  <home-panel title="新鲜好物" sub-title="新鲜出炉  品质保障" >
    <div class="list" v-for="item in goodsData">
        <router-link to="">
          <img v-lazys="item.picture" />
          <div class="name">{{ item.name }}</div>
          <div class="price">￥{{ item.price }}</div>
        </router-link>
      </div>
  </home-panel>
</template>

<script setup>
import { getNew } from '@/api/api'
import HomePanel from './HomePanel.vue';

const goodsData = ref([])
const getGoods = async () => {
  const res = await getNew()
  // console.log(res);
  goodsData.value = res.result
}
onMounted(() => {
  getGoods()
})
</script>

<style lang="less">
.list {
      width: 23%;

      a {
        text-decoration: none;
        color: black;

        img {
          width: 100%;
        }
        .name{
          font-size: 16px;
          margin-top: 10px;
        }
        .price{
          color: red;
        }
      }

    }
</style>