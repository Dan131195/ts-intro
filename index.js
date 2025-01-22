// Es. 1
var a;
var b;
var c;
var d;
var e;
var f;
// Es. 2
var firstName = "Daniele";
var age = 29;
var typeScriptStudent = true;
// Es. 3
var greet = function (name) {
    return "Ciao " + name;
};
console.log(greet("Daniele"));
// Es. 4
var sum = function (a, b) {
    var mySum = a + b;
    console.log("Sum: ", typeof mySum);
};
sum(3, 2);
// Es. 5
var price = function (unitPrice) {
    var iva = unitPrice * 0.22;
    console.log("Price: ", unitPrice + iva);
};
price(100);
// Es. 6
var myString = function (string1, string2) {
    return string1.concat(string2);
};
console.log("Length: ", myString("Ciao", "Daniele").length);
// Es. 8
var myType4 = 2;
myType4 = null;
myType4 = undefined;
var myType5 = 2;
myType5 = null;
myType5 = undefined;
// Es. 9
// Non ho capito
// Es. 10
var numbers1 = [1, 2, 3];
var numbers2 = [1, 2, 3];
// Es. 11
var myArray = [
    "Daniele",
    "Franceschini",
    "Italia",
    29,
    52037,
];
var person1 = {
    firstname: "Daniele",
    lastname: "Franceschini",
    age: 29,
};
var user1 = {
    email: "daniele@gmail.com",
};
var user2 = {
    email: "daniele@gmail.com",
    tel: 3331234567,
};
var student1 = {
    name: "Daniele",
    grade: 8.1,
};
var student2 = {
    name: "Daniele",
    grade: 8.1,
};
// Es. 17
var car1 = {
    name: "corsa",
    year: 2018,
    km: 75000,
    brand: "Opel",
    maxSpeed: 170,
    fuelType: "GPL",
};
// Es. 20
