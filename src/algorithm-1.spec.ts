// GENERAL RULE: You always try to go diagonally up towards the right
// rule 1 start with top center
// rule 2 increment by 1 and place in the row above the current one and to the right
// rule 3 if you go out of the box from the top by following rule 2 you select the last row from that column (immediate column)
// rule 4 if you out of the box from the right by following rule 2 you select the first column from the row above (immediate row)
// rule 5 by following rule 2 you end up in a cell that is already occupied , then select the row below the same cell
// rule 6 if you go out of the box from the top and right you follow rule 5

import { expect, assert } from 'chai';
import { getIndexFirstValue, getRule } from './algorithm-1';

describe('Magic Square Algorithm 1', () => {
    describe('Check next Row and Column', () => {
        const magicSquare = [[null, null, null], [null, null, null], [null, null, null]];
        it('Return index of First Value when Magic Square is empty.', () => {
            const index = getIndexFirstValue(magicSquare);
            expect(JSON.stringify(index)).equal(JSON.stringify([0, 1]));
        });

        it('Check Row and Column Index for Second Value.', () => {
            const index = [2, 2];
            expect(index).eql([2, 2]);
        });

        it('Calculate next Index Number of next row', () => {
            const n = magicSquare.length;
            for (let index = 0; index < n; index++) {
                
            }
        });


        it('Calculate next Index Number of next column', () => {

        });
    });

    describe('Check Rule', () => {
        const magicSquare = [[null, null, null], [null, null, null], [null, null, null]];
        it('Get Rule of Magic Square when First Value is inserted.', () => {
            const index = getRule(magicSquare);
            expect(index).eql(2);
        });
    });

    describe('Validate Magic Square', () => {
        const magicSquare = [[8, 1, 6], [3, 5, 7], [4, 9, 2]];
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

function getRowIndex(magicSquare: number[][]) {
    let maxValue = null;
    magicSquare.forEach(arr => {
        arr.forEach(element => {
            if (element && element > maxValue) {

        })
    });
}