//create a cobination of diffrent diffrent data types

let password: number | string = 12345;

//able to reasign this valuen into the string because of of union
password = "ABCD12344556";

console.log(password);

//useCase

type User = {
  username: string;
  id: number;
};

type Admin = {
  adminname: string;
  id: number;
};

let mahesh: User | Admin = { username: "mahi", id: 123 };

mahesh = { adminname: "mahi", id: 321 };

console.log(mahesh);

//with function

function getid(id: number | string) {
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

let arr : number [] =[2,3,4,5,5];
let names : string [] = ["mahi","rohan","kalpesh"];

//union the multiple datatypes
let multi : (number | string | boolean) [] =["mahesh",5,true,"karan",false,false,1000];

console.log(arr,names);
console.log(multi);

export {}
