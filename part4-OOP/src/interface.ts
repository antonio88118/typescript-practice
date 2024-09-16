// 介面 interface
// TypeScript 擴充語法

(function () {
  // 在前面的章節，我們提到可以自訂型別別名，讓聯合型別使用起來更便利，還能限制變數的「結構」
  // 下面創造了一個 object 跟 array 的聯合型別
  type myType =
    | {
        name: string | number;
        age: number;
      }
    | number[];
  const obj_type: myType = [1, 2, 3];

  // ----------------------------------------------------------------------------
  // 若只是想限制「物件」的結構，可以使用「介面」
  // 1. 介面是用來「描述物件的輪廓」，可以定義物件的結構
  // 2. 宣告方式和 class 相同（建議可以在開頭加大寫 I，避免和類別搞混）
  interface IMyInterface {
    name: string;
    age?: number; // 複習：? 表示可選屬性
  }

  // 3. 和型別別名不同，介面「可以重複宣告」，並且重複宣告的介面會在最後整合在一起
  // 4. 介面和抽象類別的差別，在於「介面無法定義屬性或方法」
  interface IMyInterface {
    gender: "male" | "female"; // 這個寫法是「聯合型別」，沒有賦值（等號 =），小心不要和定義屬性搞混
    say(): void; // 介面中的方法都是抽象方法 abstract method
  }

  // ----------------------------------------------------------------------------
  // 介面功能-1 類似型別別名 type，描述物件的結構
  const obj_interface: IMyInterface = {
    name: "andy",
    gender: "male",
    say() {
      console.log("hi");
    },
  };

  // 介面功能-2 類別實作介面
  // 繼承類別使用 extends，同樣的概念在介面和類別之間叫做實作（implements）
  // 該類別必須滿足（實作）所有介面的屬性和方法
  class MyClass implements IMyInterface {
    name: string;
    // age?: number; // 因為是可選，不一定要實作 age
    gender: "male" | "female";
    constructor(name: string, gender: "male" | "female") {
      this.name = name;
      this.gender = gender;
    }
    say(): void {
        console.log('hi');
    }
  }

  // ----------------------------------------------------------------------------
  // 整理：介面、類別和物件之間的關係就像——
  // 介面-車子：有「引擎」，可以「快速移動」
  //   類別-小客車：「實作」介面，決定「引擎的類型」，以及「移動的方式、上限」等
  //     物件-XX型號小客車：「繼承」類別，加上型號獨有的配備、功能
})();
