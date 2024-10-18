function miniMaxSum(arr) {
    if (!(arr instanceof Array)) return;

    //sort the array first
    arr.sort()

    let totalSum = arr.reduce((acc, value) => acc + value, 0); //start with 0 the result is 15
    let minValue = Math.min(...arr); //smalest nummber is 1
    let maxValue = Math.max(...arr); //biggest number is 5

    let Min = totalSum - maxValue; // 15 - 1 = 14
    let Max = totalSum - minValue; // 15 - 5 = 10

    console.log(Min, Max);
}

miniMaxSum([1, 2, 3, 4, 5]); // 10 = Min, 14 = Max
