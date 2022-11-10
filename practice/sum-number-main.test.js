import { calculateSum } from './calculateSum'

describe('s(n) = 1 + 2 +...+n', () => {
    test('Should return 0 when n <= 0', () => {
        expect(calculateSum(-1)).toBe(0);
        expect(calculateSum(0)).toBe(0);
    });

    test('Should return sum when n > 0', () => {
        expect(calculateSum(1)).toBe(1);
        expect(calculateSum(2)).toBe(3);
        expect(calculateSum(3)).toBe(6);
        expect(calculateSum(10)).toBe(55);
    });

});

import { calculateSumV2 } from './sum-number-main';

describe('1 + 2 + ... + n', () => {
    test('Should return 0 when n <= 0', () => {
        expect(calculateSum(-1)).toBe(0);
        expect(calculateSum(0)).toBe(0);
    });

    test('Should return sum when n > 0', () => {
        expect(calculateSum(1)).toBe(1);
        expect(calculateSum(2)).toBe(3);
        expect(calculateSum(3)).toBe(6);
        expect(calculateSum(10)).toBe(55);
    });
});