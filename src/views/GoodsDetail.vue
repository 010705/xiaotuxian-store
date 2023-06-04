<template>
  <div class="content">
    <div class="left">
      <ImgLists :imgs="detail"></ImgLists>
    </div>
    <div class="right"></div>
  </div>
</template>

<script setup>
import ImgLists from '@/components/GoodsDetail/ImgLists.vue';
import { useRoute } from 'vue-router';
import { getGoodsDetail } from '@/api/api';

const detail=ref({})
const route=useRoute()
console.log(route.query.id);
const getGoods=async ()=>{
  const res=await getGoodsDetail(route.query.id)
  console.log(res.result);
  detail.value=res.result
}
onMounted(() => {
  getGoods()
})
</script>

<style lang="less" scoped>

</style>