<template>
  <div class="content" v-for="item in goodsList">
    <HomePanel :title="item.name" subTitle="">
      <div class="lists">
        <div class="left">
          <img :src="item.picture" />
        </div>
        <div class="right">
          <div class="list" v-for="i in item.goods">
            <router-link to="">
              <img :src="i.picture" />
              <div class="info">
                <div class="name">{{ i.name }}</div>
                <div class="desc">{{ i.desc }}</div>
                <div class="price">￥{{ i.price }}</div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </HomePanel>
  </div>
</template>

<script setup>
import HomePanel from './HomePanel.vue';
import { getGoods } from '@/api/api';

const goodsList = ref([])
const getGoodsData = async () => {
  const res = await getGoods()
  goodsList.value = res.result
  // console.log("商品", res.result);
}
onMounted(() => {
  getGoodsData()
})
</script>

<style lang="less" >
.lists {
  width: 100%;
  height: 600px;
  display: flex;

  .left {
    width: 300px;
    height: 600px;

    img {
      width: 300px;
      height: 100%;
      display: flex;
      margin: 0 auto;
    }
  }

  .right {
    width: 900px;
    padding-left: 30px;
    height: 600px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    .list {
      width: 23%;
      height: 47%;
      background-color: aliceblue;

      img {
        padding-top: 20px;
        width: 150px;
        height: 150px;
        display: flex;
        margin: auto;
      }

      .info {
        margin-top: 10px;

        .name {
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          -o-text-overflow: ellipsis;
          -webkit-text-overflow: ellipsis;
          -moz-text-overflow: ellipsis;
          white-space: nowrap;
        }

        .desc {
          margin-top: 10px;
          font-size: 14px;
          color: #999;
          overflow: hidden;
          text-overflow: ellipsis;
          -o-text-overflow: ellipsis;
          -webkit-text-overflow: ellipsis;
          -moz-text-overflow: ellipsis;
          white-space: nowrap;
        }

        .price {
          margin-top: 10px;
          color: red;
        }
      }

    }

    .list:hover {
      transform: scale(1.1);
    }
  }
}
</style>