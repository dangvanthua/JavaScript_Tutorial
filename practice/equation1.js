export function calculateEquation1(a, b) {
    if (a === 0 && b === 0) {
        return undefined;
    }
    if (a !== 0 && b === 0) {
        return 0;
    }
    if (a === 0 && b !== 0) {
        return undefined;
    }
    return -b / a;
}