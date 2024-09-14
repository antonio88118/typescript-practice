"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mode_1 = require("./mode");
let a = 1;
// 引用module hi卻未使用的話，會發現編譯器會自動忽略import
// console.log("hello");
console.log(mode_1.hi);
