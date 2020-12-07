import {createApp} from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
import './style.scss'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import Axios from "axios"
import './axios'

// Vue.config.productionTip = false
const app = createApp({
  ...App,
});

app.config.globalProperties.$axios = Axios

app.use(ElementPlus)
app.use(router);
app.use(store); 
router.isReady().then(() => app.mount('#app'))
 

 
