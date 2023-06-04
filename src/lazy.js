import { useIntersectionObserver } from "@vueuse/core";
// import { install } from 'vue-demi'

export default {
  install(app) {
    lazy(app);
  },
};

const lazy = (app) => {
  app.directive("lazys", {
    // 当前dom元素，图片地址
    mounted(el, binding) {
      // 定义观察者，用来观察是否到可是区域
      const {stop} = useIntersectionObserver(
        el,
        ([{ isIntersecting }]) => {
          // 在可视区域
          if (isIntersecting) {
            // 将lazy的图片内容，交给src
            el.src = binding.value;
            // console.log(binding);
             // 停止观察
            stop()
          }
        },
      );
    },
  });
};
