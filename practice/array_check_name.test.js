import { hasAlice } from "./array_check_name";

describe('hasAlice()', () => {
    test('should return false for empty array', () => {
        expect(hasAlice([])).toBe(false);
    });

    test('should return false when don\'t find Alice', () => {
        const nameList = [
            { id: 1, name: 'Bob', gender: 'male' },
            { id: 2, name: 'Stacy', gender: 'female' },
        ];
        expect(hasAlice(nameList)).toBe(false);
    });

    test('should return true for array has alice name', () => {
        const nameList = [
            { id: 1, name: 'Gaga', gender: 'female' },
            { id: 2, name: 'Johny', gender: 'male' },
            { id: 3, name: 'Alice', gender: 'female' },
        ]
        expect(hasAlice(nameList)).toBe(true);
    });
});