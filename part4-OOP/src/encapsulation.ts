// 封裝 encapsulation
// 1. 「封裝」是 OOP 的一個概念，指的是把資料和行為包裝在物件中，隱藏內部細節只暴露必要的部分，
//     並限制外部操作的手段，藉此保護物件的內部狀態
// 2. ts 的屬性值有 5 種前綴修飾詞，之前已經介紹過 static 跟 readonly，本節要接著介紹剩下 3 個——
//    public、private 和 protected，它們能決定外部存取屬性的權限，協助實作封裝

(function () {
  // ------------------------------------ 公有屬性 public  ------------------------------------
  // 我們之前的做法其實就是使用預設的 public 屬性，屬性可以在任意處被訪問，但這樣其實不妥
  class Person {
    public name: string;
    public age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  const person = new Person("andy", 18);
  // 現在屬性是透過 person 物件設置，所以可以被任意修改，但年齡怎麼能是負值？
  // 這就凸顯出這種做法有多不安全，而我們又為什麼需要 private 跟 protected
  person.age = -33;

  // ------------------------------------ 私有屬性 private ------------------------------------
  // 私有屬性只能在「類別內部」被訪問，習慣上名稱會在開頭加底線 _，才不會跟之後的方法命名衝突
  class Dog {
    private _name: string;
    private _age: number;
    constructor(name: string, age: number) {
      this._name = name;
      this._age = age;
    }

    // private 屬性的外部存取
    // 1. 因為外部無法訪問私有屬性，所以需要在類別內創造讓外部訪問的函式當作接口
    // 2. setter 跟 getter 是屬性的存取器，分別代表賦值跟取值，取名上習慣用 set- 跟 get-
    // 3. 這樣看起來又讓外部有辦法訪問 private 屬性，好像失去 private 的意義，但至少我們能控制訪問的管道
    // 4. 當然也可以完全不提供 setter 跟 getter

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

    // --------------------------- TS 寫法 set & get ---------------------------
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
  // 雖然看起來是直接訪問屬性，其實是執行我們設定的 setter 跟 getter
  console.log(dog.age);
  dog.age = -5;
  console.log(dog.age); // age 還是 3，表示有經過 setter 的檢查

  // ------------------------------------ 保護屬性 protected ------------------------------------
  // 保護屬性只能在「類別內部」和「繼承該類別的子類別」被訪問
  class A {
    protected num: number;
    constructor(num: number) {
      this.num = num;
    }
  }

  class B extends A {
    test() {
      console.log(this.num);
    }

    // 因為子類別沒有新增屬性，這段可寫可不寫
    constructor(num: number) {
      super(num);
    }

    // 和私有屬性相同，保護屬性想在外部被訪問，需要透過 setter 和 getter
    // 不同之處在於沒有 set 和 get 的語法
    // setter
    setNum(newNum: number) {
      this.num = newNum;
    }
    // getter
    getNum() {
      return this.num;
    }
  }

  const b = new B(1);
  console.log(b.getNum());
  b.setNum(10);
  console.log(b.getNum());

  // ------------------------------------ 補充：簡化寫法 ------------------------------------
  // 一般寫法
  // class C {
  //   public name: string;
  //   private age: number;
  //   constructor(name: string, age: number) {
  //     this.name = name;
  //     this.age = age;
  //   }
  // }

  // 簡化寫法 可以在 constructor 內同時加上屬性的權限宣告，並省略 this 賦值
  class C {
    constructor(public name: string, private age: number) {}
  }

  const c = new C("c", 7);
  console.log(c);
})();
