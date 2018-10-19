//Arbeta med objektet Number
let nr = 1234;
console.log(typeof nr);
let PI = 3.14159;
console.log(typeof PI);

//Avrunda till två decimaler
console.log(PI.toFixed(2)); // 3.14

console.log(PI.toPrecision(4)); //3.142

//Visa Max och Min värdet på ett nummer i JS
console.log(Number.MAX_VALUE);
console.log(-Number.MAX_VALUE);

console.log(Number.MIN_VALUE);
console.log(-Number.MIN_VALUE);

console.log(Number.MAX_VALUE+10); // JS struntar i +10. Logistisk fel
console.log(Number.MAX_VALUE*2); // Infinity
console.log(-Number.MAX_VALUE*2); // -Infinity

//NaN

let x;
console.log(x); // Undefined

x = x + 2;
console.log(x); // NaN
//Statiska metoder
console.log(Number.isNaN()); //false
console.log(Number.isNaN(x)); //true


// Objektet Math

console.log(Math.PI);
let π = Math.PI;
console.log(π);

console.log(Math.E);

console.log(Math.abs(-8769)); // 8769
console.log(Math.pow(2,2)); // 4
console.log(Math.pow(2,4)); // 2*2*2*2 = 16
console.log(Math.pow(3,2)); // 3*3 = 9

//Avrunda till närmaste heltal
let pris = 10.40;
console.log(Math.round(pris)); //10
pris = 10.50;
console.log(Math.round(pris)); //11
console.log(pris.toFixed(1)); //10.5
console.log(pris.toFixed(0)); //11

// Ciel och Floor
let tal = 10.10;
console.log(Math.ceil(tal)); //11   
console.log(Math.floor(tal)); // 10

// Max och Min Skriv ut maxiam nr och minimum nr
console.log(Math.max(1,2,4566,787,234)); //4566
console.log(Math.min(1,2,4566,787,234)); //1

// Slumptal
console.log(Math.random()); // mellan 0 och 1
// Mellan 1 och 10
console.log(Math.ceil(Math.random()*10)); // upp till 10
console.log(Math.ceil(Math.random()*10 ));
console.log(Math.ceil(Math.random()*10 ));
console.log(Math.ceil(Math.random()*10 ));
console.log(Math.ceil(Math.random()*10 ));
console.log(Math.ceil(Math.random()*10 ));
console.log(Math.floor(Math.random()*10) +1 );
console.log(Math.floor(Math.random()*10) +1 );
console.log(Math.floor(Math.random()*10) +1 );
console.log(Math.floor(Math.random()*10) +1 );
console.log(Math.floor(Math.random()*10) +1 );


