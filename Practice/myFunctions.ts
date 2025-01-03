//typeScript Functions Practice

function addTwo(num1: number, num2: number) {
  return num1 + num2;
}

console.log(addTwo(2, 2));

//function for conver all letters in upperCase
function upperCase(letter: string) {
  return letter.toUpperCase();
}

console.log(upperCase("mahesh"));

//function for user signup
function userSignUp(
  name: string,
  email: string,
  password: string,
  isPaid: boolean
) {
  console.log(name, email, password, isPaid);
}
userSignUp("mahesh", "mahi4@gmail.com", "mahi345", true);

//using arrow function
let login = (usreName: string, password: string, feesPAID: Boolean = false) => {
  console.log(usreName, password, feesPAID);
};

login("maheshp", "mahi123");

//function with specify return type
function num(num: number): number {
  return num;
}
console.log(num(100));

//arrow function
let nm = (name: string): string => {
  return name;
};
console.log(nm("mahesh"));

let data = ["mahesh", "sanket", "suraj", "pravin"];
const result = data.map((ele): string => {
  return ele;
});
console.log(result);

//case if you does't want to retrun any thing
function consoleError(errorMsg:string) : void {
    console.log(errorMsg);
}
consoleError("Server side error");

//in case of handling error
// function handleError(errorMsg:string):never {
//     throw new Error(errorMsg);
// }
// console.log(handleError("throwing error"));

export {};
