// key word Read only
// literal question mark (?)

type User = {
  readonly _id: string; //with using readonly not any body is able to change that
  name: string;
  email: string;
  isActive: boolean;
  creditcardDetails?: number; //? literal question mark used to mark as a optionl
};



let myUser: User = {
  _id: "123",
  name: "mahi",
  email: "mahi@gmail.com",
  isActive: false,
};

myUser.email = "mahesh@gmail.com";
// myUser._id="1234";  we are not able to change because of id is marked as readonly;
myUser.creditcardDetails=1234566;

let myUser2 : User={
  _id:'321',
  name:"rohit",
  email:"rohit44@gmail.com",
  isActive:true
}
myUser2.creditcardDetails=7654321;

console.log(myUser)
console.log(myUser2);
export {};
