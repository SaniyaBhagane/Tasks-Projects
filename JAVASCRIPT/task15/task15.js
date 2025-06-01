// 1. given number is multiple of 3 or not e.g.10900
function isMultipleOf3(num) {
    if (num % 3 === 0) {
        return `${num} is a multiple of 3.`;
    } else {
        return `${num} is NOT a multiple of 3.`;
    }
}

console.log(isMultipleOf3(10900)); // 10900 is NOT a multiple of 3


//2. check particular sub-word exist in a string or not e.g. i am learning js: 'js'exists or not
function checkSubWord(str, subWord) {
    if (str.includes(subWord)) {
        return `'${subWord}' exists in the string.`;
    } else {
        return `'${subWord}' does NOT exist in the string.`;
    }
}
console.log(checkSubWord("I am learning js", "js"));  // 'js' exists in the string.
console.log(checkSubWord("I am learning js", "python"));  // 'python' does NOT exist in the string.

