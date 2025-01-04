//write a function which was returning object;

// function obj(): { name: string; age: number; isValid: boolean } {
//   return { name: "mahi", age: 23, isValid: true };
// }

const obj=(name:string,age:number,isValid:boolean) : {name:string,age:number,isValid:boolean} => {
      return {name,age,isValid};
}

console.log(obj("mahi",20,true));
export {};
