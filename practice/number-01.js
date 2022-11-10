export function isIncreasing(n) {
    if (n < 10) return false;

    let remaining = n;
    let prevDigit = 10;

    while (remaining > 0) {
        // Divide modulo remaining 10 to take element in last position
        const lastDigit = remaining % 10;
        // If lastDigit >= prevDigit it is not an increasing number;  
        if (lastDigit >= prevDigit) return false;
        // update elements
        prevDigit = lastDigit;
        // Remove the last element
        remaining = Math.trunc(n / 10);

        return true;
    }
}