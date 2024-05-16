import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import i18n from "./locales/i18n.ts";

createApp(App).use(i18n).mount('#app')
