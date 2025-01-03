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
    console.log(usreName,password,feesPAID);
};

login("maheshp","mahi123",);

export {};
