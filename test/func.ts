function add(a: number, b: number): number {
    return a + b;
}

function swap(a, b) {
    return { b, a };
}

const sub = (a: number, b: number): number => {
    return a - b
}
// make test
export { add, sub, swap }
