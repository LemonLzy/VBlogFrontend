import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import './assets/css/style.css'
import axios from 'axios'

const app = createApp(App)
app.config.globalProperties.$http = axios
app.use(router).use(ElementPlus, { locale: zhCn }).mount('#app')
