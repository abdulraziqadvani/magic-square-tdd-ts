// let magicSquare = [[8, 1, 6], [3, 5, 7], [4, 9, 2]];
// let magicSquare = [[null, 1, null], [null, null, null], [null, null, null]];
// let magicSquareJson = {
//     1: [0, 1]
// };
let magicSquare: number[][] = [];
let magicSquareLength = 3;

export const getIndexOfFirstValue = () => {
  return [0, 1];
}

export const getMagicSquare = () => {
  return magicSquare;
}

// export const getMagicSquareJson = () => {
//     return magicSquareJson;
// }

export const getNextElementPosition = (previousIndex?: Array<number>): Array<number> => {

  let nextPosition = [previousIndex[0] - 1, previousIndex[1] + 1];

  if (nextPosition[0] < 0) { // Check if Rows overflows
    nextPosition[0] = magicSquareLength - 1;
  }

  if (nextPosition[1] >= (magicSquareLength - 1)) { // Check if column index becomes length of Magic Square
    nextPosition[1] = 0;
  }

  if (magicSquare[nextPosition[0]][nextPosition[1]]) { // Check if cell is already filled
    nextPosition = [previousIndex[0] + 1, previousIndex[1]];
  }

  if (nextPosition[0] >= magicSquareLength && nextPosition[1] === 0) {
    nextPosition = [magicSquareLength - 2, 0];
  }

  return nextPosition;
}

export const getMagicSquareLength = (): number => {
  return magicSquareLength;
}

export const initializeMagicSquare = (length: number) => {
  magicSquareLength = length;

  // magicSquare = new Array(length).fill(new Array(length).fill(null));
  magicSquare = Array.from({ length }, () => Array.from({ length }), () => null);

  // console.log(magicSquare);
}

export const fillMagicSquare = () => {
  const firstIndex = getIndexOfFirstValue();
  magicSquare[firstIndex[0]][firstIndex[1]] = 1;

  let counter = 2;
  let previousIndex = firstIndex;

  console.log('magicSquare => ', magicSquare);

  magicSquare.forEach(arr => {
    arr.forEach(() => {
      if (counter !== magicSquareLength * magicSquareLength) {
        previousIndex = getNextElementPosition(previousIndex);
        magicSquare[previousIndex[0]][previousIndex[1]] = counter;
        counter++;
      }
    })
  });
}

initializeMagicSquare(3);
fillMagicSquare();
