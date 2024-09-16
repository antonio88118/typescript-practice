// 繼承 inheritance
// 1.「繼承」是 OOP 的重要概念，可以減少重複的程式碼，增加可複用性，並建立類別間的階層關係
// 2. 繼承類似「遺傳」，我們（子類別）會從父母（父類別）繼承他們的特徵和能力
//    但除此之外，我們也擁有別於父母，屬於自己的特徵和能力

// 因為在其他檔案也有建立 Dog 類別，用立即執行函式包起來限制作用域，編譯器才不會報錯
(function () {
  // 設計 Dog 和 Cat 類別時，發現它們都有同有的屬性（name 跟 age）與方法（say）
  // 把這些共同的部分提取出來，建立父類別 Animal，再讓 Dog 和 Cat 繼承
  class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    say() {
      console.log("say");
    }
  }

  // 使用 extends 關鍵字，讓 Dog 類別繼承 Animal 類別
  class Dog extends Animal {
    // 新增子類別獨有的方法
    run() {
      console.log(`${this.name} is running`);
    }

    // 可以覆蓋父類別的方法，該行為稱作「重寫（override）」
    say() { 
      console.log("woof");
    }
  }

  class Cat extends Animal {
    say() {
      console.log("meow");
    }
  }

  const dog = new Dog("lucky", 3);
  const cat = new Cat("Mimi", 6);
  dog.run();
  cat.say();
})();

// 設計類別時，應盡量符合「開放封閉原則（Open-Closed Principle, OCP）」
// 意義：對擴充開放（增加可複用性），對修改封閉（避免繼承的子類別受影響）
// 實作：需要新增功能時，不直接修改父類別，而是建立新的子類別繼承再擴充
