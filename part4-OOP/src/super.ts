// 父類別的別名叫「超類（super class）」

(function () {
  class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }

    say(): void {
      console.log("say");
    }
  }

  class Dog extends Animal {
    age: number;
    // 用法 1：調用父類別構造函式 super()
    // 如同在子類別寫同名方法覆寫父類別，新增 constructor 也一樣
    // 所以子類別新增屬性時，需要用 super() 調用父類別的構造函式，這也是 super 最常使用的場合
    constructor(name: string, age: number) {
      super(name);
      this.age = age;
    }

    say(): void {
      // 用法 2：調用父類別的方法 super.method()
      // 調用父類別的 say 方法，但比較少這樣用
      super.say();
    }
  }

  const dog = new Dog("lucky", 3);
  dog.say();
  console.log(dog);
})();
