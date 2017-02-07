"use strict";
const func_1 = require("./func");
//let a = 12
// let b = 6
let { a, b } = func_1.swap(6, 12);
console.log(`a = ${a}, b = ${b}`);
let addRet = func_1.add(a, b);
let subRet = func_1.sub(a, b);
console.log(`${a} + ${b} = ${addRet}`);
console.log(`${a} - ${b} = ${subRet}`);
let addAsync = async (seed) => {
    return seed + 1;
};
(async () => {
    let ret = await addAsync(1);
    console.log(`async ret value = ${ret}`);
})();
