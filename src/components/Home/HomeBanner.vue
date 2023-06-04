<template>
  <div class="myBanner">
    <el-carousel indicator-position="outside" height="450px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/6d202d8e-bb47-4f92-9523-f32ab65754f4.jpg"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style lang="less" scoped>
.myBanner {
  width: 1200px;
  height: 500px;
  margin:0 auto;
  position: absolute;
  // left: 0;
  top:130px;
  z-index: 98;
  overflow: hidden;
}


.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>