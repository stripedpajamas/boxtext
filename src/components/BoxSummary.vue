<template>
    <div id="summary">
        <h2>Total boxes: {{ boxCount }}</h2>
    </div>
</template>

<script>
    export default {
      name: 'BoxSummary',
      props: ['boxCount'],
    };
</script>

<style>
    #summary {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
