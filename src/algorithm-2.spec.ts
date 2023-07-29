// GENERAL RULE: You always try to go diagonally up towards the right
// rule 1 start with top center
// rule 2 increment by 1 and place in the row above the current one and to the right
// rule 3 if you go out of the box from the top by following rule 2 you select the last row from that column (immediate column)
// rule 4 if you out of the box from the right by following rule 2 you select the first column from the row above (immediate row)
// rule 5 by following rule 2 you end up in a cell that is already occupied , then select the row below the same cell
// rule 6 if you go out of the box from the top and right you follow rule 5

import { expect, assert } from 'chai';
import { threeByThree } from '../mock/mock';
import {
  getMagicSquare,
  getNextElementPosition,
  getMagicSquareLength,
  rowOverflow,
  getIndexOfFirstValue,
  columnOverflow,
  cellFilled,
  rowAndColumnOverflow
} from './algorithm-2';

describe('Magic Square Algorithm 1', () => {
  const magicSquare = getMagicSquare();
  const magicSquareLength = 3;

  // const lastElement = Object.entries(magicSquareJson).sort().pop();
  // const nextPosition = getNextElementPosition([0, 1], magicSquareLength);

  console.log('magicSquare => ', magicSquare);
  // console.log('nextPosition => ', nextPosition);

  // const magicSquareLength = getMagicSquareLength();

  describe('Check elements', () => {

    it('Check index of first element', () => {
      const threeByThreeMock = threeByThree;
      const index = getIndexOfFirstValue(magicSquareLength);
      const expected = threeByThreeMock['1'];
      if (index.toString() !== expected.toString()) {
        assert.fail(index, expected, 'Index of first value is incorrect');
      }
      assert.ok(index, 'Index of first value is correct');
    });

    it('Row Overflow', () => {
      const expected = [2, 2];
      const result = rowOverflow(magicSquareLength, [-1, 2]);

      if (result.toString() !== expected.toString()) {
        assert.fail(result, expected, 'Test Case Failed');
      }

      assert.ok(result, 'Test Case Passed');
    });

    it('Column Overflow', () => {
      const expected = [1, 0];
      const result = columnOverflow(magicSquareLength, [1, 3]);

      if (result.toString() !== expected.toString()) {
        assert.fail(result, expected, 'Test Case Failed');
      }

      assert.ok(result, 'Test Case Passed');
    });

    it('Cell Filled', () => {
      const expected = [2, 0];
      const result = cellFilled(magicSquareLength, [1, 0]);

      if (result.toString() !== expected.toString()) {
        assert.fail(result, expected, 'Test Case Failed');
      }

      assert.ok(result, 'Test Case Passed');
    });

    it('Row and Column Overflow', () => {
      const expected = [1, 2];
      const result = rowAndColumnOverflow(magicSquareLength, [0, 2]);

      if (result.toString() !== expected.toString()) {
        assert.fail(result, expected, 'Test Case Failed');
      }

      assert.ok(result, 'Test Case Passed');
    });
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
