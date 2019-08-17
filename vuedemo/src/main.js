import Vue from 'vue'
// import App from './App.vue'
// import faa from './components/插值表达式.vue'
// import faa from './components/v-text.vue'
// import faa from './components/v-html.vue'
// import faa from './components/v-bind.vue'
// import faa from './components/v-for.vue'
// import faa from './components/列表数据展示案例-数据展示1.vue'
import faa from './components/数据列表.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(faa)
}).$mount('#app')
