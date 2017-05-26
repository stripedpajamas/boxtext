<template xmlns:v-for="http://www.w3.org/1999/XSL/Transform">
    <div>
        <HeaderComponent></HeaderComponent>
        <TextInput v-on:processMe="processText"></TextInput>
        <BoxOutput>
            <div :class="gridStyle" v-for="box in boxes">
                <div class="grid-box">
                    <pre>
                        {{ box }}
                    </pre>
                </div>
            </div>
        </BoxOutput>
        <BoxSummary :boxCount="boxCountSummary"></BoxSummary>
    </div>
</template>

<script>
    import HeaderComponent from './components/HeaderComponent.vue';
    import TextInput from './components/TextInput.vue';
    import BoxOutput from './components/BoxOutput.vue';
    import BoxSummary from './components/BoxSummary.vue';
    import boxText from './lib/boxText';

    export default {
      name: 'App',
      data() {
        return {
          boxes: '',
          boxConfig: {},
        };
      },
      components: {
        HeaderComponent,
        TextInput,
        BoxOutput,
        BoxSummary,
      },
      computed: {
        boxCount() {
          return this.boxes.length;
        },
        boxCountSummary() {
          if (this.boxConfig.boxes && this.boxConfig.boxes.every(box => box.rows === 1)) {
            return 0;
          }
          return this.boxConfig.boxes && this.boxConfig.boxes.length;
        },
        gridStyle() {
          if (this.boxCount <= 2) {
            return `pure-u-1-${this.boxCount}`;
          }
          return 'pure-u-1-3';
        },
      },
      methods: {
        processText(input) {
          boxText.getBoxes(input).then((config) => {
            this.boxConfig = config;
            this.boxes = boxText.arrangeTextInBoxes(config);
          }).catch(() => {
            this.boxes = '';
            this.boxConfig = {};
          });
        },
      },
    };
</script>

<style>
    @import './assets/pure-min.css';
    @import './assets/grids-responsive-min.css';
</style>

