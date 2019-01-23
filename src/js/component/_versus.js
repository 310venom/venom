import Vue from 'vue'
import Versus from './_versus.vue'

export default () => {
  new Vue({
    el: '#versus',
    render: h => h(Versus),
  })
}
