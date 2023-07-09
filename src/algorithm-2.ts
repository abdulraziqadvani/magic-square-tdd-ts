// let magicSquare = [[8, 1, 6], [3, 5, 7], [4, 9, 2]];
// let magicSquare = [[8, 1, 6], [3, 5, 7], [4, 9, 2]];
let magicSquare = [[null, 1, null], [null, null, null], [null, null, null]];
// let magicSquareJson = {
//     1: [0, 1]
// };
let magicSquareLength = 3;

export const add = (sum1, sum2) => sum1 + sum2;

export const getIndexFirstValue = (magicSquare: number[][]) => {
  return [0, 1];
}

export const getRule = (magicSquare: number[][]) => {
  return 2;
}

export const getMagicSquare = () => {
  return magicSquare;
}

// export const getMagicSquareJson = () => {
//     return magicSquareJson;
// }

export const getNextElementPosition = (): Array<number> => {
  return [2, 2];
}

export const getMagicSquareLength = (): number => {
  return magicSquareLength;
}

export const initializeMagicSquare = (length: number) => {
  magicSquareLength = length;

  magicSquare = new Array(length).fill(new Array(length).fill(null));

  // console.log(magicSquare);
}

// initializeMagicSquare(3);
