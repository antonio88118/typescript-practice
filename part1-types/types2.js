"use strict";
// 1. object
// 2. function
// 3. array
// 4. 元組 tuple：ts 新增型別，即長度、元素型別固定的 array
// 5. 列舉 enum：ts 新增型別
Object.defineProperty(exports, "__esModule", { value: true });
// ------------------------------ 1. 指定 object 結構、必須包含的屬性與其型別 ------------------------------
var object1;
// 賦值時，指定的屬性缺一不可
object1 = { name: "andy" };
// object1 = {}; // error
// 可選屬性「?」：當某個屬性不一定總是存在時可以使用
var object2;
object2 = { name: "andy" };
object2 = { name: "andy", age: 11 };
// 表示任意屬性：[propName: string]: any;
// [propName: string] 表示任意屬性名，propName 可以自由命名，string 則是因為物件的屬性名都是字串
// any 表示屬性值為任意值
// 以下寫法，name 後可任意增加屬性
var object3;
// 當然也可以同時指定結構跟賦值
var object4 = { name: "julia", age: 22 };
// ------------------------------ 2. 指定 function 結構，以及參數與返回值的型別 ------------------------------
var fn1;
fn1 = function (a, b) {
    return a + b;
};
// ------------------------------ 3. 指定 array 元素的型別 ------------------------------
// 以下兩者寫法都成立
var arr1;
arr1 = [1, 2, 3];
var arr2;
arr2 = ["1", "2", "3"];
// ------------------------------ 4. 元組 tuple：相對於元素型別相同的 array，用於「元素型別不同」的情況 ------------------------------
var tup;
tup = [1, "2"];
// 使用 push 新增元素時，該元素會被限制為宣告時指定之型別的聯合型別，所以下方寫法會報錯
// tup.push(true)
// tuple 可應用於一個 function 需要返回多個不同型別的值時
function getUserInfo() {
    return ["Alice", 25];
}
var _a = getUserInfo(), userName = _a[0], userAge = _a[1];
console.log(userName); // Alice
console.log(userAge); // 25
var row = [1, "Product A", true];
// ------------------------------ 5. 列舉 enum：用於取值被限定在一定範圍內的情況，比如一週只能有七天，顏色限定為紅綠藍等 ------------------------------
// 列舉成員會被從 0 開始遞增賦值
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
// 同時也會對列舉值到列舉名進行反向對映
// 補充：為什麼是字串？因為物件屬性名是字串
console.log(Gender["male"] === 0); // true
console.log(Gender[0] === "male"); // true
var i = { name: "alan", gender: Gender.male };
console.log(i.gender === Gender.male);
