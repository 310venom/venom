import Vue from 'vue'
import toggleTab from './_toggleTab.vue'

export default () => {
  new Vue({
    el: '#tab',
    render: h => h(toggleTab),
  })
}
