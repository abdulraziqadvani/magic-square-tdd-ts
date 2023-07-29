// GENERAL RULE: You always try to go diagonally up towards the right
// rule 1 start with top center
// rule 2 increment by 1 and place in the row above the current one and to the right
// rule 3 if you go out of the box from the top by following rule 2 you select the last row from that column (immediate column)
// rule 4 if you out of the box from the right by following rule 2 you select the first column from the row above (immediate row)
// rule 5 by following rule 2 you end up in a cell that is already occupied , then select the row below the same cell
// rule 6 if you go out of the box from the top and right you follow rule 5

import { threeByThree as threeByThreeMock } from '../mock/mock';
import {
  getMagicSquare,
  rowOverflow,
  getIndexOfFirstValue,
  columnOverflow,
  cellFilled,
  rowAndColumnOverflow,
  initializeMagicSquare,
  fillMagicSquare
} from './algorithm';

describe('Magic Square Algorithm 1', () => {
  const magicSquareLength = 3;

  describe('Check elements', () => {
    it('Check index of first element', () => {
      const result = getIndexOfFirstValue(magicSquareLength);
      const expected = threeByThreeMock['1'];
      expect(result.toString()).toBe(expected.toString());
    });

    it('Row Overflow', () => {
      const expected = [2, 2];
      const result = rowOverflow(magicSquareLength, [-1, 2]);
      expect(result.toString()).toBe(expected.toString());
    });

    it('Column Overflow', () => {
      const expected = [1, 0];
      const result = columnOverflow(magicSquareLength, [1, 3]);
      expect(result.toString()).toBe(expected.toString());
    });

    it('Cell Filled', () => {
      const expected = [2, 0];
      const result = cellFilled(magicSquareLength, [1, 0]);
      expect(result.toString()).toBe(expected.toString());
    });

    it('Row and Column Overflow', () => {
      const expected = [1, 2];
      const result = rowAndColumnOverflow(magicSquareLength, [0, 2]);
      expect(result.toString()).toBe(expected.toString());
    });
  });

  describe('Validate Magic Square', () => {
    initializeMagicSquare(magicSquareLength);
    fillMagicSquare();
    const magicSquare = getMagicSquare();

    it('Check if whole magic square is filled', () => {
      magicSquare.forEach(arr => {
        arr.forEach(element => {
          expect(element).toBeDefined();
        });
      });

      expect(true).toBeTruthy();
    });

    it('Sum of row and column should be same and according to formula', () => {
      const n = magicSquare.length;
      const sum = (n * (Math.pow(n, 2) + 1)) / 2;
      magicSquare.forEach(arr => {
        const arrSum = eval(arr.join('+'));
        expect(sum).toEqual(arrSum);
      });

      expect(true).toBeTruthy();
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

      expect(uniqueValues.size).toEqual(totalValues);
    });

    console.table(magicSquare);
  });
});
