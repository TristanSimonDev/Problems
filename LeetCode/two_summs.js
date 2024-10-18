/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const nums = [1, 3, 2];
const target = 3;

var twoSum = function(nums, target) {
    let Hashmap = {};
    for (let i = 0; i < nums.length; i++) {

        let complement = target - nums[i];
        
        


        if (Hashmap[complement] != undefined) {
            return [Hashmap[complement], i];
        }
        
        Hashmap[nums[i]] = i;
        
        /*
        2 -> 0
        0 -> 1
        1 -> 2
        */
    }
};

console.log(twoSum([1, 3, 2], 3)); // Ausgabe: [0, 2]
