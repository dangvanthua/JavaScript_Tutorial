import { findStudentById } from "./array_find";

describe('findStudentById(studentList, studentId)', () => {
    it('should return -1 if list is empty', () => {
        expect(findStudentById([], -1)).toBe(-1);
        expect(findStudentById([], 0)).toBe(-1);
        expect(findStudentById([], 2)).toBe(-1);
        expect(findStudentById([], 10)).toBe(-1);
        expect(findStudentById([], 5)).toBe(-1);

    });

    it('should return -1 if list doesn\'t hava target id', () => {
        const studentList = [
            { id: 1, name: 'Lan' },
            { id: 2, name: 'Nga' },
        ]
        expect(findStudentById(studentList, 0)).toBe(-1);
        expect(findStudentById(studentList, 3)).toBe(-1);
    });

    it('should return index if list have target id', () => {
        const studentList = [
            { id: 1, name: 'Lan' },
            { id: 2, name: 'Nga' },
            { id: 3, name: 'Thu' },
        ]
        expect(findStudentById(studentList, 1)).toBe(0);
        expect(findStudentById(studentList, 2)).toBe(1);
        expect(findStudentById(studentList, 3)).toBe(2);
    });
});