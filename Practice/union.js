"use strict";
//create a cobination of diffrent diffrent data types
Object.defineProperty(exports, "__esModule", { value: true });
var password = 12345;
//able to reasign this valuen into the string because of of union
password = "ABCD12344556";
console.log(password);
var mahesh = { username: "mahi", id: 123 };
mahesh = { adminname: "mahi", id: 321 };
console.log(mahesh);
//with function
function getid(id) {
    if (typeof id == "string") {
        id.toUpperCase();
    }
    if (typeof id == "number") {
        return id + 2;
    }
    return id;
}
console.log(getid(3));
console.log(getid("djf"));
//Arrays
var arr = [2, 3, 4, 5, 5];
var names = ["mahi", "rohan", "kalpesh"];
//union the multiple datatypes
var multi = ["mahesh", 5, true, "karan", false, false, 1000];
console.log(arr, names);
console.log(multi);
