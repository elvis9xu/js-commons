
function trim(s) {
    return s ? s.trim() : s;
}

function toLowerCase(s) {
    return s ? s.toLowerCase() : s;
}

function equalsIgnoreCase(s1, s2) {
    if (!s1 || !s2) return s1 == s2;
    return s1.toLowerCase() == s2.toLowerCase();
}

function trimArray(stringArray) {
    if (!stringArray) return stringArray;
    for (let index = 0; index < stringArray.length; index++) {
        stringArray[index] = trim(stringArray[index]);
    }
    return stringArray;
}

function noEmptyArray(stringArray) {
    if (!stringArray) return stringArray;
    for (let index = 0; index < stringArray.length; index++) {
        if (!stringArray[index]) {
            stringArray.splice(index, 1);
            index --;
        }
    }
    return stringArray;
}

function trimAndNoEmptyArray(stringArray) {
    return noEmptyArray(trimArray(stringArray));
}

const api = {
    trim,
    equalsIgnoreCase,
    trimArray,
    noEmptyArray,
    trimAndNoEmptyArray,
}
module.exports = api;
module.exports.default = api;