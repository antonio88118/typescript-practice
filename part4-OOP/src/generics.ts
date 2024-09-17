// 泛型 generics
// 1. 泛型代表一種不確定的型別，習慣寫作 <T>（T 可以任意取名），定義函式或類別遇到無法確定的型別可以使用
// 2. 這樣的情況也可以用任意型別 any 處理，但 any 會關閉型別檢查，失去使用 ts 的意義
// 3. 泛型實際的型別，會在每次函式執行時確定

// ------------------------------------ 基本使用 ------------------------------------
// 在函式名稱後面新增一個泛型 <T>
// 透過泛型，即使我們不確定函式接收和回傳的型別，至少能知道它們間的「型別一致性」
// 已函式 fn 來說，我們可以知道傳入參數 a 和回傳是同一個型別
function fn<T>(a: T): T {
  return a;
}

// ts 編譯時會自動進行型別推斷，所以 10 傳入後，T 會自動變成 number
let result = fn(10);
// 當程式太複雜，型別推斷可能會失準，所以建議在呼叫函式的時候指定泛型的型別
let result2 = fn<string>("10");

// 可以新增多個泛型
function fn2<T, K>(a: T, b: K): T {
  console.log(b);
  return a;
}

let result3 = fn2<number, string>(1, "hello");

// ----------------------------- 泛型引數的預設型別 -----------------------------
// 可以指定泛型引數的預設型別，當程式中沒有指定型別，型別檢查也無法判斷時，該預設就會生效
function fn3<T = string>(a: T): T {
  console.log(a);
  return a;
}

fn3(1); // 預設並非強制指定型別，所以不會報錯

// ---------------------------------- 泛型約束 ----------------------------------
// 雖說泛型可以用來指代不確定的型別，但型別範圍太廣也不好用
// 泛型可以透過繼承介面來限制型別的範圍
// 繼承 / 實作 IGenerics 的類別或物件必須有 number 型別的 length 屬性
interface IGenerics {
  length: number;
}

// 泛型 T 繼承了介面 IGenerics，傳入參數 a 必須符合該介面的「形狀」，也就是擁有 length 屬性
function fn4<T extends IGenerics>(a: T) {
  return a.length;
}

// 有 length 屬性
fn4("hello");
fn4({ length: 1, width: 3 });

// 沒有 length 屬性會報錯
// fn4(2);
// fn4({ say: "hello" });

// ---------------------------------- 泛型介面 ----------------------------------
// 泛型介面是在介面中使用泛型
// 剛剛是用介面約束泛型的型別，小心不要混淆
interface IGenerics2<T> {
  (length: number, value: T): Array<T>; // 定義函式的參數和回傳型別
}

let arrayFun: IGenerics2<string>;
// 因為上一行已經指定型別，以下的 T 實際上會代入 string
// 把參數 value 的型別改成 number 會發現報錯
arrayFun = function <T>(length: number, value: T): Array<T> {
  let result: T[] = [];

  for (let i = 0; i < length; i++) {
    result[i] = value;
  }

  return result;
};

arrayFun(3, "x"); // ['x', 'x', 'x']

// ---------------------------------- 泛型類別 ----------------------------------
class Generics<T> {
  name: T;
  fun: (a: T) => T;
  constructor(name: T) {
    this.name = name;
    this.fun = function (a: T): T {
      console.log(a);
      return a;
    };
  }
}

let obj = new Generics<string>("andy");
// 建立實例已經確定 obj 中的泛型 T 是 string，所以不需要，也不能再指定型別
// obj.fun<string>("hi"); // 會報錯
obj.fun("hi");
