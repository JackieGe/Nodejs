"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const func_1 = require("./func");
//let a = 12
// let b = 6
let { a, b } = func_1.swap(6, 12);
console.log(`a = ${a}, b = ${b}`);
let addRet = func_1.add(a, b);
let subRet = func_1.sub(a, b);
console.log(`${a} + ${b} = ${addRet}`);
console.log(`${a} - ${b} = ${subRet}`);
let addAsync = (seed) => __awaiter(this, void 0, void 0, function* () {
    return seed + 1;
});
(() => __awaiter(this, void 0, void 0, function* () {
    let ret = yield addAsync(1);
    console.log(`async ret value = ${ret}`);
}))();
