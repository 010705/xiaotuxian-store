import {defineStore} from 'pinia'

export const useStore = defineStore('count', {
  state: () => ({
      name:'孙悟空',
      age:1800
  }),
  getters: {
    
  },
  actions: {
    increment(){
      this.age++
    }
  },
})