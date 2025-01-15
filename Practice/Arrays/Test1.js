"use strict";
//ways to initialize array in typescript
Object.defineProperty(exports, "__esModule", { value: true });
// Way 1 :
var superHeroes = [];
superHeroes.push("Spyderman", "Ironman", "Captain America");
var power = [101, 102, 103];
//way 2 : 
var country = ["America", "Britan", "Japan"];
var ctCode = [1, 2, 3];
console.log(superHeroes, power, country, ctCode);
var info = [{ name: "mahesh", isActive: false }];
console.log(info);
//two arrays
var nested = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log(nested);
