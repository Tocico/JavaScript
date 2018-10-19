//Ovning1

let datum = new Date();

console.log(datum.getFullYear() + '-' +  (datum.getMonth()+1) + '-' + datum.getDate());


//Ovning2
console.log(`${datum.getHours()}:${datum.getMinutes()}:${datum.getSeconds()}` );

//Ovning3
 
let veckoDagar = ['Söndag','Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag'];
let month = ['Jan', 'Feb','Mars', 'Apr','Maj','Jun','Juli','Aug','Sep','Okt','Nov','Dec'];

console.log(`${veckoDagar[datum.getDay()]} den ${datum.getDate()} ${month[datum.getMonth()]}${datum.getFullYear()}`);


setInterval(liveKlocka,10000);
function liveKlocka(){
    alert(datum.toTimeString());
}
