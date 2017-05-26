<template>
    <div id="boxText">
        <div class="pure-g">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'BoxOutput',
    };
</script>

<style>
    #boxText {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    pre {
        white-space: pre-line;
    }
</style>
