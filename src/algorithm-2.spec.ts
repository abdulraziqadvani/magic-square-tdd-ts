// GENERAL RULE: You always try to go diagonally up towards the right
// rule 1 start with top center
// rule 2 increment by 1 and place in the row above the current one and to the right
// rule 3 if you go out of the box from the top by following rule 2 you select the last row from that column (immediate column)
// rule 4 if you out of the box from the right by following rule 2 you select the first column from the row above (immediate row)
// rule 5 by following rule 2 you end up in a cell that is already occupied , then select the row below the same cell
// rule 6 if you go out of the box from the top and right you follow rule 5

import { expect, assert } from 'chai';
import {
  getMagicSquare,
  getNextElementPosition,
  getMagicSquareLength
} from './algorithm-2';

describe('Magic Square Algorithm 1', () => {
  const magicSquare = getMagicSquare();
  // const lastElement = Object.entries(magicSquareJson).sort().pop();
  const nextPosition = getNextElementPosition([0, 1]);

  console.log('magicSquare => ', magicSquare);
  console.log('nextPosition => ', nextPosition);

  const magicSquareLength = getMagicSquareLength();

  describe('Check overflows', () => {
    it('Top Row Overflow', () => {
      if (nextPosition[0] === -1) {
        assert.fail(-1, nextPosition[0], 'Row is overflowed.');
      }

      assert.ok(nextPosition[0].toString(), 'Row is not overflowed.');
    });

    // it('Top Row Overflow', () => {
    //   magicSquare.forEach(arr => {
    //     arr.forEach(element => {
    //       if (element === -1) {
    //         assert.fail(-1, element, 'Row is overflowed.');
    //       }
    //     });
    //   });

    //   assert.ok(true, 'Row is not overflowed.');
    // });

    it('Right Column Overflow', () => {
      if (nextPosition[1] >= magicSquareLength) {
        assert.fail(magicSquareLength, nextPosition[1], 'Column is overflowed.');
      }

      assert.ok(nextPosition[1].toString(), 'Column is not overflowed.');
    });

    // it('Right Column Overflow', () => {
    //   magicSquare.forEach(arr => {
    //     arr.forEach(element => {
    //       if (element >= magicSquareLength) {
    //         assert.fail(magicSquareLength, element, 'Column is overflowed.');
    //       }
    //     });
    //   });

    //   assert.ok(true, 'Column is not overflowed.');
    // });

    // it('Already Filled Cell', () => {
    //   if (magicSquare[nextPosition[0]][nextPosition[1]]) {
    //     assert.fail(true, false, 'Cell is already filled.');
    //   }

    //   assert.ok(nextPosition, 'Cell is empty.');
    // });
  });

  describe('Validate Magic Square', () => {
    it('Check if whole magic square is filled', () => {
      magicSquare.forEach(arr => {
        arr.forEach(element => {
          if (!element) {
            assert.fail(false, true, 'Whole Magic Square is not filled.');
          }
        });
      });

      assert.ok(true, 'Whole Magic Square is filled.');
    });

    it('Sum of row and column should be same and according to formula', () => {
      const n = magicSquare.length;
      const sum = (n * (Math.pow(n, 2) + 1)) / 2;
      magicSquare.forEach(arr => {
        const arrSum = eval(arr.join('+'));
        if (sum !== arrSum) {
          assert.fail(arrSum, sum, 'Sum of a Magic Square is incorrect.');
        }
      });
      assert.ok(sum, 'Sum of a Magic Square.');
    });

    it('Numbers should be unique in a Magic Square', () => {
      const uniqueValues = new Set;
      let totalValues = 0;
      magicSquare.forEach(arr => {
        arr.forEach(element => {
          totalValues++;
          uniqueValues.add(element);
        })
      });

      if (uniqueValues.size === totalValues) {
        assert.ok(magicSquare, 'Numbers are unique in a Magic Square.');
      } else {
        assert.fail(totalValues, uniqueValues.size, 'Numbers are not unique in a Magic Square.');
      }
    });
  });
});
