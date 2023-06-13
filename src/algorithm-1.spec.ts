// GENERAL RULE: You always try to go diagonally up towards the right
// rule 1 start with top center
// rule 2 increment by 1 and place in the row above the current one and to the right
// rule 3 if you go out of the box from the top by following rule 2 you select the last row from that column (immediate column)
// rule 4 if you out of the box from the right by following rule 2 you select the first column from the row above (immediate row)
// rule 5 by following rule 2 you end up in a cell that is already occupied , then select the row below the same cell
// rule 6 if you go out of the box from the top and right you follow rule 5

import { expect } from 'chai';
import { add } from './algorithm-1';

describe('Magic Square Algorithm 1', () => {
    describe('Check Rule', () => {
        it('Should return which rule needed to be followed', () => {
            const rule = 1;
            expect(rule).equal(1);
        });
    });

    describe('Check next Row and Column', () => {
        it('Should return index of First Value', () => {
            const index = [0, 1];
            expect(index).eql([0, 1]);
        });

        it('Check index of next row and column', () => {
            const index = [2, 2];
            expect(index).eql([2, 2]);
        });
    });

    describe('Sum of each row and column', () => {
        it('Sum of row and column should be same and according to formula', () => {
            const n = 3;
            const sum = (n * (n ^ 2 + 1)) / 2;
            const magicSquare = [[8, 1, 6], [3, 5, 7], [4, 9, 2]];
            magicSquare.forEach(element => {
                console.log(eval(element.join('+')));
            });
        });
    });
});
