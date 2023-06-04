<template>
  <div class="home">
    <router-link to="/">
      <img src="@/assets/logo.png"/>
    </router-link>
    <router-link to="/"  >首页</router-link>
    <ul v-for="(item,index) in titleList" :key="item.id" >
      <li class="title" >
        <RouterLink :to="`/sort/${item.id}`" active-class="active">{{ item.name }}</RouterLink>
      </li>
    </ul>

    <el-input
      v-model="input1"
      class="w-50 m-2"
      size="small"
      placeholder="Please Input"
      suffix-icon="Search"
    />
    <!-- <router-link to="">登  录 / 注  册</router-link> -->
  </div>
</template>

<script setup>
import { ref,onMounted} from 'vue'
import {getCategory} from '@/api/api'
const input1 = ref('')

const titleList=ref([])
const getCategoryTitle=async()=>{
  const res=await getCategory()
  titleList.value=res.result
  // console.log( titleList.value);
}

onMounted(() => {
  getCategoryTitle()
})

</script>

<style scoped>
.home{
  width: 1200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* margin:0 auto; */
  /* min-width: 1280px; */
  height: 80px;
  box-shadow:0 5px 6px rgba(0, 0, 0, 0.1);
  /* position: fixed; */
  top: 50px;
}
a{
  text-decoration: none;
  color: black;
  /* margin-left: 40px; */
}
img{
  width: 150px;
}
.el-input{
  width: 200px;
  height: 40px;
}
ul{
  list-style: none;
}
.active{
  color:  rgba(14, 113, 90, 0.8);
}

</style>