// 1. 型別宣告
// 2. 聯合型別 Union Types
// 3. 任意型別 any
// 4. 未知型別 unknown
// 5. void 與 never

// ------------------------------ 1. 型別宣告 ------------------------------
// ts 中，透過「: 型別」宣告指定變數型別，並且往後不能變更
let num1: number;
num1 = 1;

// 此設計真正實用的情境在 function 的參數和返回值
function sum(a: number, b: number): number {
  // 已經指定回傳值是 number，會報錯
  // return (a + b).toString()
  return a + b;
}
sum(1, 2);


// ------------------------------ 2. 聯合型別 Union Types ------------------------------
// 可以使用邏輯運算子「| (or)」指定複數型別給變數
let myFavoriteNumber: string | number;
myFavoriteNumber = "seven";
myFavoriteNumber = 7;

// 也可以用「字面量 (Literal)」直接限定變數值的範圍
let gender: "male" | "female";
// 1 不是 male or female，會報錯
// gender = 1;
gender = "male";

let random: 1 | 2
random = 1;


// ------------------------------ 3. 任意型別 any ------------------------------
// 關閉對該變數的型別檢測，平時盡量不用，非不得已也應該用unknown
let anyValue: any; // 直接 let anyValue; 也有同樣的效果，是為隱性 any 型別宣告
anyValue = 1;
anyValue = "1";
anyValue = true;

let str: string;
// 把 any 型別賦值給另一變數，會導致該變數的型別檢查也被關閉
// str = anyValue;


// ------------------------------ 4. 未知型別 unknown ------------------------------
// unknown 的基本性質和 any 相同，但「不能賦值給其他型別的變數」，可說是一種「安全」的 any
let unknownValue: unknown;
unknownValue = 1;
unknownValue = "1";
// unknownValue = true;

// error: 類型 'unknown' 不可指派給類型 'string'
// str = unknownValue;

// 若要把 unknown 型別的變數賦值給另一變數，可以先進行型別檢查，若兩者型別相同，則允許賦值
if (typeof unknownValue === "string") {
  str = unknownValue;
}

// 斷言：告訴解析器變數 unknownValue 的實際型別，效果跟上方程式碼相同，但更簡短
// 有以下兩種寫法，效果相同
str = unknownValue as string;
str = <string>unknownValue;


// ------------------------------ 5. void 與 never ------------------------------
// 若沒有返回值，不寫也會自動判斷 return void
function fn1(): void {
  console.log("hello");
}
// 與 void 相似的是 never，表示「永遠」不會有返回值
function fn2(): never {
  throw new Error("error");
}
fn1()

export {};
