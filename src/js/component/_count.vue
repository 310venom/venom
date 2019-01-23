<template>
  <div class="counter">
    <ul class="player">
      <li>
        <p class="name">あなた</p>
        <p class="count">{{ myCount }}</p>
        <div class="button-list">
          <button class="button red" type="button" v-on:click="myCountDown">-1</button>
          <button class="button blue" type="button" v-on:click="myCountUp">+1</button>
        </div>
      </li>
      <li>
        <p class="name">相手</p>
        <p class="count">{{ oppCount }}</p>
        <div class="button-list">
          <button class="button red" type="button" v-on:click="oppCountDown">-1</button>
          <button class="button blue" type="button" v-on:click="oppCountUp">+1</button>
        </div>
      </li>
    </ul>
    <div class="result">
      <p>現在の戦績 : {{ myCount }} - {{ oppCount }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'counter',
  data() {
    return {
      myCount: 0,
      oppCount: 0,
    };
  },
  methods: {
    myCountUp() {
      this.myCount++
    },
    myCountDown() {
      if (this.myCount !== 0) {
        this.myCount--
      }
    },
    oppCountUp() {
      this.oppCount++
    },
    oppCountDown() {
      if (this.oppCount !== 0) {
        this.oppCount--
      }
    },
  }
}
</script>
