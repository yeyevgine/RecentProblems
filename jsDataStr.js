function Matrix(rows, columns) {
    let jaggedarray = new Array(rows);
    for(let i = 0; i < columns; ++i) {
        jaggedarray[i] = new Array(rows);
    }
    return jaggedarray;
}
