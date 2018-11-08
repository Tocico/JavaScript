// Arbeta med primitiva typer (datatyper)

// 1. string
let firstName = "Toshiko";
let lastName ="Kuno";
console.log(firstName,lastName);
console.log("It´s very nice");
console.log(`Ì Love you JS!`); //ES6 Template strings, OBS! Backticks (överkurs)

// 2.number
let age = 45;
const PI = 3.1231231; //再入力不可
let price = 5.50;
let quantity = 10;
let total = price * quantity;
console.log(total);

//  3.Boolen
let again = false; // eller 0
if(again)
   console.log("Inne i if-satsen");
again = true;
if(again)
   console.log("Inne again i for-satsen");


// 4. Undefined (OBS! Detta är en typ i JS)
   let name; //undefined
   console.log(name);

   var mobile;
   mobile = "05645-453453";
   console.log(mobile);

   console.log(mobile2);
   var mobile2; //ok eftersom mobile har deklarerats med var
   mobile2 = "05645-45345444";

   
// console.log(adress);
// let adress;
// adress = "dfsdfsdff 4";


// 5. Null
let nothing = "Something"
nothing = "";
console.log(typeof nothing); // string
nothing = null;
console.log(nothing);

let a = 'hej';
a = null;
console.log(typeof a);


//    var nothing = null;
//    console.log("-------------------------");
//    console.log(typeof firstName);
//    console.log(typeof age);
//    console.log(typeof again);
//    console.log(typeof name);
//    console.log(typeof nothing);



