//导入Vue
import Vue from 'vue'


//引入过滤器
import './config/filters.js'

//引入flexible   移动端自适应
import 'lib-flexible'

//引入需要的插件
import './config/plugin.js'
//引入app.vue组件
import app from './app.vue'



import alert from './components/Publice/messageBox.js'
Vue.use(alert);


//引入mui
import Mui from "vue-awesome-mui";
import "../node_modules/vue-awesome-mui/mui/js/mui"
Vue.use(Mui)


import "../static/css/style.css";

//引入路由
import router from './router'
//创建Vue对象并挂载路由
Vue.config.productionTip = false

// //引入1rem等于100px的换算
// import Rem from "../static/js/rem";
// Vue.use(Rem)

let vm = new Vue({
  el: '#app',
  router,
  render(createElement) {
    return createElement(app)
  }
})
