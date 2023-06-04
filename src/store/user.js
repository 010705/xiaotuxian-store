import { defineStore } from "pinia";
import {login} from "@/api/api"

export const useUserStore = defineStore("user", {
  state: () => {
    const userInfo = ref({});
    return {
      userInfo,
    };
  },
  getters: {},
  actions: {
   async getUserInfo(account,password){
    console.log("调用了");
      const res=await login(account,password)
      this.userInfo=res.result
      // localStorage.setItem("user",JSON.stringify(this.userInfo))
    }
  },
  persist:true
});
