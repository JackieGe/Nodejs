"use strict";
function add(a, b) {
    return a + b;
}
exports.add = add;
function swap(a, b) {
    return { b, a };
}
exports.swap = swap;
const sub = (a, b) => {
    return a - b;
};
exports.sub = sub;
