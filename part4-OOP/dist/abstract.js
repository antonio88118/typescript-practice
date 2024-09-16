"use strict";
// 抽象類別 abstract class
// TypeScript 擴充語法
// 1. 若父類別只是一般的 class，當然也能用來創建實體，然而我們通常不會這麼做，因為父類別的功能是整合多個子類別中重複的部分，
//    所以直接用父類別創建的實體，不僅概念模糊，功能也貧弱
// 2. 抽象類別的存在就是為了避免創造出這樣的實體，其只能用於繼承
(function () {
    // 在 class 前加上 abstract 即是抽象類別
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        // 透過覆寫實作抽象方法的功能
        say() {
            console.log("woof");
        }
    }
    const dog = new Dog("lucky");
    dog.say();
})();
