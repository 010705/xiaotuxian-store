<template>
  <div class="newGoods">
    <div class="title">
      <div class="main">{{ title }}</div>
      <div class="secondary">{{ subTitle }}</div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String
  },
  subTitle: {
    type: String
  }
  
})
</script>

<style lang="less">
.newGoods {
  width: 100%;
  // height: 400px;

  .title {
    display: flex;
    align-items: end;
    margin: 20px 0;

    .main {
      font-size: 28px;
      margin-right: 20px;
    }

    .secondary {
      font-size: 16px;
      color: #888;
    }
  }

  .content {
    width: 100%;

    display: flex;
    justify-content: space-between;
  }
}</style>