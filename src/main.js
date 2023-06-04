import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from "pinia"
// 统一导入el-icon图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import axios from 'axios'
import lazy from './lazy'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
const app=createApp(App)

pinia.use(persist)
// 统一注册el-icon图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router).use(ElementPlus).use(pinia).use(lazy).mount('#app')

