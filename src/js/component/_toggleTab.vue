<template>
  <div class="tweet">
    <nav class="nav">
      <ul class="nav-list">
        <li v-for="(group, index) in tweet" v-on:click="toggle(index)" class="nav-item">{{ group.genre }}</li>
      </ul>
    </nav>
    <div v-for="(group, index) in tweet" class="block" v-show="isActive === index">
      <div class="list">
        <div class="item" v-for="item in group.list">
          <blockquote class="twitter-tweet" data-lang="ja"><a v-bind:href="'https://twitter.com/310_progressive/status/' + item + '?ref_src=twsrc%5Etfw'"></a></blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tweet from '../assets/data.json'

export default {
  name: 'tab',
  data() {
    return {
      tweet: tweet,
      isActive: '',
    };
  },
  methods: {
    toggle(num) {
      this.isActive = num;
    },
  }
}
</script>
