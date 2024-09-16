// 封裝 encapsulation
// ts 的屬性值有 5 種前綴，之前已經先介紹過 static 跟 readonly
// 本節的重點是介紹剩下 3 個，也就是 public、private 跟 protected

(function () {
  // ------------------------------- 之前的做法未保護屬性值 -------------------------------
  // 下面是我們之前透過 class 建立新實體的做法，但這種做法其實不妥
  class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  const person = new Person("andy", 18);

  // 現在屬性是透過物件（person）設置，所以可以被任意修改，如下
  person.age = -33;
  // 但年齡怎麼能是負值呢？這也就凸顯出這種做法有多不安全

  // -------------------------------- 使用 private 保護屬性值 --------------------------------
  class Dog {
    public name: string; // 公共屬性 public，預設值，屬性可以任意處被訪問
    private _age: number; // 私有屬性 private，只能在類別內部被訪問，習慣上會在開頭加底線_，才不會跟之後的方法命名衝突
    constructor(name: string, age: number) {
      this.name = name;
      this._age = age;
    }

    // 因為外部無法訪問私有屬性，所以需要在類別內創造讓外部訪問的函式當作接口
    // setter 跟 getter 是屬性的存取器，分別代表賦值跟取值，取名上習慣用 set- 跟 get-
    // 這樣看起來又讓外部有辦法訪問 private 屬性，好像失去 private 的意義，但至少「訪問的管道是由我們控制」，
    // 當然也可以完全不提供 setter 跟 getter
    // -------------------------------- 傳統寫法 --------------------------------
    // // setter
    // setAge(newAge: number) {
    //   if (newAge >= 0) {
    //     this.age = newAge;
    //   }
    // }
    // // getter
    // getAge() {
    //   return this.age;
    // }
    // -------------------------------------------------------------------------
    // -------------------------------- TS 寫法 ---------------------------------
    set age(newAge: number) {
      // 跟直接訪問改值不同，有了 setter 我們可以判斷合法值
      if (newAge >= 0) {
        this._age = newAge;
      }
    }
    get age() {
      console.log("執行 age getter");
      return this._age;
    }
    // -------------------------------------------------------------------------
  }

  const dog = new Dog("lucky", 3);
  // 雖然下面看起來是直接訪問屬性，其實是執行我們設定的 setter 跟 getter
  console.log(dog.age);
  dog.age = -5;
  console.log(dog.age); // age 還是 3，表示有經過 setter 的檢查

  // -------------------------------- protected --------------------------------
})();
