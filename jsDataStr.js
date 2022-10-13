//Matrix
function Matrix(rows, columns) {
    let jaggedarray = new Array(rows);
    for(let i = 0; i < columns; ++i) {
        jaggedarray[i] = new Array(rows);
    }
    return jaggedarray;
}

//Spiral Print
function spiralPrint(matrix) {
    let topRow = 0;
    let leftCol = 0;
    let bottomRow = matrix.length - 1;
    let rightCol = matrix[0].length - 1;

    while (topRow < bottomRow && leftCol < rightCol) {
        for (let col = 0; col <= rightCol; ++col) {
            console.log(matrix[topRow][col]);
        }
        topRow++;
        for (let row = topRow; row <= bottomRow; ++row) {
            console.log(matrix[row][rightCol]);
        }
        rightCol--;
        if (topRow <= bottomRow) {
            for (let col = rightCol; col > 0; --col) {
                console.log(matrix[bottomRow][col]);
            }
            bottomRow--;
        }
        if (leftCol <= rightCol) {
            for (let row = bottomRow; row > topRow; --row) {
                console.log(matrix[row][leftCol]);
            }
            leftCol++;
        }
    }
} 
