<script setup>
const props = defineProps({
  imgs: {
    typeof: Object
  }
})

const i=ref(0)
const focus=(index)=>{
  console.log();
  i.value=index
}

const left=ref(0)
const top=ref(0)
const elementX=ref(0)
const elementY=ref(0)
const mouseHandle=(e)=>{
  elementX.value=e.layerX
  elementY.value=e.layerY
}

watch([elementX,elementY],()=>{
  console.log(elementX.value,elementY.value);
  // if(elementX.value<=100){
  //   left.value=0
  // }
  // if(elementX.value>=400){
  //   left.value=300
  // }
  // if(elementX.value>100 && elementX.value<400){
  //   left.value=elementX.value-100
  // }
  // if(elementY.value>100 && elementY.value<400){
  //   top.value=elementY.value-200
  // }
  // console.log(left.value,top.value);
})

</script>

<template >
  <div v-if="imgs.mainPictures" class="block">
    <div class="left" @mousemove="mouseHandle">
      <img :src="imgs.mainPictures[i]" />
      <div class="cover" :style="{ left: `${left}px`, top: `${top}px` }"></div>
      <!-- <div class="bigImg"></div> -->
    </div>
    <div class="right">
      <div v-for="(item,index) in imgs.mainPictures" class="list" @mouseenter="focus(index)" :class="{active:index===i}">
        <img :src="item"  />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.block {
  display: flex;
  width: 700px;
  height: 700px;
  margin: 0;
  padding: 0;
  // align-items: center;

  .left {
    // margin: auto;
    width: 500px;
    height: 500px;
    // padding-right: 20px;

    img {
      width: 500px;
      height: 100%;
      position: relative;
    }
    .cover{
      background-color:rgba(0, 0, 0, 0.1);
      width: 200px;
      height: 200px;
      position: absolute;
      display: none;
      top: 0;
      left: 0;
    }
  }
  .left:hover{
    .cover{
      display: block;
    }
  }
  .right {
    width: 100px;
    // margin: auto;

    .list {
      img {
        width: 100%;
        height: 100px;
      }
    }
    .active{
      border: 4px solid red;
    }
  }
}
</style>