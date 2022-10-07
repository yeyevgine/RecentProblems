//implement a function that calculates the sum of an input array recursively 
function solution(arr) {
    let sum = 0;
    if (!Array.isArray(arr)) {
        return "Invalid argument"
    }
    if (arr.length === 0) {
        return 0;
    }
    if (arr.length === 1) {
        return arr[0];
    }
    return sum += arr[0] + solution(arr.slice(1));
}
