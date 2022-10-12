
function insertionSort(arr) {
    let currentVal, j;
    for (let i = 1; i < arr.length; i++) {
        currentVal = arr[i];
        j = i - 1;

        while ((j >= 0) && (arr[j] > currentVal)) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}
