import { createApp } from 'vue'
import './style.css'
import router from './router/index'
import App from './App.vue'
import  'lib-flexible'
import vant from 'vant';
import 'vant/lib/index.css';
// import  utils from './utils/checkHash';
const app = createApp(App);
// app.config.globalProperties.$myGlobalVariable = utils;
app.use(router);
app.use(vant);

app.mount('#app')
