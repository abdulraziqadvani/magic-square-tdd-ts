let magicSquare: number[][] = [];
let magicSquareLength: number = 3;

export const getIndexOfFirstValue = (magicSquareLength: number) => {
  return [0, Math.floor(magicSquareLength / 2)];
}

export const getMagicSquare = () => {
  return magicSquare;
}

export const getNextElementPosition = (previousIndex: Array<number>, magicSquareLength: number): Array<number> => {
  let nextPosition = [previousIndex[0] - 1, previousIndex[1] + 1];

  // Check if Rows overflows
  if (nextPosition[0] < 0) {
    nextPosition = rowOverflow(magicSquareLength, nextPosition);
  }

  // Check if column index becomes length of Magic Square
  if (nextPosition[1] >= magicSquareLength) {
    nextPosition = columnOverflow(magicSquareLength, nextPosition);
  }

  // Check if cell is already filled
  if (magicSquare[nextPosition[0]][nextPosition[1]]) {
    nextPosition = cellFilled(magicSquareLength, previousIndex);
  }

  // Check if Row index equals to Magic Square Length and Column Index equals to 0
  if (nextPosition[0] < 0 && nextPosition[1] >= magicSquareLength) {
    nextPosition = rowAndColumnOverflow(magicSquareLength, previousIndex);
  }

  return nextPosition;
}

export const rowOverflow = (magicSquareLength: number, positionIndex: Array<number>): Array<number> => {
  return [magicSquareLength - 1, positionIndex[1]];
}

export const columnOverflow = (magicSquareLength: number, positionIndex: Array<number>): Array<number> => {
  return [positionIndex[0], 0];
}

export const cellFilled = (magicSquareLength: number, positionIndex: Array<number>): Array<number> => {
  return [positionIndex[0] + 1, positionIndex[1]];
}

export const rowAndColumnOverflow = (magicSquareLength: number, positionIndex: Array<number>): Array<number> => {
  return [positionIndex[0] + 1, magicSquareLength - 1];
}

export const getMagicSquareLength = (): number => {
  return magicSquareLength;
}

export const initializeMagicSquare = (length: number) => {
  magicSquareLength = length;

  magicSquare = Array.from({ length }, () => Array.from({ length }), () => null);
}

export const fillMagicSquare = () => {
  const firstIndex = getIndexOfFirstValue(magicSquareLength);
  magicSquare[firstIndex[0]][firstIndex[1]] = 1;

  let counter = 2;
  let previousIndex = firstIndex;

  magicSquare.forEach(arr => {
    arr.forEach(() => {
      if ((counter - 1) !== magicSquareLength * magicSquareLength) {
        previousIndex = getNextElementPosition(previousIndex, magicSquareLength);
        magicSquare[previousIndex[0]][previousIndex[1]] = counter;
        counter++;
      }
    });
  });

  // console.table(magicSquare);

}


// initializeMagicSquare(3);
// fillMagicSquare();
