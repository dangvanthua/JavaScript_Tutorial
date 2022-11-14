import { statisticsWords } from "./count_string";

describe('statisticsWords(str)', () => {
    it('should return empty object in case str is empty', () => {
        expect(statisticsWords('')).toBe({});
    });

    it('should return correct statistics when str doesn\'t have redundant spaces', () => {
        expect(statisticsWords('developer frontend is very hard and hard')).toEqual({
            developer: 1,
            frontend: 1,
            is: 1,
            very: 1,
            hard: 2,
            and: 1,
        });
    });

    it('should return correct statistics when str have redundant space', () => {
        expect(statisticsWords(' developer  frontend  is  very  hard  and  hard ')).toEqual({
            developer: 1,
            frontend: 1,
            is: 1,
            very: 1,
            hard: 2,
            and: 1,
        });
    });
});