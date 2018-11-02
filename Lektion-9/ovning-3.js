//Ovning1

let datum = new Date('2019,1,1');
let mont = datum.getMonth()+1;
let day = datum.getDate();
if(mont< 10){
    mont = '0' + mont; // sträng + number = sträng
}
if(day< 10){
    day = '0' + day;
}
console.log(datum.getFullYear() + '-' +  mont + '-' + day);


//Ovning2
console.log(`${datum.getHours()}:${datum.getMinutes()}:${datum.getSeconds()}` );

//Ovning3
 
let veckoDagar = ['Söndag','Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag'];
let month = ['Jan', 'Feb','Mars', 'Apr','Maj','Jun','Juli','Aug','Sep','Okt','Nov','Dec'];

console.log(`${veckoDagar[datum.getDay()]} den ${datum.getDate()} ${month[datum.getMonth()]}${datum.getFullYear()}`);


// setInterval(liveKlocka,10000);
// function liveKlocka(){
//     console.log(datum.toTimeString());
// }

let now = new Date();

let today = now.toDateString();

console.log(today);
// Hämta år från strängen 'Fri Oct 26 2018'

let ar = today.substring(11);

// Hämta dag från strängen
let dag = today.substr(8,2);

// Hämta månad från strängen
let m = today.substr(4,3);
switch(m){
    case 'Jan': m = 01; break;
    case 'Feb': m = 02; break;
    case 'Mar': m = 03; break;
    case 'Apr': m = 04; break;
    case 'May': m = 05; break;
    case 'Jun': m = 06; break;
    case 'Jul': m = 07; break;
    case 'Aug': m = 08; break;
    case 'Sep': m = 09; break;
    case 'Oct': m = 10; break;
    case 'Nov': m = 11; break;
    case 'Dec': m = 12; break;
}

// Skapa strängen
let result = `${ar}-${m}-${dag}`;
console.log(result);


// let a = new Date();
// let da = a.toLocaleDateString();
// console.log(a);

console.log(new Date().toLocaleDateString());