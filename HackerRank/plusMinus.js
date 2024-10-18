function plusMinus(arr) {
    let n = arr.length
    
    let pos = 0
    let neg = 0
    let zero = 0
    
    for (let i = 0; i < n; i++) {
        if (arr[i] < 0) {
            neg += 1
        } else {arr[i] == 0 ? zero += 1 : pos += 1}
    }
    
    let posRatio = (pos / n).toFixed(6);
    let negRatio = (neg / n).toFixed(6);
    let zeroRatio = (zero / n).toFixed(6);

    return console.log(posRatio + "\n" + negRatio + "\n" + zeroRatio)
}