// 建構函式 constructor 和 this 關鍵字

class Dog {
  // 一般來說我們會希望每個新建立的 Dog 實體的屬性值都不相同（否則就像每條狗都長一樣），所以直接賦值不是好做法
  // name: string = "lucky";
  // age: number = 3;

  // 先宣告，之後在 constructor 中賦值
  name: string;
  age: number;

  // 為了達到這個目的，就輪到建構函式（constructor）上場了
  // 此函式會在「物件創建時」被調用，所以也可以這麼理解：new 一個 Dog 就等於調用這個 constructor
  // 使用 new 可以創建一個實體，並且 constructor 內的 this 會指向這個實體
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  bark() {
    console.log(this); // 看這個結果就能觀察到 this 綁定的對象
    console.log("woof");
  }

  static sit() {
    console.log(this); // 靜態方法屬於類別，所以這個 this 會指向 Dog
    console.log("sit down");
  }
}

const dog1 = new Dog("lucky", 3);
const dog2 = new Dog("happy", 5);

dog1.bark();
dog2.bark();
Dog.sit();
