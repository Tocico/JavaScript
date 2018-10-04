// Arbeta med arrayer

//Skapa en array
let cars1 = [];

//Skapa en array som innehåller data
let cars2 =['Saab', 'Volvo','BMW'];
//Detta är en array-literal

//Skapa en array med en konstruktor
let cars3 = new Array (1,2,3);
let cars4 = new Array (); // en tom array

//Att komma åt data
console.log(cars2[0]); 
console.log(cars2[1]); 
console.log(cars2[2]); 
console.log(cars2); 

//Hämta ett element och spara i en ny variabel
let bil = cars2[0];
console.log(bil);

// Ändra ett element
cars2[0] = 'Mazda';
console.log(cars2);
console.log(bil);

//En array i JS kan innehålla olika typer
let person = ['Toshiko','Kuno',29 , true];

// Du kan skapa4 olika variabeler instället för en array
let firstName = 'toshiko';
let lastName = 'kuno';
let age = '29';
let gift = false;

// Hitta antal element
let antal = person.length;
console.log(antal);

// Sortera en array
console.log(cars2);
cars2.sort();
console.log(cars2);

// Arbeta med en "Stack"
let stack = [];             //Skapa en tom array
stack.push('Javascript1'); //Lägg till sist i arrayen
console.log(stack);

stack.push('html och css');
console.log(stack);
stack.push('Javascript2');
console.log(stack);



// Ta bort ett element
stack.pop(); // OBS!!!Ta bort sista element
console.log(stack);


let kurs = stack.pop(); //spara sista element innan borttagning
console.log(stack);
console.log(kurs);

//mer om array-konstruktion
let test1 = new Array(10,20,30);
console.log(test1);
console.log(test1.length);
//Vad för denna sats?
let test2 = new Array(10);
console.log(test2);
console.log(test2.length);

let test3 = [10];
console.log(test3);
console.log(test3.length);

let test4 = new Array ('10');
console.log(test4);
console.log(test4.length);

let test5 = new Array('1973');
test5.push(2008);
test5.push(2018);
console.log(test5);



