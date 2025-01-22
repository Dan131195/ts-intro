"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Es. 1
let a;
let b;
let c;
let d;
let e;
let f;
// Es. 2
let firstName = "Daniele";
let age = 29;
let typeScriptStudent = true;
// Es. 3
const greet = (name) => {
    return "Ciao " + name;
};
console.log(greet("Daniele"));
// Es. 4
const sum = (a, b) => {
    const mySum = a + b;
    console.log("Sum: ", typeof mySum);
};
sum(3, 2);
// Es. 5
const price = (unitPrice) => {
    const iva = unitPrice * 0.22;
    console.log("Price: ", unitPrice + iva);
};
price(100);
// Es. 6
const myString = (string1, string2) => {
    return string1.concat(string2);
};
console.log("Length: ", myString("Ciao", "Daniele").length);
// Es. 8
let myType4 = 2;
myType4 = null;
myType4 = undefined;
let myType5 = 2;
myType5 = null;
myType5 = undefined;
// Es. 9
// Non ho capito
// Es. 10
const numbers1 = [1, 2, 3];
const numbers2 = [1, 2, 3];
// Es. 11
const myArray = [
    "Daniele",
    "Franceschini",
    "Italia",
    29,
    52037,
];
const person1 = {
    firstname: "Daniele",
    lastname: "Franceschini",
    age: 29,
};
const user1 = {
    email: "daniele@gmail.com",
};
const user2 = {
    email: "daniele@gmail.com",
    tel: 3331234567,
};
const student1 = {
    name: "Daniele",
    grade: 8.1,
};
const student2 = {
    name: "Daniele",
    grade: 8.1,
};
// Es. 17
const car1 = {
    name: "corsa",
    year: 2018,
    km: 75000,
    brand: "Opel",
    maxSpeed: 170,
    fuelType: "GPL",
};
const manipulateDom = (data) => {
    data.forEach((bookObj) => {
        const main = document.getElementById("main");
        const container = document.createElement("div");
        const myImg = document.createElement("img");
        myImg.setAttribute("src", bookObj.imageUrl);
        container.appendChild(myImg);
        main.appendChild(container);
    });
};
const getBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch("https://striveschool-api.herokuapp.com/food-books");
        if (response.ok) {
            const data = yield response.json();
            console.log(data);
            manipulateDom(data);
        }
        else {
            throw new Error("Errore nella chiamata");
        }
    }
    catch (error) {
        console.log(error);
    }
});
getBooks();
