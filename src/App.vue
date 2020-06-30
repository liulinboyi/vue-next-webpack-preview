<template>
<div>
    <img src="./logo.png">
  <h1>Hello Vue 3!</h1>
  <Counter name="hello"></Counter>
  <!-- <button @click="inc">Clicked {{ count }} times.</button> -->
</div>
</template>

<script>
import { ref } from 'vue'
import Counter from './Counter.vue';

export default {
  components: {
    Counter
  },
  setup() {
    return {
    }
  }
}
</script>

<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
