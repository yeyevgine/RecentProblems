// Iteratively calculate the sum of the integer series from 1 to n. 
function sumSeriesByIterative(n) {
    let sum = 0;
    for (let i = 1; i <= n; ++i) {
        sum += i;
    }
    return sum;
}
//recursive form of sumSeriesByIterative
function sumSeriesByRecursive(n) {
    if(n === 1) {
        return 1;
    } else { 
        return n + sumSeriesByRecursive(n-1)
    }
}
console.log(sumSeriesByRecursive(5))
