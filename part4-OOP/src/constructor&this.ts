/*
 * 建構函式 constructor 和 this 關鍵字
 *
 */

class Dog {
  // 一般來說我們會希望每個新建立的 Dog 實體的 name 跟 age 都不相同（否則每條狗都會叫來福），所以不應直接賦值
  // name: string = "lucky";
  // age: number = 3;

  // 為了達到這個目的，就輪到建構函式上場了，此函式會在「物件創建時」被調用
  // 所以也可以這麼理解：new 一個 Dog 就等於調用這個 constructor
  constructor() {
    console.log("a new dog");
    console.log(this);
  }

  bark() {
    console.log("woof");
  }
}

const dog1 = new Dog();
