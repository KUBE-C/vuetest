import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
/*import store from './store';*/
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';

const app = createApp(App);

app.use(router);/*安装插件（如router、store和ElementPlus）。这些插件将被应用到整个应用程序中*/
/*app.use(store);*/
app.use(ElementPlus);

/*
app.config.globalProperties.$axios = axios;/!*将axios实例添加到Vue应用的全局属性上。这样，在组件中可以通过this.$axios进行访问。*!/
*/

app.mount('#app');/*将Vue应用挂载到id为'app'的DOM元素上*/
