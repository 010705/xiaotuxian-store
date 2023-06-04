import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    redirect:'/home',
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
    children: [
      {
        path: "home",
        component: () =>
          import(/* webpackChunkName: "about" */ "../components/Home/Pages/Index.vue")
      },
      {
        path: 'sort/:id',
        component: () =>
          import(/* webpackChunkName: "about" */ "../components/Home/Pages/SortGoods.vue")
      },
    ],
  },
  {
    path: '/goodsDetail',
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GoodsDetail.vue")
  },
  {
    path: '/login',
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
