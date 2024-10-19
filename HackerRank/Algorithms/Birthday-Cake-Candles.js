const { escape } = require("querystring");

function birthdayCakeCandles(candles) {
    if (!(candles instanceof Array)) return;

    const obj = {}

    candles.forEach((value) => {
        obj[value] = (obj[value] || 0) + 1;
    });

    const values = Object.values(obj)
    const largest = Math.max(...values)

    console.log(largest)
}



let arr = [1, 2, 4, 4, 5, 3, 4]

birthdayCakeCandles(arr)