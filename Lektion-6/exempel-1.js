/*  // Arbeta med funktioner

// Deklarera en funktion
function name(){
    // En eller flera satser;
}

// Exempel-1 - en parameterlös funktion
function hej(){
    alert('Hej från en funktion!');
}

// Anropa en funktion (call / invoke)
hej();  //Funktionsanrop  */

function hello (){
    console.log("Hej från en funktion!"); 
}
hello();

function math(x,y) {
    let mul = x * y;
    let add = x - y;
    let sum = [mul,add]; 
    return sum; 
}
let mul1 = math(1,2)[0];
let add1 = math(10,5)[1];

console.log(mul1);
console.log(add1);


function shop(money) {
    let apple = 10; // 10 kr
    let change = money - apple 
     return change;
}

console.log('Växel är '+ shop(100) + 'kr');

function hej1(msg){
    console.log(msg);
    }
    function hej2(){
    console.log("En parameterlös funktion");
    }
    hej1("Argument – första anropet");
    hej2("Argument – andra anropet");

    function meat (kr){
        return  kr + 'kr';
}
let sum = meat(100);
console.log('Kött kostar'+ ' ' + sum);
