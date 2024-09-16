"use strict";
// 介面 interface
// TypeScript 擴充語法
(function () {
    const obj_type = [1, 2, 3];
    // ----------------------------------------------------------------------------
    // 介面功能-1 類似型別別名 type，描述物件的結構
    const obj_interface = {
        name: "andy",
        gender: "male",
        say() {
            console.log("hi");
        },
    };
    // 介面功能-2 類別實作介面
    // 繼承類別使用 extends，同樣的概念在介面和類別之間叫做實作（implements）
    // 該類別必須滿足（實作）所有介面的屬性和方法
    class MyClass {
        constructor(name, gender) {
            this.name = name;
            this.gender = gender;
        }
        say() {
            console.log('hi');
        }
    }
    // ----------------------------------------------------------------------------
    // 整理：介面、類別和物件之間的關係就像——
    // 介面-車子：有「引擎」，可以「快速移動」
    //   類別-小客車：「實作」介面，決定「引擎的類型」，以及「移動的方式、上限」等
    //     物件-XX型號小客車：「繼承」類別，加上型號獨有的配備、功能
})();
