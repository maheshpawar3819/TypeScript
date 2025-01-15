//ways to initialize array in typescript

// Way 1 :
let superHeroes :string [] =[]
superHeroes.push("Spyderman","Ironman","Captain America");

let power:number []=[101,102,103];

//way 2 : 
let country : Array<string>=["America","Britan","Japan"];
let ctCode : Array<number>=[1,2,3];

console.log(superHeroes,power,country,ctCode);


type User ={
    name:string,
    isActive:boolean
}

let info : User []=[{name:"mahesh",isActive:false}];
console.log(info);

//two arrays
const nested:number [][]=[
    [1,2,3],
    [4,5,6]
]
console.log(nested);

export {};