import { odd, even } from './var.js';
// import { odd, even } from './var.js';
import checkNumber from './func.js';
// import { checkOddOrEven } from './func.js';

function checkStringOddOrEven(str) {
    if (str.length % 2) { // 홀수면
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));