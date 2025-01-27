// 1. 型別別名 type
// 2. 補充：& 的用法

// ------------------------------ 1. 型別別名 type ------------------------------
// type 常用於「聯合型別」，因為聯合型別可能寫得很長，可以用 type 宣告建立一個新型別，達到精簡的效果
// let i: 1 | 2 | 3 | 4;
// let j: 1 | 2 | 3 | 4;
type myType = 1 | 2 | 3 | 4;
// i 跟 j 可以是 myType 中的任一值
let i : myType = 1;
let j: myType;

// ------------------------------ 2. 補充：& 的用法 ------------------------------
// 以下等同於 let i: {name: string, age: number};
let k: {name: string} & {age: number};
k = {name: "andy", age: 20};

export {}