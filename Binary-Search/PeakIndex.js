// 852. Peak Index in a Mountain Array
// https://leetcode.com/problems/peak-index-in-a-mountain-array/

// Let's call an array arr a mountain if the following properties hold:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... arr[i-1] < arr[i]
// arr[i] > arr[i+1] > ... > arr[arr.length - 1]
// Given an integer array arr that is guaranteed to be a mountain, 
// return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

 

// Example 1:

// Input: arr = [0,1,0]
// Output: 1
// Example 2:

// Input: arr = [0,2,1,0]
// Output: 1
// Example 3:

// Input: arr = [0,10,5,2]
// Output: 1
// Example 4:

// Input: arr = [3,4,5,1]
// Output: 2
// Example 5:

// Input: arr = [24,69,100,99,79,78,67,36,26,19]
// Output: 2
 

// Constraints:

// 3 <= arr.length <= 104
// 0 <= arr[i] <= 106
// arr is guaranteed to be a mountain array.

/*
  @param {number[]} arr
  @return {number}
*/

var peakIndexInMountainArray = function(arr) {
    let low = 0
    let high = arr.length - 1

    while (low <= high) {
        let mid = Math.floor((high + low) / 2)
        let pointer = arr[mid]
        let backP = arr[mid - 1]
        let frontP = arr[mid + 1]
        if (pointer > backP && pointer > frontP) {
            return mid
        } else if (pointer < backP) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
};

let input1 = [24, 69, 100, 99, 79, 78, 67, 36, 26, 19];

console.log(peakIndexInMountainArray(input1))