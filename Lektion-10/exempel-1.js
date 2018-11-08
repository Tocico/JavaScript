let score = 40;

if(score >= 50){
      congratulate();
}
else{
    encourage();
}

function congratulate(){
    console.log('Congratulations');
}
function encourage(){
    console.log('Have another go!!');
}    



// let hour = new Date().getHours();
// let greeting = '';
// if(hour < 12){
//     greeting = 'Good morgon';
// }
// if(hour < 17){
//     greeting = 'Good dagen';
// }
// console.log(greeting); // God dagen   Js struntar i gammalt värdet

let hour = new Date().getHours();
let greeting = '';
if(hour < 12){
    greeting = 'Good morgon';
}
else if(hour < 17){
    greeting = 'Good dagen';
}
else{
    greeting = 'God kväll';
}
console.log(greeting); 

let hour1 = new Date().getHours();
let greeting1 = '';
if(hour1 < 12){  // 17 - 12
    greeting1 = 'Good morgon';
}
else if(hour1 < 17){  // 12- 17
    greeting1 = 'Good dagen';
}
console.log(greeting1); // Good morgon

// let hour = new Date().getHours();
// let greeting = '';
// if(hour < 12){
//     greeting = 'Good morgon';
// }
// else(hour < 17){   // Syntaxerror fatts if
//     greeting = 'Good dagen';
// }
// console.log(greeting); 




// == eller ===

let x ='5'; 
console.log(typeof x); // string

let y = 5;
console.log(typeof y); // number

if(x == 5){ 
    console.log(x + 5); // 55
}    
if(y == 5){             // Ok...men...
    console.log(y + 10); // 15
}    
x = '5';
if(x === 5){ // False 
    console.log(x + 2); // Ingenting
}    
x = '5';
if(x !== 5){ // true 
    console.log(x + 2); // 52
}    
x = 5;
if(x != 5){ // False 
    console.log(x + 2); // Ingenting
}    

//Ternary-operatorn ? :
// Villkor ? Om sant  : Om falskt
function getFree(isMember){
    return isMember? '20kr' : '100kr';
}
console.log(getFree(true));
console.log(getFree(false));


// Samma men utan klamrar
function getFree(isMember){
   if(isMember) return '20kr';
   else return '100kr';
   
}
console.log(getFree(true));
