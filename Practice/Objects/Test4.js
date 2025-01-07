"use strict";
// key word Read only
// literal question mark (?)
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    _id: "123",
    name: "mahi",
    email: "mahi@gmail.com",
    isActive: false,
};
myUser.email = "mahesh@gmail.com";
// myUser._id="1234";  we are not able to change because of id is marked as readonly;
myUser.creditcardDetails = 1234566;
console.log(myUser);
