
function binary_search(array, target) {
    /* Return nothing when the array is not an array or the number is NaN */
    if (!(array instanceof Array)) return;

    let left = 0
    let right = array.length - 1

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (target == array[middle]) {
            return `The Number ${target} is on Index ${middle}`
        } else if (target < array[middle]) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }

    return -1; // Return -1 if target is not found
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

//Array[], Target
console.log(binary_search(arr, 12))