import { add, sub, swap } from './func'

//let a = 12
// let b = 6
let {a, b} = swap(6, 12)
console.log(`a = ${a}, b = ${b}`)

let addRet = add(a, b)
let subRet = sub(a, b)

console.log(`${a} + ${b} = ${addRet}`)
console.log(`${a} - ${b} = ${subRet}`)

let addAsync = async (seed: number) => {
    return seed + 1;
}

(async () => {
    let ret = await addAsync(1);
    console.log(`async ret value = ${ret}`)
})()
// make test2
