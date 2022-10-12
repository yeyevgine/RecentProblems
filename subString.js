
function subStr(string, substr){
    if(string.length < substr.length){
        return -1;
    }
    let index = -1;
    for (let i = 0; i <= string.length ; ++i) {
        if(string[i] === substr[0]){
            index = i;
            for (let j = 1; j < substr.length; ++j) {
                if(string[i + j] !== substr[j]){
                    index = -1;
                    break;
                }
            }
            if(index !== -1){
                return index;
            }
        }
    }
    return index;
}
