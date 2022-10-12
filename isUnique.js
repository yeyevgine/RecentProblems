function isUnique(str){
    let obj = {};
    for (let char in str) {
        if (obj.hasOwnProperty(str.codePointAt(char))) {
            return "String isn't unique";
        } else {
            obj[str.codePointAt(char)] = 1;
        }
    }
    return "String is unique"
}

//NOTE: This solution doesn't work for complex emojis yet: e.g. 👨‍👩‍👦‍👦
