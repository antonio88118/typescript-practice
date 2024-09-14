"use strict";
/*
 * 建構函式 constructor 和 this 關鍵字
 *
 */
class Dog {
    // 我們會期望每個 Dog 實體的 name 跟 age 都不相同，不應直接賦值
    // name: string = "lucky";
    // age: number = 3;
    // 為了達到這個目的，就輪到建構函式上場了，此函式會在「物件創建時」被調用
    constructor() {
        console.log("a new dog");
    }
    bark() {
        console.log("woof");
    }
}
const dog1 = new Dog();
