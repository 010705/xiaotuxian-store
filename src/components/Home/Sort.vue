<template>
  <div class="sort">
    <ul class="menu">
      <li v-for="item in sort">
        <router-link to="/">{{ item.name }}</router-link>
        <router-link to="/">
          <div class="second">
            <span v-for="i in item.children.slice(0, 2)">{{ i.name }}</span>
          </div>
        </router-link>
        <div class="layer">
          <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
          <ul>
            <li v-for="i in item.goods" :key="i">
              <RouterLink to="/">
                <img alt="" :src="i.picture" />
                <div class="info">
                  <p class="name">
                    {{ i.name }}
                  </p>
                  <!-- <p class="desc">{{ i.desc }}</p> -->
                  <p class="price"><i>¥</i>{{ i.price }}</p>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { getCategory } from '@/api/api'

const sort = ref([])
const getCategoryTitle = async () => {
  const res = await getCategory()
  sort.value = res.result
  // console.log(sort.value);
}

onMounted(() => {
  getCategoryTitle()
})
</script>

<style scoped lang="less">
.sort {
  position: relative;
  z-index: 99;

  .menu {
    padding: 0;
    margin: 0;
    list-style: none;
    background-color: rgba(14, 113, 90, 0.8);
    width: 250px;

    li {
      font-size: 17px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;

      a {
        text-decoration: none;
        color: #fff;

        .second {
          width: 150px;
          display: flex;
          justify-content: space-around;
          align-items: center;

          span {
            font-size: 14px;

          }
        }
      }

      .layer {
        min-width: 600px;
        height: 450px;
        background: rgba(255, 255, 255, 0.8);
        position: absolute;
        left: 250px;
        top: 0px;
        display: none;
        padding: 0 15px;

        h4 {
          font-size: 20px;
          font-weight: normal;
          line-height: 30px;
          color: #000;

          small {
            font-size: 16px;
            color: #666;
          }
        }

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            width: 30%;
            height: 120px;
            margin-right: 7px;
            // margin-bottom: 8px;
            border: 1px solid #eee;
            border-radius: 4px;
            background: #fff;

            a {
              color: #000;
              font-size: 14px;
              display: flex;
              align-items: center;

              img {
                width: 80px;
                height: 80px;
              }

              .info {
                padding-left: 10px;
                font-size: 15px;
                // line-height: 20px;
                overflow: hidden;

                .name {
                  font-size: 16px;
                  height: 70px;
                  color: #666;
                }

                .price {
                  height: 30px;
                  font-size: 16px;
                  color: red;

                  i {
                    font-size: 16px;
                  }
                }

              }
            }
          }
        }
      }
    }

    li:hover {
      background-color: #27ba9b;

      .layer {
        display: block;
      }
    }

  }

}
</style>