// Deklarera en funktion med an parameter

function hello(message ='Welcome to my site'){

    console.log(message);

}

// Anropa functionen 
hello('Här kommer ett meddelande 1!');
hello('Här kommer ett meddelande 2!');
hello('Här kommer ett meddelande 3!');

// Data som skickas vid anropet kallas argument!
hello(12344);
hello(true);
hello(); // Undefined löser vi med hjälp av en förvald parameter (default parameter) 


console.log('-------------------------------------------------------------------------');
console.log('-------------------------------------------------------------------------');

//Funktioner med två parametrar
//Skapa en funktion som beräkna summan av två tal
function sum (x,y){
    console.log(x + y);
}
sum(7,9); //16
sum(); // NaN

function sum (x = 0,y = 0){
    console.log(x + y);
}
sum(7,9); 
sum(); // 0


function sum (x = 0,y = 0){
    console.log(x + y);
}
sum(7,9); 
sum(123,456,789); // 579 JS räkna 123 + 456
sum(123); // 123
sum('text'); // text0

console.log('-------------------------------------------------------------------------');

//Skapa en funktion som multiplicerar två tal
 function multiply(a,b){
    console.log('****** Multiply******');
    console.log(a*b);
    console.log('*********************');
}
multiply(10,5); //50
multiply(); // NaN
multiply(100); // NaN
multiply('text', 50); // NaN
multiply('text'); // NaN 

function multiply(a = 0 ,b = 0){
    console.log('****** Multiply******');
    console.log(a*b);
    console.log('*********************');
}

multiply(10,5); //50
multiply(); // 0
multiply(100); // 0
multiply('text', 50); // NaN
multiply('text'); // NaN





// En funktion med två parametrar, förnamn och efternamn
// FUnktionen visar ett meddelande 'Hej förnamn efternamn'

function namn (firstName,lastName) {
    console.log('Hej'+ firstName + ' ' + lastName);
}
namn('Toshiko','Kuno');

function namn (firstName = 'förnamn',lastName = 'efternamn') {
    console.log('Hej'+ firstName + ' ' + lastName);
}
namn('Toshiko','Kuno');
namn();

// En egen log-funktion
function log(text){
    console.log('*********************************');
    console.log(text);
    console.log('*********************************');

}
log('Hej');

//En function som anropar en annan function
function hello3(msg){
    log('Hello' + msg);
}

hello3('Toshiko'); //*********************************
                   // Toshiko
                   //*********************************
hello3('kalle');
hello3('Tom');

//Funktioner med tre paremetrar
function age(firstName,lastName,age){
    log(firstName + ' är ' + age + ' år gammal! ');
    log(` ${firstName} är ${age} år gammal
    `); // Templet string. Behövs inte använda + konkatenering
}
age('Toshiko','Kuno', 29);
age('TOshiko'); 

// En funktion med ett godtyckligt antal parametrar
function manyThings (...things){
    console.log(things);
}
manyThings(1);
manyThings(1,2);
manyThings(1,2,3);
manyThings("Toshiko","Kuno",1);
manyThings();

let alf =['a','b','c'];
console.log(alf.push('d','e'));
console.log(alf);

let alf1 = ['a','b','c','d','e'];
alf1.pop();
console.log(alf1);
