const boxText = require('./lib/boxText');

boxText.getBoxes(process.argv[2])
  .then((config) => {
    const textBoxes = boxText.arrangeTextInBoxes(config);
    textBoxes.forEach(textBox => console.log(textBox));
  })
  .catch((err) => {
    console.log(err);
  });
