import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueDraggableResizable from 'vue-draggable-resizable-gorkys'
import 'vue-draggable-resizable-gorkys/dist/VueDraggableResizable.css'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/theme/index.css'
Vue.use(ElementUI, {
  size: 'small'
})
Vue.config.productionTip = false
Vue.component('vue-draggable-resizable', VueDraggableResizable)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
