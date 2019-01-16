import Vue from 'vue'
import Count from './_count.vue'

export default () => {
  new Vue({
    el: '#counter',
    render: h => h(Count),
  })
}
