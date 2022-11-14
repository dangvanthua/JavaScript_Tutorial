export function statisticsWords(str) {
    if (str === '') return {};

    const statistics = {};
    str.split('').filter(x => x !== '').forEach(words => {
        if (statistics[words]) {
            statistics[words] += 1;
        } else {
            statistics[words] = 1;
        }
    });

    return statistics;
}