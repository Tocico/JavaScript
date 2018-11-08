// Arbeta med objekt i JS

//Objektliteral( Object Literal)
//Skapa objekt med hjälp av ()

let car ={};
let anka = {};

let toshiko = {
    // Egenskaper
    name       : 'Toshiko Kuno',
    age        : 29,
    isMarried  : false,
    childen    : [],
    // Metoder
    printInfo  :  function(){
        console.log(this.name + "är" + this.age + "år gammal");
    },
    returnInfo : function(){
        console.log(this.name + "är" + this.age + "år gammal");
    }
};



console.log(toshiko); // Skriv ut hela objekt
console.log(toshiko.name);
console.log(toshiko.age);
console.log(toshiko.isMarried);
//OBS! Metoden returnInfo returnerar en sträng
//console.log(toshiko.returnInfo()); underfined
toshiko.printInfo(); // toshiko kuno är 29 år gammal
//OBS!  Metoden printInfo skriver ut en sträng
toshiko.printInfo(); // toshiko kuno är 29 år gammal

// Ändra egenskaper
toshiko.name = 'Taeko';
toshiko.age++; //Öka med ett
toshiko.age += 1;
toshiko.age = toshiko.age + 1;

console.log(toshiko);

toshiko.age--; // Minska med ett
 toshiko.age -= 1;
 toshiko.age = toshiko.age - 1;

// Ta bort egenskaper
delete toshiko.isMarried;
console.log(toshiko.isMarried); // Undefined
console.log(toshiko); // isMarried saknas!!

// Lägg till egenskaper
toshiko.height = 161;
console.log(toshiko); // height är med

//Ta bort objektet
// toshiko = null;
// console.log(toshiko.age); // 


let x1 = 2;
let x2 = x1;
x2 = 1;
console.log(x1); // 2
console.log(x2); //1

// Kopiera ett objekt(svårt)
let kuno = toshiko;
kuno.name = "taeko";
console.log(toshiko.name); // Kajsa
console.log(kuno.name);    // Kajsa
// toshiko och kuno pekar på samma objektet!
// Objekt är en referenstyp (som lagras i heap)
// Hur kopierar man objekt då?

//Kopierar objekt
let toshiko2 = {};
toshiko2.name = toshiko.name;
toshiko2.age = toshiko.age;
// O.S.V
console.log(toshiko2);

toshiko2.name = 'Hitoshi';
console.log(toshiko2);
console.log(toshiko);

let hino = {...toshiko}; 
console.log(hino);

// Arrayer är också objekt
let arr1 = [1,2,3];
let arr2 = arr1; 
arr1[0] = 100;
arr2[1] = 200;
console.log(arr2); //100,200,3
console.log(arr1); // 100,200,3

let arr3 = {...arr1};
console.log(arr3);

// Kopierar
let toshi = { age: 29 };
let toshi1 = Object.assign({weight: 50}, toshi);
console.log(toshi); 
console.log(toshi1); 


