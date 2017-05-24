/**
 * Created by petersquicciarini on 5/12/17.
 */

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const expect = chai.expect;
const boxText = require('../lib/boxText');

chai.use(chaiAsPromised);

describe('boxText', () => {
  describe('#primeCheck', () => {
    it('should return false for a composite input', () => {
      return expect(boxText.primeCheck(6)).to.be.false;
    });
    it('should return true for a prime input', () => {
      return expect(boxText.primeCheck(7)).to.be.true;
    });
  });
  describe('#getBoxes', () => {
    it('should reject when input is empty', () => {
      const output = boxText.getBoxes();
      return expect(output).to.be.rejectedWith('Invalid input.');
    });
    it('should reject when input is not a string', () => {
      const output = boxText.getBoxes([1, 2, 3]);
      return expect(output).to.be.rejectedWith('Invalid input.');
    });
    it('should resolve with one option of one row when supplied with a prime-lengthed input', () => {
      const output = boxText.getBoxes('cat');
      return expect(output).to.eventually.deep.equal({ input: 'cat', boxes: [{ cols: 3, rows: 1 }] });
    });
    it('should resolve with options for each non-trivial factor when supplied with a composite-lengthed input', () => {
      const output = boxText.getBoxes('candyrat');
      return expect(output).to.eventually.deep.equal({
        input: 'candyrat',
        boxes: [
          {
            cols: 2,
            rows: 4,
          },
          {
            cols: 4,
            rows: 2,
          },
        ],
      });
    });
    it('should remove any non-alpha characters from input', () => {
      const output = boxText.getBoxes('candy rat $#');
      return expect(output).to.eventually.deep.equal({
        input: 'candyrat',
        boxes: [
          {
            cols: 2,
            rows: 4,
          },
          {
            cols: 4,
            rows: 2,
          },
        ],
      });
    });
  });
  describe('#arrangeTextInBoxes', () => {
    it('should output an array of text boxes when given proper config', () => {
      boxText.getBoxes('candyrat')
        .then((config) => {
          const textBoxes = boxText.arrangeTextInBoxes(config);
          expect(textBoxes).to.be.an('array');
          expect(textBoxes).to.deep.equal([
            'ca\nnd\nyr\nat\n',
            'cand\nyrat\n',
          ]);
        });
    });
  });
});
