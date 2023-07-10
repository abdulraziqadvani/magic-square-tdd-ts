// let magicSquare = [[8, 1, 6], [3, 5, 7], [4, 9, 2]];
// let magicSquare = [[null, 1, null], [null, null, null], [null, null, null]];

let magicSquare: number[][] = [];
let magicSquareLength: number = 3;

export const getIndexOfFirstValue = () => {
  return [0, 1];
}

export const getMagicSquare = () => {
  return magicSquare;
}

export const getNextElementPosition = (previousIndex: Array<number>): Array<number> => {

  let nextPosition = [previousIndex[0] - 1, previousIndex[1] + 1];

  // Check if Rows overflows
  if (nextPosition[0] < 0) {
    nextPosition[0] = magicSquareLength - 1;
  }

  // Check if column index becomes length of Magic Square
  if (nextPosition[1] >= magicSquareLength) {
    nextPosition[1] = 0;
  }

  // Check if cell is already filled
  if (magicSquare[nextPosition[0]][nextPosition[1]]) {
    nextPosition = [previousIndex[0] + 1, previousIndex[1]];
  }

  // Check if Row index equals to Magic Square Length and Column Index equals to 0
  if (nextPosition[0] < 0 && nextPosition[1] >= magicSquareLength) {
    nextPosition = [previousIndex[0] + 1, magicSquareLength - 1];
  }

  return nextPosition;
}

export const getMagicSquareLength = (): number => {
  return magicSquareLength;
}

export const initializeMagicSquare = (length: number) => {
  magicSquareLength = length;

  magicSquare = Array.from({ length }, () => Array.from({ length }), () => null);
}

export const fillMagicSquare = () => {
  const firstIndex = getIndexOfFirstValue();
  magicSquare[firstIndex[0]][firstIndex[1]] = 1;

  let counter = 2;
  let previousIndex = firstIndex;

  console.log('magicSquare => ', magicSquare);

  magicSquare.forEach(arr => {
    arr.forEach(() => {
      if ((counter - 1) !== magicSquareLength * magicSquareLength) {
        previousIndex = getNextElementPosition(previousIndex);
        magicSquare[previousIndex[0]][previousIndex[1]] = counter;
        counter++;
      }
    });
  });

  console.log('magicSquare => ', magicSquare);
}

initializeMagicSquare(3);
fillMagicSquare();
