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
