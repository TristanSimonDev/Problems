function compareTriplets(a, b) {
    let Alice = 0
    let Bob = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] == b[i]) {
            continue
        } else {a[i] >= b[i] ? Alice += 1 : Bob += 1}       
    }
    return [Alice, Bob]
}
