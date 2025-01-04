"use strict";
//write a function which was returning object;
Object.defineProperty(exports, "__esModule", { value: true });
// function obj(): { name: string; age: number; isValid: boolean } {
//   return { name: "mahi", age: 23, isValid: true };
// }
var obj = function (name, age, isValid) {
    return { name: name, age: age, isValid: isValid };
};
console.log(obj("mahi", 20, true));
