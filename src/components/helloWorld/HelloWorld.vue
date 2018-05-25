<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <button @click="onClick($event)">click me</button>
    <sample></sample>
  </div>
</template>

<script src="./helloWorld.ts" lang="ts">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
