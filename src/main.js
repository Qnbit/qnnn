
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import Antd from 'ant-design-vue';
// ArcoVue
// import ArcoVue from '@arco-design/web-vue';
// import '@arco-design/web-vue/dist/arco.css';

import 'ant-design-vue/dist/reset.css';
import 'ant-design-vue/lib/button/style';

const app = createApp(App)


app.use(router)
app.use(Antd)
// app.use(ArcoVue);
app.mount('#app')

// app.use(ArcoVue, {
//     // 用于改变使用组件时的前缀名称
//     componentPrefix: 'arco'
// });
