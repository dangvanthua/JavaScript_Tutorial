import { isIncreasing } from "./number-01";
describe('isIncreasing(n)', () => {
    test('should return false when n < 10', () => {
        //  expect(9).toBe(false);

        Array.from({ length: 10 }, (x, idx) => idx).forEach((x) => {
            expect(isIncreasing(x)).toBe(false);
        });
    });

    test('should return false when n is not an increasing number', () => {
        [11, 232, 4444, 6652, 513, 7777777, 1212121212, 263].forEach((x) => {
            expect(isIncreasing(x)).toBe(false);
        })
    });

    test('should return true when n is an increasing number', () => {
        [12, 23, 34, 123, 234, 356, 6789, 1234, 56789].forEach((x) => {
            expect(isIncreasing(x)).toBe(true);
        });
    });
});