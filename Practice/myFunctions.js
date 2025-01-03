"use strict";
//typeScript Functions Practice
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num1, num2) {
    return num1 + num2;
}
console.log(addTwo(2, 2));
//function for conver all letters in upperCase
function upperCase(letter) {
    return letter.toUpperCase();
}
console.log(upperCase("mahesh"));
//function for user signup
function userSignUp(name, email, password, isPaid) {
    console.log(name, email, password, isPaid);
}
userSignUp("mahesh", "mahi4@gmail.com", "mahi345", true);
//using arrow function
var login = function (usreName, password, feesPAID) {
    if (feesPAID === void 0) { feesPAID = false; }
    console.log(usreName, password, feesPAID);
};
login("maheshp", "mahi123");
//function with specify return type
function num(num) {
    return num;
}
console.log(num(100));
//arrow function
var nm = function (name) {
    return name;
};
console.log(nm("mahesh"));
var data = ["mahesh", "sanket", "suraj", "pravin"];
var result = data.map(function (ele) {
    return ele;
});
console.log(result);
//case if you does't want to retrun any thing
function consoleError(errorMsg) {
    console.log(errorMsg);
}
consoleError("Server side error");
