<template xmlns:v-model="http://www.w3.org/1999/xhtml">
    <div id="textInput">
        <h2>{{ msg }}</h2>
        <input type="text" v-on:input="process($event.target.value)" v-model:value="value">
    </div>
</template>

<script>
    export default {
      data() {
        return {
          value: '',
          msg: 'Enter text below:',
        };
      },
      methods: {
        process(input) {
          this.$emit('processMe', input);
        },
      },
    };
</script>

<style>
    #textInput {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
