import { calculateEquation1 } from "./equation1";

describe('calculateEqquation1(a, b)', () => {
    test('should return undefined when a === 0 and b === 0', () => {
        expect(calculateEquation1(0, 0)).toBe(undefined);
    });

    test('should return 0 when a !== 0 and b === 0', () => {
        [1, 2, 3, 4, 5, 6, 15, 20, 100, 999, 9999].forEach((x) => {
            expect(calculateEquation1(x, 0)).toBe(0);
        });
    });

    test('should return undefined when a === 0 and b !== 0', () => {
        [1, 2, 3, 10, 15, 55, 99, 999, 9999].forEach((x) => {
            expect(calculateEquation1(0, x)).toBe(undefined);
        });
    });

    test('should return result when a !== 0 and b !== 0', () => {
        expect(calculateEquation(2, 3)).toBe(-1.5);
        expect(calculateEquation(2, -3)).toBe(1.5);
        expect(calculateEquation(6, 2)).toBe(-0.3333);
        expect(calculateEquation1(-6, 2)).toBe(0.3333);
    });
});