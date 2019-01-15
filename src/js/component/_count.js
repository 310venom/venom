import Vue from 'vue'
import Count from './_count'

export default () => {
  new Vue({
    el: '#app',
    render: h => h(Count),
  })
}
