<template>
  <div class="content">
    <div class="topBox">
      <div class="title">全部分类</div>
      <div class="block">
        <div class="lists" v-for="item in subCategory">
          <router-link to="">
            <img :src="item.picture" />
            <div class="name"> {{ item.name }}</div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="subBox" v-for="item in subCategory">
        <div class="listTitle"> -{{ item.name }}-</div>
        <div class="subBlock">
          <div class="eachBox" v-for="i in item.goods">
            <router-link :to="{path:'/goodsDetail',query:{id:i.id}}">
            <img :src="i.picture" />
            <div class="subName">{{ i.name }}</div>
            <div class="price">￥{{ i.price }}</div>
          </router-link>
          </div>
        </div>
      
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { getSubCategory } from "@/api/api"

const route = useRoute()
const subCategory = ref([])
//初次执行
onMounted(async () => {
  // console.log(route.params.id)
  const res = await getSubCategory(route.params.id)
  subCategory.value = res.result.children
  console.log(res.result.children);
})
//路由参数变化时执行
onBeforeRouteUpdate(async (to) => {
  console.log('onBeforeRouteUpdate', to.params.id);
  const res = await getSubCategory(to.params.id)
  subCategory.value = res.result.children
  // console.log(res);
});

// watch(() => route, (newNum, oldNum) => {
//   // getId()
//   console.log("改变了");
// }, {
//   immediate: true
// })
</script>

<style lang="less" scoped>
.content {
  width: 1200px;
  min-height: 100vh;
  padding-top: 50px;
  background-color: #eee;

  a {
    text-decoration: none;
    color: black;
  }

  .topBox {
    width: 1000px;
    height: 250px;
    background-color: #fff;
    margin: 0 auto;

    .title {
      font-size: 20px;
      text-align: center;
      padding-top: 30px;
    }

    .block {
      display: flex;
      justify-content: space-around;
      margin-top: 30px;

      .lists {

        img {
          width: 100px;
          height: 100px;
        }

        .name {
          text-align: center;
        }

      }
    }

  }

  .subBox {
    width: 1000px;
    height: 300px;
    margin: 0 auto;
    background-color: #fff;
    margin-top: 50px;

    .listTitle {
      font-size: 20px;
      text-align: center;
      padding-top: 20px;
    }

    .subBlock {
      display: flex;
      margin-top: 40px;
      // width: 120px;

      justify-content: space-around;

      .eachBox {
        img {
          width: 100px;
          height: 100px;
        }

        .subName {
          width: 120px;
          overflow: hidden;
          word-wrap: normal;
          height: 20px;
        }

        .price {
          color: red;
          text-align: center;
        }
      }
    }
  }
}
</style>