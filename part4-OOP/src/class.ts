/*
 * 類別 class
 * 類別定義了某個事物的抽象特點，而物件可以且只能繼承一個類別
 * OOP 的物件包含「屬性」和「方法」兩部分，而在類別中，這兩部分又可依訪問或調用的條件分為「靜態（static）」和「實體（instance）」兩類
 * 靜態類：在屬性名稱前加上 static 宣告，可透過類別直接訪問或調用，所以又稱「類別屬性／方法」
 * 實體類：必須先透過 new 創建類別的實體才能訪問或調用
 */

// 使用 class 關鍵字定義一個類別
class Person {
  // ---------------------------------------- 屬性 ----------------------------------------
  // 靜態屬性
  static isCreature: boolean = true;
  // 實體屬性
  name: string = "andy";
  age: number = 18;
  // readonly：宣告唯讀屬性，靜態跟實體屬性都適用（注意 static 在前面）
  static readonly race: string = "human";

  // ---------------------------------------- 方法 ----------------------------------------
  // 靜態方法
  static sayBye() {
    console.log("bye");
  }
  // 實體方法
  sayHello() {
    console.log("hello");
  }
}

// 透過 new 創建 Person 類別的實體，賦值給 person1
const person1 = new Person();

// 訪問靜態屬性
console.log(Person.isCreature);
// 訪問實體屬性
console.log(person1.name);

// 呼叫靜態方法
Person.sayBye();
// 呼叫實體方法
person1.sayHello();
