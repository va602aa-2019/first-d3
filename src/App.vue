<template>
  <div id="app">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
const d3 = require('d3');

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    d3.selectAll('h2')
      .data([5,10,13])
      .enter()
      .append('h2')
      .text(function(d,i){
        return 'Element at position '+ (i+1) +' is '+d;
      } );
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
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
