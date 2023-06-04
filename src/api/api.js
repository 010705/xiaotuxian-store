import instance from "./request";

//获取分类
export function getCategory() {
  return instance({
    url: "home/category/head",
  });
}

//获取新鲜好物
export function getNew() {
  return instance({
    url: "/home/new",
  });
}

//获取人气推荐
export function getRecom() {
  return instance({
    url: "/home/hot",
  });
}

//获取商品列表
export function getGoods() {
  return instance({
    url: "/home/goods",
  });
}

//获取二级分类列表
export function getSubCategory(id) {
  return instance({
    url: "/category",
    params: {
      id,
    },
  });
}

//获取商品详情
export function getGoodsDetail(id) {
  return instance({
    url: `/goods?id=${id}`,
    // params:{
    //   id
    // }
  });
}

//登录
export function login(account,password) {
  return instance({
    url: `/login`,
    method: 'POST',
    data:{
      account,
      password
    }
  });
}
