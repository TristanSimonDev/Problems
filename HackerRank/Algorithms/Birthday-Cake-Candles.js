function birthdayCakeCandles(candles) {
    if (!(candles instanceof Array)) return;

    const map = {}

    candles.forEach((value) => {
        map[value] = (map[value] || 0) + 1;
    });

    const values = Object.values(map)
    const largest = Math.max(...values)

    console.log(largest)
}


birthdayCakeCandles([1, 2, 4, 4, 5, 3, 4])
