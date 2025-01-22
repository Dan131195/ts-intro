// Es. 1
let a: string;
let b: number;
let c: boolean;
let d: any;
let e: undefined;
let f: null;

// Es. 2
let firstName: string = "Daniele";
let age: number = 29;
let typeScriptStudent: boolean = true;

// Es. 3
const greet = (name: string) => {
  return "Ciao " + name;
};
console.log(greet("Daniele"));

// Es. 4
const sum = (a: number, b: number) => {
  const mySum = a + b;
  console.log("Sum: ", typeof mySum);
};
sum(3, 2);

// Es. 5
const price = (unitPrice: number) => {
  const iva: number = unitPrice * 0.22;
  console.log("Price: ", unitPrice + iva);
};
price(100);

// Es. 6
const myString = (string1: string, string2: string) => {
  return string1.concat(string2);
};
console.log("Length: ", myString("Ciao", "Daniele").length);

// Es. 7
//Un Type Union è simile ad un 'or, |' in js, serve a restituire dui tipi di dato
type MyType1 = string | number;
type MyType2 = boolean | string[];
type MyType3 = number | null | undefined;

// Es. 8
let myType4: number | null | undefined = 2;
myType4 = null;
myType4 = undefined;

let myType5: MyType3 = 2;
myType5 = null;
myType5 = undefined;

// Es. 9
type Giorno =
  | "Lunedì"
  | "Martedì"
  | "Mercoledì"
  | "Giovedì"
  | "Venerdì"
  | "Sabato"
  | "Domenica";

// Es. 10
const numbers1: number[] = [1, 2, 3];
const numbers2: Array<number> = [1, 2, 3];

// Es. 11
const myArray: [string, string, string, number, number] = [
  "Daniele",
  "Franceschini",
  "Italia",
  29,
  52037,
];

// Es. 12
// Interface viene utilizzato per gli oggetti

// Es. 13
interface MyPerson {
  firstname: string;
  lastname: string;
  age: number;
}

const person1: MyPerson = {
  firstname: "Daniele",
  lastname: "Franceschini",
  age: 29,
};

// Es. 14
interface myUser {
  email: string;
  tel?: number;
}

const user1: myUser = {
  email: "daniele@gmail.com",
};

const user2: myUser = {
  email: "daniele@gmail.com",
  tel: 3331234567,
};

// Es. 15
interface myStudent {
  name: string;
  grade: number;
}

const student1: myStudent = {
  name: "Daniele",
  grade: 8.1,
};

const student2 = {
  name: "Daniele",
  grade: 8.1,
};

// Es. 16
interface MyVehicle {
  name: string;
  year: number;
  km: number;
  brand: string;
}

interface MyCar extends MyVehicle {
  maxSpeed: number;
  fuelType: string;
}

// Es. 17
const car1: MyCar = {
  name: "corsa",
  year: 2018,
  km: 75000,
  brand: "Opel",
  maxSpeed: 170,
  fuelType: "GPL",
};

// Es. 18
// Serve per rendere l'interface più generico, ovvero più riutilizzabile. Vengono utilizzati simile a dei parametri
interface MyVehicle2<N> {
  name: N;
  year: number;
  km: number;
  brand: string;
}

// Es. 19
// Si, si possono usare
interface MyVehicle3<N, K, B> {
  name: N;
  year: number;
  km: K;
  brand: B;
}

// Es. 20
// https://striveschool-api.herokuapp.com/food-books
interface Book {
  id: number;
  title: string;
  price: string;
  imageUrl: string;
  description: string;
}

const manipulateDom = (data: Book[]) => {
  data.forEach((bookObj) => {
    const main = document.getElementById("main");
    const container = document.createElement("div");
    const myImg = document.createElement("img");
    myImg.setAttribute("src", bookObj.imageUrl);
    container.appendChild(myImg);
    main!.appendChild(container);
  });
};

const getBooks = async () => {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/food-books"
    );
    if (response.ok) {
      const data: Book[] = await response.json();
      console.log(data);
      manipulateDom(data);
    } else {
      throw new Error("Errore nella chiamata");
    }
  } catch (error) {
    console.log(error);
  }
};

getBooks();
