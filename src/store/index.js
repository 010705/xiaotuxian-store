import { defineStore } from "pinia";

export const useStore = defineStore('main', {
  state: () => {
    const name=ref('sadnn')
    return {
      name
    }
  },
  getters: {
  },
  actions: {
  },
})