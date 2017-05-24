/**
 * @module lib/boxText
 */

module.exports = {
  /**
   * Checks the primality of a given number.
   * @param {number} n A number to check
   * @returns {boolean} True if the number is prime, false if it is composite
   */
  primeCheck(n) {
    if (n <= 1) {
      return false;
    } else if (n <= 3) {
      return true;
    } else if (n % 2 === 0 || n % 3 === 0) {
      return false;
    }
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  },
  /**
   * Returns possible ways to organize a given string in a box.
   * The box must be complete, but the sides don't need to be equal.
   * This function really just outputs the non-trivial factors of str.length.
   *
   * Ex: 'candyrat' outputs 4cols, 2rows; 2cols, 4rows.
   *
   * @param {string} str Input string to analyze
   * @returns {Promise} A promise that resolves to an array of possible box configurations
   */
  getBoxes(str) {
    return new Promise((resolve, reject) => {
      // sanitize input
      const input = str && typeof str === 'string' && str.replace(/[^a-z]/ig, '');
      if (!input) {
        reject('Invalid input.');
      }
      const len = input.length;
      if (this.primeCheck(len)) {
        // return essentially 'empty' output for primes
        resolve({
          input,
          boxes: [
            {
              cols: len,
              rows: 1,
            },
          ],
        });
      }
      const boxes = [];
      for (let i = 2; i < len; i += 1) {
        if (len % i === 0) {
          boxes.push({
            cols: i,
            rows: len / i,
          });
        }
      }
      resolve({ input, boxes });
    });
  },
  /**
   * Arranges the input text from a config object into all possible boxes.
   *
   * @param {Object} boxConfig A box config as returned by getBoxes
   * @returns {Array} An array of text blocks based on the provided configurations
   */
  arrangeTextInBoxes(boxConfig) {
    const input = boxConfig.input;
    const boxes = boxConfig.boxes;
    const output = [];
    boxes.forEach((box) => {
      let textBox = '';
      for (let i = box.rows, j = 0; i > 0; i -= 1, j += box.cols) {
        textBox += input.substr(j, box.cols);
        textBox += '\n';
      }
      output.push(textBox);
    });
    return output;
  },
};
