function birthdayCakeCandles(candles) {
    if (!(candles instanceof Array)) return;

    const map = {}

    candles.forEach((value) => {
        if (!map[value]) {
            map[value] = 1
        } else {
            map[value] += 1
        }
    });

    const values = Object.values(map)
    const largest = Math.max(...values)

    return largest
}


birthdayCakeCandles([1,2,4,4,5,3, 4])