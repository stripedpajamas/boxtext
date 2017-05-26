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
        <Summary :boxCount="boxCount"></Summary>
    </div>
</template>

<script>
    import HeaderComponent from './components/HeaderComponent.vue';
    import TextInput from './components/TextInput.vue';
    import BoxOutput from './components/BoxOutput.vue';
    import Summary from './components/Summary.vue';
    import boxText from './lib/boxText';

    export default {
      name: 'App',
      data() {
        return {
          boxes: '',
        };
      },
      components: {
        HeaderComponent,
        TextInput,
        BoxOutput,
        Summary,
      },
      computed: {
        boxCount() {
          return this.boxes.length;
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
            this.boxes = boxText.arrangeTextInBoxes(config);
          }).catch(() => {
            this.boxes = '';
          });
        },
      },
    };
</script>

<style>
    @import './assets/pure-min.css';
    @import './assets/grids-responsive-min.css';
</style>

