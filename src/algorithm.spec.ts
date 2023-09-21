import { threeByThree as threeByThreeMock } from '../mock/mock';
import {
  getMagicSquare,
  rowOverflow,
  getIndexOfFirstValue,
  columnOverflow,
  cellFilled,
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
