// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//引入初始化样式文件
import '@/styles/common.scss'
//引入自定义的懒加载全局指令
import { lazyPlugin } from '@/directives'
//引入全局插件
import { componentPlugin } from './components'
const app = createApp(App)

app.use(createPinia())
app.use(router)
//注册懒加载全局指令
app.use(lazyPlugin)
//注册全局插件
app.use(componentPlugin)
app.mount('#app')



