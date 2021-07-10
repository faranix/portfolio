import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// CSS 
import "./assets/css/App.scss";

createApp(App).use(router).mount('#app')
