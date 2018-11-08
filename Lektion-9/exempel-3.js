// Arbeta med datum och tid i JS

//Skapa en instans av objektet Date
let today = new Date();
console.log(today); //2018-10-17T12:12:25.687Z
console.log(today.getFullYear()); //2018
console.log(today.getMonth()); //9 = Oktober (0: Januari)
console.log(today.getDay()); // 3 = Onsdag (0: sön, 1: mån)
console.log(today.getDate()); // 17

console.log('klockan');
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());

console.log(today.getTime());
console.log(today.toDateString());
console.log(today.toTimeString());

console.log(today.setFullYear(2019));
console.log(today.getFullYear()); //2019

