import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'; // 如果使用 Pinia
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')

app.use(ElementPlus, {
    locale: zhCn,
    size: 'large'
  })