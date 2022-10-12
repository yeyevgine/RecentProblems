//Iteratively calculate the sum of the first n powers of 2
function sumPowersOf2ByIterative(n) {
    let sum = 0;
    for(let i = 1; i <= n; ++i) {
        sum += Math.pow(2,i) 
    }
    return sum;
}

console.log(sumPowersOf2ByIterative(4))

//recursive form of sumPowersOf2ByIterative(n)
function sumPowersOf2ByRecursion(n) {
    if(n === 1) {
        return 2;
    }
    else {
        return Math.pow(2,n) + sumPowersOf2ByRecursion(n-1)
    }
}
