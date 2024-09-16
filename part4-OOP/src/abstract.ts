// 抽象類別 abstract class
// TypeScript 擴充語法
// 1. 若父類別只是一般的 class，當然也能用來創建實體，然而我們通常不會這麼做，因為父類別的功能是整合多個子類別中重複的部分，
//    所以直接用父類別創建的實體，不僅概念模糊，功能也貧弱
// 2. 抽象類別的存在就是為了避免創造出這樣的實體，其只能用於繼承

(function () {
  // 在 class 前加上 abstract 即是抽象類別
  abstract class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }

    // 抽象方法 abstract method
    // 1. abstract 也可以用來建立抽象方法，抽象方法只能存在抽象類別之中
    // 2. 何時會用到抽象方法？以這個例子來說，每種動物都有自己的叫聲，所以在這裡定義功能（叫聲）其實沒有意義，
    //    反正繼承之後也會換個叫聲
    // 3. 抽象方法用於定義、描述功能的「輪廓」，實際功能交由繼承的子類別實作
    abstract say(): void;
  }

  class Dog extends Animal {
    // 透過覆寫實作抽象方法的功能
    say(): void {
      console.log("woof");
    }
  }

  const dog = new Dog("lucky");
  dog.say();
})();
